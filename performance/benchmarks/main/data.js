window.BENCHMARK_DATA = {
  "lastUpdate": 1739954104192,
  "repoUrl": "https://github.com/slatedb/slatedb",
  "entries": {
    "src/bencher/benchmark-db.sh": [
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "795b59a495a1e86c07d036f807aadb201b4546ab",
          "message": "fix issue with clock tick recovery reading from WAL (#432)\n\nfixes #431 - the clock tick in the manifest will be valid up until\r\n`wal_id_last_seen` however restore will attempt to update the clock tick\r\neven for wals earlier than `wal_id_last_seen`, which causes the symptoms\r\nin #431\r\n\r\nThe fix here makes a few changes:\r\n1. the db state (manifest) last clock tick is only updated when either a\r\nWAL is flushed (wal enabled) or the memtable is flushed to L0 (wal\r\ndisabled)\r\n2. recovery no longer updates the db state last clock tick, but instead\r\nupdates the internal clock's \"last tick\"\r\n3. wraps the user-supplied `DbOptions` with `DbConfig` which allows us\r\nto create internally managed objects, such as `MonotonicClock` which is\r\nintroduced in this PR\r\n4. The `MonotonicClock` is initialized when loading the DB from the\r\nmanifest/WALs",
          "timestamp": "2025-01-19T21:01:58Z",
          "url": "https://github.com/slatedb/slatedb/commit/795b59a495a1e86c07d036f807aadb201b4546ab"
        },
        "date": 1737448412817,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15585.934,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17111.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17915.561,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4487.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16537.141,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4138.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16236.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10835.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15711.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10482.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15863.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23775.061,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9419.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14170.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11028.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44168.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5763.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23005.199,
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
          "id": "d1fd6f69471a941d905c5daf8f8653b1a82ad3af",
          "message": "2/N Merge Operator Iterator (#391)\n\nThis PR adds a generic KVIterator wrapper that transparently merges\nmerge operands. Usage of the new iterator will come in separate PR.",
          "timestamp": "2025-01-21T17:15:08Z",
          "url": "https://github.com/slatedb/slatedb/commit/d1fd6f69471a941d905c5daf8f8653b1a82ad3af"
        },
        "date": 1737534889080,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16958.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18017.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17333.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4324.55,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17538.449,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4381.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17596.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11763.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14179.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9454.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16129.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24224.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10028.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15086.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11000.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44024.559,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5876.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23536.5,
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
          "id": "b99ae9e042870ffebd683a419502b49c5a877155",
          "message": "Logic for creating checkpoints with control over scope (#443)\n\nImplement new instance `Db::create_checkpoint` specified in\r\n[RFC-0004](https://github.com/slatedb/slatedb/blob/main/rfcs/0004-checkpoints.md)\r\nwhich allows users control over the checkpoint scope.",
          "timestamp": "2025-01-22T18:52:56Z",
          "url": "https://github.com/slatedb/slatedb/commit/b99ae9e042870ffebd683a419502b49c5a877155"
        },
        "date": 1737621274060,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17193.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15090.366,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15741.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3928.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18453.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4623.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15781.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10518.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14305.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9518.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15792.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23686.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9969.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14952.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10975.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43917.922,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5765.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23055.141,
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
          "id": "9898a161c095db86a7edb916d167fbc358e5546d",
          "message": "MINOR: Refactor wal flush msg for consistent pattern (#453)\n\nWe ended up refactoring the memtable flusher so that it no longer uses\r\n`FlushMsg`. This patch makes a similar transformation for the wal flush\r\nmsg for simpler and more consistent usage.",
          "timestamp": "2025-01-23T20:19:41Z",
          "url": "https://github.com/slatedb/slatedb/commit/9898a161c095db86a7edb916d167fbc358e5546d"
        },
        "date": 1737707644579,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 14804.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16912.768,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17063.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4258.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15879.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3967.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15790.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10553.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14290.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9530.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16239.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24379.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9776.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14634.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10718.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 42997.602,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5678.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22730.02,
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
          "id": "0340f2f162120781166aea87b0903d8660d92511",
          "message": "Replace `&[u8]` with `AsRef<[u8]>` in public APIs (#450)\n\nThis PR updates user-facing put, get, delete, scan, batch, and iterator\r\nAPIs to use `AsRef<[u8]>` instead of `&[u8]` for key and value types.\r\nThe intent is to make the APIs more flexible for users that wish to\r\nsupply `Bytes`, `Vec<u8>`, and strings.\r\n\r\nI opted to keep the return types as `Bytes` since it allowed us to\r\nreturn data without copying it. Initially, I changed the return values\r\nfor get and the iterators to use `Vec<u8>` instead of `Bytes`. After\r\ndiscussing with some Rust folks on Bluesky, I opted to stick with\r\n`Bytes` for return types. [Hyper](https://hyper.rs/) is an example of\r\nanother library that uses `Bytes in their public-facing API.\r\n\r\nInternally, I've kept everything as `Bytes` both to minimize the blast\r\nradius and also because `Bytes` are genuinely useful for managing bytes\r\nwithout expensive copies.\r\n\r\nTo review, I suggest reading this in commit order since I incrementally\r\nchanged APIs one at a time. I am also open to breaking this PR up if\r\nreviewers prefer, but it's pretty cookie cutter once you see what I'm\r\ndoing.\r\n\r\nFixes #449",
          "timestamp": "2025-01-25T00:15:06Z",
          "url": "https://github.com/slatedb/slatedb/commit/0340f2f162120781166aea87b0903d8660d92511"
        },
        "date": 1737793966095,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15821.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16765.051,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15039.483,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3757.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16492.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4123.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15553.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10336.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15277.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10186.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16259.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24412.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9934.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14863.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10940.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43677.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5717.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22932.1,
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
          "id": "0340f2f162120781166aea87b0903d8660d92511",
          "message": "Replace `&[u8]` with `AsRef<[u8]>` in public APIs (#450)\n\nThis PR updates user-facing put, get, delete, scan, batch, and iterator\r\nAPIs to use `AsRef<[u8]>` instead of `&[u8]` for key and value types.\r\nThe intent is to make the APIs more flexible for users that wish to\r\nsupply `Bytes`, `Vec<u8>`, and strings.\r\n\r\nI opted to keep the return types as `Bytes` since it allowed us to\r\nreturn data without copying it. Initially, I changed the return values\r\nfor get and the iterators to use `Vec<u8>` instead of `Bytes`. After\r\ndiscussing with some Rust folks on Bluesky, I opted to stick with\r\n`Bytes` for return types. [Hyper](https://hyper.rs/) is an example of\r\nanother library that uses `Bytes in their public-facing API.\r\n\r\nInternally, I've kept everything as `Bytes` both to minimize the blast\r\nradius and also because `Bytes` are genuinely useful for managing bytes\r\nwithout expensive copies.\r\n\r\nTo review, I suggest reading this in commit order since I incrementally\r\nchanged APIs one at a time. I am also open to breaking this PR up if\r\nreviewers prefer, but it's pretty cookie cutter once you see what I'm\r\ndoing.\r\n\r\nFixes #449",
          "timestamp": "2025-01-25T00:15:06Z",
          "url": "https://github.com/slatedb/slatedb/commit/0340f2f162120781166aea87b0903d8660d92511"
        },
        "date": 1737880264806,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15946.517,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16223.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17129.084,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4284.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16260.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4087.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16048.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10691.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15532.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10326.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15942.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23908.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10059.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15073.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11096.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44403.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5752,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22973.301,
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
          "id": "0340f2f162120781166aea87b0903d8660d92511",
          "message": "Replace `&[u8]` with `AsRef<[u8]>` in public APIs (#450)\n\nThis PR updates user-facing put, get, delete, scan, batch, and iterator\r\nAPIs to use `AsRef<[u8]>` instead of `&[u8]` for key and value types.\r\nThe intent is to make the APIs more flexible for users that wish to\r\nsupply `Bytes`, `Vec<u8>`, and strings.\r\n\r\nI opted to keep the return types as `Bytes` since it allowed us to\r\nreturn data without copying it. Initially, I changed the return values\r\nfor get and the iterators to use `Vec<u8>` instead of `Bytes`. After\r\ndiscussing with some Rust folks on Bluesky, I opted to stick with\r\n`Bytes` for return types. [Hyper](https://hyper.rs/) is an example of\r\nanother library that uses `Bytes in their public-facing API.\r\n\r\nInternally, I've kept everything as `Bytes` both to minimize the blast\r\nradius and also because `Bytes` are genuinely useful for managing bytes\r\nwithout expensive copies.\r\n\r\nTo review, I suggest reading this in commit order since I incrementally\r\nchanged APIs one at a time. I am also open to breaking this PR up if\r\nreviewers prefer, but it's pretty cookie cutter once you see what I'm\r\ndoing.\r\n\r\nFixes #449",
          "timestamp": "2025-01-25T00:15:06Z",
          "url": "https://github.com/slatedb/slatedb/commit/0340f2f162120781166aea87b0903d8660d92511"
        },
        "date": 1737966924870,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17146.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15270.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15169.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3793.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15950.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4004.567,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15974.167,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10627.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14328.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9544.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16317.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24495.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9930.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14876.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11052.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44247.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5818.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23277.859,
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
          "id": "a8d06e944807c9f709c5190356a1bb25314382bd",
          "message": "Factor out path resolver (#461)\n\nPull logic for building and parsing paths into a separate\r\n`PathResolver`. This is more convenient in contexts where we may not\r\nneed a tablestore.",
          "timestamp": "2025-01-27T23:00:29Z",
          "url": "https://github.com/slatedb/slatedb/commit/a8d06e944807c9f709c5190356a1bb25314382bd"
        },
        "date": 1738053230123,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16988.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15570.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15655.616,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3908.933,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17515.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4358.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15507.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10333.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15080.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10016.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16109.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24179.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10006.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14997.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11125.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44432.102,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5754.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23030.6,
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
          "id": "ccc0534aa51c31c614cd95779b2c3f01a5bbc191",
          "message": "restructure exports to top level of crate (#463)\n\nThis patch makes a couple of changes to the way public names are\r\nexported:\r\n- It exports many of the public names at the top level of the crate\r\n(e.g. lib.rs) to avoid leaking the internal module structure. I retained\r\na few public modules for cases where I think it makes sense to expose\r\nthe contained names within a module because the components should be\r\ngrouped (e.g. configs, metrics, pluggable stuff like the dbcache)\r\n- It adds non_exhaustive to all enums to force any users matching on the\r\nenums to include wildcards in case new variants are added.\r\n- Adds non_exhaustive to all pub structs with all pub fields that are\r\nconstructed by calling into a fn exported by slatedb to prevent users\r\nfrom constructing these directly. In the case that the struct contains a\r\nprivate or pub(crate) field we don't add non_exhaustive as these cannot\r\nbe created by users anyway. In cases where the struct implements Default\r\nwe don't add non_exhaustive to retain the ability to construct the type\r\nusing the functional update syntax with the result of `default` as this\r\nis a better way to ensure compatibility than adding new constructor fns\r\nwhenever we add fields.",
          "timestamp": "2025-01-28T23:58:35Z",
          "url": "https://github.com/slatedb/slatedb/commit/ccc0534aa51c31c614cd95779b2c3f01a5bbc191"
        },
        "date": 1738139630244,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17260.166,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15716.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15868.684,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3962.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16910.133,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4231.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15008.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9978.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14127.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9442.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15669.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23465.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10201.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15338.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11198.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44763.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5913.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23654.68,
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
          "id": "f23065efd2fda374fb1f81835bd4189f673a01f7",
          "message": "Fix doc tests broken by pub use changes (#468)\n\nSome of the doc examples were broken in\r\nhttps://github.com/slatedb/slatedb/pull/463. This patch fixes them.",
          "timestamp": "2025-01-30T01:10:52Z",
          "url": "https://github.com/slatedb/slatedb/commit/f23065efd2fda374fb1f81835bd4189f673a01f7"
        },
        "date": 1738225978982,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16873.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15122.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17233.334,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4306.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15326.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3836,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18278.619,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12132.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14204.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9441.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16016.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24038.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9980.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14944.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10963.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43731.738,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5750.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22987.42,
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
          "id": "0773c2d3737d1a271820050e6f1d3c38207fe12f",
          "message": "Doc test all features (#469)\n\nSuggested\r\n[here](https://github.com/slatedb/slatedb/pull/468#discussion_r1934917621).\r\nIt is useful to enable `--all-features` when running doctests.",
          "timestamp": "2025-01-30T17:57:49Z",
          "url": "https://github.com/slatedb/slatedb/commit/0773c2d3737d1a271820050e6f1d3c38207fe12f"
        },
        "date": 1738312394561,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16014.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15386.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16681.018,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4165.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15857.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3970.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15247.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10166.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14215.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9470.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15440.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23177.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9969.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14976.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11130.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44573.621,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5887.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23495.9,
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
          "id": "7e0913a6a4910e87ed37d03f35cbef9f5e89afe8",
          "message": "Initial clone implementation (#430)\n\nFixes https://github.com/slatedb/slatedb/issues/315. This patch contains\r\nthe logic to create and initialize clones as outlined in\r\n[RFC-0004](https://github.com/slatedb/slatedb/blob/main/rfcs/0004-checkpoints.md).",
          "timestamp": "2025-01-31T17:46:23Z",
          "url": "https://github.com/slatedb/slatedb/commit/7e0913a6a4910e87ed37d03f35cbef9f5e89afe8"
        },
        "date": 1738398667425,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16117.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15072.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15075.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3763.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16932.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4218.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17008.383,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11324.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14529.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9687.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16160.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24266.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9627.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14464.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11063.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44159.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5625.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22488.961,
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
          "id": "7e0913a6a4910e87ed37d03f35cbef9f5e89afe8",
          "message": "Initial clone implementation (#430)\n\nFixes https://github.com/slatedb/slatedb/issues/315. This patch contains\r\nthe logic to create and initialize clones as outlined in\r\n[RFC-0004](https://github.com/slatedb/slatedb/blob/main/rfcs/0004-checkpoints.md).",
          "timestamp": "2025-01-31T17:46:23Z",
          "url": "https://github.com/slatedb/slatedb/commit/7e0913a6a4910e87ed37d03f35cbef9f5e89afe8"
        },
        "date": 1738485095726,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17192.949,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17100.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15316.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3829.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17126.133,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4281.317,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18053.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12033.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14191.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9465.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15731.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23642.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9873.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14838.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10869.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43504.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5668.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22705.9,
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
          "id": "7e0913a6a4910e87ed37d03f35cbef9f5e89afe8",
          "message": "Initial clone implementation (#430)\n\nFixes https://github.com/slatedb/slatedb/issues/315. This patch contains\r\nthe logic to create and initialize clones as outlined in\r\n[RFC-0004](https://github.com/slatedb/slatedb/blob/main/rfcs/0004-checkpoints.md).",
          "timestamp": "2025-01-31T17:46:23Z",
          "url": "https://github.com/slatedb/slatedb/commit/7e0913a6a4910e87ed37d03f35cbef9f5e89afe8"
        },
        "date": 1738571679557,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15550.267,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15683.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17706.561,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4438.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17437.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4393.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16176.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10784.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13966.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9307.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15706.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23614.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9945.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14933.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10866.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43478.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5581.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22396.18,
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
          "id": "7e0913a6a4910e87ed37d03f35cbef9f5e89afe8",
          "message": "Initial clone implementation (#430)\n\nFixes https://github.com/slatedb/slatedb/issues/315. This patch contains\r\nthe logic to create and initialize clones as outlined in\r\n[RFC-0004](https://github.com/slatedb/slatedb/blob/main/rfcs/0004-checkpoints.md).",
          "timestamp": "2025-01-31T17:46:23Z",
          "url": "https://github.com/slatedb/slatedb/commit/7e0913a6a4910e87ed37d03f35cbef9f5e89afe8"
        },
        "date": 1738658048684,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16957.482,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16006.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15886.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3962.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15936.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3981.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17281.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11538.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14619.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9757.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15299.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22997.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10063.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15106.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10810.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43307.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5621.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22460.82,
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
          "id": "3c4d90a67930809335002eb83f8602bbad360ea4",
          "message": "Add clones to feature list",
          "timestamp": "2025-02-04T19:47:55Z",
          "url": "https://github.com/slatedb/slatedb/commit/3c4d90a67930809335002eb83f8602bbad360ea4"
        },
        "date": 1738744352367,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15540.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16886.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17124.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4289.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16114.05,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4030.317,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18032.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12052.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14928.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9937.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15960.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23924.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10174.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15234.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10987.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43896.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5655.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22723.08,
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
          "id": "3c4d90a67930809335002eb83f8602bbad360ea4",
          "message": "Add clones to feature list",
          "timestamp": "2025-02-04T19:47:55Z",
          "url": "https://github.com/slatedb/slatedb/commit/3c4d90a67930809335002eb83f8602bbad360ea4"
        },
        "date": 1738830862548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18151.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17371.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17127.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4273.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15960.267,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3987.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18048.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12031.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14297.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9561.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15736.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23615.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9946.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14885,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10636.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 42525.078,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5651.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22568.119,
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
          "id": "8ab569937448302b47d5be1c755398c2091a7886",
          "message": "Fix flatbuffer formatting. (#478)",
          "timestamp": "2025-02-07T02:47:50Z",
          "url": "https://github.com/slatedb/slatedb/commit/8ab569937448302b47d5be1c755398c2091a7886"
        },
        "date": 1738917256651,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15071,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17187.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15877.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3982.633,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15635.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3917.683,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18021.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11976.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14426.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9633.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15944.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23950.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9613.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14408.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10782.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43108.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5673.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22741.84,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739003562548,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15564.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17148.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17007.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4240.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15970.167,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3976.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18126.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12110.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13985.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9324.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16056.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24131.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9358.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14104.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10985.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43917.121,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5738.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22958.141,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739089909712,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17060.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15417.434,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17071.268,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4244.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16937.666,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4253.183,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16167.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10817.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14790.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9856.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16294.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24446.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9477.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14267.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10945.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43796.559,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5629.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22577.08,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739176519442,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15628.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17893.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 15545.116,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3862.167,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15806.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3957.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17519.768,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11698.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14457.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9651.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16069.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24084.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10021.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15083.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10956.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43817,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5642.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22558.699,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739262851384,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17169.232,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15321.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17119.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4280.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16647.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4148.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17361.916,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11615.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14403.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9634.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16140.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24245.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9941.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14907.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10879.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43557.879,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5666.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22695.381,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739349284716,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15606.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17235.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17015.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4282.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15397,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3844.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15628.983,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10420.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14483.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9651.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15673.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23552.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9994.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15013.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10889.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43492.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5675.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22768.32,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739435645358,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15029.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16812,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17871.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4478.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16040.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3999.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18147.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12128.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14785.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9863.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15995.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23982.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9771.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14664.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10879.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43575.602,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5563.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22254.84,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739522033370,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15218.116,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15382.366,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16981.449,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4240.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17235.584,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4313.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17175.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11434.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14146.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9448.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15593.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23436.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9560.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14335.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10908.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43607.141,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5580.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22325.18,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Almog Gavra",
            "username": "agavra",
            "email": "almog.gavra@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "836ef2e634dde70a63f605cb3fa616436b810425",
          "message": "add clock synchronization mechanism (#480)\n\nfixes #476 \n\nThis PR improves the user experience in situations where there might be\nclock skew between SlateDB instances on restart. Instead of failing,\nit'll sleep and try the delegate again - which helps in situations where\nthe clock progresses with time (which is the case with the default\nSystem Clock)",
          "timestamp": "2025-02-07T19:38:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/836ef2e634dde70a63f605cb3fa616436b810425"
        },
        "date": 1739608321470,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17013.018,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16904.416,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17693.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4439.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17397.084,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4380.933,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17051.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11372.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14059.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9389.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16023.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24029.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9684.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14509.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10947.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43771.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5669.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22678.5,
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
          "id": "7742fdd77d72f2b8f8e9a0b066038225ee82d4b5",
          "message": "Use `u64` for SST metadata offset to support big SSTs (#484)\n\nArrow's `ObjectStore` crate has changed their `Range` and `usize`\nlengths to `u64`. This will break SlateDB when we upgrade to the latest\nversion.\n\nWhile investigating what needs to change on our end, I noticed that we\nuse a `u32` for our metadata offset in SSTs. This offset is at the tail\nend of each SST file and describes where to seek to in order to get\nindex and filter data.\n\nUsing a `u32` for the metadata offset means we can't have an SST larger\nthan ~4GiB. After some discussion on Discord, we decided it's worth\nsupporting larger SSTs as well. To make this change, I've:\n\n- Changed the SST's current_len to be `u64`\n- Updated `read_info` to read 8 bytes for the metadata offset\n- Updated filter and index offsets to use `u64` throughout\n- Updated `ReadOnlyBlob` to use u64 for read range and length",
          "timestamp": "2025-02-15T18:30:16Z",
          "url": "https://github.com/slatedb/slatedb/commit/7742fdd77d72f2b8f8e9a0b066038225ee82d4b5"
        },
        "date": 1739694749024,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16858.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15105.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18631.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4663.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15933.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3997.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17724,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11849.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14341.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9560.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15814.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23716.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9656.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14456.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10862.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43367.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5752.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22933.76,
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
          "id": "89639250f98a4c36d66a3e3ffd6135ec01401769",
          "message": "support more dynamic creation/read of statistics (#482)\n\nThis patch aims to solve a few problems with the way we export stats:\r\n- Its very tedious to export statistics. For every new statistic you\r\nhave to write some new code to read the statistic value and export it to\r\nwhere you want to query/visualize your metrics.\r\n- Statistics are all statically configured at compile time. At the same\r\ntime, SlateDB has a few components that can be plugged in at runtime by\r\nimplementing some trait. A good example now is the block cache. I expect\r\nother similar examples will emerge, like the compaction policy. There's\r\nno great way to expose statistics from these components, other than to\r\nhave the user get to them by holding a reference to the component and\r\nquerying them directly.\r\n- All stats are dumped into a single giant stats struct. Though not a\r\nhuge problem, its not ideal for a couple reasons. First, it would be\r\nbetter for statistics not to be writable outside of some scope. For\r\nexample, the compactor shouldn't able to be able to touch os cache\r\nstatistics. It also makes the stats a bit harder to go through since\r\nthey need to be manually grouped.\r\n\r\nThis patch tries to solve these problems by doing the following:\r\n\r\nFirst, stats are exposed to the user via a new StatRegistry struct.\r\nStats can be added to the registry by name, looked up by name, and\r\nlisted. This way, users that want to exfiltrate all stats can simply\r\nlist the registry and send all observed stats. Components can register\r\ntheir own stats at runtime. To avoid collisions, we use a name prefixed\r\nby the name of the component writing the statistic followed by \"/\".\r\n\r\nSecond, each component maintains its stats separately, and adds them to\r\nthe registry. This provides some isolation between the stats of\r\ndifferent components.\r\n\r\nAt this point I'm looking for feedback on whether folks think the basic\r\nproblems and solution make sense. So it's probably premature to do a\r\ndetailed code review. If folks are on-board with the direction, I'll\r\nclean it up and take it out of draft mode.\r\n\r\nCo-authored-by: Chris Riccomini <criccomini@users.noreply.github.com>",
          "timestamp": "2025-02-16T22:25:42Z",
          "url": "https://github.com/slatedb/slatedb/commit/89639250f98a4c36d66a3e3ffd6135ec01401769"
        },
        "date": 1739781371718,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17872.619,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15855.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16679.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4164.183,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17889.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4464.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15915.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10627.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14011.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9347.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15664.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23549.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9953.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14887.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 11001.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 44056.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5613.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22481.84,
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
          "id": "36860d70a0416c29207d114621ef524390063f3b",
          "message": "fix: cleanup compaction job on failure (#486)\n\nThis patch makes a few changes to ensure we cleanup compaction jobs when\r\nthey fail:\r\n- We now track compaction jobs by a unique id rather than the\r\ndestination. Though this is not strictly required, it feels a bit safer\r\nas a way to correlate msgs from the executor with the compactor's state.\r\n- When a compaction fails, the executor's message includes both the id\r\nand the error.\r\n- The compactor orchestrator clears the compaction job from its state\r\nwhen a compaction fails.\r\n- Changes the executor to use a monitored background task for\r\ncompaction, and to send the orchestrator the result from the task's\r\ncleanup fn. This way we also report failures due to a compaction\r\npanic'ing. This also required changing the cleanup fn to take a Result\r\nrather than just an error, and updating the existing cleanup fns (e.g.\r\nfor flush, batch-write, etc) accordingly.\r\n\r\nFinally, to make this change easier to test this patch refactors the\r\nCompactorOrchestrator by splitting it into:\r\n- CompactorEventHandler has all the logic for handling events form the\r\norchestrator's event loop.\r\n- CompactorOrchestrator now just runs the event loop and delegates\r\nhandling to CompactorEventHandler. This makes it easier to test the\r\norchestrator's event handling because the test can generate a\r\ndeterministic sequence of events to handle.\r\n\r\nThe tests for the orchestrator have been refactored a bit to move all\r\nthe common setup into CompactorEventHandlerTestFixture.",
          "timestamp": "2025-02-18T06:27:55Z",
          "url": "https://github.com/slatedb/slatedb/commit/36860d70a0416c29207d114621ef524390063f3b"
        },
        "date": 1739867663911,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15746.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16846.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17071.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4269.317,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16389.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4111.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17717.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11793.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13967.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9341,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16132.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24216.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9475.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14215.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10850.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43451.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5728.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22914.439,
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
          "id": "07648f2b590d10ebc7cf76c87a36952920f4c3ec",
          "message": "fix: leave behind a checkpoint when writing manifest from compactor (#487)\n\nThis patch changes the compaction orchestrator to leave behind a\ntemporary (15-minute) checkpoint when it writes a new manifest after\nfinishing a compaction. This avoids a race condition like:\n1. compactor writes a new manifest that removes SST X\n2. gc deletes SST X because it was created a long time ago\n3. writer tries to read SST X because it hasn't refreshed its manifest\nyet\n\nStep 1 for fixing #204",
          "timestamp": "2025-02-19T05:35:37Z",
          "url": "https://github.com/slatedb/slatedb/commit/07648f2b590d10ebc7cf76c87a36952920f4c3ec"
        },
        "date": 1739954103763,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15743.366,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16085.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 14966.934,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3743.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17280,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4309.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16323.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10896.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14341,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9562.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15539.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23309.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9986.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14986.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10908.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43705.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5625.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22477.881,
            "unit": "ops/sec"
          }
        ]
      }
    ]
  }
}