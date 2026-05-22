---
permalink: false
eleventyExcludeFromCollections: true
---

# Case study images

Drop images for each case study into the matching subfolder. Use descriptive lowercase filenames with hyphens, no spaces. PNG, JPG or WebP all work. WebP is smallest if you have a converter; PNG is fine.

```
amnesty/
hearing-dogs/
gstt/
start-network/
london-museum/
nms/
```

Recommended sizing: roughly 1600 pixels wide, JPEG quality 80 or thereabouts. The CSS scales them down to fit the reading column, so anything bigger is wasted bytes and anything much smaller will look soft.

When you want one added to a case study, tell Cassie (Claude) the filename, which case study, where roughly it should sit (before or after which paragraph or section), and a one-line description of what's in the image so the alt text is accurate.

Example: "Add `amnesty/audience-map.jpg` to the Amnesty case study, after the 'What I did' section. Alt text: a hand-drawn audience map showing six supporter segments arranged around a central node."
