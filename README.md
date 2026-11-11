# Jano — Web Portfolio

Single-page portfolio built with Next.js 16, React 19, and Tailwind CSS 4.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customize content

| What | File |
|------|------|
| Bio, email, socials, skills | [`src/data/site.ts`](src/data/site.ts) |
| Projects | [`src/data/projects.ts`](src/data/projects.ts) |
| Personal photos | [`src/data/photos.ts`](src/data/photos.ts) |
| Dog photos | [`src/data/dogs.ts`](src/data/dogs.ts) |
| Images | `public/images/` |

Replace `TODO:` values — links stay hidden until you do.

**Images:** Demo photos use [Unsplash](https://unsplash.com) URLs in `src/data/*.ts`. Swap them for files in `public/images/` when you have your own (works offline, no config needed).

Add your resume at `public/resume.pdf` for the Resume button.

## Environment

Copy `.env.example` to `.env.local` and set your public URL when you host the site:

```bash
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

This powers Open Graph previews, `sitemap.xml`, and `robots.txt`.

## Scripts

```bash
npm run dev    # local development
npm run build  # production build
npm run start  # serve production build locally
npm run lint   # ESLint
```

## Deploy later (optional)

When ready, build and deploy to any static-friendly Next host (Vercel, Netlify, etc.):

1. Set `NEXT_PUBLIC_SITE_URL` to your live domain.
2. Run `npm run build` — fix any errors before deploying.
3. Connect the repo to your host of choice.

No deployment is required for local development or interview demos — `npm run dev` is enough.
