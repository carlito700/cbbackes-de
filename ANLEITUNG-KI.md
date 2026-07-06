# Anleitung für spätere KI-Anpassungen

Diese Datei zuerst lesen, bevor Änderungen an der Website gemacht werden.

## Architektur in einem Satz

Statisches HTML (eine Datei pro Seite), alle Designwerte als CSS-Variablen
in `css/theme.css`, Layout in `css/main.css`, Projektdaten als Liste in
`data/projects.js`. Kein Build-Schritt, kein Framework.

## Regeln

1. **Kein Framework, kein Build-Tool einführen.** Die Seite bleibt reines
   HTML/CSS/JS ohne Abhängigkeiten.
2. **Farben, Schriften, Abstände NUR in `css/theme.css` ändern.**
   Niemals Hex-Farben oder feste Größen direkt in HTML oder main.css
   hartkodieren.
3. **Header und Footer sind auf allen 6 HTML-Seiten identisch.**
   Wer die Navigation ändert, muss den Header-Block in ALLEN Dateien
   gleich anpassen (index, ueber-mich, projekte, cv, kontakt, impressum).
4. **`js/render-projects.js` nicht verändern**, außer die Kartenstruktur
   selbst soll sich ändern.

## Häufige Aufgaben — wo ändern?

| Aufgabe | Datei / Stelle |
|---|---|
| Claim/Untertitel ändern | `index.html`, Kommentar `CLAIM` |
| E-Mail-Adresse eintragen | `kontakt.html`, Kommentar `PLATZHALTER` |
| Instagram/LinkedIn ergänzen | `kontakt.html`, contact-list |
| Neue Projektkarte | `data/projects.js`, neuen Eintrag anhängen |
| CV-Eintrag ergänzen | `cv.html`, Block `.cv-entry` kopieren |
| CV-PDF verlinken | PDF nach `assets/cv/`, Link in `cv.html` einkommentieren |
| Akzentfarbe ändern | `css/theme.css`, `--color-accent` |
| Dark Mode aktivieren | `css/theme.css`, auskommentierten Block aktivieren |
| Text austauschen | jeweilige HTML-Datei, `<main>`-Bereich |
| Neue Unterseite | bestehende Seite (z. B. ueber-mich.html) kopieren, `<main>` ersetzen, Link in ALLEN Headern + `sitemap.xml` ergänzen |
| Navigation erweitern | Header-Block in ALLEN 6 HTML-Dateien |

## Checkliste nach jeder Änderung

- [ ] `aria-current="page"` zeigt auf jeder Seite auf den richtigen Nav-Link
- [ ] Keine hartkodierten Farben außerhalb von theme.css eingeführt
- [ ] Neue Seiten in sitemap.xml und in allen Headern ergänzt
- [ ] Seite lokal geöffnet und geprüft (auch mobil/schmales Fenster)
