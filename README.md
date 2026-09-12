# Ganpati Invitation Website

## Setup

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # optional: preview the production build locally
```

## Editing your invitation details

Everything you'll want to change — family name, dates, timings, address,
Google Maps link, contact number, invitation wording — lives in one file:

```
src/data/config.js
```

Nothing else needs to change.

## Deploying to Vercel

1. Push this project to a GitHub repo.
2. Go to vercel.com → **New Project** → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output
   directory `dist` (Vercel detects these automatically).
4. Deploy. Your link will be `https://your-project.vercel.app`.

Optional: replace `public/og-image.jpg` with a real 1200×630 image before
sharing the link on WhatsApp/Instagram, so the social preview looks right.
(`index.html` already references `/og-image.jpg` — if you skip this, remove
that meta tag or the preview image will 404.)

## Project structure

```
src/
├── components/     # GanpatiMark, Mushak, Nav, Particles, Entrance
├── sections/       # Arrival (hero), InvitationSection, Details, HomeLocation, Footer
├── data/config.js  # ← edit this for all your content
├── App.jsx
├── main.jsx
└── index.css
```
