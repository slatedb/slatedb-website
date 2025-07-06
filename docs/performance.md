---
sidebar_position: 7
---

# Performance

We currently have two benchmarking tools: **bencher** and **microbenchmarks**.

## Benchmarks

SlateDB comes with a [bencher](https://github.com/slatedb/slatedb/tree/main/slatedb-bencher) tool to benchmark put/get operations against an object store. You can configure the tool with a variety of options. See [bencher/README.md](https://github.com/slatedb/slatedb/blob/main/slatedb-bencher/README.md) for details. [benchmark-db.sh](https://github.com/slatedb/slatedb/blob/main/slatedb-bencher/benchmark-db.sh) also serves as an example.

### Nightly

We run bencher [nightly](https://github.com/slatedb/slatedb/blob/main/.github/workflows/nightly.yaml) and publish the results [here](https://slatedb.io/performance/benchmarks/main). The benchmark runs on [WarpBuild](https://warpbuild.com)'s [warp-ubuntu-latest-x64-16x](https://docs.warpbuild.com/cloud-runners) runners, which use Hetzner machines in Frankfurt. We use [Tigris](https://www.tigrisdata.com/) for object storage with the `auto` region setting, which resolves to Frankfurt as well. Bandwidth between WarpBuild (Hetzner) and Tigris seems to be about 500MiB/s down and 130MiB/s up. We routinely max out the bandwidth in the nightly tests.

<iframe src="https://slatedb.io/performance/benchmarks/main" width="100%" height="540px"></iframe>

## Microbenchmarks

We use [Criterion](https://bheisler.github.io/criterion.rs/) to run microbenchmarks (located in [benches](https://github.com/slatedb/slatedb/tree/main/slatedb/benches)) for specific internal SlateDB functions. A comment is left on all PRs when a > 200% slowdown is detected.

### Nightly

Microbenchmarks also run [nightly](https://github.com/slatedb/slatedb/blob/main/.github/workflows/nightly.yaml) with the [pprof-rs](https://github.com/tikv/pprof-rs) profiler. The resulting profiler protobuf files are published [here](https://github.com/slatedb/slatedb-website/tree/gh-pages/performance/microbenchmark-pprofs/main). The microbenchmarks run on [standard Linux Github action runners](https://docs.github.com/en/actions/using-github-hosted-runners/using-github-hosted-runners/about-github-hosted-runners#standard-github-hosted-runners-for-public-repositories).

We highly recommend using [pprof.me](https://pprof.me/) to view the `<microbenchmar>.pb` files, though any [pprof](https://github.com/google/pprof) compatible tool may be used.