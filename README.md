# Seoul Stories

A Korean drama discovery site built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000). Run `npm run build` to verify a production build.

The site works immediately with 12 sample dramas and original SVG artwork. No API key is needed for the sample catalog. Ratings are illustrative sample values.

## TMDB adapter

Copy `.env.example` to `.env.local` and set `TMDB_API_KEY` to a TMDB v4 API Read Access Token. Server-side helpers in `src/lib/tmdb.ts` provide show search, detail retrieval, and TMDB image URL construction. The current pages use `src/data/dramas.ts` and `src/data/actors.ts`; these are the swap points for a live catalog.

`next.config.ts` allows images from `image.tmdb.org`. Sample art is generated with `python3 scripts/generate_art.py` into `public/art/`.
