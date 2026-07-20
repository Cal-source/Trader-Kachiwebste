# Trader Kachi Roadmap

## Phase 1 — Marketing Website ✅
- [x] Landing Page
- [x] About Page
- [x] Services Page
- [x] Results Page
- [x] Community Page
- [x] Premium Navbar
- [x] WhatsApp Button
- [x] FAQ
- [x] CTA
- [x] Footer

---

## Phase 2 — Trading Dashboard 🚧

### Dashboard
- [x] Dashboard Layout
- [x] Sidebar
- [x] Topbar
- [ ] Dashboard Widgets

### Trading Journal
- [ ] Create Trade
- [ ] Edit Trade
- [ ] Delete Trade
- [ ] Upload Screenshots

### Analytics
- [ ] Win Rate
- [ ] Average RR
- [ ] Monthly Performance
- [ ] Best Trading Pair

### Calendar
- [ ] Trading Calendar
- [ ] Daily Summary

### Equity Curve
- [ ] Equity Chart
- [ ] Drawdown

### Risk Calculator
- [ ] Position Size Calculator
- [ ] Saved Calculations

---

## Phase 3 — Community

- [ ] User Profiles
- [ ] Leaderboard
- [ ] Announcements
- [ ] Live Market Updates

---

## Phase 4 — Admin

- [ ] User Management
- [ ] Analytics Dashboard
- [ ] Community Moderation
- [ ] Broadcast Messages

---

## Phase 5 — AI

- [ ] AI Trade Review
- [ ] AI Journal Analysis
- [ ] AI Performance Insights

## Backend Foundation

- [x] Prisma Installed
- [x] Neon Database Connected
- [x] User Model
- [x] First Migration



## Sprint 2.4 — Authentication & User Foundation (In Progress)

### ✅ Completed
- Upgraded project to Next.js 16
- Upgraded to React 19
- Integrated Prisma with Neon PostgreSQL
- Initialized database migrations
- Integrated Clerk SDK
- Created Sign In and Sign Up pages
- Added ClerkProvider to the application

### 🚧 In Progress
- Configure Clerk route protection
- Protect dashboard routes only
- Keep marketing website fully public
- Implement role-based user architecture

### ⏳ Upcoming
- Clerk → Prisma user synchronization
- User roles (ADMIN, USER, PREMIUM)
- Protected dashboard layout




## Architecture Decisions

### AD-001
The marketing website remains completely public.

Reason:
The public pages should be indexable by search engines and accessible without authentication.

Only the dashboard will require authentication.

Status:
Accepted