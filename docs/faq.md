---
sidebar_position: 5
---

# FAQ

## Is SlateDB for OLTP or OLAP?

SlateDB is designed for key/value (KV) online transaction processing (OLTP) workloads. It is optimized for lowish-latency, high-throughput writes. It is not optimized for analytical queries that scan large amounts of columnar data. For online analytical processing (OLAP) workloads, we recommend checking out [Tonbo](https://github.com/tonbo-io/tonbo).

## Can't I use S3 as a key-value store?

You can definitely use S3 as a key-value store. An object path would represent a key and the object its value. But then you pay one PUT per write, which gets expensive.

To make writes cheaper, you will probably want to batch writes (write multiple key-value pairs in a single `PUT` call). Batched key-value pairs need to be encoded/decoded, and a sorted strings table (SST) is a natural fit. Once you have SSTs, an log-structured merge-tree (LSM) is a natural fit.

## Why does SlateDB have a write-ahead log?

Some developers have asked why SlateDB needs a write-ahead log (WAL) if we're batching writes. Couldn't we just write the batches directly to L0 as an SST?

We opted to have the WAL separate from the L0 SST so that we could frequently write SSTs without increasing the number of L0 SSTs we have. Since reads are served from L0 SSTs, having too many of them would result in a very large amount of metadata that needs to be managed in memory. By contrast, we don't serve reads from the durable WAL, we only use it for recovery.

A separate WAL lets SlateDB frequently flush writes to object storage (to reduce durable write latency) without having to worry about the number of L0 SSTs we have.

## How is this different from RocksDB-cloud?

RocksDB-cloud does not write its write-ahead log (WAL) to object storage. Instead, it supports either local disk, Kafka, or Kinesis for the WAL. Users must decide whether they want to increase operation complexity by adding a distributed system like Kafka or Kinesis to their stack, whether they want to use local disk for the WAL, or whether they want to use EBS or EFS for the WAL.

SlateDB, by contrast, writes everything (including the WAL) to object storage. This offers a simpler architecture, better durability, and potentially better availability at the cost of increased write latency (compared to local).

RocksDB-cloud also does not cache writes, so recently written data must be read from object storage even if reads occur immediately after writes. SlateDB, by contrast, caches recent writes in memory. Eventually, we will also add on-disk caching as well.

Finally, it's unclear how open RocksDB-cloud is to outside contributors. The code is available, but there is very little documentation or community.