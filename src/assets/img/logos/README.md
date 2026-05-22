---
permalink: false
eleventyExcludeFromCollections: true
---

# Client logo files

Drop logo files in this folder using the filenames below. PNG with transparent background is fine. SVG is better if you have it (rename the extension in `src/_data/logos.js` to match).

Expected files:

- `national-archives.png`
- `mind.png`
- `gstt.png`
- `oxfam.png`
- `breast-cancer-now.png`
- `islamic-relief.png`
- `frc.png`
- `nih.png`
- `nasa-jpl.png` (NASA JPL is rendering as text until this file is in place)

Sizing tips: aim for roughly 200 to 400 pixels wide with a transparent background. The CSS clamps every logo to 3.5rem (56px) tall and centres them in the grid.

If you remove or rename a file, also update `src/_data/logos.js` to match.
