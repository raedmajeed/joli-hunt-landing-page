# JoliHunt - Product Requirements Document

## Original Problem Statement
Design a fully responsive landing page for JoliHunt — a job search tracker SaaS. Must look great on both mobile and desktop. Includes a hero section, problem/pain cards, alternating layout feature sections, social proof/testimonials, and a "how it works" flow. The design requires specific brand colors, modern typography, animations, and layered z-index hierarchy. Additional requirements evolved to include a custom animated mascot, blog creation/management system, user management, newsletter signup, and SEO optimizations. Product Requirements: Move from frontend mocked data to full stack implementation with MongoDB and FastAPI.

## Architecture
- **Frontend**: React + TailwindCSS + Shadcn + Framer Motion
- **Backend**: FastAPI + MongoDB (Motor async driver)
- **Auth**: JWT HTTP-only cookies
- **API Client**: Axios with withCredentials

## What's Been Implemented
- Full responsive landing page (hero, problems, features, testimonials, how it works, CTA, footer)
- Custom animated mascot
- Full-stack backend with FastAPI + MongoDB
- JWT authentication (HTTP-only cookies)
- Blog CRUD (create, read, update, delete)
- User management (CRUD)
- Newsletter subscription API
- Admin login + dashboard
- SEO optimizations
- Kerala testimonial names (Arjun Menon, Devika Nair, Vishnu Krishnan)
- Blog link removed from nav and footer (Apr 28, 2026)
- Video demo replaced with pixel art placeholder image (Apr 28, 2026)
- "See All Testimonials" button removed (Apr 28, 2026)

## Key Endpoints
- Auth: POST /api/auth/login, POST /api/auth/logout, GET /api/auth/me
- Blogs: GET/POST /api/blog/posts, GET/PUT/DELETE /api/blog/posts/{id}
- Users: GET/POST /api/users, PUT/DELETE /api/users/{id}
- Newsletter: POST /api/newsletter/subscribe, GET /api/newsletter/subscribers

## DB Schema
- users: {email, name, password_hash, role, created_at}
- blog_posts: {title, excerpt, content, category, author, readTime, image, date, created_at}
- newsletter_subscribers: {email, subscribed_at, status}

## Prioritized Backlog
- P1: UI review (user mentioned they want to check after full-stack is done)
- P2: Actual newsletter email service integration (currently just saves to DB)
- P2: Replace placeholder image with actual demo video when provided
