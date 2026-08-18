---
title: 'Changelog'
description: "Keep track of what's new and improved in CoachBase."
---

We ship improvements to CoachBase regularly. Here's what's new.

---

## August 18, 2026

- Inviting a coach to your [Practice team](/docs/features/settings/team) now works reliably, including on internal and staff-managed accounts where the invite could previously appear to do nothing.
- The [team member list](/docs/features/settings/team) is cleaner: permissions are simple on and off toggles, each member shows a single role badge, invited members show the date they were invited, and Resend and Remove now live in a compact actions menu.
- Confirmation and error messages, like "Invitation sent," now reliably appear after an action reloads the page, instead of occasionally being dropped.

## August 17, 2026

- Team invitations now send a one-click join link that adds the coach directly to your [practice team](/docs/features/settings/team), instead of occasionally failing or dropping them into a separate empty account.

## August 15, 2026

- The [client portal](/docs/features/client-portal/overview) now matches the coach app's look and feel, with the same navigation, cards, and page headers, plus a Light, Dark, and System theme switch that's remembered for each client.
- The [portal dashboard](/docs/features/client-portal/dashboard) keeps Goals and Files together with Messages alongside them. Completing a task or opening a shared file now confirms with a toast, and files you haven't opened show a **New** badge until viewed.
- Portal visibility settings are shorter and easier to scan, with per-contact controls and a one-click reset back to your account defaults.
- Coaching engagements now live in their own tab on the [contact page](/docs/features/clients/client-details), alongside Notes, Goals, and Tasks, and the tab no longer renders blank in some cases.

## August 14, 2026

- [Contact profiles](/docs/features/clients/client-details) now use the modern detail layout by default, include custom fields and blank values, and let you copy email addresses and phone numbers with one click. Your saved layout preferences stay unchanged.
- Today's dashboard now separates upcoming sessions from sessions that need to be wrapped up, with direct actions for recording the outcome. The [Sessions timeline](/docs/features/scheduling/creating-sessions) also shows the newest weeks first.
- [Creating a session](/docs/features/scheduling/creating-sessions) now includes a searchable contact picker with inline contact creation. You can also reschedule sessions with availability checks and updated calendar invitations and notifications.
- Invoices and [recurring plans](/docs/features/invoices/recurring-invoices) are now clearly distinguished throughout billing. The creation flow defaults to a one-time invoice, recurring plans show saved payment details, and the first automatic-payment email explains the initial payment and future charges.
- Paid [public bookings](/docs/features/scheduling/booking-page) now reserve the selected time during checkout and create the contact and session only after Stripe confirms payment.
- Google and Outlook [calendar connections](/docs/features/scheduling/calendar-connections) now recover reliably when access tokens expire. Reconnecting Google Calendar restores missing future events, and failed confirmation syncs include a calendar-file fallback.
- Transactional emails now use CoachBase and coach branding consistently, and client replies route back into the matching [CoachBase conversation](/docs/features/client-portal/files-and-messages) when possible.
- Solo plans now include unlimited custom fields, and the [billing page](/docs/features/settings/billing) shows the plan limits CoachBase actually enforces.
- [Invoice payments](/docs/features/invoices/payments-and-refunds) now receive stronger checkout verification, and accidental overpayments are refunded automatically.
- New trial accounts receive a welcome email, while accounts with a failed subscription payment receive reminders during the seven-day [grace period](/docs/features/settings/billing).

## August 7, 2026

- CoachBase now emails you two days before your [subscription renews](/docs/features/settings/billing) with the renewal date and plan, plus the expected charge and payment method when available.
- [Analytics](/docs/features/analytics/overview) and [Workflows](/docs/features/workflows/overview) now show a useful preview and plan details when they are not included with your current subscription, instead of sending you away from the page
- The newest message in each [client email thread](/docs/features/clients/client-details) now appears first.
- Fixed an issue that could prevent some [client edits](/docs/features/clients/client-details) from saving when the profile contained an old or removed custom field, and kept single or multi-word names from changing during unrelated edits.
- Fixed the Getting Started button remaining visible over the open checklist

