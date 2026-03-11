---
title: "Creating a Workflow"
description: "Build a new workflow by choosing a trigger event and adding steps."
---

Create a workflow to automate a sequence of actions whenever a specific event happens in your practice.

## Starting a new workflow

1. Go to **Workflows** and click **New Workflow**.
2. Fill in the **Details** section.
3. Add one or more steps.
4. Click **Create Workflow**.

![New workflow form with details and step builder](/images/workflows/02-new-workflow.png)

## Filling in workflow details

The Details card has four fields:

- **Name** (required) -- A short, descriptive name like "Welcome new clients" or "Follow up after session."
- **Description** -- An optional note explaining what the workflow does.
- **Trigger event** -- The event that starts this workflow. Events are grouped by category:
  - **Client Events** -- Client created, Client status changed, Client archived
  - **Session Events** -- Session scheduled, Session completed, Session cancelled, Client no-show
  - **Invoice Events** -- Invoice sent, Invoice paid, Invoice overdue
  - **Task Events** -- Task completed, Task overdue
  - **Goal Events** -- Goal achieved
- **Enable this workflow** -- Check this to activate the workflow immediately after creation.

## Adding steps

Below the Details card, the **Steps** section lets you build your workflow's sequence. Use the three buttons to add steps:

- **+ Condition** -- Add a conditional check that stops the workflow if it fails.
- **+ Delay** -- Add a waiting period before the next step.
- **+ Action** -- Add an action like sending an email or creating a task.

Steps run in order from top to bottom. You can reorder steps using the arrow buttons, or remove a step with the X button.

{% callout type="note" %}
Every workflow needs at least one action step to do something useful. Conditions and delays are optional and help you control when and whether actions run.
{% /callout %}

## Step types at a glance

| Type | Purpose | Example |
|------|---------|---------|
| **Condition** | Check an attribute before continuing | Only continue if client status equals "lead" |
| **Delay** | Wait a set amount of time | Wait 1 day before sending a follow-up |
| **Action** | Perform an operation | Send an email, create a task, update a status |

For full details on configuring each step type, see [Actions and Conditions](/docs/features/workflows/actions-and-conditions).

## Saving and activating

Click **Create Workflow** to save. If you checked "Enable this workflow," it will start responding to events immediately. Otherwise, you can enable it later from the workflow detail page or the list view toggle.

## Frequently Asked Questions

**Can I test a workflow before enabling it?**
There is no dedicated test mode, but you can create the workflow in a disabled state and review its steps. When you are ready, enable it and trigger the event manually (e.g., create a test client) to verify it works.

**Is there a limit to how many steps I can add?**
There is no hard limit on the number of steps per workflow. However, simpler workflows are easier to understand and debug.

**What happens if I forget to select a trigger event?**
The form will show a validation error. A trigger event is required to save the workflow.
