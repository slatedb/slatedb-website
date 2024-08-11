---
sidebar_position: 1
---

# Introduction

SlateDB is an embedded storage engine built as a [log-structured merge-tree](https://en.wikipedia.org/wiki/Log-structured_merge-tree). Unlike traditional LSM-tree storage engines, SlateDB writes all data to object storage.

## Vision

Object storage is an amazing technology. It provides highly-durable, highly-scalable, highly-available storage at a great cost. And recent advancements have made it even more attractive:

* Google Cloud Storage supports multi-region and dual-region buckets for high availability.
* All object stores except S3 support compoare-and-swap (CAS) operations.
* Amazon Web Service's S3 Express One Zone has single-digit millisecond latency.

We believe that the future of object storage are multi-region, low latency buckets that support atomic CAS operations. SlateDB is a storage engine built for this future.

## Features

* **Zero-Disk architecture**: SlateDB is easy to operate. It runs as an in-process storage engine with no local state, no control plane, and no replication protocol.
* **Single-writer**: SlateDB is designed for a single writer. Partitioning can easily be built on top of SlateDB since fencing is supported.
* **Mulitple-readers**: Multiple readers on different nodes can all read the same SlateDB database.
* **Read caching**: SlateDB supports in-memory and (optional) on-disk read caching to reduce latency and API cost.
* **Snapshot isolation**: SlateDB supports snapshot isolation, which allows readers and writers to see a consistent view of the database.
* **Transactions**: Transactional writes are supported.
* **Object store persistence**: SlateDB writes all data to object storage, which means SlateDB has the same duability, scability, and availaiblity as your object store.
* **Writer fencing**: SlateDB enforces writer fencing. Zombie writer processes are detected and prevented from writing to the database.
* **Pluggable compaction**: SlateDB supports pluggable compaction, so you can use the compaction strategies that fits your needs.

## Use Cases

SlateDB is a great fit for use cases that are tolerant to 50-100ms write latency, are tolerant to data loss during fialure, or are willing to pay for frequent API PUT calls. Such use cases include:

* Stream processing
* Durable execution
* Workflow orcehstration
* Durable caches
* Data lakes
