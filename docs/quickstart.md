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
        kv_store.get(key).await.unwrap(), Some(Bytes::from_static(value))
    );

    // Delete
    kv_store.delete(key).await;
    assert!(kv_store.get(key).await.unwrap().is_none());

    kv_store.put(b"test_key1", b"test_value1").await;
    kv_store.put(b"test_key2", b"test_value2").await;
    kv_store.put(b"test_key3", b"test_value3").await;
    kv_store.put(b"test_key4", b"test_value4").await;

    // Scan over unbound range
    let mut iter = kv_store.scan(..).await.unwrap();
    let mut count = 1;
    while let Ok(Some(item)) = iter.next().await {
        assert_eq!(
            item.key,
            Bytes::from(format!("test_key{count}").into_bytes())
        );
        assert_eq!(
            item.value,
            Bytes::from(format!("test_value{count}").into_bytes())
        );
        count += 1;
    }
    // Scan over bound range
    let start_key = Bytes::from_static(b"test_key1");
    let end_key = Bytes::from_static(b"test_key2");
    let mut iter = kv_store.scan(start_key..=end_key).await.unwrap();
    assert_eq!(
        iter.next().await.unwrap(),
        Some((b"test_key1" as &[u8], b"test_value1" as &[u8]).into())
    );
    assert_eq!(
        iter.next().await.unwrap(),
        Some((b"test_key2" as &[u8], b"test_value2" as &[u8]).into())
    );
    // Seek ahead to next key
    let mut iter = kv_store.scan(..).await.unwrap();
    let next_key = Bytes::from_static(b"test_key4");
    iter.seek(next_key).await;
    assert_eq!(
        iter.next().await.unwrap(),
        Some((b"test_key4" as &[u8], b"test_value4" as &[u8]).into())
    );
    assert_eq!(iter.next().await.unwrap(), None);

    // Close
    kv_store.close().await.unwrap();
}
```
