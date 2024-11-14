---
title: Tracing in SlateDB
---

# Tracing in SlateDB

SlateDB uses the [`tracing`](https://github.com/tokio-rs/tracing) library for logging and diagnostics. This provides structured, contextual logging that helps debug and monitor your database operations.

## Getting Started

To enable tracing in your SlateDB application, you'll need to add the following dependencies to your `Cargo.toml`:

```toml
[dependencies]
env_logger = "*"
slatedb = "*"
```

## Basic Setup

Here's a basic example showing how to consume tracing logs with `env_logger` and SlateDB:

```rust
uuse bytes::Bytes;
use slatedb::config::DbOptions;
use slatedb::db::Db;
use slatedb::fail_parallel::FailPointRegistry;
use slatedb::object_store::{memory::InMemory, ObjectStore};
use std::sync::Arc;
use log::{debug, error, log_enabled, warn, info, Level, trace};


#[tokio::main]
async fn main() {

    // enable env logger
    env_logger::init();

    // test trace log
    if log_enabled!(Level::Trace) {
        let x = 3 * 4; // expensive computation
        trace!("the answer was: {}", x);
    }

    // test logs levels
    debug!("this is a debug {}", "message");
    error!("this is printed by default");
    info!("this is printed by default");
    warn!("this is printed by default");
    log_enabled!(Level::Info);

    // Setup
    let object_store: Arc<dyn ObjectStore> = Arc::new(InMemory::new());
    let options = DbOptions::default();
    let fp_registry = Arc::new(FailPointRegistry::new());

    // Open the slatedbdatabase - this will trigger the logging
    let db = Db::open_with_fp_registry("/tmp/test_kv_store2", options, object_store, fp_registry)
        .await
        .expect("Failed to open database");

    // Put
    let key = b"test_key";
    let value = b"test_value";
    db.put(key, value).await;

    // Get
    assert_eq!(db.get(key).await.unwrap(), Some(Bytes::from_static(value)));

    // Delete
    db.delete(key).await;
    assert!(db.get(key).await.unwrap().is_none());

    // Close
    db.close().await.unwrap();
}
```

## Environment Variables

You can control the logging level using the `RUST_LOG` environment variable:

```bash
# Show all debug logs
RUST_LOG=debug cargo run

# Show only info and above for SlateDB
RUST_LOG=slatedb=info cargo run

# Show debug logs for SlateDB and info for everything else
RUST_LOG=debug,slatedb=debug cargo run
```

## Log Levels

SlateDB uses the following log levels:

- `ERROR`: Serious errors that need immediate attention
- `WARN`: Warning conditions that should be checked
- `INFO`: General information about operations
- `DEBUG`: Detailed information for debugging
- `TRACE`: Very detailed debugging information

## Further Reading

- [Tracing Documentation](https://docs.rs/tracing)
- [Tracing Subscriber Documentation](https://docs.rs/tracing-subscriber)
- [Rust Logging Best Practices](https://rust-lang.github.io/rust-cli/maintenance/logging.html)