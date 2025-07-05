window.BENCHMARK_DATA = {
  "lastUpdate": 1751735529537,
  "repoUrl": "https://github.com/slatedb/slatedb",
  "entries": {
    "slatedb-bencher/benchmark-db.sh": [
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
          "id": "eef894391ec44a580e70964230ab9cf7d404b921",
          "message": "Add `LogicalClock` and `SystemClock` clocks (#601)\n\nThis PR does the following:\n\n- Creates `LogicalTime` and `SystemTime` types, which return i64 and\n`SystemTime`, respectively.\n- Creates a `DefaultSystemTime` that replaced `TokioClock`. This clock\ngives us normal SystemTimes by default, but allows us to pause the tokio\nruntime to take control of the clock for DST.\n- Creates a `DefaultLogicalTime` that simply uses `DefaultSystemTime`\ninside.\n- Replaces all usage of `Clock` with `LogicalClock`.\n- Adds `with_system_clock` and changes `with_clock` to\n`with_logical_clock`\n\nThis PR is a less ambitious version of @calavera's PR (#586). Unlike\n#586, this PR does not...\n\n1. Attempt to replace all usage of system time (SystemTime::now() and\ntokio time) with a SystemClock.\n2. Attempt to move MonotonicClock. Those two steps are left for future\nPRs.\n\nThese two steps will be left for a follow-on PR.",
          "timestamp": "2025-06-06T21:43:01Z",
          "url": "https://github.com/slatedb/slatedb/commit/eef894391ec44a580e70964230ab9cf7d404b921"
        },
        "date": 1749285327552,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18159.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18544.916,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17854.633,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4460.633,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18294.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4557.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17682.119,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11778.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12934.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8615.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14310.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21437.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8509.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12739.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9590.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38412.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5693.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22785.221,
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
          "id": "b2f063f3518168cf85630ec6bda6ab3884532bff",
          "message": "Use `SystemClock` instead of `std::time` (#603)\n\nThis PR updates SlateDB to use `SystemTime` instead of the typical `std`\nsystem clock. It's part of the work for #267.\n\nThe following changes usages of SystemTime have been updated:\n\n- Moved `MonotonicClock` into `clock.rs`\n- Made `clippy.toml` detect `std::time`, `uuid`, and `ulid` usage\n- checkpoint.rs uses SystemTime::now()\n- config.rs's SystemClock, which is used for TTL and checkpoint times.\n- CompactorEventHandler::finish_compaction uses SystemTime::now() for\nlogging last compaction timestamp in stats.\n- db_cache/mod.rs uses Instant::now() when setting last_err_log_instant\n- garbage_collector.rs uses Utc::now() in run_gc_task.\n- storage_fs.rs::background_evict uses SystemTime::now()\n\nI could not update the following two usages:\n\n1. In moka.rs if ttl or tti are set. (Note: it appears Foyer only\nsupports max capacity)\n2. CompactorOrchestrator uses a non-async crossbeam ticker, which uses\nstd::time::Interval.\n\nFor (1), Moka simply doesn't provide a way to inject our clock. There\nare interfaces for it, but they're all hidden behind `#[cfg(test)]` and\n`pub(crate)` stuff.\n\nFor (2), I will probably refactor `CompactorOrchestrator` to use an\nasync run loop in a separate PR.\n\nI'm not crazy about the changes I had to make to GarbageCollector; they\nfeel invasive. I believe it's more a symptom of the widespread use of\nassociated function rather than a problem with the SystemClock design.\n\nFollow on work:\n\n- Remove `TestClock` since we have control over `DefaultSystemClock`\nwith `tokio`\n- Make `CompactorOrchestrator::run` async so we can use tokio's ticker\n(and thus, its Instant)\n- Investigate standardizing how we inject determinism.\n\nRegarding that last point, I have managed to introduce two (and soon to\nbe three) different ways to inject determinism:\n\n- `rand` uses static functions and variables\n- `SystemClock`/`LogicalClock` use dependency injection\n- `sos-vfs::fs` uses macros to swap `tokio::fs` out at compile time (I\nhaven't submitted a PR for this yet)\n\nIt's annoying me that we have three different styles. I'm not 100% sure\nif it's bad or not; I need to think about it. I wonder if we should use\nstatic functions/variables for the clock stuff as well\n(crate::clock::sys::now() and crate::clock::logical::now()). It seems\nlike it'd add more complexity (global onecell vs. dependency injection)\nfor pretty minimal payoff. It also gives us less fine-grained control.\nPerhaps we should go the other way, and pass Rng's using dependency\ninjection? Or just leave things as-is? WDYT? (I should note: I'm not\nenthusiastic about exposing `Rng` through our API. That library breaks\ncompatibility in frustrating ways and it's already caused a lot of\nproblems with proptest/uuid/ulid compatibility)",
          "timestamp": "2025-06-08T03:35:15Z",
          "url": "https://github.com/slatedb/slatedb/commit/b2f063f3518168cf85630ec6bda6ab3884532bff"
        },
        "date": 1749371727340,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19102.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19987.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19878.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4972.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19587.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4893.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17278.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11485.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14571.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9689.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13880.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20791.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8982.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13486.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9739.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38970.898,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5482.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21873.779,
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
          "id": "b2f063f3518168cf85630ec6bda6ab3884532bff",
          "message": "Use `SystemClock` instead of `std::time` (#603)\n\nThis PR updates SlateDB to use `SystemTime` instead of the typical `std`\nsystem clock. It's part of the work for #267.\n\nThe following changes usages of SystemTime have been updated:\n\n- Moved `MonotonicClock` into `clock.rs`\n- Made `clippy.toml` detect `std::time`, `uuid`, and `ulid` usage\n- checkpoint.rs uses SystemTime::now()\n- config.rs's SystemClock, which is used for TTL and checkpoint times.\n- CompactorEventHandler::finish_compaction uses SystemTime::now() for\nlogging last compaction timestamp in stats.\n- db_cache/mod.rs uses Instant::now() when setting last_err_log_instant\n- garbage_collector.rs uses Utc::now() in run_gc_task.\n- storage_fs.rs::background_evict uses SystemTime::now()\n\nI could not update the following two usages:\n\n1. In moka.rs if ttl or tti are set. (Note: it appears Foyer only\nsupports max capacity)\n2. CompactorOrchestrator uses a non-async crossbeam ticker, which uses\nstd::time::Interval.\n\nFor (1), Moka simply doesn't provide a way to inject our clock. There\nare interfaces for it, but they're all hidden behind `#[cfg(test)]` and\n`pub(crate)` stuff.\n\nFor (2), I will probably refactor `CompactorOrchestrator` to use an\nasync run loop in a separate PR.\n\nI'm not crazy about the changes I had to make to GarbageCollector; they\nfeel invasive. I believe it's more a symptom of the widespread use of\nassociated function rather than a problem with the SystemClock design.\n\nFollow on work:\n\n- Remove `TestClock` since we have control over `DefaultSystemClock`\nwith `tokio`\n- Make `CompactorOrchestrator::run` async so we can use tokio's ticker\n(and thus, its Instant)\n- Investigate standardizing how we inject determinism.\n\nRegarding that last point, I have managed to introduce two (and soon to\nbe three) different ways to inject determinism:\n\n- `rand` uses static functions and variables\n- `SystemClock`/`LogicalClock` use dependency injection\n- `sos-vfs::fs` uses macros to swap `tokio::fs` out at compile time (I\nhaven't submitted a PR for this yet)\n\nIt's annoying me that we have three different styles. I'm not 100% sure\nif it's bad or not; I need to think about it. I wonder if we should use\nstatic functions/variables for the clock stuff as well\n(crate::clock::sys::now() and crate::clock::logical::now()). It seems\nlike it'd add more complexity (global onecell vs. dependency injection)\nfor pretty minimal payoff. It also gives us less fine-grained control.\nPerhaps we should go the other way, and pass Rng's using dependency\ninjection? Or just leave things as-is? WDYT? (I should note: I'm not\nenthusiastic about exposing `Rng` through our API. That library breaks\ncompatibility in frustrating ways and it's already caused a lot of\nproblems with proptest/uuid/ulid compatibility)",
          "timestamp": "2025-06-08T03:35:15Z",
          "url": "https://github.com/slatedb/slatedb/commit/b2f063f3518168cf85630ec6bda6ab3884532bff"
        },
        "date": 1749458446149,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18995.666,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18927.768,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19382.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4854.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20268.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5059.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17212.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11479.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14300.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9517.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14564.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21863.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8929.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13451,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10069.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 40268.898,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5849.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23324.381,
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
          "id": "b2f063f3518168cf85630ec6bda6ab3884532bff",
          "message": "Use `SystemClock` instead of `std::time` (#603)\n\nThis PR updates SlateDB to use `SystemTime` instead of the typical `std`\nsystem clock. It's part of the work for #267.\n\nThe following changes usages of SystemTime have been updated:\n\n- Moved `MonotonicClock` into `clock.rs`\n- Made `clippy.toml` detect `std::time`, `uuid`, and `ulid` usage\n- checkpoint.rs uses SystemTime::now()\n- config.rs's SystemClock, which is used for TTL and checkpoint times.\n- CompactorEventHandler::finish_compaction uses SystemTime::now() for\nlogging last compaction timestamp in stats.\n- db_cache/mod.rs uses Instant::now() when setting last_err_log_instant\n- garbage_collector.rs uses Utc::now() in run_gc_task.\n- storage_fs.rs::background_evict uses SystemTime::now()\n\nI could not update the following two usages:\n\n1. In moka.rs if ttl or tti are set. (Note: it appears Foyer only\nsupports max capacity)\n2. CompactorOrchestrator uses a non-async crossbeam ticker, which uses\nstd::time::Interval.\n\nFor (1), Moka simply doesn't provide a way to inject our clock. There\nare interfaces for it, but they're all hidden behind `#[cfg(test)]` and\n`pub(crate)` stuff.\n\nFor (2), I will probably refactor `CompactorOrchestrator` to use an\nasync run loop in a separate PR.\n\nI'm not crazy about the changes I had to make to GarbageCollector; they\nfeel invasive. I believe it's more a symptom of the widespread use of\nassociated function rather than a problem with the SystemClock design.\n\nFollow on work:\n\n- Remove `TestClock` since we have control over `DefaultSystemClock`\nwith `tokio`\n- Make `CompactorOrchestrator::run` async so we can use tokio's ticker\n(and thus, its Instant)\n- Investigate standardizing how we inject determinism.\n\nRegarding that last point, I have managed to introduce two (and soon to\nbe three) different ways to inject determinism:\n\n- `rand` uses static functions and variables\n- `SystemClock`/`LogicalClock` use dependency injection\n- `sos-vfs::fs` uses macros to swap `tokio::fs` out at compile time (I\nhaven't submitted a PR for this yet)\n\nIt's annoying me that we have three different styles. I'm not 100% sure\nif it's bad or not; I need to think about it. I wonder if we should use\nstatic functions/variables for the clock stuff as well\n(crate::clock::sys::now() and crate::clock::logical::now()). It seems\nlike it'd add more complexity (global onecell vs. dependency injection)\nfor pretty minimal payoff. It also gives us less fine-grained control.\nPerhaps we should go the other way, and pass Rng's using dependency\ninjection? Or just leave things as-is? WDYT? (I should note: I'm not\nenthusiastic about exposing `Rng` through our API. That library breaks\ncompatibility in frustrating ways and it's already caused a lot of\nproblems with proptest/uuid/ulid compatibility)",
          "timestamp": "2025-06-08T03:35:15Z",
          "url": "https://github.com/slatedb/slatedb/commit/b2f063f3518168cf85630ec6bda6ab3884532bff"
        },
        "date": 1749544791679,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18691.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18857.982,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19860.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4951.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19476.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4874.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17606.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11744.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14612.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9740,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14030.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21033.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9030.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13503.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9997.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 40031.078,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5753.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23069.34,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "meox3259",
            "username": "meox3259",
            "email": "52877012+meox3259@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6febe556b918df584063ba9b7b16866cdbf6b9c8",
          "message": "Add binary search to SstIterator::seek (#545)\n\nApply binary search to SstIterator::seek instead of advancing on\nblock each time.\n\nFixes #394",
          "timestamp": "2025-06-10T23:58:01Z",
          "url": "https://github.com/slatedb/slatedb/commit/6febe556b918df584063ba9b7b16866cdbf6b9c8"
        },
        "date": 1749631163956,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18185.732,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20130.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18562.934,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4637.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19398,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4837.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18935.721,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12637.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13497.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9003.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14106.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21182.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8969.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13486.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9931.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39798.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5819.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23226.439,
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
          "id": "4b31053f86f6432314f31dd5f8e33e4d1fb093c7",
          "message": "Add `Admin` and `AdminBuilder` (#610)\n\nI found that our public facing static functions are a real pain to work\nwith while working on #606 and #609. I initially thought using a\n`DbContext` that held just normally static stuff (rng, clock, etc) would\nbe helpful. After working through it, I felt the right thing to do was\nget rid of `DbContext` and implement proper builders for user-facing\nstuff. That includes:\n\n- admin.rs\n- compactor.rs (and related compactor stuff)\n- garbage_collector.rs\n\nEach of these builders will allow us to do `_with_system_clock` and\n`_with_logical_clock` if/when needed. As we add an RNG and filesystem\nfor DST, they'll also have `_with_*` methods for the appropriate\nbuilders.\n\nInternally, we'll pass actual `impl SystemClock`, `impl LogicalClock`,\nand so on to the structs and functions that need them.\n\nThis PR currently:\n\n- implements `Admin` and`AdminBuilder` to show what the improved UX will\nbe.\n- moves `delete_objects_with_prefix` to the bencher `main.rs` file since\nit's only used there and has nothing to do with SlateDB.\n- updates main.rs files to use the new `Admin` client.\n- moves `refresh_checkpoint` and `delete_checkpoint` out of `Db`\n(`checkpoint.rs`) and into `Admin.",
          "timestamp": "2025-06-11T16:02:16Z",
          "url": "https://github.com/slatedb/slatedb/commit/4b31053f86f6432314f31dd5f8e33e4d1fb093c7"
        },
        "date": 1749717550422,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18826.449,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20212.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19169.232,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4780.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19879.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4977.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18876.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12620.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14417.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9613.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14151.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21186.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9617.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14404.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10300.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41273.719,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5263.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20965.18,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Emmanuel Ferdman",
            "username": "emmanuel-ferdman",
            "email": "emmanuelferdman@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "fb0a919b5a383a0e173c9eeffaeefe0b35d2c8f1",
          "message": "Update `benchmark-db.sh` location (#612)",
          "timestamp": "2025-06-12T15:07:08Z",
          "url": "https://github.com/slatedb/slatedb/commit/fb0a919b5a383a0e173c9eeffaeefe0b35d2c8f1"
        },
        "date": 1749803941894,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17882.232,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19800.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19344.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4845.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19296.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4787.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19010.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12676.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13862.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9263.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13660.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20525.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8969.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13476.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9567.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38214.578,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5634.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22563.52,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "pragmaticanon",
            "username": "pragmaticanon",
            "email": "138286440+pragmaticanon@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "d8ca824543aec5eb428d71326d0915decd531d22",
          "message": "Clean up SST file if writer is fenced (#608)\n\nClean up L0 SSTs if `mem_table_flush.rs` detects that it's been fenced during a\nmanifest update.",
          "timestamp": "2025-06-14T02:17:09Z",
          "url": "https://github.com/slatedb/slatedb/commit/d8ca824543aec5eb428d71326d0915decd531d22"
        },
        "date": 1749890111396,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17753.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17654.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18905.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4716.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17517.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4383.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17891.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11945.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14477.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9654.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14647.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21945.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8403.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12603.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9995.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39991.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5666.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22681.16,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nikhil Benesch",
            "username": "benesch",
            "email": "nikhil.benesch@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6523d6d06d775f7f12646c048df13814c4655545",
          "message": "Log async backtraces after test timeouts (#363)\n\nUse nextest's new `wrapper-script` feature to dump stack traces on all threads if the test times out.",
          "timestamp": "2025-06-15T00:21:20Z",
          "url": "https://github.com/slatedb/slatedb/commit/6523d6d06d775f7f12646c048df13814c4655545"
        },
        "date": 1749976542994,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19509.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20408.551,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20244.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5058.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19342.061,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4837.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19459.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12958.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12441.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8309.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14992.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22501.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9033.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13575.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10246.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41042.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5798.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23212.141,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Nikhil Benesch",
            "username": "benesch",
            "email": "nikhil.benesch@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "6523d6d06d775f7f12646c048df13814c4655545",
          "message": "Log async backtraces after test timeouts (#363)\n\nUse nextest's new `wrapper-script` feature to dump stack traces on all threads if the test times out.",
          "timestamp": "2025-06-15T00:21:20Z",
          "url": "https://github.com/slatedb/slatedb/commit/6523d6d06d775f7f12646c048df13814c4655545"
        },
        "date": 1750063242734,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17725.268,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18958.949,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18153.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4538.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18142.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4526.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18796.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12506.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13709.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9117.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15468,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23209.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8889.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13342.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9996.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39862.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6128.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 24466,
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
          "id": "3aa18c662ef696ca851fbc027313049d5d23f4a4",
          "message": "Add `GarbageCollectorBuilder` and make `GarbageCollector` non-static (#613)\n\nThis is the next follow-on after #610. In this PR, I introduce a\n`GarbageCollectorBuilder` and make the `GarbageCollector` non-static. I\nfeel it's much cleaner. It also lays the groundwork to be able to use\n`DbRand` to generate `Uuid`s and `Ulid`s. When I started doing that\nwork, I found that there were a ton of invasive changes in\nadmin/compaction/gc because of all these static methods passing params\naround.",
          "timestamp": "2025-06-16T18:12:39Z",
          "url": "https://github.com/slatedb/slatedb/commit/3aa18c662ef696ca851fbc027313049d5d23f4a4"
        },
        "date": 1750149580185,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18085.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18722.184,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18724.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4676.117,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19119.119,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4799.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19298.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12892.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12290.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8177.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13737.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20566.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9124.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13708.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9597.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38452.781,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5462.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21765.76,
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
          "id": "5aaa4c8e879f82b19251a0b473666e241433334c",
          "message": "disable the db compactor for the compactor state tests (#619)",
          "timestamp": "2025-06-17T22:14:21Z",
          "url": "https://github.com/slatedb/slatedb/commit/5aaa4c8e879f82b19251a0b473666e241433334c"
        },
        "date": 1750235969846,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17745.982,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19907.051,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18828.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4690.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17753.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4447,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19325.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12864.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13434.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8950.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14262.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21422.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9321.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13947.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9969.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39878.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4630.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18524.939,
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
          "id": "63b08992dd06b342b7b6589175c5c53d11d62951",
          "message": "Remove race conditions from `maybe_apply_backpressure` (#640)",
          "timestamp": "2025-06-25T06:13:01Z",
          "url": "https://github.com/slatedb/slatedb/commit/63b08992dd06b342b7b6589175c5c53d11d62951"
        },
        "date": 1750840849583,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17151.268,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18398.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17973.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4484.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17053.061,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4284.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 15712.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10508.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11256.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7498.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12437.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 18616.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 7995.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 11972.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8340.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 33309.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4387.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 17471.5,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Enwei Jiao",
            "username": "jiaoew1991",
            "email": "enwei.jiao@zilliz.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "9c89a8a141b9c291d1cdcb97c5338287c3139740",
          "message": "Add SlateDBReader and SlateDBAdmin classes to Python bindings (#642)",
          "timestamp": "2025-06-26T05:40:23Z",
          "url": "https://github.com/slatedb/slatedb/commit/9c89a8a141b9c291d1cdcb97c5338287c3139740"
        },
        "date": 1750927184793,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 14881.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16551.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17652.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4410.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15909.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3991.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 14396.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 9591.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11292.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7548.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13582.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20356.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8096.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12134.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8679,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 34614.238,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4526.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18061.859,
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
          "id": "3049d2aea6a512fd465ddd2e628728034aa02d6d",
          "message": "Disable cache for WAL replay iterator (#644)",
          "timestamp": "2025-06-27T04:45:32Z",
          "url": "https://github.com/slatedb/slatedb/commit/3049d2aea6a512fd465ddd2e628728034aa02d6d"
        },
        "date": 1751013555183,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17144.949,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18127.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16647.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4160.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16282.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4061.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16576.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11057.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11220.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7479.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13477.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20223.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8148.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12224.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9397.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37411.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4668.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18700.66,
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
          "id": "9b056efbc3264fc60988801432fe6244b56b2414",
          "message": "Fix sporadic failure (#649)\n\n#640 introduced a short-circuit into the maybe_apply_backpressure that\ncan cause the loop to run more than once. I've updated\n`test_apply_wal_memory_backpressure` to verify the backpressure is\napplied _at least_ once, not _exactly_ once since that no longer holds.",
          "timestamp": "2025-06-27T21:11:00Z",
          "url": "https://github.com/slatedb/slatedb/commit/9b056efbc3264fc60988801432fe6244b56b2414"
        },
        "date": 1751099754716,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17010.416,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16902.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17119.834,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4287.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16979.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4244.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16804.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11197.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11487.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7659.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13217.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19859.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8293.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12426.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9055.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36197.738,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4597.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18453.08,
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
          "id": "3e43aab870eff11ad62225c02acf599cbbff2c1a",
          "message": "test: let test_get_after_put to use explicit options instead of defaults (#652)\n\nrelated: #647\n\nthis pr uses explicit options on write options and read options, to test\nover the case about a `get()` should always get the committed data with\n`dirty: false`.\n\n(currently the `sync` field is not supported yet. all the writes' sync\nlevel are considered as memory, this should be added in a pr).",
          "timestamp": "2025-06-28T15:08:51Z",
          "url": "https://github.com/slatedb/slatedb/commit/3e43aab870eff11ad62225c02acf599cbbff2c1a"
        },
        "date": 1751186224338,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 16875.416,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16910.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16887.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4216.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16960,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4246.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17205.119,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11463.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11607.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7740.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13372.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20032.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8198.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12233.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9044.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36110.379,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4640.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18587.74,
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
          "id": "3e43aab870eff11ad62225c02acf599cbbff2c1a",
          "message": "test: let test_get_after_put to use explicit options instead of defaults (#652)\n\nrelated: #647\n\nthis pr uses explicit options on write options and read options, to test\nover the case about a `get()` should always get the committed data with\n`dirty: false`.\n\n(currently the `sync` field is not supported yet. all the writes' sync\nlevel are considered as memory, this should be added in a pr).",
          "timestamp": "2025-06-28T15:08:51Z",
          "url": "https://github.com/slatedb/slatedb/commit/3e43aab870eff11ad62225c02acf599cbbff2c1a"
        },
        "date": 1751272816118,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18227.949,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18398.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17664.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4409.117,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17771.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4438.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 16363.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 10908.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 11537.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 7657.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12980.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19491.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8252.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12382.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8801.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35113.078,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5115.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20464.221,
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
          "id": "3baffc5b3947190c1ab81cbca2e895e9b1dd28a7",
          "message": "fix: upgrade foyer to fix recovery (#654)",
          "timestamp": "2025-07-01T05:50:55Z",
          "url": "https://github.com/slatedb/slatedb/commit/3baffc5b3947190c1ab81cbca2e895e9b1dd28a7"
        },
        "date": 1751359205682,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18112.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17539.166,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17856,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4460.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17356.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4338.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18089.666,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12047.134,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14241.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9458.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15784.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23665.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10016.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14970.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 12267.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 49117.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5861.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23458.119,
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
          "id": "d6bdad4f6f424f2ba82fd1adb744cb29b948b3b5",
          "message": "Migrate to workspace dependencies (#662)",
          "timestamp": "2025-07-02T01:55:38Z",
          "url": "https://github.com/slatedb/slatedb/commit/d6bdad4f6f424f2ba82fd1adb744cb29b948b3b5"
        },
        "date": 1751445600195,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17551.732,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17460.334,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17529.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4362.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 17556.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4383.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17830.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11856.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14049.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9376.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 17100.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 25721.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10362.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 15562.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 12681.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 50782.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5971.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 23842.381,
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
          "id": "4438535ea516bf1e9d2b06f22a0de846a54e81be",
          "message": "Add more telemetry (#664)\n\nI had some difficulty debugging 0.7.0.\n\n- I found myself putting in a lot of `eprintln` statements when fixing\nunit tests\n- It was difficult to see what was happening in @Barre's processes\nbecause there wasn't enough logging\n\nI'm fixing this by:\n\n1. Adding spans\n2. Adding more debug/trace logging in a few spaces\n3. Defaulting all test output to include debug logs\n4. Add some docs to `stats.rs`",
          "timestamp": "2025-07-02T19:55:26Z",
          "url": "https://github.com/slatedb/slatedb/commit/4438535ea516bf1e9d2b06f22a0de846a54e81be"
        },
        "date": 1751531956299,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 15253.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17898.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17651.018,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4406.55,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 16145.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4029.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17030.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11381.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13009.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8694.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15171.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22737.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10958.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 16414.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 13374.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 53385.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6366.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 25508.6,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "51f750f2ae0676a75b573d96de1e22d84ed9ddd9",
          "message": "Try and juice the numbers",
          "timestamp": "2025-07-03T17:12:33Z",
          "url": "https://github.com/slatedb/slatedb/commit/51f750f2ae0676a75b573d96de1e22d84ed9ddd9"
        },
        "date": 1751563520965,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 64 Threads - Puts/s",
            "value": 6757.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 64 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 32 Threads - Puts/s",
            "value": 5158.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 32 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 64 Threads - Puts/s",
            "value": 6148.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 64 Threads - Gets/s",
            "value": 1541.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Puts/s",
            "value": 5796.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Gets/s",
            "value": 1437.067,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 64 Threads - Puts/s",
            "value": 6991.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 64 Threads - Gets/s",
            "value": 4673.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Puts/s",
            "value": 5584.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Gets/s",
            "value": 3734,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 64 Threads - Puts/s",
            "value": 6619.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 64 Threads - Gets/s",
            "value": 9948.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Puts/s",
            "value": 6933.817,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Gets/s",
            "value": 10404.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 64 Threads - Puts/s",
            "value": 3129.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 64 Threads - Gets/s",
            "value": 12504.517,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Puts/s",
            "value": 5046.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Gets/s",
            "value": 20116.26,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "80aa3e6d788ac2c147262987b7ac90dfd2eb5655",
          "message": "set endpoint",
          "timestamp": "2025-07-03T23:20:24Z",
          "url": "https://github.com/slatedb/slatedb/commit/80aa3e6d788ac2c147262987b7ac90dfd2eb5655"
        },
        "date": 1751585291134,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 128 Threads - Puts/s",
            "value": 6673.933,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 128 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 128 Threads - Puts/s",
            "value": 5705.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 128 Threads - Gets/s",
            "value": 1423.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 128 Threads - Puts/s",
            "value": 5905.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 128 Threads - Gets/s",
            "value": 3937.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 128 Threads - Puts/s",
            "value": 6614.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 128 Threads - Gets/s",
            "value": 9945.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 128 Threads - Puts/s",
            "value": 6042,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 128 Threads - Gets/s",
            "value": 24260.551,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "6859b68a1f5ac3b276f4866e6bb91f3e05874e89",
          "message": "Handle throttling",
          "timestamp": "2025-07-04T01:16:33Z",
          "url": "https://github.com/slatedb/slatedb/commit/6859b68a1f5ac3b276f4866e6bb91f3e05874e89"
        },
        "date": 1751592399403,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 128 Threads - Puts/s",
            "value": 2301.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 128 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 128 Threads - Puts/s",
            "value": 2563.417,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 128 Threads - Gets/s",
            "value": 641.467,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 128 Threads - Puts/s",
            "value": 2821.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 128 Threads - Gets/s",
            "value": 1863.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 128 Threads - Puts/s",
            "value": 2831.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 128 Threads - Gets/s",
            "value": 4221.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 128 Threads - Puts/s",
            "value": 2422.917,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 128 Threads - Gets/s",
            "value": 9668.866,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "ae07b2da8513a011564fbfacbaaa6ca2a859409e",
          "message": "Use a reasonable cache hit ratio for each run",
          "timestamp": "2025-07-04T01:56:59Z",
          "url": "https://github.com/slatedb/slatedb/commit/ae07b2da8513a011564fbfacbaaa6ca2a859409e"
        },
        "date": 1751595009455,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 4799.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 6840.383,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 2670.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 671.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 996.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 249.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 1528.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 1017.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 845.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 560.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 2401.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 3621.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 776.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 1164.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 708.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 2845.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 816.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 3305.3,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "c74069a87091d193cb0d486629dc1eae9266d8fb",
          "message": "Let's do 32 tasks and batch things up more with flush interval",
          "timestamp": "2025-07-04T03:59:42Z",
          "url": "https://github.com/slatedb/slatedb/commit/c74069a87091d193cb0d486629dc1eae9266d8fb"
        },
        "date": 1751602384750,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 32 Threads - Puts/s",
            "value": 6024.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 32 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 5079.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Puts/s",
            "value": 4690.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Gets/s",
            "value": 1182.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 937.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 233.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Puts/s",
            "value": 5412.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Gets/s",
            "value": 3616.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 817.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 540.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Puts/s",
            "value": 3608.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Gets/s",
            "value": 5406.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 640.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 964.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Puts/s",
            "value": 2176.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Gets/s",
            "value": 8689.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 735.017,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 2947.15,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "KaguraMilet",
            "username": "KaguraMilet",
            "email": "108008166+KaguraMilet@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "0468035c65ecb18c5e281cfd6926138902be18e3",
          "message": "feat(disk_cache): implement extensible cache admission framework (#648)\n\nThis is the first step towards a solution for #198, which implements a\nextensible cache admission framework. We introduced an `AdmissionPicker`\nto manage all admission policies.\n\nUsers can customize `AdmissionPolicy` or directly use the admission\npolicies we provide. Currently we have implemented an admission policy\nthat accepts all cache entries, so this will not affect the current disk\ncache write process.",
          "timestamp": "2025-07-03T14:32:55Z",
          "url": "https://github.com/slatedb/slatedb/commit/0468035c65ecb18c5e281cfd6926138902be18e3"
        },
        "date": 1751618324002,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17010.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 15276.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16006.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 3991.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 15719.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 3949.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17959.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11992.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15016.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10015.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 17350.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 25965.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 10961.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 16465.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 12834.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 51298.578,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6733.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 27012,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "3ad8811d6e464d6ab5df837eb55d90b88dbb244e",
          "message": "Back to 60s with 1s compactor checks",
          "timestamp": "2025-07-05T01:16:16Z",
          "url": "https://github.com/slatedb/slatedb/commit/3ad8811d6e464d6ab5df837eb55d90b88dbb244e"
        },
        "date": 1751679000441,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 32 Threads - Puts/s",
            "value": 4735.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 32 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 6698.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Puts/s",
            "value": 5948.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Gets/s",
            "value": 1479.117,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 1138.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 288.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Puts/s",
            "value": 6183.95,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Gets/s",
            "value": 4111.433,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 776.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 519.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Puts/s",
            "value": 4661.117,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Gets/s",
            "value": 6973.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 1234.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 1850.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Puts/s",
            "value": 2919.817,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Gets/s",
            "value": 11652.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 1207.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 4820.14,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "e70afe2b198b7592af1a76a23124afe5c99cb26a",
          "message": "Add basic tokio metrics",
          "timestamp": "2025-07-05T15:59:18Z",
          "url": "https://github.com/slatedb/slatedb/commit/e70afe2b198b7592af1a76a23124afe5c99cb26a"
        },
        "date": 1751731995854,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 32 Threads - Puts/s",
            "value": 4795.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 32 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 6294.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Puts/s",
            "value": 5383.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Gets/s",
            "value": 1350.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 908.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 228.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Puts/s",
            "value": 2501.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Gets/s",
            "value": 1674.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 708.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 468.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Puts/s",
            "value": 1695.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Gets/s",
            "value": 2562.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 760.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 1144.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Puts/s",
            "value": 1379.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Gets/s",
            "value": 5541.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 937.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 3739.76,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "committer": {
            "name": "Chris Riccomini",
            "username": "criccomini",
            "email": "criccomini@apache.org"
          },
          "id": "1293fa33ff13c0699a8353ddb96314128c40d84b",
          "message": "unused",
          "timestamp": "2025-07-05T17:01:46Z",
          "url": "https://github.com/slatedb/slatedb/commit/1293fa33ff13c0699a8353ddb96314128c40d84b"
        },
        "date": 1751735528767,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 32 Threads - Puts/s",
            "value": 4330.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 32 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 6764.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Puts/s",
            "value": 5272.833,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 32 Threads - Gets/s",
            "value": 1320.433,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 1406.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 355.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Puts/s",
            "value": 2723.083,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 32 Threads - Gets/s",
            "value": 1818.333,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 1420.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 949.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Puts/s",
            "value": 2043.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 32 Threads - Gets/s",
            "value": 3060.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 1399.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 2094.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Puts/s",
            "value": 1735.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 32 Threads - Gets/s",
            "value": 6943.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 1144.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 4536.567,
            "unit": "ops/sec"
          }
        ]
      }
    ]
  }
}