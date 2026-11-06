# MOVIE PORTAL Implementation Plan

MOVIE PORTAL is a full-stack movie streaming portal.

## Architecture & Tech Stack
- Frontend: React + Vite + Tailwind CSS + Lucide React
- Backend: Firebase (Auth, Firestore, Storage) + Vercel Serverless Functions
- PWA: Offline capability, manifest, service worker

## Phases
1. **Foundation & Auth**: Firebase initialization, React Router setup, Auth UI (Login/Register/Google), Protected Routes.
2. **Database & Admin**: Firestore data modeling, Admin Dashboard (CRUD movies/categories), Security Rules.
3. **Frontend Core**: Home page (Featured/Trending/etc), Search/Filtering, Movie Details page.
4. **PWA & Polish**: Manifest, Service worker, Offline fallback, Responsive design.
5. **Deployment**: GitHub repo setup, Vercel configuration, README documentation.

## Security
- Admin access restricted by Custom Claims (`isAdmin` claim).
- Admin dashboard only accessible to `movieboxproapp0011@gmail.com`.
- Firestore Rules enforcing ABAC and zero-trust.
