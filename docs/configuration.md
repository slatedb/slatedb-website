---
sidebar_position: 3
---

# Configuration

## Database Options

```rust
pub struct DbOptions {
    pub flush_ms: usize,
    pub manifest_poll_interval: Duration,
    pub min_filter_keys: u32,
    pub l0_sst_size_bytes: usize,
    pub compactor_options: Option<CompactorOptions>,
}
```

## Write Options

```rust
const DEFAULT_WRITE_OPTIONS: &WriteOptions = &WriteOptions::default();

pub struct WriteOptions {
    pub await_flush: bool,
}

impl WriteOptions {
    const fn default() -> Self {
        Self { await_flush: true }
    }
}
```

## Read Options

```rust
const DEFAULT_READ_OPTIONS: &ReadOptions = &ReadOptions::default();

pub enum ReadLevel {
    Commited,
    Uncommitted,
}

pub struct ReadOptions {
    pub read_level: ReadLevel,
}

impl ReadOptions {
    const fn default() -> Self {
        Self {
            read_level: Commited,
        }
    }
}
```

## Compaction Options

```rust
const DEFAULT_COMPACTOR_POLL_INTERVAL: Duration = Duration::from_secs(5);

pub struct CompactorOptions {
    pub(crate) poll_interval: Duration,
    pub(crate) max_sst_size: usize,
}

impl CompactorOptions {
    pub fn default() -> Self {
        Self {
            poll_interval: DEFAULT_COMPACTOR_POLL_INTERVAL,
            max_sst_size: 1024 * 1024 * 1024,
        }
    }
}
```