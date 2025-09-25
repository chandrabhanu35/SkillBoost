# SkillBoost Project Plan

> Practice Aptitude, Reasoning & Coding with AI

## 1. Vision & Goals
- Provide an AI-powered platform for students, professionals, and institutions to learn and assess aptitude, reasoning, and coding skills.
- Deliver personalized practice, instant feedback, progress tracking, and institutional reporting.

## 2. Success Criteria (MVP)
- Landing page communicating value (DONE)
- Auth (email/password + provider) with protected routes
- Practice modules: aptitude, reasoning, coding (basic banks)
- AI feedback loop (explanations, hints) via pluggable LLM
- User dashboard with progress and recent activity

## 3. High-Level Milestones
- M1: Project bootstrap + premium landing (DONE)
- M2: Authentication & Accounts
  - Routes: /login, /register, /dashboard (protected)
  - NextAuth (Credentials + GitHub/Google)
  - Basic profile (name, role)
- M3: Practice Engine (Phase 1)
  - Content models: Question, Topic, Difficulty, Tag
  - Modules: Aptitude, Reasoning, Coding (MCQ/short)
  - Timed practice set + scoring
- M4: AI Integration (Phase 1)
  - Hints and step explanations
  - Error analysis for incorrect attempts
  - Rate limiting + usage logging
- M5: Progress & Reporting
  - User progress graphs, skill breakdowns, streaks
  - Exportable reports (CSV/PDF)
- M6: Institutions (Phase 1)
  - Org accounts, invite flows
  - Cohorts, assignments
  - Aggregate analytics
- M7: Polish & Launch
  - QA, docs, performance
  - Deployment & monitoring

## 4. Architecture Overview
- Frontend: Next.js 15 (App Router), TypeScript, Tailwind v4
- State: Server Actions + React Query (optional) / SWR
- Auth: NextAuth (credentials + OAuth)
- DB: Postgres (Prisma ORM)
- Storage: Vercel Postgres/Supabase (dev), managed Postgres (prod)
- AI: Provider-agnostic (OpenAI/Anthropic/Local) via server routes
- Analytics/Logging: PostHog / Vercel Analytics, app logs

## 5. Detailed Task Breakdown (Backlog)
- UI/UX
  - Header mobile drawer (DONE)
  - Replace placeholders with production icons/illustrations (IN PROGRESS)
  - Pricing page + FAQ
  - About, Features, Contact content pages
- Auth & Users
  - NextAuth setup (Email+Password, OAuth provider)
  - Forms with validation (Zod/React Hook Form)
  - Protected layouts & middleware
- Data & API
  - Prisma schema: User, Org, Question, Set, Attempt, Topic
  - CRUD routes for questions/sets
  - Scoring & attempt logging
- Practice Engine
  - Question banks seeded (CSV/JSON)
  - Timed practice with pause/resume
  - Explanations and hints (LLM-backed)
- AI Integration
  - Provider config (env-based)
  - Safe prompting, retry & timeouts
  - Red-team basic guardrails
- Progress & Analytics
  - Dashboard charts (Recharts/Chart.js)
  - Skill heatmap and time series
  - Export reports
- Institutions
  - Org model, invites, roles (admin/teacher/student)
  - Assignments & cohort analytics
- DevOps
  - ENV management (.env.example)
  - GitHub Actions (lint/build)
  - Preview deployments (Vercel)

## 6. Risks & Mitigations
- AI cost & latency: add caching, batch requests, fallback explanations
- Content quality: seed vetted banks; human-in-the-loop review
- Privacy/compliance: anonymize data, clear ToS/Privacy
- Scope creep: milestone-based delivery, strict acceptance criteria

## 7. Timeline (Indicative)
- Week 1–2: M2 Auth + basic dashboard
- Week 3–4: M3 Practice Engine (Phase 1)
- Week 5: M4 AI Integration (Phase 1)
- Week 6: M5 Progress & Reports
- Week 7–8: M6 Institutions (Phase 1), M7 Polish & Launch

## 8. Environments & Configuration
- .env.example with NEXTAUTH_SECRET, DB_URL, AI keys
- Local: dev DB (docker/supabase), Vercel dev previews
- Prod: Vercel app + managed Postgres

## 9. Definition of Done (per feature)
- Unit/integration happy-paths covered
- Accessibility checked (keyboard, contrast)
- Performance pass (Lighthouse ~90+)
- Docs updated (README/PLAN/CHANGELOG)

## 10. Next Actions
- Choose Auth strategy (NextAuth + Credentials + GitHub)
- Add /dashboard route (protected layout)
- Initialize Prisma + Postgres and create schema
- Seed initial practice questions
- Implement Practice Set v1 flow
