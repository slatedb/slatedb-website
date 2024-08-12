---
sidebar_position: 4
---

# Architecture

SlateDB is a log-structured merge-tree (LSM-tree). If you are unfamiliar with LSM-trees, we recommend reading the following resources:

* [RocksDB Overview](https://github.com/facebook/rocksdb/wiki/RocksDB-Overview)
* [Mini-LSM](https://skyzh.github.io/mini-lsm/)

This page contains a high-level overview of SlateDB's architecture, read/write paths, manifest, and compaction. For more details, see SlateDB's [design documents](https://github.com/slatedb/slatedb/tree/main/docs).

## Overview

The following diagram shows the architecture of SlateDB:

![Example banner](/img/architecture.png)

At a high level, SlateDB consists of the following components:

* **Write-ahead log (WAL)**: A mutable WAL that stores recent writes that have not yet been written to object storage.
* **Immutable WAL**: A WAL that has been frozen and is in the process of being written to object storage in the `wal` directory.
* **Memtable**: An in-memory data structure that stores recent writes that have been written to the object store's WAL directory, but not yet written to L0.
* **Frozen memtable**: An immutable memtable that is in the process of being written to object storage in the `compacted` directory.
* **`wal` SSTs**: SSTables that store recent WAL entries on object storage.
* **`L0` SSTs**: SSTables that store recent memtables on object storage.
* **Sorted runs (SRs)**: A sequence of compacted, range partitioned SSTables that are treated as a single logical table.

## Writes

SlateDB's write path is as follows:

1. A `put` call is made on the client.
2. The key/value pair is written to the mutable, in-memory WAL table.
3. After `flush_ms` milliseconds, the mutable WAL table is frozen and an asynchronous write to object storage is triggered.
4. When the write succeeds, the immutable WAL table is notified, which notifies all `await`'ing writers.
5. The mutable WAL table is then inserted into the mutable memtable.
6. When the memtable reaches a `l0_sst_size_bytes`, it is frozen and written as an L0 SSTable in the object store's `compacted` directory.

## Reads

SlateDB's read path is as follows:

1. A `get` call is made on the client.
2. The key is returned from the mutable memtable if found.
3. The key is returned from the immutable memtable(s) if found.
4. The key is returned from the L0 SSTables if found (searched from newest to oldest using bloom filtering).
5. The key is returned from the sorted runs if found (searched from newest to oldest using bloom filtering).

:::note

Reads with `ReadLevel::Uncommitted` will scan the in-memory WAL table--first mutable then immutable--before step (1) above. This allows such readers to see WAL writes that have not yet been committed to object storage (and might subsequently fail, and be lost).

:::

## Manifest

SlateDB's manifest file contains the current state of the database, including:

* **manifest_id**: An auto-incrementing ID that's incremented every time a new manifest is written.
* **writer_epoch**: The current writer epoch. This field is used to detect zombie writers. There can be only one active writer at a time. Older writers are fenced off by the newer writer by incrementing this epoch.
* **compactor_epoch**: The current compactor epoch. As with the `writer_epoch`, this field is used to guarantee that there is only one active compactor at a time.
* **wal_id_last_compacted**: The last WAL ID that was contained in a memtable written to L0 at the time the manifest was written..
* **wal_id_last_seen**: The most recent WAL ID seen at the head of the WAL at the time the manifest was written. WAL SSTables older than this ID should not be read and are eligible for garbage collection.
* **l0_last_compacted**: The Last L0 SSTable that was compacted at the time the manifest was written. L0 SSTables older than this ID should not be read and are eligible for garbage collection.
* **l0**: A list of currently available L0 SSTables.
* **compacted**: A list of sorted runs (SRs) that are currently available to read.
* **snapshots**: A list of read snapshots. This feature is not yet implemented, but will allow clients to create snapshots. Snapshots will allow writers to have multi-version concurrency control (MVCC) semantics. Readers can use snapshots to ensure they have a consistent view of the state of the database (and that garbage collectors won't delete SSTables that are still being read).

## Compaction

SlateDB currently implements a very simple compaction strategy. The compaction strategy checks every `poll_interval`. If there are 4 or more L0 SSTables, the compactor schedules a new compaction job, which runs immediately. The job simply compacts all L0 SSTables into a single SR and writes the SSTables to the object store's `compacted` directory as the newest SR. Upon completion, the manifest to remove the L0 SSTables and add the new SR.

The compaction state is not currently persisted in the manifest. This means compaction will lose its current writes whenever the server is restarted. This is a known limitation and will be addressed in future versions of SlateDB.

## Garbage Collection

SlateDB does not currently garbage collect old WAL SSTables, L0 SSTables, or stale SRs. This is a known limitation and will be addressed in future versions of SlateDB.