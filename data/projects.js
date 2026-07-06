/* ============================================================
   projects.js — PROJEKTDATEN
   Neues Projekt hinzufügen: einfach einen weiteren Eintrag
   { ... } an die Liste anhängen. Sonst nichts nötig —
   projekte.html erzeugt die Karten automatisch.

   Felder:
   titel     (Pflicht)  Projekttitel
   kurz      (Pflicht)  1–2 Sätze Beschreibung
   jahr      (Pflicht)  z. B. "2026" oder "seit 2025"
   status    (Pflicht)  z. B. "In Arbeit", "Geplant", "Abgeschlossen"
   kategorie (Pflicht)  z. B. "Kunsthistorische Texte"
   link      (Optional) URL — weglassen oder null, wenn keiner existiert
   ============================================================ */

const PROJECTS = [
  {
    titel: "Kunsthistorische Texte",
    kurz: "Essays und kürzere Texte zu Kunstgeschichte und Kunstmarkt. Erste Beiträge folgen.",
    jahr: "2026",
    status: "Geplant",
    kategorie: "Texte",
    link: null
  },
  {
    titel: "Galerie- und Kunstmarktprojekte",
    kurz: "Projekte aus der Galeriearbeit und Beobachtungen zum Kunstmarkt.",
    jahr: "seit 2025",
    status: "In Arbeit",
    kategorie: "Kunstmarkt",
    link: null
  },
  {
    titel: "Digitale Formate",
    kurz: "Instagram- und Videoformate, die Kunstgeschichte zugänglich erzählen.",
    jahr: "2026",
    status: "Geplant",
    kategorie: "Digital",
    link: null
  }
];
