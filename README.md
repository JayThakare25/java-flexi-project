# Hotel Booking System — Auth Skeleton

Uses your exact structure with MERN, JWT auth, and protected routes.

## Prerequisites
- Node.js 18+
- MongoDB running locally

## Setup

### Backend
```bash
cd backend
npm install
npm run dev
```

### Frontend
```bash
cd ../frontend
npm install
npm run dev
```

Open http://localhost:5173

### Auth Endpoints
- POST /api/auth/register  { name, email, password }
- POST /api/auth/login     { email, password }

Protected test route:
- GET /api/protected/ping  with `Authorization: Bearer <token>`

## Extend later
- Add Hotel and Booking models and routes.
- Add pages for Hotel List, Hotel Details, My Bookings.
