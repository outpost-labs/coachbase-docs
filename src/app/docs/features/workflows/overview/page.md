---
title: "Workflows Overview"
description: "Automate repetitive tasks in your coaching practice with event-driven workflows."
---

Workflows let you automate actions that happen in response to events in your practice. When a client is created, a session is completed, or an invoice goes overdue, a workflow can automatically send emails, create tasks, update statuses, and more.

![Workflows page showing filter tabs and action buttons](/images/workflows/01-index.png)

## Navigating the Workflows page

Open **Workflows** from the top navigation bar. The page displays all your workflows as cards, each showing the workflow name, status badge, trigger event, step count, and when it was last triggered.

At the top right, two buttons let you get started:

- **Use Template** -- Browse pre-built workflow templates.
- **New Workflow** -- Create a workflow from scratch.

## Filtering workflows

Use the filter pills to narrow the list:

- **All** -- Show every workflow.
- **Enabled** -- Show only active workflows that will run when triggered.
- **Disabled** -- Show only paused workflows.

## Understanding workflow cards

Each workflow card displays:

- **Name** -- Click to open the workflow detail page.
- **Status badge** -- Green "Enabled" or gray "Disabled".
- **Trigger event** -- The event that starts this workflow (e.g., "New client created").
- **Step count** -- How many steps the workflow contains.
- **Last triggered** -- When the workflow last ran, if ever.
- **Toggle switch** -- Quickly enable or disable the workflow without opening it.

## How workflows run

When an event occurs in your practice (like creating a new client or completing a session), CoachBase checks for any enabled workflows that match that event. Matching workflows execute their steps in order -- evaluating conditions, waiting through delays, and running actions like sending emails or creating tasks. Each execution is logged so you can review what happened.

## Plan limits

The number of workflows you can create depends on your subscription plan. If you reach your limit, you will see a prompt to upgrade. You can always disable unused workflows to make room.

## Frequently Asked Questions

**Do workflows run immediately when an event happens?**
Yes. When a matching event occurs, CoachBase queues the workflow for execution right away. If the workflow includes delay steps, later actions will wait for the specified duration.

**Can I have multiple workflows for the same event?**
Yes. You can create several workflows that trigger on the same event. All matching, enabled workflows will run independently.

**Will disabled workflows still fire?**
No. Only enabled workflows execute when their trigger event occurs. Disabled workflows are paused and will not run until you re-enable them.
