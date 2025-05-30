window.BENCHMARK_DATA = {
  "lastUpdate": 1748594292310,
  "repoUrl": "https://github.com/slatedb/slatedb",
  "entries": {
    "slatedb-bencher/benchmark-db.sh": [
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
          "id": "07b1482f52747db640788841ba4d4b33968dd0ee",
          "message": "Fixing nightly perf tests (#578)\n\nIt looks like #554 missed a couple of spots in the Github nightly.yaml\nfile. This PR fixes two issues:\n\n- The bencher job was referring to `src/`, which was removed in the\nabove PR.\n- The pprof job caught the new slatedb-cli package as part of its list\nof potential microbenchmarks to run.\n\nI've updated the path and changed the pprof commands to filter out all\nnon-\"bench\" kinds.",
          "timestamp": "2025-05-15T04:22:24Z",
          "url": "https://github.com/slatedb/slatedb/commit/07b1482f52747db640788841ba4d4b33968dd0ee"
        },
        "date": 1747298325957,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17944.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19568.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19692.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4928.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19761.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4937.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 20097.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13402.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14398.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9606.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14095.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21120.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9157.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13704.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10013.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39941.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5149.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20603.32,
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
          "id": "07b1482f52747db640788841ba4d4b33968dd0ee",
          "message": "Fixing nightly perf tests (#578)\n\nIt looks like #554 missed a couple of spots in the Github nightly.yaml\nfile. This PR fixes two issues:\n\n- The bencher job was referring to `src/`, which was removed in the\nabove PR.\n- The pprof job caught the new slatedb-cli package as part of its list\nof potential microbenchmarks to run.\n\nI've updated the path and changed the pprof commands to filter out all\nnon-\"bench\" kinds.",
          "timestamp": "2025-05-15T04:22:24Z",
          "url": "https://github.com/slatedb/slatedb/commit/07b1482f52747db640788841ba4d4b33968dd0ee"
        },
        "date": 1747384710462,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18440,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16329.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20047.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5010.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18881.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4709.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18168.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12119.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12930.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8607.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13732.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20596.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8912.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13392.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9070.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36320.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5789.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23209.881,
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
          "id": "07b1482f52747db640788841ba4d4b33968dd0ee",
          "message": "Fixing nightly perf tests (#578)\n\nIt looks like #554 missed a couple of spots in the Github nightly.yaml\nfile. This PR fixes two issues:\n\n- The bencher job was referring to `src/`, which was removed in the\nabove PR.\n- The pprof job caught the new slatedb-cli package as part of its list\nof potential microbenchmarks to run.\n\nI've updated the path and changed the pprof commands to filter out all\nnon-\"bench\" kinds.",
          "timestamp": "2025-05-15T04:22:24Z",
          "url": "https://github.com/slatedb/slatedb/commit/07b1482f52747db640788841ba4d4b33968dd0ee"
        },
        "date": 1747557294995,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18013.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19977.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18245.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4552.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18947.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4741.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18483.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12320.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12111.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8075.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14683.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22037,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8698.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13070.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8985.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35859.621,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5955.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23792.08,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d8b267cc6a3aed667ab883c3436a81ca15c52886",
          "message": "doc: fix contributing guide nextest script (#581)",
          "timestamp": "2025-05-19T20:38:59Z",
          "url": "https://github.com/slatedb/slatedb/commit/d8b267cc6a3aed667ab883c3436a81ca15c52886"
        },
        "date": 1747730350176,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19094.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16348.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5029.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19527.619,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4871.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18677.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12470.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14201.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9478.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15088.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22648.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9237.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13869.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10122.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 40477.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5273.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21124.039,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Calavera",
            "username": "calavera",
            "email": "1050+calavera@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "626e128e853842981330c977ebe75eec0a6fd606",
          "message": "fix(gc): Reimplement the garbage collector without crossbeam. (#579)",
          "timestamp": "2025-05-21T00:12:58Z",
          "url": "https://github.com/slatedb/slatedb/commit/626e128e853842981330c977ebe75eec0a6fd606"
        },
        "date": 1747816721994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18938.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20542.633,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19988.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4985.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19434.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4864.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16630.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11063.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12128.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8067.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15570.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23360.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9075.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13601.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9878.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39497.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5602.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22424.76,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Calavera",
            "username": "calavera",
            "email": "1050+calavera@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "626e128e853842981330c977ebe75eec0a6fd606",
          "message": "fix(gc): Reimplement the garbage collector without crossbeam. (#579)",
          "timestamp": "2025-05-21T00:12:58Z",
          "url": "https://github.com/slatedb/slatedb/commit/626e128e853842981330c977ebe75eec0a6fd606"
        },
        "date": 1747903098640,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18793.334,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18896.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18527.666,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4637.267,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19761.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4944.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19215.061,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12818.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12204.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8161.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13794.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20689.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8936.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13423.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9740.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38924.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6497.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 25936.439,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Calavera",
            "username": "calavera",
            "email": "1050+calavera@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "ca8d444f80efa7b4e2e938c47582a31f0c09fc7a",
          "message": "fix(gc): Check the cancellation token before starting any gc tasks. (#583)",
          "timestamp": "2025-05-22T21:32:44Z",
          "url": "https://github.com/slatedb/slatedb/commit/ca8d444f80efa7b4e2e938c47582a31f0c09fc7a"
        },
        "date": 1747989564682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17846.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17724.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17845.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4457.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18584.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4654.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18280.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12131.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14178.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9413.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13369.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20031.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9060.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13613.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9922.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39656.262,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5522.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22098.279,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953",
          "message": "fix(foyer): bump to foyer v0.17.3 to fix recovery (#584)",
          "timestamp": "2025-05-23T15:30:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953"
        },
        "date": 1748036404970,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17311.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17266.768,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18486.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4640.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17962.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4502.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17940.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11951.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13250.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8803.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13826.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20742.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9048.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13574.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10282.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41109.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5441.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21753.279,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953",
          "message": "fix(foyer): bump to foyer v0.17.3 to fix recovery (#584)",
          "timestamp": "2025-05-23T15:30:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953"
        },
        "date": 1748075659703,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19390.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20389.434,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20428.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5102.167,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20492.561,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5141.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18829.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12557.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14157.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9439.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14783.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22173.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9169.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13754,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9855.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39345.078,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5184.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20737.32,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953",
          "message": "fix(foyer): bump to foyer v0.17.3 to fix recovery (#584)",
          "timestamp": "2025-05-23T15:30:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953"
        },
        "date": 1748162114256,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18902.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20160.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19707.834,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4921.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18798.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4686.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19188.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12798.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14561.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9698.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14711.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21990.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9483.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14201.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10411.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41643.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5280.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21100.4,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953",
          "message": "fix(foyer): bump to foyer v0.17.3 to fix recovery (#584)",
          "timestamp": "2025-05-23T15:30:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953"
        },
        "date": 1748249621919,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18007.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17954.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20327.268,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5069.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19604.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4905.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19502.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12992.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14888.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9913.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14563.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21851.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9252.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13841.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9420.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37539.262,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5898.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23643.76,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953",
          "message": "fix(foyer): bump to foyer v0.17.3 to fix recovery (#584)",
          "timestamp": "2025-05-23T15:30:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953"
        },
        "date": 1748335115226,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19651.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20268.949,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19971.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4989.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18994.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4759.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18968.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12657.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14928,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9964.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14214.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21327.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9346.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14049.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8901.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35608.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4639.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18471.08,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Croxx",
            "username": "MrCroxx",
            "email": "mrcroxx@outlook.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953",
          "message": "fix(foyer): bump to foyer v0.17.3 to fix recovery (#584)",
          "timestamp": "2025-05-23T15:30:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/5a9948df59a8602ae2fcc6cd9c5fca9eb5f5f953"
        },
        "date": 1748421554020,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19296.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18751.416,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17907.232,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4476.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20597.561,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5147.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18156.721,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12052.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15196.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10119.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14548.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21797.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8634.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12941.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10116.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 40512.059,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5183.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20781.779,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6f8fdcbe1f82d4a426d800db30d41efe672000fc",
          "message": "Add Clippy checks for rand RNGs (#587)\n\nThis is a follow on to #585. Per @agavra's comment, I'm adding some\nbasic linting checks to detect misuse of `rand` RNGs.\n\nI played around with a few different ways to do this:\n\n- `grep` in a GH action didn't work well because it detected Rng usage\nin tests, which is fine (IMO).\n- `cargo deny` doesn't allow per-file allow-lists, so we couldn't\nexclude `slatedb/src/rand.rs`.\n- [semgrep](https://github.com/semgrep/semgrep) seems to require an API\nkey to use it now 🤔\n- Fully removing all `rand` usage in the package. This is a tall order\nsince `rand::Rng` is an extension trait that gives us a lot of the\nfunctionality we need. We _have_ to allow code to import it into get\nthings like `.get()`. 😭 Not a fan.\n- Re-exporting `rand::prelude::*` through `slatedb/src/rand.rs`. This\nseemed no better than just allowing `rand` imports for `Rng` and such.\n\nAnyhow, this way is nice and clean. Unfortunately, it's not perfect. It\nwon't detect new RNGs that get added to `rand`, and I didn't do an\nexhaustive search of all possible RNGs, just the common ones\n(built-in's, ChaCha, xoshiro, and xorshift). Still, it catches a lot and\nis better than nothing.",
          "timestamp": "2025-05-28T23:52:21Z",
          "url": "https://github.com/slatedb/slatedb/commit/6f8fdcbe1f82d4a426d800db30d41efe672000fc"
        },
        "date": 1748507930209,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18625.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17655.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20693.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5172.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19603.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4908.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17876.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11932.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12968.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8629.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14048.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21135.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9516.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14249.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9692.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38811.578,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5128.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20570.68,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris",
            "username": "criccomini",
            "email": "criccomini@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "460b7088dee380099d3f6c40d9d3f32505b7fa5b",
          "message": "Update README.md with Youtube video for Vignesh's talk",
          "timestamp": "2025-05-30T02:42:37Z",
          "url": "https://github.com/slatedb/slatedb/commit/460b7088dee380099d3f6c40d9d3f32505b7fa5b"
        },
        "date": 1748594291519,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18581.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18985,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18908.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4729.133,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17677.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4419.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18049.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12035.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13087.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8736.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13321.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19968.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9078.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13645.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9922.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39757.281,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5069.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20302.24,
            "unit": "ops/sec"
          }
        ]
      }
    ]
  }
}