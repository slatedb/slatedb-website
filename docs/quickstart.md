---
sidebar_position: 2
---

# Quickstart

SlateDB is a Rust library. It doesn't currently ship with any language bindings, so you must use Rust or generate your own bindings.

## Installation

Add the following to your `Cargo.toml` to use SlateDB:

```toml
[dependencies]
slatedb = "*"
```

## Usage

SlateDB uses [`tokio`](https://crates.io/crates/tokio) as its async runtime and [`object_store`](https://docs.rs/object_store/latest/object_store/) to interact with object storage. The code below shows a simple in-memory example.

```rust
use bytes::Bytes;
use object_store::{ObjectStore, memory::InMemory, path::Path};
use slatedb::db::Db;
use slatedb::config::DbOptions;
use std::sync::Arc;

#[tokio::main]
async fn main() {
    // Setup
    let object_store: Arc<dyn ObjectStore> = Arc::new(InMemory::new());
    let options = DbOptions::default();
    let kv_store = Db::open_with_opts(
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
    kv_store.close().await.unwrap();
}
```
