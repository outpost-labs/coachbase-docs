---
title: "Replacing a Transcript"
description: "Re-run AI analysis with a corrected or more complete transcript without losing your work."
---

If you started with a partial transcript, uploaded the wrong file, or later got a cleaner version, you can replace the transcript and re-run the AI analysis. CoachBase does this carefully so you don't lose the progress you've already made.

## How to Replace

Once a session already has insights, the bottom of the **AI Insights** panel shows two options:

- **Replace transcript** — Choose a new transcript file to upload.
- **Paste new transcript** — Paste replacement text instead of a file.

![The Replace transcript and Paste new transcript options at the bottom of the panel](/images/transcript-ai-insights/05-suggested-updates.png)

Selecting either one re-runs the analysis on the new transcript.

## What's Kept and What Changes

Replacing a transcript is **non-destructive**. When the new analysis runs:

- **Completed tasks are kept.** Any action item you already marked complete stays.
- **Existing notes are kept.** Notes generated from the earlier transcript remain.
- **A fresh summary is generated** from the new transcript.
- **Unreviewed suggestions are cleared.** Any pending *Suggested updates* you hadn't accepted or dismissed are removed, since they were based on the old transcript.

Because the analysis is aware of your still-open action items, it reconciles against them rather than creating duplicates — and may propose **Suggested updates** to those items based on the new transcript.

{% callout type="note" %}
When you replace a transcript, CoachBase asks you to confirm. The confirmation reminds you that your completed tasks and existing notes are kept.
{% /callout %}

## Frequently Asked Questions

### Will replacing a transcript delete my completed action items?
No. Completed tasks and existing notes are preserved. Only un-acted suggestions from the previous transcript are cleared.

### Can I switch from an uploaded file to pasted text?
Yes. Use **Paste new transcript** to replace a file-based transcript with pasted text, or **Replace transcript** to swap in a new file. Either re-runs the analysis.

### Why did I get suggested updates after replacing?
The new analysis compares against your existing action items. When it thinks the new conversation affects one of them, it proposes a *Suggested update* for your approval instead of changing the task automatically.
