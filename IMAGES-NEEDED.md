# Images Needed

The four newest projects are structured and ready in the data layer, but have no screenshots
yet. Each shows an "Image coming soon" placeholder until you add the file and wire it up.
Here's exactly what to add and where.

## 1. Add the screenshot files

Drop these into `src/assets/` (any of these formats work: `.webp` recommended for file size,
`.png`/`.jpg` also fine):

| Project | Suggested filename | Recommended size |
|---|---|---|
| Corrective Cooling | `corrective-cooling.webp` | 1600 x 1000px (16:10), under 300KB |
| Triad Printing NC | `triad-printing.webp` | 1600 x 1000px (16:10), under 300KB |
| Education Aboard (Scholar Passport) | `education-aboard.webp` | 1600 x 1000px (16:10), under 300KB |
| The Venues at The Factory | `venues-at-the-factory.webp` | 1600 x 1000px (16:10), under 300KB |

Screenshot tip: capture the homepage hero section (top of the page), not a scrolled-down
view, since the same image is also used as the project detail hero and should read well
cropped to `object-top`.

## 2. Import and map them

Open `src/data/imageMap.js` and:

1. Add an import at the top, matching the filename you used, for example:
   ```js
   
   ```
2. Add each one to the `imageMap` object (the keys already exist as commented placeholders,
   just uncomment and fill them in):
   ```js
   const imageMap = {
     // ...existing entries
     correctiveCooling,
     triadPrinting,
     educationAboard,
     venuesAtTheFactory,
   };
   ```

That's it. `src/data/projects.js` already references these exact `imageKey` values
(`correctiveCooling`, `triadPrinting`, `educationAboard`, `venuesAtTheFactory`), so once the
map has a real import, the placeholder disappears everywhere the project appears: the
homepage featured grid, the Projects page, and the project's own detail page.

## Optional: compress existing images

A few of the pre-existing project screenshots in `src/assets` are large PNGs (some over 1.5MB):
`wanderlust.png`, `maply.png`, `advantage-property.png`, `quiz-platform.png`, and `medicare.png`.
Converting these to `.webp` at similar dimensions would meaningfully improve page load time
and Core Web Vitals without any visible quality loss. Not required, but worth doing when you
have a spare few minutes.
