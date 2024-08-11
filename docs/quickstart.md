---
sidebar_position: 2
---

# Quickstart

SlateDB is a Rust library. It doesn't currently ship with any language bindings, so you must use Rust or generate your own bindings.

## Installatiion

SlateDB is not published to crates.io yet. Sdd the following to your `Cargo.toml`:

```toml
[dependencies]
slatedb = { git = "https://github.com/slatedb/slatedb.git" }
```

## Usage

SlateDB uses [`tokio`](https://crates.io/crates/tokio) as its async runtime and [`object_store`](https://docs.rs/object_store/latest/object_store/) to interact with object storage. The code below shows a simple in-memory example.

```rust
use bytes::Bytes;
use object_store::{ObjectStore, memory::InMemory, path::Path};
use slatedb::db:{Db, DbOptions};
use slatedb::compactor::CompactorOptions;
use std::{sync::Arc, time::Duration};

#[tokio::main]
fn main() {
    // Setup
    let object_store: Arc<dyn ObjectStore> = Arc::new(InMemory::new());
    let options = DbOptions {
        flush_ms: 100,
        manifest_poll_interval: Duration::from_millis(100),
        min_filter_keys: 10,
        l0_sst_size_bytes: 128,
        CompactorOptions::default(),
    };
    let kv_store = Db::open(
        Path::from("/tmp/test_kv_store"),
        options,
        object_store,
    )
    .await
    .unwrap();

    // Put
    let key = b"test_key";
    let value = b"test_value";
    kv_store.put(key, value).await;

    // Get
    assert_eq!(
        kv_store.get(key).await.unwrap(),
        Some(Bytes::from_static(value))
    );

    // Delete
    kv_store.delete(key).await;
    assert!(kv_store.get(key).await.unwrap().is_none());

    // Close
    assert!(kv_store.close().await.unwrap().is_none());
}
```
