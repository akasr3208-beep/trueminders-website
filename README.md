# TRUEMINDERS website starter

A Next.js + TypeScript starter for the TRUEMINDERS digital education and commerce platform.

## Included in this starter
- Premium black / charcoal / white / red homepage design
- Responsive navigation and footer
- Supplied Batman reference artwork placed in `public/images/`
- Brand philosophy, learning pillars, flagship ebook feature and founder section
- Initial environment-variable template
- Starter database schema for future Supabase integration

## Run locally
1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local`.
4. Run `npm run dev`.
5. Open `http://localhost:3000`.

## Important implementation status
This is a frontend starter, not a finished production commerce platform. Checkout, real payment processing, secure downloads, authentication, course progress, email delivery, admin CRUD, analytics and legal compliance still need implementation, credentials and testing. Do not accept real payments until those systems are complete and verified.

## Suggested production architecture
- Next.js App Router + TypeScript
- Supabase PostgreSQL, Auth and private Storage
- Server-side payment order creation and webhook verification
- Razorpay for India if merchant onboarding is approved
- PayPal or another eligible international provider after approval
- Resend or equivalent transactional email provider
- Vercel or equivalent hosting

## Batman artwork and commercial rights
The supplied image is included as requested for the prototype. Confirm that you own or have a commercial license for it before public commercial use. If not, replace it with licensed artwork or original, legally cleared vigilante-inspired artwork. TRUEMINDERS should not imply affiliation with DC or Warner Bros.

## Before launch
- Register and verify the chosen domain.
- Configure Supabase and apply migrations.
- Configure approved payment accounts and webhook secrets.
- Verify sender domain for transactional email.
- Write and review jurisdiction-appropriate legal policies.
- Run end-to-end payment, authorization, download and security tests.
