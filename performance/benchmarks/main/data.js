window.BENCHMARK_DATA = {
  "lastUpdate": 1733992617665,
  "repoUrl": "https://github.com/slatedb/slatedb",
  "entries": {
    "src/bencher/benchmark-db.sh": [
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
          "id": "9878c5b4fd5301cdbdf71a04d09fed51048d1e9f",
          "message": "Disable custom benchmark caching (#395)\n\nThe `benchmarks` nightly job currently caches data using Github's cache.\r\nIt turns out github-action-benchmark doesn't allow us to do this _and_\r\npublish to our slatedb-website repo; it's either/or. So, I'm disabling\r\nthe custom download/save caching jobs, and removing\r\n`external-data-json-path` so that the GH action simply uses the JSON\r\ndata that's stored in the slatedb-website repo when saving and comparing\r\nold results.",
          "timestamp": "2024-12-09T22:56:22Z",
          "url": "https://github.com/slatedb/slatedb/commit/9878c5b4fd5301cdbdf71a04d09fed51048d1e9f"
        },
        "date": 1733785779040,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16918.051,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17003.982,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18129.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4519.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16268.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4054.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17428.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11608.267,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12818.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8532.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16585.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24891.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9026.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13518.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10662.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 42579.762,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5600.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22440.779,
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
          "id": "55fe14a40d7d0cdf9448b1e178f8a7d2b06ed930",
          "message": "MergeOperator RFC: Simplify section around TTL handling and make clearer (#392)",
          "timestamp": "2024-12-10T01:17:26Z",
          "url": "https://github.com/slatedb/slatedb/commit/55fe14a40d7d0cdf9448b1e178f8a7d2b06ed930"
        },
        "date": 1733819851288,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16776.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16772.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17241.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4308.817,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15983.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3994.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17937.721,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11962.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12704.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8476.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16187.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24260.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9322.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13977.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10432.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41733.621,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5634.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22508.061,
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
          "id": "55fe14a40d7d0cdf9448b1e178f8a7d2b06ed930",
          "message": "MergeOperator RFC: Simplify section around TTL handling and make clearer (#392)",
          "timestamp": "2024-12-10T01:17:26Z",
          "url": "https://github.com/slatedb/slatedb/commit/55fe14a40d7d0cdf9448b1e178f8a7d2b06ed930"
        },
        "date": 1733906279958,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15848.45,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15758,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17357.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4344.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16108.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4046.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15794.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10505,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12897.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8579.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16085.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24099.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9158.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13762.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10948.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43728.559,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5650.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22635.881,
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
          "id": "c69d2dea5a75f383efbcbc60d73b1a4ec643d9a8",
          "message": "Add merge operator to readme",
          "timestamp": "2024-12-12T02:44:40Z",
          "url": "https://github.com/slatedb/slatedb/commit/c69d2dea5a75f383efbcbc60d73b1a4ec643d9a8"
        },
        "date": 1733992617154,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16798.551,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16945,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17967.721,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4496.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16216.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4046.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18351.119,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12230.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12451.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8286.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16108.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24244.619,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9048.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13542.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10453,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41804.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5570.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22274,
            "unit": "ops/sec"
          }
        ]
      }
    ]
  }
}