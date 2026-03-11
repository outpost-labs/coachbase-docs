---
title: "Actions and Conditions"
description: "Reference for all workflow step types, action types, and condition operators."
---

Workflow steps come in three types: actions, conditions, and delays. This page covers what each type does and how to configure it.

## Action steps

Actions are the core of a workflow -- they do something when executed. Choose an action type from the dropdown when adding an action step.

### Send email

Sends an email to the client associated with the triggering event.

- **Subject** -- The email subject line.
- **Body** -- The email body text.

You can use template variables in both the subject and body to personalize emails:

| Variable | Output |
|----------|--------|
| `{{client.name}}` | The client's full name |
| `{{client.email}}` | The client's email address |
| `{{coach.name}}` | Your name |
| `{{session.date}}` | The session date (formatted as "Month DD, YYYY") |
| `{{invoice.amount}}` | The invoice total |

{% callout type="note" %}
Send email actions require the client to have an email address on file. If no email is found, the step is skipped.
{% /callout %}

### Create task

Creates a task assigned to you (the coach).

- **Task name** -- What the task should be called.
- **Due in (days)** -- How many days from now the task should be due. Leave blank for no due date.

### Update client status

Changes the associated client's pipeline stage.

- **New status** -- Select the target stage from the dropdown (e.g., Lead, Contacted, Client, Nurture, Alumni).

### Send notification

Sends an in-app notification to you (the coach). Useful for alerting you about events that need attention.

- **Message** -- The notification text that appears in your notification bell.

### Fire webhook

Sends an HTTP POST request to an external URL. Useful for integrating with third-party tools like Zapier or custom APIs.

- **Webhook URL** -- The full URL to send the request to (must start with `https://`).

### Log system message

Adds a system-generated note to the client's session history. Useful for creating an audit trail.

- **Message** -- The message to log.

## Condition steps

Conditions check an attribute of the triggering resource before allowing the workflow to continue. If the condition is not met, the workflow stops and the execution is marked as "Skipped."

Configure a condition with three fields:

- **Attribute** -- The field to check (e.g., Status, Email, Name).
- **Operator** -- How to compare the value.
- **Value** -- The value to compare against.

### Available operators

| Operator | Description |
|----------|-------------|
| **Equals** | Attribute exactly matches the value |
| **Does not equal** | Attribute does not match the value |
| **Contains** | Attribute includes the value as a substring |
| **Does not contain** | Attribute does not include the value |
| **Starts with** | Attribute begins with the value |
| **Greater than** | Attribute is numerically greater than the value |
| **Less than** | Attribute is numerically less than the value |

{% callout %}
Conditions are evaluated at the moment the workflow runs, not when the event first occurred. If a client's status changes between the event and the condition check, the current value is used.
{% /callout %}

## Delay steps

Delays pause the workflow for a specified duration before continuing to the next step. This is useful for follow-up sequences where you want to wait before taking action.

Configure a delay with two fields:

- **Duration** -- A number (e.g., 1, 30, 7).
- **Unit** -- Minutes, Hours, or Days.

For example, setting duration to 1 and unit to Days creates a one-day pause before the next step runs.

{% callout type="note" %}
During a delay, the workflow execution shows as "Running." The remaining steps execute automatically when the delay expires.
{% /callout %}

## Step ordering

Steps run sequentially from top to bottom. Use the up and down arrow buttons to reorder steps in the workflow builder. Common patterns include:

1. **Condition first** -- Check if the client meets criteria before taking action.
2. **Action then delay then action** -- Perform an immediate action, wait, then follow up.
3. **Multiple actions** -- Run several actions in sequence (e.g., send email and create task).

## Frequently Asked Questions

**Can I add multiple conditions to a workflow?**
Yes. Add multiple condition steps at different positions. Each condition is evaluated independently. If any condition fails, the workflow stops at that point.

**What happens if a send email action fails?**
If the email cannot be delivered (e.g., invalid address), the step is marked as failed in the execution log and the workflow stops. Subsequent steps do not run.

**Can I use delay steps with minutes for quick automations?**
Yes. You can set delays as short as 1 minute. This is useful for scenarios where you want a brief pause between actions.