## July 30, 2026

- Every session now shows the delivery status of its confirmation, reminder, and cancellation emails right on the [session page](/docs/features/scheduling/creating-sessions), and you can retry any that failed to send
- Sessions with no valid recipient now show those emails as "not applicable" rather than reporting them as delivered
- Outlook [calendar events](/docs/features/scheduling/calendar-connections) now invite your contact directly, keep you as the organizer, update the attendee when you reschedule, and send a cancellation when you cancel
- Scheduling now stops with a clear, actionable message when the contact you picked has no valid email address, instead of failing quietly
- [Contact name edits](/docs/features/clients/client-details) now save correctly from both the quick modal and the full edit page, including names with apostrophes and hyphens, and the first and last name fields stay in sync
- Searching, filtering, and sorting your [contacts](/docs/features/clients/overview) now updates just the results table instead of reloading the page, so the search box keeps up as you type
- The "last activity" column now reflects a contact's most recent note even if they have no sessions booked — previously those contacts showed a blank date no matter how recently you'd written a note
- Fixed the errors that could stop flash messages, toasts, and the new-user trial signup flow from working after navigating between pages

## July 17, 2026

- Re-running a [data import](/docs/features/data-import/overview) no longer creates duplicate invoices — bring in the same file twice and the second pass adds nothing new
- [Imports](/docs/features/data-import/overview) now finish on a proper completion screen instead of the progress bar snapping back to zero, so you can tell at a glance that everything landed
- You can now [delete paid invoices](/docs/features/invoices/managing-invoices) that were imported or manually marked paid, making it easy to clear out duplicates and mistakes — invoices with a real Stripe payment stay protected
- Outlook [calendar invites](/docs/features/scheduling/calendar-connections) now carry the video-call join link, both in the event location and as a clickable link in the invite body

## July 16, 2026

- [Adding a client](/docs/features/clients/adding-clients) whose email address is already on file now shows a clear inline message instead of an error page, and clients with no email at all save without complaint
- Completed video sessions no longer sit forever on "Processing your call recording…" when there was never a recording — you'll get a prompt to [upload a transcript](/docs/features/scheduling/session-notes-insights) instead
- Your dashboard loads noticeably faster — the "Needs Attention" cards now do about a quarter of the database work they used to, and it's the first thing you see after signing in
- The [client portal dashboard](/docs/features/client-portal/dashboard) pulls up shared files in one pass rather than one at a time

## July 7, 2026

- Fixed a crash on the session detail page for sessions that have a location but no scheduled time, such as a cancelled video call

## June 11, 2026

- Paste a [session transcript](/docs/features/transcript-ai-insights/adding-a-transcript) straight into the AI Insights panel — no file required, so you can try the AI on any past session in seconds
- [AI session analysis](/docs/features/transcript-ai-insights/reviewing-insights) is now client-aware: it sees open action items from earlier sessions and tells brand-new tasks apart from updates and completions, and nothing on a client's plan changes without your approval
- [Replacing a transcript](/docs/features/transcript-ai-insights/replacing-a-transcript) no longer wipes your work — completed tasks and existing notes stay put, and only the AI summary is regenerated
- Choosing a transcript file now shows "Uploading…" and then "Analyzing…" so the upload never feels stuck
- If your [subscription lapses](/docs/features/settings/billing) you now get a dedicated access-paused screen with a 7-day grace period, a one-click export of your contacts, sessions, and invoices, and continued access to your account settings
- Your [clients](/docs/features/client-portal/overview) see a neutral "temporarily unavailable" page if your account is paused — never your billing situation
- Our Privacy Policy now spells out exactly how the [Google Calendar integration](/docs/features/settings/integrations) handles your data: it reads only your busy times to prevent double-booking and writes the sessions you book, and never reads the contents of your events

## May 29, 2026

- Text colors and highlights in [session notes](/docs/features/scheduling/session-notes-insights) now stick when you save, and you can clear formatting back to normal

## April 7, 2026

