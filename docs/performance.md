---
sidebar_position: 7
---

# Performance

SlateDB is still a young project, and its performace has proven reasonable for a wide range of use cases already. Consequently, we haven't spent a lot of time optimizing SlateDB's performance. We plan to do so in the future.

We have just begun to track SlateDB's performance. We currently have two benchmarking tools: **bencher** and **microbenchmarks**.

## Benchmarks

SlateDB comes with a [bencher](https://github.com/slatedb/slatedb/tree/main/src/bencher) tool to benchmark put/get operations against an object store. You can configure the tool with a variety of options. See [bencher/README.md](https://github.com/slatedb/slatedb/tree/main/src/bencher) for details. [benchmark-db.sh](https://github.com/slatedb/slatedb/blob/main/src/bencher/benchmark-db.sh) also serves as an example.

### Nightly

We run this tool in nightly, and publish the results [here](https://slatedb.io/performance/benchmarks/main). We have configured the job to use a [LocalFilesystem](https://docs.rs/object_store/latest/object_store/local/struct.LocalFileSystem.html) instead of S3, so the results don't reflect performance against a real S3 bucket. We plan to use S3 with this benchmark in the future.

<iframe src="https://slatedb.io/performance/benchmarks/main/" width="100%" height="540px"></iframe>

## Microbenchmarks

We use [Criterion](https://bheisler.github.io/criterion.rs/) to run microbenchmarks (located in [benches](https://github.com/slatedb/slatedb/tree/main/benches)) for specific interanl SlateDB functions. A comment is left on all PRs where a > 200% regression is detected.

Microbenchmarks also run nightly with the [pprof-rs](https://github.com/tikv/pprof-rs) profiler. The results profiler protobuf files are published [here](https://github.com/slatedb/slatedb-website/tree/gh-pages/performance/microbenchmark-pprofs/main). We highly recommend using [pprof.me](https://pprof.me/) to view the results, though any [pprof](https://github.com/google/pprof) compatible tool may be used.