---
sidebar_position: 7
---

# Performance

SlateDB is still a young project and its performance has proven reasonable for a wide range of use cases already. Consequently, we haven't spent a lot of time optimizing SlateDB's performance. We plan to do so in the future.

We have just begun to track SlateDB's performance. We currently have two benchmarking tools: **bencher** and **microbenchmarks**.

## Benchmarks

SlateDB comes with a [bencher](https://github.com/slatedb/slatedb/tree/main/src/bencher) tool to benchmark put/get operations against an object store. You can configure the tool with a variety of options. See [bencher/README.md](https://github.com/slatedb/slatedb/tree/main/src/bencher) for details. [benchmark-db.sh](https://github.com/slatedb/slatedb/blob/main/src/bencher/benchmark-db.sh) also serves as an example.

### Nightly

We run this tool [nightly](https://github.com/slatedb/slatedb/blob/main/.github/workflows/nightly.yaml) and publish the results [here](https://slatedb.io/performance/benchmarks/main). The benchmark runs on [WarpBuild](https://warpbuild.com)'s [warp-ubuntu-latest-x64-16x](https://docs.warpbuild.com/cloud-runners) runners.

:::warning

We have configured the job to use a [LocalFilesystem](https://docs.rs/object_store/latest/object_store/local/struct.LocalFileSystem.html) instead of S3, so the results don't reflect performance against a real S3 bucket. We plan to use S3 with this benchmark in the future.

:::

<iframe src="https://slatedb.io/performance/benchmarks/main" width="100%" height="540px"></iframe>

## Microbenchmarks

We use [Criterion](https://bheisler.github.io/criterion.rs/) to run microbenchmarks (located in [benches](https://github.com/slatedb/slatedb/tree/main/benches)) for specific internal SlateDB functions. A comment is left on all PRs when a > 200% slowdown is detected.

### Nightly

Microbenchmarks also run [nightly](https://github.com/slatedb/slatedb/blob/main/.github/workflows/nightly.yaml) with the [pprof-rs](https://github.com/tikv/pprof-rs) profiler. The resulting profiler protobuf files are published [here](https://github.com/slatedb/slatedb-website/tree/gh-pages/performance/microbenchmark-pprofs/main). The microbenchmarks run on [standard Linux Github action runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories).

We highly recommend using [pprof.me](https://pprof.me/) to view the `<microbenchmar>.pb` files, though any [pprof](https://github.com/google/pprof) compatible tool may be used.