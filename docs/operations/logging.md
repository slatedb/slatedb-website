---
title: Tracing in SlateDB
---

# Tracing in SlateDB

SlateDB uses the [`tracing`](https://github.com/tokio-rs/tracing) library for logging and diagnostics. This provides structured, contextual logging that helps debug and monitor your database operations.

## Getting Started

To enable logging in your SlateDB application, you'll need to add the following dependencies to your `Cargo.toml`:

```toml
[dependencies]
tracing = "0.1"
tracing-subscriber = { version = "0.3", features = ["env-filter"] }
env_logger = "0.10"
```

## Basic Setup

Here's a basic example showing how to initialize tracing with `env_logger` and SlateDB:

```rust
use slatedb::Database;
use tracing::{info, warn, error};
use tracing_subscriber::{layer::SubscriberExt, util::SubscriberInitExt};

#[tokio::main]
async fn main() {
    // Initialize tracing subscriber
    tracing_subscriber::registry()
        .with(tracing_subscriber::EnvFilter::try_from_default_env()
            .unwrap_or_else(|_| "info".into()))
        .with(tracing_subscriber::fmt::layer())
        .init();

    // Now SlateDB operations will emit traces
    info!("Initializing SlateDB");
    
    let db = Database::new()
        .with_path("my_database")
        .build()
        .await
        .expect("Failed to create database");

    // Your database operations will now emit traces
    let result = db.get("my_key").await;
    match result {
        Ok(value) => info!("Retrieved value successfully"),
        Err(e) => error!("Error retrieving value: {}", e),
    }
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

## Structured Fields

SlateDB's trace events include structured fields to help with debugging:

```rust
use tracing::instrument;

#[instrument]
async fn read_value(key: String) -> Result<Option<Vec<u8>>, Error> {
    // The operation will automatically log:
    // - The function name
    // - The key parameter
    // - The time taken
    // - The result (Ok or Err)
    db.get(&key).await
}
```

## Production Recommendations

For production environments, we recommend:

1. Using a more robust tracing subscriber like `tracing-subscriber` with JSON formatting
2. Setting appropriate log levels using environment variables
3. Collecting traces in a centralized logging system
4. Using sampling for high-volume operations

## Custom Trace Spans

You can create custom spans to track specific operations:

```rust
use tracing::{info, info_span};

async fn complex_operation() {
    let span = info_span!("complex_operation", operation_type = "custom");
    let _enter = span.enter();
    
    info!("Starting complex operation");
    // Your operation code here
    info!("Completed complex operation");
}
```

## Performance Impact

The tracing system is designed to have minimal overhead when spans/events are disabled. However, for maximum performance in production:

- Use appropriate log levels
- Consider using sampling for high-volume operations
- Disable detailed tracing for performance-critical paths

## Further Reading

- [Tracing Documentation](https://docs.rs/tracing)
- [Tracing Subscriber Documentation](https://docs.rs/tracing-subscriber)
- [Rust Logging Best Practices](https://rust-lang.github.io/rust-cli/maintenance/logging.html)