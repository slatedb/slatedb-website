window.BENCHMARK_DATA = {
  "lastUpdate": 1747384711297,
  "repoUrl": "https://github.com/slatedb/slatedb",
  "entries": {
    "src/bencher/benchmark-db.sh": [
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
        "date": 1744101424113,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19857.684,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20263.166,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20978.084,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5259.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21219.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5304.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19608.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13078.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14231.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9475.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15551.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23330.119,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9505.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14252.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9825.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39454.219,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5637.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22541.119,
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
          "id": "9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8",
          "message": "refactor(reader.rs): add a LevelGet struct that filter max_seq in get() and tests with expire_ts handling (#537)\n\n`get()` and `scan()` runs different code path. besides adding `max_seq`\nfor `scan()` in #536, it's also needed to have the `max_seq` filter in\n`get()`.\n\n(we can consider add some proptest that checks that `get()` should\nalways return the exactly the same result as `scan().next_entry()` in\nthe next change)\n\nthis pr still needs some test cases.\n\nthis pr is also related with #489.",
          "timestamp": "2025-04-09T03:06:48Z",
          "url": "https://github.com/slatedb/slatedb/commit/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8"
        },
        "date": 1744187891525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19863.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19884.367,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20442.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5113.033,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21336.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5332.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 20081.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13390.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14396.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9605.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15215.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22874.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9643.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14512.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9617.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38481.141,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5461.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21850.76,
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
          "id": "9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8",
          "message": "refactor(reader.rs): add a LevelGet struct that filter max_seq in get() and tests with expire_ts handling (#537)\n\n`get()` and `scan()` runs different code path. besides adding `max_seq`\nfor `scan()` in #536, it's also needed to have the `max_seq` filter in\n`get()`.\n\n(we can consider add some proptest that checks that `get()` should\nalways return the exactly the same result as `scan().next_entry()` in\nthe next change)\n\nthis pr still needs some test cases.\n\nthis pr is also related with #489.",
          "timestamp": "2025-04-09T03:06:48Z",
          "url": "https://github.com/slatedb/slatedb/commit/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8"
        },
        "date": 1744274195295,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18240.717,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19790.482,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19148.084,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4798,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21345.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5346.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19939.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13296.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14540.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9704.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14666.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21977.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9344.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14064.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9008.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36002,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5152.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20547.779,
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
          "id": "9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8",
          "message": "refactor(reader.rs): add a LevelGet struct that filter max_seq in get() and tests with expire_ts handling (#537)\n\n`get()` and `scan()` runs different code path. besides adding `max_seq`\nfor `scan()` in #536, it's also needed to have the `max_seq` filter in\n`get()`.\n\n(we can consider add some proptest that checks that `get()` should\nalways return the exactly the same result as `scan().next_entry()` in\nthe next change)\n\nthis pr still needs some test cases.\n\nthis pr is also related with #489.",
          "timestamp": "2025-04-09T03:06:48Z",
          "url": "https://github.com/slatedb/slatedb/commit/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8"
        },
        "date": 1744360614647,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18417.982,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20111.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19655.666,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4896.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21052.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5272.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17536.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11667.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14217.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9485.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14181.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21261.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9241.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13878.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9872.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39513.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5454.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21740.34,
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
          "id": "9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8",
          "message": "refactor(reader.rs): add a LevelGet struct that filter max_seq in get() and tests with expire_ts handling (#537)\n\n`get()` and `scan()` runs different code path. besides adding `max_seq`\nfor `scan()` in #536, it's also needed to have the `max_seq` filter in\n`get()`.\n\n(we can consider add some proptest that checks that `get()` should\nalways return the exactly the same result as `scan().next_entry()` in\nthe next change)\n\nthis pr still needs some test cases.\n\nthis pr is also related with #489.",
          "timestamp": "2025-04-09T03:06:48Z",
          "url": "https://github.com/slatedb/slatedb/commit/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8"
        },
        "date": 1744446784479,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 20418.166,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20289.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20897.834,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5218.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 22613.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5650.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19759.619,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13195.14,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14256.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9523.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14826.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22229.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9224.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13849.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9526.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38155.621,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5466.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21884.26,
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
          "id": "9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8",
          "message": "refactor(reader.rs): add a LevelGet struct that filter max_seq in get() and tests with expire_ts handling (#537)\n\n`get()` and `scan()` runs different code path. besides adding `max_seq`\nfor `scan()` in #536, it's also needed to have the `max_seq` filter in\n`get()`.\n\n(we can consider add some proptest that checks that `get()` should\nalways return the exactly the same result as `scan().next_entry()` in\nthe next change)\n\nthis pr still needs some test cases.\n\nthis pr is also related with #489.",
          "timestamp": "2025-04-09T03:06:48Z",
          "url": "https://github.com/slatedb/slatedb/commit/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8"
        },
        "date": 1744533190051,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18311.15,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20266.018,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20395.834,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5103.283,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20460.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5102.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19165.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12808.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14675.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9755.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14683.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22055.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9705.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14588.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9550.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38147.641,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5511.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22035.68,
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
          "id": "bf6e714202f1c0dbf01113e2604e28ae29b08cb3",
          "message": "chore: fix clippy; add rust-toolchain.toml (#547)\n\nrecent PRs have failed on clippy several times, but I cannot reproduce\nthe clippy error locally without upgrading my local rust toolchain.\n\nit seems the github workflow may upgrade the rust toolchain randomly.\n\nthis PR adds a rust-toolchain.toml file to ensure the consistency\nbetween workflow and local, and fix the clippy errors.",
          "timestamp": "2025-04-14T06:43:31Z",
          "url": "https://github.com/slatedb/slatedb/commit/bf6e714202f1c0dbf01113e2604e28ae29b08cb3"
        },
        "date": 1744619904758,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19354.916,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18418.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18469.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4614.25,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21035.061,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5264.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18391.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12270.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15216.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10169.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13697.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20599.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9191.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13779.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9484,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38033.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5725.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22909.74,
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
          "id": "4c84d666d5a21e0ba59137367399ce23732b7047",
          "message": "delete VecDequeIterator (#543)\n\nRemoved the VecDequeIterator and replaced it with the ouroboros\nlibrary's self-referential struct to ensure lifetime safety",
          "timestamp": "2025-04-14T23:12:04Z",
          "url": "https://github.com/slatedb/slatedb/commit/4c84d666d5a21e0ba59137367399ce23732b7047"
        },
        "date": 1744706284934,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18429.551,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18624.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19180.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4799.767,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20916.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5222.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19211.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12798.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14007.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9337.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14980.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22490.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9294.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13927.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9203.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36845.961,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5184.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20728.779,
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
          "id": "ebfbc9a382652cef07934a9fed04d5c0af646803",
          "message": "refactor: let MergeIterator accepts Box<dyn KeyValueIterator>; merge SeekToKey into KeyValueIterator (#546)\n\ncurrently there's a limitation in `MergeIterator`: the children iterator\npassed to it has to be the same type.\n\nthis pr makes KeyValueIterator able to be used as a trait object, so we\ncan pass different implementations of `KeyValueIterator` into it.\n\nRust type system does not allow things like `Box<dyn KeyValueIterator +\nSeekToKey>`, so this pr has to merge the trait `SeekToKey` into\n`KeyValueIterator` together.",
          "timestamp": "2025-04-16T03:08:43Z",
          "url": "https://github.com/slatedb/slatedb/commit/ebfbc9a382652cef07934a9fed04d5c0af646803"
        },
        "date": 1744792708101,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18898.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19513.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20402.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5110.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20264.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5075.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 20361.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13591.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 15182.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 10141.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15173.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22735.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9714.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14599.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10372.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41559.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5681.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22752.699,
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
          "id": "ebfbc9a382652cef07934a9fed04d5c0af646803",
          "message": "refactor: let MergeIterator accepts Box<dyn KeyValueIterator>; merge SeekToKey into KeyValueIterator (#546)\n\ncurrently there's a limitation in `MergeIterator`: the children iterator\npassed to it has to be the same type.\n\nthis pr makes KeyValueIterator able to be used as a trait object, so we\ncan pass different implementations of `KeyValueIterator` into it.\n\nRust type system does not allow things like `Box<dyn KeyValueIterator +\nSeekToKey>`, so this pr has to merge the trait `SeekToKey` into\n`KeyValueIterator` together.",
          "timestamp": "2025-04-16T03:08:43Z",
          "url": "https://github.com/slatedb/slatedb/commit/ebfbc9a382652cef07934a9fed04d5c0af646803"
        },
        "date": 1744879051582,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18421.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 21101.35,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19472.633,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4848.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21635.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5423.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18481.684,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12332.634,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14652.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9769.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15661.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23499.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9943.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14949.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9918.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39785.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5649.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22651.359,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmoravek@confluent.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e3d27f7253f7cd02e3da1e484a3b5b875654721b",
          "message": "[hotfix] Avoid double-pinning of LevelGet getters. (#551)",
          "timestamp": "2025-04-17T14:53:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/e3d27f7253f7cd02e3da1e484a3b5b875654721b"
        },
        "date": 1744965337132,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18708.768,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18994.982,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18643.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4643.733,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21159.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5305.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18755.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12499.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13316.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8876.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14034.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21049.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9166.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13763.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8815.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 35260.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5063.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20304.6,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmoravek@confluent.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e3d27f7253f7cd02e3da1e484a3b5b875654721b",
          "message": "[hotfix] Avoid double-pinning of LevelGet getters. (#551)",
          "timestamp": "2025-04-17T14:53:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/e3d27f7253f7cd02e3da1e484a3b5b875654721b"
        },
        "date": 1745051606645,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 20673.768,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 21301.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19017.133,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4748.217,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21596.24,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5399.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 20022.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13342.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14166.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9418.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15461.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 23250.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9500.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14240.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9588.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38287.121,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5509.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21990.801,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmoravek@confluent.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e3d27f7253f7cd02e3da1e484a3b5b875654721b",
          "message": "[hotfix] Avoid double-pinning of LevelGet getters. (#551)",
          "timestamp": "2025-04-17T14:53:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/e3d27f7253f7cd02e3da1e484a3b5b875654721b"
        },
        "date": 1745137999985,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19293.316,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 21654.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 21029.617,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5248,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21074.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5259.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19986.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13323.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13841.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9211.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14587.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21932.141,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9291.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13865.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9302.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37174.762,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5383.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21549.74,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmoravek@confluent.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e3d27f7253f7cd02e3da1e484a3b5b875654721b",
          "message": "[hotfix] Avoid double-pinning of LevelGet getters. (#551)",
          "timestamp": "2025-04-17T14:53:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/e3d27f7253f7cd02e3da1e484a3b5b875654721b"
        },
        "date": 1745224675683,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17810.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20066.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20527.221,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5130.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21698.721,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5433.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19767.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13157.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14272.44,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9510.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15262.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22920.561,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9407,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14099.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9443.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37857.398,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5444.3,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21799.66,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "David Moravek",
            "username": "dmvk",
            "email": "dmoravek@confluent.io"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "e3d27f7253f7cd02e3da1e484a3b5b875654721b",
          "message": "[hotfix] Avoid double-pinning of LevelGet getters. (#551)",
          "timestamp": "2025-04-17T14:53:27Z",
          "url": "https://github.com/slatedb/slatedb/commit/e3d27f7253f7cd02e3da1e484a3b5b875654721b"
        },
        "date": 1745311054930,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 20172.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20852.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20982.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5261.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21513.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5374.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18879.779,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12579.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14597.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9732.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16049.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24038.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9516.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14259.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9519.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 38152.781,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5485.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21987.779,
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
          "id": "a313ae2b00a798dd090c51688fdb01c89e6eee41",
          "message": "refactor: remove MergeTwoIterator (#552)\n\nthis pr made the following refactors:\n\n- let `Box<KeyValueIterator + 'a>` implements the `KeyValueIterator`\ntrait\n- let `MergeIterator` accepts `impl IntoIterator<T>` instead of\n`VecDeque<T>`\n- replaces `MergeTwoIterator(it1, it2)` into `MergeIterator([it1, it2])`",
          "timestamp": "2025-04-23T02:18:29Z",
          "url": "https://github.com/slatedb/slatedb/commit/a313ae2b00a798dd090c51688fdb01c89e6eee41"
        },
        "date": 1745397481959,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18725.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20477.916,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 21354.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5355.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21053.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5264.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 20068.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13368.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14324.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9520.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14773.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22135.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9465.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14255.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9059.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 36225.238,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5036.86,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20142.779,
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
          "id": "a313ae2b00a798dd090c51688fdb01c89e6eee41",
          "message": "refactor: remove MergeTwoIterator (#552)\n\nthis pr made the following refactors:\n\n- let `Box<KeyValueIterator + 'a>` implements the `KeyValueIterator`\ntrait\n- let `MergeIterator` accepts `impl IntoIterator<T>` instead of\n`VecDeque<T>`\n- replaces `MergeTwoIterator(it1, it2)` into `MergeIterator([it1, it2])`",
          "timestamp": "2025-04-23T02:18:29Z",
          "url": "https://github.com/slatedb/slatedb/commit/a313ae2b00a798dd090c51688fdb01c89e6eee41"
        },
        "date": 1745483879931,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17299.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20415.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18200.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4539.583,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20462.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5121.1,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18341.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12203.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14455.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9626.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14997.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22511.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9394.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14031.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9277.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37108.559,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5227.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20868.199,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rodesai",
            "username": "rodesai",
            "email": "rodesai@users.noreply.github.com"
          },
          "committer": {
            "name": "rodesai",
            "username": "rodesai",
            "email": "rodesai@users.noreply.github.com"
          },
          "id": "42c138becec264c5f03fca922378c78df0bf7d0d",
          "message": "Bump version to 0.6.1",
          "timestamp": "2025-04-25T00:01:32Z",
          "url": "https://github.com/slatedb/slatedb/commit/42c138becec264c5f03fca922378c78df0bf7d0d"
        },
        "date": 1745570277331,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19901.268,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17986.816,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16795.166,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4202.683,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21345.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5336.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18849.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12543.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13552.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9008.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14517.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21799.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8708.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13080.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 8611.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 34469.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 4552.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 18220.859,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rodesai",
            "username": "rodesai",
            "email": "rodesai@users.noreply.github.com"
          },
          "committer": {
            "name": "rodesai",
            "username": "rodesai",
            "email": "rodesai@users.noreply.github.com"
          },
          "id": "42c138becec264c5f03fca922378c78df0bf7d0d",
          "message": "Bump version to 0.6.1",
          "timestamp": "2025-04-25T00:01:32Z",
          "url": "https://github.com/slatedb/slatedb/commit/42c138becec264c5f03fca922378c78df0bf7d0d"
        },
        "date": 1745656443525,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19691.416,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20616.066,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19963.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4981.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 21431.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5381.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19765.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 13175.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13644.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9075.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14637.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21924.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9175.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13775.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9917.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39739.781,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5405.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21584.221,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "rodesai",
            "username": "rodesai",
            "email": "rodesai@users.noreply.github.com"
          },
          "committer": {
            "name": "rodesai",
            "username": "rodesai",
            "email": "rodesai@users.noreply.github.com"
          },
          "id": "42c138becec264c5f03fca922378c78df0bf7d0d",
          "message": "Bump version to 0.6.1",
          "timestamp": "2025-04-25T00:01:32Z",
          "url": "https://github.com/slatedb/slatedb/commit/42c138becec264c5f03fca922378c78df0bf7d0d"
        },
        "date": 1745742847838,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19220.518,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19523.916,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17666.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4410.933,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19678.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4905.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18257.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12188.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14106.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9394.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 12970.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 19459.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8954.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13426.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9314.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 37377,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5080.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20288.1,
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
          "id": "8ece7d88817a2c99a972f1e21b1984bb72eda794",
          "message": "cache l0 SSTs on write (#528)\n\nThis patch changes the memtable flush path to write L0 sst data to the\ndb cache when a memtable is flushed. The idea is that this data was\nrecently written and so is more likely to be read than other data in the\ncache.\n\nThis change required a few supporting changes from\nEncodedSsTable(Builder):\n- Rather than storing a list of raw block bytes, the builder now stores\na list of EncodedSsTableBlock which contains the encoded + compressed\nbytes, the decoded block, and its offset so that it can be easily\ninserted into the cache.\n- The implementation of the builder is refactored a bit to support\nmaintianing this list. finish_block now calls to a new fn called\nprepare_block which constructs EncodedSsTableBlock, and finish_block is\nin charge of setting the builder state to reflect the completion of the\ncurrent block and start of the next block.\n- EncodedSsTable now has fns for writing all the bytes into a buffer,\nwhich the tests and tablestore use rather than re-implementing this\nlogic everywhere.",
          "timestamp": "2025-04-28T07:47:13Z",
          "url": "https://github.com/slatedb/slatedb/commit/8ece7d88817a2c99a972f1e21b1984bb72eda794"
        },
        "date": 1745831917813,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 19267.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20226.449,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20306.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5062.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20623.859,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5128.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18575.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12389.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14675.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9783.64,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14328.88,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21478.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 8670.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 12959.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10288.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41087.539,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5258.76,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 21026.84,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sush",
            "username": "sush-abc",
            "email": "12701881+sush-abc@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c5b3b3f23e853225870f6aaa4d7ea417ffd79253",
          "message": "[bug] db_options.flush_interval=None broken (#548)\n\n## the problem\nI noticed that setting `flush_interval` as `None` currently does not\nwork. If it's set as `None`, currently the flush task just stops:\n\nhttps://github.com/slatedb/slatedb/blob/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8/src/flush.rs#L101-L104\nHowever this task not only performs periodic flushes, it also handles\nmanual flush requests (which don't work in this case):\n\nhttps://github.com/slatedb/slatedb/blob/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8/src/flush.rs#L128-L129\n\n## fix\nWhen `flush_interval` is `None`, change the behavior to start the flush\ntask- just without the periodic ticking.\n\nCo-authored-by: sush-abc <sush-abc@users.noreply.github.com>",
          "timestamp": "2025-04-28T21:17:04Z",
          "url": "https://github.com/slatedb/slatedb/commit/c5b3b3f23e853225870f6aaa4d7ea417ffd79253"
        },
        "date": 1745915969871,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18602.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 17468.232,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17468.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4362.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19309.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4817.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18831.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12562.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14401.52,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9589.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 16437.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 24604.98,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9084.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13638.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10087.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 40473.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6203.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 24830.1,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Sush",
            "username": "sush-abc",
            "email": "12701881+sush-abc@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "c5b3b3f23e853225870f6aaa4d7ea417ffd79253",
          "message": "[bug] db_options.flush_interval=None broken (#548)\n\n## the problem\nI noticed that setting `flush_interval` as `None` currently does not\nwork. If it's set as `None`, currently the flush task just stops:\n\nhttps://github.com/slatedb/slatedb/blob/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8/src/flush.rs#L101-L104\nHowever this task not only performs periodic flushes, it also handles\nmanual flush requests (which don't work in this case):\n\nhttps://github.com/slatedb/slatedb/blob/9e4a80b37fd91cd29b7a485712ea3cb2ba7388f8/src/flush.rs#L128-L129\n\n## fix\nWhen `flush_interval` is `None`, change the behavior to start the flush\ntask- just without the periodic ticking.\n\nCo-authored-by: sush-abc <sush-abc@users.noreply.github.com>",
          "timestamp": "2025-04-28T21:17:04Z",
          "url": "https://github.com/slatedb/slatedb/commit/c5b3b3f23e853225870f6aaa4d7ea417ffd79253"
        },
        "date": 1746002285661,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18367.084,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19025.566,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19844.449,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4944.667,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18748.939,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4680.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17685.199,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11804.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14171.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9454.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 15303.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22968.961,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9061.06,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13569.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9799.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39203.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5728.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22883.779,
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
          "id": "0d70c89b4d34e5bb27972d3f25e7ad1b7e66de7a",
          "message": "fix(compaction): filter tombstones out when compacting into the last sorted run (#307)\n\nThis PR will close #285\n\nUnfortunately I didn't come up with a good way to add unit tests,\nbecause tombstones behave the same when accessed via the `Get` operation\nregardless of whether they're physically removed or not.\n\nI followed @rodesai suggestion of letting the orchestrator decide\nwhether the dest sorted run is the last sorted run or not.\n\n---------\n\nCo-authored-by: Almog Gavra <almog.gavra@gmail.com>",
          "timestamp": "2025-04-30T15:27:02Z",
          "url": "https://github.com/slatedb/slatedb/commit/0d70c89b4d34e5bb27972d3f25e7ad1b7e66de7a"
        },
        "date": 1746088646027,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18735.967,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19777.85,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17890.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4450.78,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19261.381,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4808.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17756.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11811.616,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12857.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8574.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14363.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21540.461,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9224.74,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13857.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10802.2,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43250.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6839.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 27344.539,
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
          "id": "354722b223ff98d510935412ab1fc79c8717097a",
          "message": "refactor(snapshot): add max_seq in scan (#536)\n\nThis PR adds a `max_seq` in the `DbIterator` which allows us having a\nconsistent snapshot view in a scan.\n\nThis PR is factored out from #519, and it's also useful for issue #489.\n\n---------\n\nCo-authored-by: Chris Riccomini <criccomini@users.noreply.github.com>",
          "timestamp": "2025-05-02T07:46:54Z",
          "url": "https://github.com/slatedb/slatedb/commit/354722b223ff98d510935412ab1fc79c8717097a"
        },
        "date": 1746175038419,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 17244.133,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 16647.584,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 16453.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4112.75,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18041.881,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4524.84,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17289.699,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11518.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 12719.36,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8474.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 13585.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 20359.721,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9840.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 14744.82,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10278.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 41094.5,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 6190.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 24815.32,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "0x29a",
            "username": "ben1009",
            "email": "liuhe1009@gmail.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "378060a2d26acb2f2e829ff498b520be0cf6de04",
          "message": "chore: housekeeping (#557)\n\n- fix typos\n- add concurrency check in ci\n- use `cargo nextest` instead in Contributing.md",
          "timestamp": "2025-05-02T16:05:26Z",
          "url": "https://github.com/slatedb/slatedb/commit/378060a2d26acb2f2e829ff498b520be0cf6de04"
        },
        "date": 1746261259705,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18752.482,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19883.334,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 20282.934,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 5074.867,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 19265.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4816.92,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 18380.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12230,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13951.66,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9329.94,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14882.34,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22355.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9202.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13818.08,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10803.22,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 43129.121,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5232.9,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20904.48,
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
          "id": "5986541a2f9abbbced57f9d55fe5bf58bccc90e4",
          "message": "chore: add comment about last_wal_id and wal_id_last_compacted (#565)\n\nthis PR adds brief descriptions for two fields related to WAL replays\nduring the recovery phase.",
          "timestamp": "2025-05-04T08:20:43Z",
          "url": "https://github.com/slatedb/slatedb/commit/5986541a2f9abbbced57f9d55fe5bf58bccc90e4"
        },
        "date": 1746347665279,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18781.783,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 20053.084,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 19491.301,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4872.233,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 20547.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 5140.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19335.02,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12905.96,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14835.18,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9902.12,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14760.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 22188.801,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9240.54,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13855.26,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9959.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39825.422,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5675.28,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22666.92,
            "unit": "ops/sec"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "Cancai Cai",
            "username": "caicancai",
            "email": "77189278+caicancai@users.noreply.github.com"
          },
          "committer": {
            "name": "GitHub",
            "username": "web-flow",
            "email": "noreply@github.com"
          },
          "id": "af73fbb17e10f0fe38bb0544bfe7c8fd947abf25",
          "message": "chore: Add memtable track last_seq test (#568)\n\n1. Add meetable track last_seq test\n2. Delete duplicate test examples\n\nSigned-off-by: cancaicai <2356672992@qq.com>",
          "timestamp": "2025-05-05T02:19:07Z",
          "url": "https://github.com/slatedb/slatedb/commit/af73fbb17e10f0fe38bb0544bfe7c8fd947abf25"
        },
        "date": 1746434364747,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18783.533,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 19822.949,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 18514.883,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4634.65,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18254.141,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4564.56,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 19094.32,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 12711.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 14778.16,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 9885.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14471.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21716.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9079.48,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13597.58,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 10244.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 40998.219,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5590.7,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 22366.26,
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
          "id": "f48d752255b3882209529d3652cd8d431931d9bb",
          "message": "Make shutdown manifest conflict logs less scary (#572)\n\nThe shutdown messages for the memtable flusher are a little scary. I've\nupdated them to be a WARN and imply that the manifest update is\nretrying.\n\nFixes #566",
          "timestamp": "2025-05-06T03:10:08Z",
          "url": "https://github.com/slatedb/slatedb/commit/f48d752255b3882209529d3652cd8d431931d9bb"
        },
        "date": 1746520698578,
        "tool": "customBiggerIsBetter",
        "benches": [
          {
            "name": "SlateDB 100% Puts 4 Threads - Puts/s",
            "value": 18748.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 4 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Puts/s",
            "value": 18109.039,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 100% Puts 1 Threads - Gets/s",
            "value": 0,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Puts/s",
            "value": 17589.359,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 4 Threads - Gets/s",
            "value": 4379.38,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Puts/s",
            "value": 18371.42,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 80% Puts 1 Threads - Gets/s",
            "value": 4584.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Puts/s",
            "value": 17553.279,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 4 Threads - Gets/s",
            "value": 11682.68,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Puts/s",
            "value": 13093.04,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 60% Puts 1 Threads - Gets/s",
            "value": 8747.62,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Puts/s",
            "value": 14137.46,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 4 Threads - Gets/s",
            "value": 21208.439,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Puts/s",
            "value": 9090.6,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 40% Puts 1 Threads - Gets/s",
            "value": 13585.72,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Puts/s",
            "value": 9822.8,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 4 Threads - Gets/s",
            "value": 39341.219,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Puts/s",
            "value": 5137.4,
            "unit": "ops/sec"
          },
          {
            "name": "SlateDB 20% Puts 1 Threads - Gets/s",
            "value": 20616.779,
            "unit": "ops/sec"
          }
        ]
      }
    ],
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
      }
    ]
  }
}