---
title: Checkpoint
sidebar_position: 3
---

## Creating a Checkpoint

To create a checkpoint, use the create_checkpoint function provided by SlateDB. This function captures the current state of the database, allowing for consistent reads or cloning operations.

```bash
let checkpoint = db.create_checkpoint()?;
```

This operation ensures that the checkpoint reflects a stable view of the database at the time of creation.

##  Opening a Read-Only Client from a Checkpoint

Once a checkpoint is established, you can open a read-only client to interact with this snapshot without affecting the main database. This is particularly useful for analytical queries or serving consistent data views.

```bash
let reader = SlateDb::open_read_only(checkpoint_path)?;
```

This read-only client operates independently, ensuring that ongoing writes to the main database do not interfere with its operations.

## Refreshing a Checkpoint

To update a checkpoint and reflect the latest state of the database, use the refresh_checkpoint method. This is essential for long-running read-only clients that need to stay up-to-date.

```bash
checkpoint.refresh()?;
```

Refreshing ensures that the checkpoint includes recent changes without requiring a complete reinitialization.

## Deleting a Checkpoint

When a checkpoint is no longer needed, it can be safely deleted to free up resources.

```bash
checkpoint.delete()?;
```

Deleting a checkpoint removes its associated metadata and data files, ensuring efficient storage utilization.

## Creating a Writable Clone

SlateDB allows for the creation of writable clones from existing checkpoints. This facilitates scenarios where you need to branch off the current state for testing or development purposes.

```bash
let writable_clone = checkpoint.clone_writable()?;
```

The writable clone operates independently, and changes made to it do not affect the original database. This setup is ideal for parallel development or testing environments.
