// Client logo wall. Each entry references an image file in
// /assets/img/logos/. The optional `scale` field corrects for logos
// with different amounts of internal whitespace. Default is 1.
// Eight logos arranged as 4 + 4 on desktop.

module.exports = [
  { name: "The National Archives", file: "national-archives.png", scale: 1.2 },
  { name: "Mind", file: "mind.png", scale: 2.4 },
  { name: "Guy's and St Thomas' NHS Foundation Trust", file: "gstt.png", scale: 1.0 },
  { name: "Oxfam", file: "oxfam.png", scale: 0.7 },
  { name: "Breast Cancer Now", file: "breast-cancer-now.png", scale: 1.1 },
  { name: "Amnesty International", file: "amnesty-international.png", scale: 0.85 },
  { name: "National Institutes of Health", file: "nih.png", scale: 1.0 },
  { name: "NASA JPL", file: "nasa-jpl.png", scale: 1.0 }
];
