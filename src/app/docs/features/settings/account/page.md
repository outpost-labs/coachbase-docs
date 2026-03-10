---
title: "Account Settings"
description: "Manage your email, password, and account deletion."
---

The **Account** tab is the default view when you open Settings. It covers your core account credentials and includes the option to delete your account.

![Account settings page showing email, password, and danger zone sections](/images/settings/01-account-settings.png)

## Navigating Settings

Settings are organized into tabs along the left sidebar:

- **Account** -- Email, password, and account deletion
- **Security** -- Two-factor authentication
- **Integrations** -- Stripe, calendars, video conferencing, and webhooks
- **Billing** -- Subscription plan, payment method, and billing history
- **Team** -- Invite and manage team members (Practice plan)

On mobile devices, these tabs appear as a horizontal scrollable bar at the top of the page.

## Email address

Your email address is displayed in the first card. This is the email used for magic link sign-in and all CoachBase notifications. To change your email, contact support.

## Password

Click **Send reset link** to receive a password reset email. CoachBase sends the link to your registered email address. If you have previously requested a reset, the page shows when the last link was sent.

## Deleting your account

The **Danger Zone** section at the bottom contains the account deletion option.

1. Click **Delete account**
2. In the confirmation dialog, type `DELETE` in the text field
3. Check all three confirmation boxes acknowledging that your data will be permanently deleted
4. Click **Delete my account**

{% callout type="warning" %}Account deletion is permanent. All your clients, sessions, invoices, notes, and associated data will be removed and cannot be recovered. Charges already processed through Stripe are not affected.{% /callout %}

## Frequently Asked Questions

**Can I change my email address?**
Not directly from settings. Contact support to update your email address.

**Do I need a password to sign in?**
No. CoachBase supports passwordless sign-in via magic links. Setting a password is optional but provides an alternative login method.

**What happens to my Stripe account if I delete my CoachBase account?**
Your Stripe Connect account remains active independently. CoachBase deletion only removes data within CoachBase itself.
