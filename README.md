# Portfolio — ANDRIATAHIANA Sandratra Josiah

Personal portfolio website inspired by Apple's iOS 26 "Liquid Glass" design language: frosted glass
panels, soft shadows, floating cards, animated gradients and smooth motion. Built with React, Vite
and Framer Motion — JavaScript only, no TypeScript, no Tailwind.

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (usually http://localhost:5173).

Other scripts:

```bash
npm run build     # production build in dist/
npm run preview   # serve the production build locally
npm run lint      # ESLint
```

## Project structure

```
public/
  cv.pdf              # CV served at /cv.pdf (placeholder, replace it)
  favicon.svg
  og-image.svg        # social preview image
src/
  assets/
    profile.svg       # profile photo placeholder
  components/
    background/       # gradient, blobs, particles, mouse glow
    layout/           # loader, navbar, dock, cursor, scroll progress, footer
    ui/               # reusable pieces: GlassCard, LiquidButton, Reveal, counters, progress
  data/
    navigation.js     # sections shown in the navbar and the dock
    portfolio.js      # all the content of the website
  hooks/
    useActiveSection.js
  sections/           # one file + one CSS module per section of the page
  styles/
    global.css        # design tokens, resets, shared helpers
  App.jsx
  main.jsx
```

Every component has its own CSS module next to it, so styles never leak between sections.
All the text, skills, projects and contact details live in `src/data/portfolio.js` — that is the only
file to edit when the content changes.

## Replace the profile picture

1. Put your photo in `src/assets/` (for example `profile.jpg`, portrait ratio 3:4, around 900×1200).
2. Open `src/sections/Hero.jsx` and change the import:

```js
import profilePhoto from '../assets/profile.jpg'
```

The placeholder `profile.svg` can then be deleted.

## Add a screenshot to a project card

Each project card shows a gradient placeholder until an image is provided.

1. Save the screenshot in `src/assets/projects/` (for example `bloom.png`). A 16:10 or 3:2 image
   around 1200 px wide looks best.
2. Open `src/data/portfolio.js`, import the file at the top and set it on the project:

```js
import bloomImage from '../assets/projects/bloom.png'

export const projects = [
  {
    title: 'Bloom',
    image: bloomImage,
    // ...
  },
]
```

Leave `image: null` to keep the placeholder. Imported images are optimised by Vite at build time.

## Replace the CV

Put your PDF in `public/` and name it `cv.pdf`, replacing the placeholder file. The Hero button
points to `/cv.pdf`, so nothing else has to change. To use another name, update the `href` of the
"Download CV" button in `src/sections/Hero.jsx`.

## Deploy to Vercel

1. Push the project to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repository.
3. Vercel detects Vite automatically. Confirm the settings:
   - Framework preset: **Vite**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every push to the main branch then triggers a new deployment.

The CLI works too:

```bash
npm i -g vercel
vercel        # preview deployment
vercel --prod # production deployment
```

After the first deployment, update the `og:url` and canonical URL in `index.html` with the real
domain so link previews and SEO point to the right address.

## Notes

- Dark mode only, by design.
- Sections below the fold are lazy loaded with `React.lazy` to keep the first load light.
- Animations respect `prefers-reduced-motion`.
- The custom cursor, dock and mouse glow are hidden on touch and small screens.
