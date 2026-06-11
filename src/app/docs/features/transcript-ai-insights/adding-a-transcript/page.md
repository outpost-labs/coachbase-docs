---
title: "Adding a Transcript"
description: "Upload a transcript file or paste transcript text to generate AI insights."
---

For sessions held outside of a CoachBase video call, you can add a transcript yourself — either by uploading a file or pasting the text. As soon as it's added, the AI starts analyzing it.

## Upload a File

1. Open the session detail page and scroll to the **AI Insights** panel.
2. Click **Choose file**.
3. Select your transcript file.

![The AI Insights upload prompt with the Choose file button](/images/transcript-ai-insights/02-upload-prompt.png)

Analysis begins automatically once the file is selected — there's no separate submit step.

### Supported Formats

You can upload the following file types, up to **10MB**:

- **TXT** — plain text
- **MD** — Markdown
- **VTT** — WebVTT captions
- **SRT** — SubRip subtitles
- **PDF** — text-based PDF documents

{% callout type="note" %}
Uploads are for text transcripts, not audio or video files. If your session was recorded as audio, transcribe it to one of the supported text formats first — or run future sessions through a CoachBase video call, which captures the transcript automatically.
{% /callout %}

## Paste Transcript Text

If you have the transcript as text rather than a file, you can paste it directly.

1. In the AI Insights panel, click **or paste transcript text**.
2. In the **Paste a transcript** window, paste your text into the box.
3. Click **Analyze transcript**.

![The Paste a transcript window](/images/transcript-ai-insights/03-paste-modal.png)

Pasting a transcript only runs AI analysis — nothing else about the session changes.

## What Happens Next

After you add a transcript, the panel switches to an **Analyzing your session...** state while the AI works. Insights appear in place when processing finishes — you don't need to refresh the page.

## Frequently Asked Questions

### Why didn't my upload work?
Check that your file is one of the supported formats (TXT, MD, VTT, SRT, or PDF) and under 10MB. If the file can't be read, an error message appears right in the AI Insights panel so you can try again.

### Can I upload an audio recording?
No — uploads must be text transcripts. Convert audio to a supported text format first, or use a CoachBase video call to capture the transcript automatically.

### How long does analysis take?
Processing usually finishes within a short time after you add the transcript. The panel updates on its own once insights are ready.