- Introducing the [Practice Health Score](/docs/features/practice-health-score/overview) — a free 15-question assessment that scores your practice across pipeline, sessions, financial health, client experience, and operations
- Your [results](/docs/features/practice-health-score/understanding-results) include a category breakdown, personalized recommendations, and a shareable link so you can compare notes with other coaches

## March 23, 2026

- New timeline view on the [Sessions](/docs/features/scheduling/creating-sessions) page — see your schedule grouped by week with day markers, a "Today" indicator, and gap detection for unbooked stretches. Switch between Timeline and List views anytime.
- Your [Analytics](/docs/features/analytics/overview) page now opens with a plain-English summary of your month that adapts to your data — no more mental math to figure out how things are going
- Session cards now lead with the client name instead of "Coaching Session" — much easier to scan your schedule at a glance
- Streamlined the dashboard by removing the "Coming Up" section — your Today's Sessions card already has you covered

## March 20, 2026

- Your clients can now log into a secure, branded [Client Portal](/docs/features/client-portal/overview) — [magic link sign-in](/docs/features/client-portal/client-login), no password needed
- Clients get their own [dashboard](/docs/features/client-portal/dashboard) with upcoming sessions, active goals, recent tasks, unread messages, and a one-click session join banner
- Clients can review their full [session history](/docs/features/client-portal/sessions), read session recaps, and add pre-session prep notes
- [Goal tracking](/docs/features/client-portal/goals-and-tasks) with progress indicators so clients can see how they're doing between sessions
- Clients can download [files you've shared and message you](/docs/features/client-portal/files-and-messages) directly from the portal
- You control exactly what each client sees — enable or disable portal sections per account or per client
- Added file search to the [command palette](/docs/features/command-palette/overview) — find uploaded files by name
- Search results in the [command palette](/docs/features/command-palette/overview) are now grouped by type with section headers for easier scanning
- Added a visual search trigger in the nav bar so the [command palette](/docs/features/command-palette/overview) is always one click away

## March 12, 2026

- Laying the groundwork for CoachBase iOS and Android native apps powered by Hotwire Native — coming soon
- Added help page in your profile menu linking to documentation and resources
- Simplified onboarding from 7 steps down to 3 — getting started is now faster than ever
- Added a Getting Started checklist to help new coaches hit the ground running
- Added helpful placeholder empty states across the dashboard so you always know what to do next
- Fixed critical issue where Stripe Connect would get stuck when navigating the [billing page](/docs/features/settings/billing) via the app
- [Session type](/docs/features/scheduling/meeting-types) creation now saves your [availability](/docs/features/scheduling/availability) settings properly
- Better onboarding flow that takes you directly to [billing](/docs/features/settings/billing) if you need to choose a plan
- Improved product tour highlighting your [automation](/docs/features/workflows/overview) capabilities

## March 11, 2026

- Launched [workflow automations](/docs/features/workflows/overview) -- set up [triggers and actions](/docs/features/workflows/actions-and-conditions) to automate repetitive tasks like sending emails or adding notes when clients hit milestones
- Mobile-first responsive redesign across the entire app -- CoachBase now looks and works great on any device
- Dark mode polish across settings, analytics, invoices, and more
- [Invoice](/docs/features/invoices/creating-invoices) wizard improvements with better branding options and draft persistence
- New product tour for first-time users to help you learn the ropes

## March 10, 2026

- Added Cmd+K [command palette](/docs/features/command-palette/overview) for quick navigation and searching across your account
- [Data import](/docs/features/data-import/overview) support including [Ramsey Coach ZIP imports](/docs/features/data-import/ramsey-import) -- bring your existing data with you
- Sortable tables with column toggling, row selection, and bulk actions for faster list management
- Audit trail for tracking changes to records so you always know what changed and when
- Auto-billing for [recurring invoices](/docs/features/invoices/recurring-invoices) via Stripe -- set it and forget it
- Full-page [invoice creation](/docs/features/invoices/creating-invoices) wizard with live preview
- Promo code support for checkout

## March 9, 2026

- Per-session-type [availability](/docs/features/scheduling/availability) -- set different hours for different [session types](/docs/features/scheduling/meeting-types)
- Redesigned [public booking pages](/docs/features/scheduling/booking-page) as branded landing experiences for your clients
- New date picker across all date fields for a smoother scheduling experience
- Company and job title fields on [client profiles](/docs/features/clients/client-details)
- Real-time in-app notifications with new event types so you never miss a beat
- Cancellation and downgrade reason surveys for better feedback

## March 7, 2026

- Native Stripe [billing](/docs/features/settings/billing) -- checkout, plan switching, and payment method management all happen in-app now (no more redirects to external pages)
- Renamed "Meeting Types" to "[Session Types](/docs/features/scheduling/meeting-types)" for clarity
- Rich text editor for session notes
- Transcript upload and AI-powered [session insights](/docs/features/scheduling/session-notes-insights) -- upload a call recording and get key takeaways automatically
- Upgrade confirmation with live proration preview so you know exactly what you'll pay
- Plan tier badges in navigation

## March 6, 2026

- Dark mode with user theme preferences -- choose light, dark, or system default
- In-app notification center with bell icon and inbox
- Outgoing webhooks for integrating with external tools via [Integrations](/docs/features/settings/integrations)
- Custom error pages

## March 5, 2026

- [Analytics](/docs/features/analytics/overview) dashboard with revenue, client health, and coaching activity metrics -- all in one place
- AI [session notes and action items](/docs/features/scheduling/session-notes-insights) from video call transcripts
- Custom branding options for your [coaching practice](/docs/features/settings/public-profile)
- Client activity scoring to see who's engaged and who might need a nudge
- Automated [invoice reminders](/docs/features/invoices/managing-invoices) so you don't have to chase payments
- Session reminder customization
- Install CoachBase as an app on your device with PWA support

## March 3, 2026

- Passwordless login with magic links -- no more passwords to remember
- Native video calls built right into CoachBase
- Stripe Connect embedded payments management
- Redesigned onboarding wizard
- Restructured navigation with section sub-nav for easier wayfinding
- [File](/docs/features/file-library/overview) storage quotas and type restrictions
- Significant [security](/docs/features/settings/security) hardening across the platform

## February 27, 2026

- Stability release with 15+ bug fixes including timezone handling, file uploads, invoice emails, and form submissions
- Pin and unpin [notes](/docs/features/clients/notes-goals-tasks) on client profiles to keep the important stuff front and center
- Inline task creation from the dashboard
- Auto-generate booking slugs from your name

## February 26, 2026

- [Referral program](/docs/features/referrals/overview) -- earn Stripe credit rewards when you refer other coaches
- Email system with branded templates
- Zoom and Google Meet video [integration](/docs/features/settings/integrations)
- Feature gating by subscription tier (Solo, Pro, Practice)
- Trial signup flow
- [Settings](/docs/features/settings/account) and [integrations](/docs/features/settings/integrations) pages

## February 24, 2026

- Account-based multi-tenancy for [coaching teams](/docs/features/settings/team)
- Today-focused dashboard with attention indicators highlighting what needs your action
- [Client directory](/docs/features/clients/overview) with search, filters, and sortable columns
- [Public booking page](/docs/features/scheduling/booking-page) so clients can schedule time with you directly
- [Calendar sync](/docs/features/scheduling/calendar-connections) with Google, Outlook, and Apple Calendar
- [File library](/docs/features/file-library/overview) with sharing
- Client [tasks, goals](/docs/features/clients/notes-goals-tasks), and activity timeline
- CSV [import](/docs/features/data-import/overview) for bringing in existing client data
- [Recurring invoices](/docs/features/invoices/recurring-invoices)
- Stripe [billing](/docs/features/settings/billing) infrastructure

## February 19, 2026

- Core CRM launched: dashboard, [clients](/docs/features/clients/overview), [sessions](/docs/features/scheduling/overview), and [availability](/docs/features/scheduling/availability) management
- Packages and [invoices](/docs/features/invoices/overview)
- Stripe Connect payments
- Marketing website
- [Public booking flow](/docs/features/scheduling/booking-page)

## February 12, 2026

- Initial project setup -- CoachBase is born
