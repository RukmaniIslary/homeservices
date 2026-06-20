# N-Nodes Home Services Marketplace

A production-ready nationwide home services marketplace built with Next.js 15, TypeScript, Tailwind CSS, PostgreSQL, Prisma ORM, and Paddle Checkout — deployed on Vercel.

## Features

- **10 Service Categories**: HVAC, Plumbing, Electrical, Roofing, Water Damage Restoration, Garage Door Repair, Appliance Repair, Handyman, Cleaning, Landscaping
- **Guest Booking Flow**: No account required. 4-step booking with Paddle deposit checkout
- **SEO Architecture**: Service pages, city pages, state pages, blog, structured data, dynamic sitemap
- **Admin Dashboard**: View bookings, status management, stats
- **Security**: Rate limiting, server-side validation, security headers, audit logs
- **Vercel-ready**: Environment variables, build config, production/staging support

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Payments**: Paddle Checkout
- **Deployment**: Vercel
- **Images**: Unsplash (real photography)

## Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Configure environment variables
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```

Required variables:
- `DATABASE_URL` — PostgreSQL connection string
- `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN` — Paddle client token
- `PADDLE_API_KEY` — Paddle secret API key
- `PADDLE_WEBHOOK_SECRET` — Paddle webhook signing secret
- `NEXT_PUBLIC_APP_URL` — Your production URL

### 3. Set up the database
```bash
npx prisma migrate dev --name init
npx prisma db seed
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Deploying to Vercel

1. Push to GitHub
2. Import project in Vercel
3. Set all environment variables in Vercel dashboard
4. Vercel will run `npx prisma generate && next build` automatically

### Paddle Webhook Setup
After deploying, add your webhook endpoint in Paddle dashboard:
```
https://yourdomain.com/api/webhooks/paddle
```
Subscribe to: `transaction.completed`, `transaction.payment_failed`

## Project Structure

```
src/
  app/
    page.tsx              # Homepage
    book/                 # Booking flow
    services/[slug]/      # Service detail pages
    locations/[city]/     # City SEO pages
    blog/                 # Blog
    admin/                # Admin dashboard
    api/
      bookings/           # Booking API
      webhooks/paddle/    # Paddle webhook handler
  components/
    layout/               # Header, Footer
    booking/              # BookingForm
  lib/
    db.ts                 # Prisma client
    services-data.ts      # Service data & pricing
    utils.ts              # Utility functions
prisma/
  schema.prisma           # Database schema
  seed.ts                 # Database seed
```

## Database Schema

Tables: `customers`, `bookings`, `services`, `technicians`, `payments`, `invoices`, `service_areas`, `reviews`, `audit_logs`, `admin_users`, `blog_posts`

## SEO

- Dynamic sitemap at `/sitemap.xml`
- Robots.txt at `/robots.txt`
- Structured data (JSON-LD) on all service and location pages
- Open Graph and Twitter card meta tags
- 100+ city pages and 50 state pages pre-generated

## Support

- Phone: 1-800-N-NODES
- Email: support@n-nodes.com
