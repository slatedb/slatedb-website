---
sidebar_position: 4
---

# Architecture

SlateDB is a log-structured merge-tree (LSM-tree). If you are unfamiliar with LSM-trees, we recommend reading thw following resources:

* [RocksDB Overview](https://github.com/facebook/rocksdb/wiki/RocksDB-Overview)
* [Mini-LSM](https://skyzh.github.io/mini-lsm/)

## Overview

The following diagram shows the architecture of SlateDB:

![Example banner](/img/architecture.png)

At a high level, SlateDB consists of the following components:

* **Write-ahead log (WAL)**: A mutable WAL that stores recent writes that have not yet been written to object storage.
* **Immutable WAL**: A WAL that is has been frozen and is in the process of being written to object storage in the `wal` directory.
* **Memtable**: An in-memory data structure that stores recent writes that have been written to the object store's WAL directory, but not yet written to L0.
* **Frozen memtable**: An immutable memtable that is in the process of being written to object storage in the `compacted` directory.
* **`wal` SSTs**: SSTables that store recent WAL entries on object storage.
* **`L0` SSTs**: SSTables that store recently memtables on object storage.
* **Sorted runs (SRs)**: A sequence of compacted, range partitioned SSTables that are treated as a single logical table.

## Writes

SlateDB's write path is as follows:

1. A `put` call is made on the client.
2. The key/value pair is written to the mutable, in-memory WAL table.
3. After `flush_ms` milliseconds, the mutable WAL table is frozen and an asynchronous write to object storage is triggered.
4. When the write succeeds, the immutable WAL table is notified, which notifies all `await`'ing writers.
5. The mutable WAL table is then inserted into the mutable memtable.
6. When the memtable reaches a `l0_sst_size_bytes`, it is frozen and written as an `L0` SSTable in the object store's `compacted` directory.

## Reads

SlateDB's read path is as follows:

1. A `get` call is made on the client.
2. The key is returned from the mutable memtable if found.
3. The key is returned from the immutable memtable(s) if found.
4. The key is returned from the `L0` SSTables if found (searched from newest to oldest using bloom filtering).
5. The key is returned from the sorted runs if found (searched from newest to oldest using bloom filtering).

## Manifest

## Compaction

## Design Documents

See SlateDB's [design documents](https://github.com/slatedb/slatedb/tree/main/docs) for more information.