---
title: "Managing Workflows"
description: "Enable, disable, edit, delete, and monitor your workflows."
---

Once you have created workflows, you can manage them from the workflow list or the detail page.

## Enabling and disabling

Toggle a workflow on or off without opening it by clicking the **toggle switch** on its card in the list view. The status badge updates immediately.

You can also toggle from the workflow detail page using the switch in the top right, next to the **Edit** and **Delete** buttons.

{% callout type="note" %}
Disabling a workflow pauses it immediately. Any in-progress executions will complete, but new events will not trigger the workflow until you re-enable it.
{% /callout %}

## Viewing workflow details

Click a workflow's name from the list to open its detail page. The detail page shows:

### Workflow steps (left panel)

A visual sequence of the workflow's steps, starting with the trigger event. Each step shows:

- A colored icon indicating its type (purple for trigger, yellow for condition, gray for delay, green for action)
- The step type label
- A human-readable description of what the step does

### Details sidebar (right panel)

A summary card with:

- **Status** -- Enabled or Disabled
- **Trigger** -- The event that starts this workflow
- **Steps** -- Total number of steps
- **Created** -- When the workflow was created
- **Last triggered** -- When it last ran (if ever)

### Recent executions (right panel)

A log of the most recent workflow runs, showing:

- **Triggerable type** -- What triggered it (e.g., Client, Invoice)
- **Timestamp** -- When the execution occurred
- **Status badge** -- Completed (green), Failed (red), Running (purple), or Skipped (gray)

## Editing a workflow

1. Open the workflow detail page.
2. Click **Edit**.
3. Make your changes to the name, description, trigger event, or steps.
4. Click **Save Changes**.

You can add, remove, and reorder steps the same way you do when creating a workflow. Existing step configurations are preserved.

## Deleting a workflow

1. Open the workflow detail page.
2. Click **Delete**.
3. Confirm the deletion in the dialog.

{% callout type="warning" %}
Deleting a workflow is permanent and cannot be undone. Historical execution logs for that workflow are also removed.
{% /callout %}

## Frequently Asked Questions

**What do the execution statuses mean?**
- **Completed** -- All steps ran successfully.
- **Failed** -- A step encountered an error and the workflow stopped.
- **Running** -- The workflow is currently executing (may be waiting on a delay step).
- **Skipped** -- A condition step evaluated to false and the workflow stopped early.

**Can I re-run a failed workflow?**
There is no automatic retry. Review the execution log to understand what failed, fix the issue (e.g., update an email template), and wait for the event to occur again, or trigger it manually.

**How many executions are shown?**
The detail page shows the 20 most recent executions. Older executions are still stored but not displayed on this page.
