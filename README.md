# Pure Glint Clean — Cleaning Service Website

A modern, mobile-first website for **Pure Glint Clean**, a residential cleaning service in North Fort Worth and the greater DFW area. Designed, built, and deployed end to end.

🔗 **Live:** https://pure-glint-clean-website.vercel.app

## What it does
- **Complete business site** — hero with clear CTAs and trust indicators, about, services (all 6 service types), and a transparent three-tier pricing section (Standard, Deep, Move-out).
- **Booking & lead capture** — inquiry form with phone-number validation (`libphonenumber-js`), emailed via Resend and logged to a Google Sheet for a no-backend CRM.
- **Process & FAQ** — explains how booking and service delivery work, to reduce back-and-forth before a job is booked.
- **Mobile-first & fast** — built for how cleaning clients actually browse (on their phones).

## Stack
Next.js · React · Heroicons · Google Sheets API · Resend (transactional email) · `libphonenumber-js` · Vercel.

## Notes
Same pragmatic, low-maintenance pattern I use for small-business clients: files for content, a spreadsheet for leads, serverless email — professional results without an ongoing ops burden.

*Designed & developed by Daniel J. Scott / MDJ Studios.*
