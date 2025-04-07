window.BENCHMARK_DATA = {
  "lastUpdate": 1744015141093,
  "repoUrl": "https://github.com/slatedb/slatedb",
  "entries": {
    "src/bencher/benchmark-db.sh": [
      {
        "commit": {
          "author": {
            "name": "Jason Gustafson",
            "username": "hachikuji",
            "email": "12502538+hachikuji@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "65a710707f8b636be6a4257a04c4fbb6f07f6d3f",
          "message": "Factor out WAL replay utility (#500)\n\nIn https://github.com/slatedb/slatedb/pull/498, the reader will need to\nreplay WALs similar to the way that a writer does. This patch factors\nthe core replay logic out of the writer to make it possible to reuse it\nin the reader. This also makes it easier to write tests for WAL replay\nand I've added some new test cases.",
          "timestamp": "2025-03-08T00:16:45Z",
          "url": "https://github.com/slatedb/slatedb/commit/65a710707f8b636be6a4257a04c4fbb6f07f6d3f"
        },
        "date": 1741509092849,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 10505.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11221.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11122.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2785.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 11513.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 2879.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 11333.684,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 7559.317,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 3660.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 2445.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12589.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18917.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8490.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12739.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8777.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35157.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4756.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19018.32,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmvk@apache.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "766165b1ba9075d3cca2349097e0e8513b396c65",
          "message": "Add ComparableRange module. (#501)\n\nThis is a prerequisite for supporting projections / unions. It also aims\nto simplify code around handling of byte_ranges, which will be done in\nseparate PR.\n\nThis seems well scoped enough to be separate PR,\nhttps://github.com/slatedb/slatedb/pull/493 builds on top of this.\n\nCo-authored-by: Chris Riccomini <criccomini@users.noreply.github.com>",
          "timestamp": "2025-03-09T19:03:36Z",
          "url": "https://github.com/slatedb/slatedb/commit/766165b1ba9075d3cca2349097e0e8513b396c65"
        },
        "date": 1741595528687,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11716.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11943.45,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11689.866,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2900.517,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12198.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3045.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12186.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8111.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12850.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8536.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13151.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19758.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9070.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13592.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8982.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35918,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4851.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19368.34,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d955e3c1c98fe5765bc55008d9ec11a813df38af",
          "message": "Replace `GetTarget` with `get_block`, `get_index`, and `get_filter` in `DbCache` (#497)\n\nThis PR:\n\n- Removes `GetTarget`\n- Replaces `get(..., _target: GetTarget) -> Option<CachedEntry>` with\nthree separate methods (one for each GetTarget).\n- Updated `DbCacheWrapper` to increment the appropriate stats.\n- Updates `TableStore` to call the new methods\n\nThis is a follow-up PR for the discussion here:\n\nhttps://github.com/slatedb/slatedb/pull/491/files#r1963048215\n\nI was hoping to be able to do this:\n\n```rust\npub trait DbCache: Send + Sync {\n    async fn get_block(&self, key: CachedKey) -> Option<Arc<Block>>;\n    async fn get_index(&self, key: CachedKey) -> Option<Arc<SsTableIndexOwned>>;\n    async fn get_filter(&self, key: CachedKey) -> Option<Arc<BloomFilter>>;\n    ...\n}\n```\n\nBut it turns out that approach leaks\n`Block`/`SsTableIndexOwned`/`BloomFilter` publicly. We don't want that.\n\nConsequently, this PR is pretty minor. It feels a bit extraneous. That\nsaid, I do slightly prefer the `get_*` approach over the `GetTarget`\none.",
          "timestamp": "2025-03-10T18:01:34Z",
          "url": "https://github.com/slatedb/slatedb/commit/d955e3c1c98fe5765bc55008d9ec11a813df38af"
        },
        "date": 1741682185012,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11736.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11574.684,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11361.55,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2841.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12010.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3017.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12171.517,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8097.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11461.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7643.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13182.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19767.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8831.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13199.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8885.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35423.379,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4919.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19723.539,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmvk@apache.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "13ab6bf9e80154c1d9f76f0ff3497b824122f652",
          "message": "Update Checkpoints RFC: DbParent -> [ExternalDb]. (#483)",
          "timestamp": "2025-03-11T17:52:54Z",
          "url": "https://github.com/slatedb/slatedb/commit/13ab6bf9e80154c1d9f76f0ff3497b824122f652"
        },
        "date": 1741768669108,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12055.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11678.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12110.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3022.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12414.934,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3100.817,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13839.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9209.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12351.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8241.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13055.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19609.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8515.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12783.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8969.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35923.121,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4938.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19766.16,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmvk@apache.org"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "13ab6bf9e80154c1d9f76f0ff3497b824122f652",
          "message": "Update Checkpoints RFC: DbParent -> [ExternalDb]. (#483)",
          "timestamp": "2025-03-11T17:52:54Z",
          "url": "https://github.com/slatedb/slatedb/commit/13ab6bf9e80154c1d9f76f0ff3497b824122f652"
        },
        "date": 1741855032419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12008.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11360.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11785.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2926.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12348.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3087.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12249.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8168.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12568.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8352.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13319.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19966.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8787.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13209.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8871.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35507.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4900.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19609.6,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Jason Gustafson",
            "username": "hachikuji",
            "email": "12502538+hachikuji@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5ab3e046c76b9a3156f3658491bae38575e7a95b",
          "message": "Read only client implementation (#498)\n\nFixes https://github.com/slatedb/slatedb/issues/317. This patch contains\nthe initial implementation for `DbReader` as specified in the checkpoint\n[RFC](https://github.com/slatedb/slatedb/blob/main/rfcs/0004-checkpoints.md#clones).",
          "timestamp": "2025-03-14T05:34:25Z",
          "url": "https://github.com/slatedb/slatedb/commit/5ab3e046c76b9a3156f3658491bae38575e7a95b"
        },
        "date": 1741941345473,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 13121.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11515.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 10783.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2690.567,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13605.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3411.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13776,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9205.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12065.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8040.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13356.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20057.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9226.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13851.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9147.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36696.559,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5088.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20319.08,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8b2be4657546c61f76b0fc0716d3e1ebbf92d404",
          "message": "Add version bytes for SST and manifest byte formats (#510)\n\nThis PR adds very rudimentary version number handling for SSTs and\nmanifests. My main goal is simply to get the version bytes in the right\nspot, so we can implement proper version handling going forward. The\nmost important part of this PR are the byte sizes and locations in the\nbyte formats.\n\nChanges:\n\n- Adds a u16 to the _end_ of an SST's on-disk byte format\n- Adds a u16 to the _beginning_ of a manifest's on-disk byte format\n- Adds version validation logic in `FlatBufferManifestCodec::decode`\n- Adds version validation logic in `SsTableFormat::read_info`\n- Adds an `InvalidVersion` error\n- Adds tests for validation logic\n\nA couple of notes/oddities:\n\n- I opted to put the encode/decode logic inside the manifest's flat\nbuffer codec because we don't currently have an intermediate builder for\nit the way that we do for SSTs (using `EncodedSsTableBuilder`).\n- On the SST side, I opted to validate the version in `read_info` since\nyou can't do anything without reading the SST info for an SST first.\n- The SST bytes are at the end while they're at the beginning for the\nManifest. This felt most intuitive to me, but if everyone is grossed out\nby it, I can put the version bytes at the heat of the SST or tail of the\nmanifest.\n- The current decoders simply validate the versions are identical. We\nonly have a single version right now, so this is fine. The work to\nsupport cross-version decoding is left for a later PR.\n\nThe changes are a first step toward #446.",
          "timestamp": "2025-03-14T18:36:22Z",
          "url": "https://github.com/slatedb/slatedb/commit/8b2be4657546c61f76b0fc0716d3e1ebbf92d404"
        },
        "date": 1742027613094,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11550.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11809.634,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11574.384,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2899.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12509.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3125.067,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13451.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8954.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12342.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8243.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13074.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19602.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8501.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12751.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8909.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35725.078,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4804.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19150.98,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8b2be4657546c61f76b0fc0716d3e1ebbf92d404",
          "message": "Add version bytes for SST and manifest byte formats (#510)\n\nThis PR adds very rudimentary version number handling for SSTs and\nmanifests. My main goal is simply to get the version bytes in the right\nspot, so we can implement proper version handling going forward. The\nmost important part of this PR are the byte sizes and locations in the\nbyte formats.\n\nChanges:\n\n- Adds a u16 to the _end_ of an SST's on-disk byte format\n- Adds a u16 to the _beginning_ of a manifest's on-disk byte format\n- Adds version validation logic in `FlatBufferManifestCodec::decode`\n- Adds version validation logic in `SsTableFormat::read_info`\n- Adds an `InvalidVersion` error\n- Adds tests for validation logic\n\nA couple of notes/oddities:\n\n- I opted to put the encode/decode logic inside the manifest's flat\nbuffer codec because we don't currently have an intermediate builder for\nit the way that we do for SSTs (using `EncodedSsTableBuilder`).\n- On the SST side, I opted to validate the version in `read_info` since\nyou can't do anything without reading the SST info for an SST first.\n- The SST bytes are at the end while they're at the beginning for the\nManifest. This felt most intuitive to me, but if everyone is grossed out\nby it, I can put the version bytes at the heat of the SST or tail of the\nmanifest.\n- The current decoders simply validate the versions are identical. We\nonly have a single version right now, so this is fine. The work to\nsupport cross-version decoding is left for a later PR.\n\nThe changes are a first step toward #446.",
          "timestamp": "2025-03-14T18:36:22Z",
          "url": "https://github.com/slatedb/slatedb/commit/8b2be4657546c61f76b0fc0716d3e1ebbf92d404"
        },
        "date": 1742114025118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 13454.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12403.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12091.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3021,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12501.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3108.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12295.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8184.067,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12633.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8418.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12608.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18955.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8667.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12980.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9005.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36015.781,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4840.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19371.939,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8b2be4657546c61f76b0fc0716d3e1ebbf92d404",
          "message": "Add version bytes for SST and manifest byte formats (#510)\n\nThis PR adds very rudimentary version number handling for SSTs and\nmanifests. My main goal is simply to get the version bytes in the right\nspot, so we can implement proper version handling going forward. The\nmost important part of this PR are the byte sizes and locations in the\nbyte formats.\n\nChanges:\n\n- Adds a u16 to the _end_ of an SST's on-disk byte format\n- Adds a u16 to the _beginning_ of a manifest's on-disk byte format\n- Adds version validation logic in `FlatBufferManifestCodec::decode`\n- Adds version validation logic in `SsTableFormat::read_info`\n- Adds an `InvalidVersion` error\n- Adds tests for validation logic\n\nA couple of notes/oddities:\n\n- I opted to put the encode/decode logic inside the manifest's flat\nbuffer codec because we don't currently have an intermediate builder for\nit the way that we do for SSTs (using `EncodedSsTableBuilder`).\n- On the SST side, I opted to validate the version in `read_info` since\nyou can't do anything without reading the SST info for an SST first.\n- The SST bytes are at the end while they're at the beginning for the\nManifest. This felt most intuitive to me, but if everyone is grossed out\nby it, I can put the version bytes at the heat of the SST or tail of the\nmanifest.\n- The current decoders simply validate the versions are identical. We\nonly have a single version right now, so this is fine. The work to\nsupport cross-version decoding is left for a later PR.\n\nThe changes are a first step toward #446.",
          "timestamp": "2025-03-14T18:36:22Z",
          "url": "https://github.com/slatedb/slatedb/commit/8b2be4657546c61f76b0fc0716d3e1ebbf92d404"
        },
        "date": 1742200793637,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12031.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12396.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11664.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2926.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13818.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3455.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12173.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8112.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12609.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8382.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13180,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19786.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8679.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13014.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8981.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35851.621,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4833.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19302.42,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "f4f5e304dd78cea1194b37e0dfd245bd8673c640",
          "message": "Ran `cargo update` to pull in latest dependencies (#515)",
          "timestamp": "2025-03-17T22:51:31Z",
          "url": "https://github.com/slatedb/slatedb/commit/f4f5e304dd78cea1194b37e0dfd245bd8673c640"
        },
        "date": 1742287012117,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11554.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11568.55,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12861.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3213.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13072.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3263.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 11105.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 7382.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12817.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8538.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12655.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18945.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8557.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12883.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8940.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35826.879,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4827.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19277.9,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6fc024ee515c906be963d784c9fea3a64deac042",
          "message": "fix: handle repeated keys during sst index search (#518)\n\nThis patch fixes the SstIterator's index search path to correctly handle\nSSTs where multiple blocks contain the same starting key (which is now\npossible in l0 since we store multiple key versions in the memtable).\nThe fix is to not terminate the binary search of the block metas when a\nmatch is found - but rather to keep looking for a lower-indexed block.\n\nfixes #517",
          "timestamp": "2025-03-19T06:08:15Z",
          "url": "https://github.com/slatedb/slatedb/commit/6fc024ee515c906be963d784c9fea3a64deac042"
        },
        "date": 1742373433444,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12067.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12167.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11619.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2894.633,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 11851.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 2975.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13894.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9255.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12785.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8515.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13280.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19914.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8789.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13161.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9073.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36311.602,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4909.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19689.461,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "id": "f7292474584d1a558c28169cd23d2b34c854e892",
          "message": "Bump version to 0.5.1",
          "timestamp": "2025-03-19T15:10:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/f7292474584d1a558c28169cd23d2b34c854e892"
        },
        "date": 1742459829069,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12105.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11804.434,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11825.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2968.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12161.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3038.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12089.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8066.117,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12626.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8420.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12607.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18851.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8607.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12890.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9123.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36367.898,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4823.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19344.779,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "id": "f7292474584d1a558c28169cd23d2b34c854e892",
          "message": "Bump version to 0.5.1",
          "timestamp": "2025-03-19T15:10:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/f7292474584d1a558c28169cd23d2b34c854e892"
        },
        "date": 1742546180969,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11920.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11923.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11691.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2931.067,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 11072.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 2760.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12106.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8065.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12351.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8194.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12663.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18929.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8965.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13409.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8918.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35772.898,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4854.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19449.279,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "id": "7dfd7e3a78f21e63afcf888eecaf4103730a990b",
          "message": "Bump version to 0.5.2",
          "timestamp": "2025-03-21T18:08:02Z",
          "url": "https://github.com/slatedb/slatedb/commit/7dfd7e3a78f21e63afcf888eecaf4103730a990b"
        },
        "date": 1742632418179,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11584.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11656.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12004.167,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3001.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12254.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3068.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12340.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8225.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13169.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8800.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13536.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20333.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8969.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13491.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8891.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35525.238,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4851.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19448.699,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "id": "7dfd7e3a78f21e63afcf888eecaf4103730a990b",
          "message": "Bump version to 0.5.2",
          "timestamp": "2025-03-21T18:08:02Z",
          "url": "https://github.com/slatedb/slatedb/commit/7dfd7e3a78f21e63afcf888eecaf4103730a990b"
        },
        "date": 1742718818047,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11772.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12565.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11628.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2916.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13379,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3352.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13421.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8937.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12785.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8521.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13138.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19706.561,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8727.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13069.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8985.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35893.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4819.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19262.381,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "criccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "id": "7dfd7e3a78f21e63afcf888eecaf4103730a990b",
          "message": "Bump version to 0.5.2",
          "timestamp": "2025-03-21T18:08:02Z",
          "url": "https://github.com/slatedb/slatedb/commit/7dfd7e3a78f21e63afcf888eecaf4103730a990b"
        },
        "date": 1742805522908,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11878.616,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11821.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12095.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3031.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3001.067,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13677.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9114.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12726.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8477.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13052.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19606.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9009.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13502.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9124.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36506.879,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4811.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19217.199,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "8a903b6e2b6a269164d2af326dca9d827cdfac1d",
          "message": "Add read/write integration test (#524)",
          "timestamp": "2025-03-24T15:00:42Z",
          "url": "https://github.com/slatedb/slatedb/commit/8a903b6e2b6a269164d2af326dca9d827cdfac1d"
        },
        "date": 1742891853950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12122.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11290.167,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11871.134,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2963.067,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 11988.55,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 2998.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13168.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8791.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12730.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8470.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13142.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19775.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9247.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13864,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8810.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35212.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4788.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19142.42,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "A. Sophie Blee-Goldman",
            "username": "ableegoldman",
            "email": "sophie@responsive.dev"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "1ef43dde5020d45a9b08247b1d5f1a56a239eaee",
          "message": "Reduce size of index blocks using lower bound index key (#516)\n\nSee https://github.com/slatedb/slatedb/issues/472",
          "timestamp": "2025-03-25T20:00:17Z",
          "url": "https://github.com/slatedb/slatedb/commit/1ef43dde5020d45a9b08247b1d5f1a56a239eaee"
        },
        "date": 1742978223943,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12144.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12200.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11921.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2981.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13150.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13455.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8947.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13516.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8998.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13666.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20513.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8762.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13064.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9123.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36509.281,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4748.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18974.82,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "903c6ac6c729194c8adbf8889a0690fafc5c2226",
          "message": "add a dbcache impl that uses the foyer hybrid cache (#526)\n\nThis patch adds an implementation of `DbCache` that uses a foyer hybrid\ncache to store cached blocks on-disk as well as in-memory.\n`FoyerHybridCache` can fail gets, so this patch also changes `DbCache`\nto support returning errors. Currently errors are handled as follows:\n- tablestore just ignores errors and treats them as cache misses\n- `DbCacheWrapper` tracks a counter of errors, and logs them. The log is\nrate-limited to once per second (so as not to spam logs on non-transient\nerrors like out-of-disk).",
          "timestamp": "2025-03-26T20:55:28Z",
          "url": "https://github.com/slatedb/slatedb/commit/903c6ac6c729194c8adbf8889a0690fafc5c2226"
        },
        "date": 1743064705324,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11723.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11631.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12091.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3016,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 11789.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 2956.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 11911.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 7922.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13552.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9063.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12545.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18801.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8824.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13243.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9057.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36175.398,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4783.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19149.52,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "903c6ac6c729194c8adbf8889a0690fafc5c2226",
          "message": "add a dbcache impl that uses the foyer hybrid cache (#526)\n\nThis patch adds an implementation of `DbCache` that uses a foyer hybrid\ncache to store cached blocks on-disk as well as in-memory.\n`FoyerHybridCache` can fail gets, so this patch also changes `DbCache`\nto support returning errors. Currently errors are handled as follows:\n- tablestore just ignores errors and treats them as cache misses\n- `DbCacheWrapper` tracks a counter of errors, and logs them. The log is\nrate-limited to once per second (so as not to spam logs on non-transient\nerrors like out-of-disk).",
          "timestamp": "2025-03-26T20:55:28Z",
          "url": "https://github.com/slatedb/slatedb/commit/903c6ac6c729194c8adbf8889a0690fafc5c2226"
        },
        "date": 1743151036888,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12160.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11712.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11880.884,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2980.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12383.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3092.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12111.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8061.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13513.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9017.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13294.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19953.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9171.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13753.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9147.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36533.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4862.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19407.859,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "903c6ac6c729194c8adbf8889a0690fafc5c2226",
          "message": "add a dbcache impl that uses the foyer hybrid cache (#526)\n\nThis patch adds an implementation of `DbCache` that uses a foyer hybrid\ncache to store cached blocks on-disk as well as in-memory.\n`FoyerHybridCache` can fail gets, so this patch also changes `DbCache`\nto support returning errors. Currently errors are handled as follows:\n- tablestore just ignores errors and treats them as cache misses\n- `DbCacheWrapper` tracks a counter of errors, and logs them. The log is\nrate-limited to once per second (so as not to spam logs on non-transient\nerrors like out-of-disk).",
          "timestamp": "2025-03-26T20:55:28Z",
          "url": "https://github.com/slatedb/slatedb/commit/903c6ac6c729194c8adbf8889a0690fafc5c2226"
        },
        "date": 1743237269889,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11751.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11522.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11939.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2980.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12519.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3127.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 11631.366,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 7771.567,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13241.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8827.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13626.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20457.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8701.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13010.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9084.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36328.559,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4802.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19169.961,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "51454fdad035e9a4a6797c8c5ddc5de5b3ba3099",
          "message": "change read level to durability filter (#529)\n\nThis patch changes the current ReadLevel and ReadOptions.read_level to\nDurabilityLevel and ReadOptions.durability_filter as described in RFC-8.\nIt also changes the read path when wal is disabled to respect the\ndurability filter by only reading from the memtable if the\ndurability_filter is set to Memory. Previously we were disregarding the\nread level when wal was disabled.",
          "timestamp": "2025-03-29T21:36:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/51454fdad035e9a4a6797c8c5ddc5de5b3ba3099"
        },
        "date": 1743323645402,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12040.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11990.116,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11877.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2974.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12407.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3109.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 11941.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 7955.133,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13568.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9023.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13932.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20895.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8883.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13322.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9068.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36257.898,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4851.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19403.26,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "51454fdad035e9a4a6797c8c5ddc5de5b3ba3099",
          "message": "change read level to durability filter (#529)\n\nThis patch changes the current ReadLevel and ReadOptions.read_level to\nDurabilityLevel and ReadOptions.durability_filter as described in RFC-8.\nIt also changes the read path when wal is disabled to respect the\ndurability filter by only reading from the memtable if the\ndurability_filter is set to Memory. Previously we were disregarding the\nread level when wal was disabled.",
          "timestamp": "2025-03-29T21:36:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/51454fdad035e9a4a6797c8c5ddc5de5b3ba3099"
        },
        "date": 1743410299615,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11648.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11645.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11949.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2973.517,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12252.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3059.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12154.116,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8088.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13267.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8803.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13891.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20823.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8873.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13289.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9230.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36972.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4893.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19592.359,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "51454fdad035e9a4a6797c8c5ddc5de5b3ba3099",
          "message": "change read level to durability filter (#529)\n\nThis patch changes the current ReadLevel and ReadOptions.read_level to\nDurabilityLevel and ReadOptions.durability_filter as described in RFC-8.\nIt also changes the read path when wal is disabled to respect the\ndurability filter by only reading from the memtable if the\ndurability_filter is set to Memory. Previously we were disregarding the\nread level when wal was disabled.",
          "timestamp": "2025-03-29T21:36:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/51454fdad035e9a4a6797c8c5ddc5de5b3ba3099"
        },
        "date": 1743496701950,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11995.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12434.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12073.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3026.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13717.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3422.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 11657.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 7771.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13565.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9054.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13501.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20267.961,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8788.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13221.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9136.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36468.602,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4855.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19455.279,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "51454fdad035e9a4a6797c8c5ddc5de5b3ba3099",
          "message": "change read level to durability filter (#529)\n\nThis patch changes the current ReadLevel and ReadOptions.read_level to\nDurabilityLevel and ReadOptions.durability_filter as described in RFC-8.\nIt also changes the read path when wal is disabled to respect the\ndurability filter by only reading from the memtable if the\ndurability_filter is set to Memory. Previously we were disregarding the\nread level when wal was disabled.",
          "timestamp": "2025-03-29T21:36:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/51454fdad035e9a4a6797c8c5ddc5de5b3ba3099"
        },
        "date": 1743583121717,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12036.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11999.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11359.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2833.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12152.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3033.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12035.884,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8004.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13287.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8883.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13855.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20787.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9173.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13780.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9299.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37052.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4960.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19782.42,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "51454fdad035e9a4a6797c8c5ddc5de5b3ba3099",
          "message": "change read level to durability filter (#529)\n\nThis patch changes the current ReadLevel and ReadOptions.read_level to\nDurabilityLevel and ReadOptions.durability_filter as described in RFC-8.\nIt also changes the read path when wal is disabled to respect the\ndurability filter by only reading from the memtable if the\ndurability_filter is set to Memory. Previously we were disregarding the\nread level when wal was disabled.",
          "timestamp": "2025-03-29T21:36:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/51454fdad035e9a4a6797c8c5ddc5de5b3ba3099"
        },
        "date": 1743669421072,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12175.45,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11773.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11879.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2974.817,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12337.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3081.55,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12288.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8200.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11984.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7966.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13423.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20135.961,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8719.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13068.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9099.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36290.781,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4846.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19365.961,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Rohan",
            "username": "rodesai",
            "email": "desai.p.rohan@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "51454fdad035e9a4a6797c8c5ddc5de5b3ba3099",
          "message": "change read level to durability filter (#529)\n\nThis patch changes the current ReadLevel and ReadOptions.read_level to\nDurabilityLevel and ReadOptions.durability_filter as described in RFC-8.\nIt also changes the read path when wal is disabled to respect the\ndurability filter by only reading from the memtable if the\ndurability_filter is set to Memory. Previously we were disregarding the\nread level when wal was disabled.",
          "timestamp": "2025-03-29T21:36:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/51454fdad035e9a4a6797c8c5ddc5de5b3ba3099"
        },
        "date": 1743755834392,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 12120.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 11316.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12236.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3049.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12309.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3078.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12046.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8006.933,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13647.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9112.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13256.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19906.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8721.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13096.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9309.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37327.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4832.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19373.34,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "baobaomaomeng",
            "username": "baobaomaomeng",
            "email": "83003261+baobaomaomeng@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b06b85fb5506b40420a36545214c063117c2123",
          "message": "More accurate SST size estimation for the memtable (#531)",
          "timestamp": "2025-04-04T21:23:29Z",
          "url": "https://github.com/slatedb/slatedb/commit/3b06b85fb5506b40420a36545214c063117c2123"
        },
        "date": 1743842035287,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11995.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12224.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11636.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2924.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12359.434,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3085.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 13901.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9280.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13785.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9170.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12983.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19446.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9047.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13553.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9169.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36780.238,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4818.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19275.881,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "baobaomaomeng",
            "username": "baobaomaomeng",
            "email": "83003261+baobaomaomeng@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "3b06b85fb5506b40420a36545214c063117c2123",
          "message": "More accurate SST size estimation for the memtable (#531)",
          "timestamp": "2025-04-04T21:23:29Z",
          "url": "https://github.com/slatedb/slatedb/commit/3b06b85fb5506b40420a36545214c063117c2123"
        },
        "date": 1743928434329,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11709.884,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12147.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 12090,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3030.383,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 13424.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3354.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12520.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8342.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13401.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8911.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 11890.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 17866.916,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9096.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13659.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9203.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36921.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4862.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 19515.939,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "flaneur",
            "username": "flaneur2020",
            "email": "me.ssword@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d63e445927517b17f6736448b6e978805d3ae1ac",
          "message": "chore: wrap async-trait to KeyValueIterator & SeekToKey (#539)\n\ncurrently `MergeIterator` has a limitation: all the iterators passed to\nit has to be the same type.\n\ni tried passing a `Box<dyn KeyValueIterator>` to it, but rust type\nsystem fails that `KeyValueIterator` is not able to be used as trait\nobject.\n\n```\n   --> src/merge_iterator.rs:150:13\n    |\n150 |     it: Box<dyn KeyValueIterator>,\n    |             ^^^^^^^^^^^^^^^^^^^^ `KeyValueIterator` cannot be made into an object\n    |\nnote: for a trait to be \"dyn-compatible\" it needs to allow building a vtable to allow the call to be resolvable dynamically; for more information visit <https://doc.rust-lang.org/reference/items/traits.html#object-safety>\n   --> src/iter.rs:18:14\n    |\n16  | pub trait KeyValueIterator {\n    |           ---------------- this trait cannot be made into an object...\n17  |     /// Returns the next non-deleted key-value pair in the iterator.\n18  |     async fn next(&mut self) -> Result<Option<KeyValue>, SlateDBError> {\n    |              ^^^^ ...because method `next` is `async`\n...\n40  |     async fn next_entry(&mut self) -> Result<Option<RowEntry>, SlateDBError>;\n    |              ^^^^^^^^^^ ...because method `next_entry` is `async`\n    = help: consider moving `next` to another trait\n    = help: consider moving `next_entry` to another trait\n    = help: the following types implement the trait, consider defining an enum where each variant holds one of these types, implementing `KeyValueIterator` for this new enum and using it instead:\n              block_iterator::BlockIterator<B>\n              filter_iterator::FilterIterator<T>\n              mem_table::VecDequeKeyValueIterator\n              mem_table::MemTableIterator<'_, T>\n              merge_iterator::TwoMergeIterator<T1, T2>\n              merge_iterator::MergeIterator<T>\n              merge_operator::MergeOperatorIterator<T>\n              sorted_run_iterator::SortedRunIterator<'_>\n              sst_iter::SstIterator<'_>\n\n\n```\n\n\nthis pr wraps an `async-trait` to it, so it allows this trait to be used\nas trait object.\n\nit seems that `async-trait` may help us transforming an `async fn` in\nthe trait into a `-> Box<Future<Output = Result<(), SlateDBError>>>`.\nit's not considered as a \"zero-cost abstraction\" due to it has a heap\nallocation, so having `Box<Future<..>>` is not the default behaviour for\n`async` functions in the rust compiler.",
          "timestamp": "2025-04-07T05:08:42Z",
          "url": "https://github.com/slatedb/slatedb/commit/d63e445927517b17f6736448b6e978805d3ae1ac"
        },
        "date": 1744015140559,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 11651.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 12005.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 11820,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 2950.517,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 12358.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3083.45,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 12104.866,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 8067.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13491.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9007.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12363.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18537.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8763.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13090.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36808.281,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5048.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20208.301,
            "unit": "ops/sec"
          }
        ]
      }
    ]
  }
}