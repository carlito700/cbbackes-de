# cbbackes.de — Persönliche Website von Carl Backes

Statische Website ohne Build-Schritt, ohne Framework, ohne externe
Abhängigkeiten. Jede Datei ist direkt lesbar und editierbar.

## Dateistruktur

```
cbbackes-de/
├── index.html            Startseite (Name, Claim, Einstieg)
├── ueber-mich.html       Profiltext
├── projekte.html         Projektübersicht (Karten aus data/projects.js)
├── cv.html               Lebenslauf (Studium, Stationen, Skills, PDF vorbereitet)
├── kontakt.html          Kontaktangaben (E-Mail, Instagram, LinkedIn)
├── impressum.html        Impressum (Platzhalter — vor Launch füllen!)
├── 404.html              Fehlerseite
├── css/
│   ├── theme.css         ALLE Designwerte (Farben, Schrift, Abstände, Dark Mode)
│   └── main.css          Layout & Komponenten (nutzt nur theme.css-Variablen)
├── data/
│   └── projects.js       Projektliste — hier neue Projekte eintragen
├── js/
│   └── render-projects.js  Erzeugt Projektkarten (i. d. R. nicht anfassen)
├── assets/
│   ├── favicon.svg
│   └── cv/               Hier später carl-backes-cv.pdf ablegen
├── CNAME                 Domain für GitHub Pages (cbbackes.de)
├── .nojekyll             Verhindert Jekyll-Verarbeitung bei GitHub Pages
├── robots.txt / sitemap.xml   SEO-Basics
├── README.md             Diese Datei
└── ANLEITUNG-KI.md       Regeln für spätere KI-Bearbeitung
```

## Lokal starten

Doppelklick auf `index.html` reicht für Texte/Design. Damit auch die
Projektkarten sicher laden, besser einen Mini-Server starten:

```
cd cbbackes-de
python -m http.server 8000
```

Dann http://localhost:8000 öffnen.

## Online stellen (GitHub Pages)

1. Kostenloses Konto auf github.com anlegen (falls nicht vorhanden).
2. Neues Repository erstellen, z. B. `cbbackes-de` (Public).
3. Alle Dateien dieses Ordners hochladen (Web-Oberfläche: "uploading an
   existing file" — oder per Git: `git init`, `git add .`, `git commit`,
   `git push`).
4. Im Repository: **Settings → Pages → Source: Deploy from a branch**,
   Branch `main`, Ordner `/ (root)` wählen, speichern.
5. Nach 1–2 Minuten ist die Seite unter
   `https://BENUTZERNAME.github.io/cbbackes-de/` erreichbar.

## Domain cbbackes.de verbinden

1. Im Repository unter **Settings → Pages → Custom domain**: `cbbackes.de`
   eintragen (die CNAME-Datei liegt schon im Repo).
2. Beim Domain-Anbieter (wo cbbackes.de registriert ist) im DNS:
   - **A-Records** für `cbbackes.de` (Apex) auf diese vier IPs setzen:
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - **CNAME-Record** für `www` auf `BENUTZERNAME.github.io` setzen.
3. Zurück in GitHub Pages: nach der DNS-Prüfung (kann bis 24 h dauern)
   **"Enforce HTTPS"** aktivieren.

## Vor dem Launch ersetzen

- [ ] E-Mail-Adresse in `kontakt.html` (Platzhalter `mail@cbbackes.de`)
- [ ] Instagram-/LinkedIn-Links in `kontakt.html`
- [ ] Impressum in `impressum.html` (Name, Anschrift, E-Mail)
- [ ] CV-Einträge in `cv.html` (Zeiträume, Universität, Rolle)
- [ ] Projekte in `data/projects.js` konkretisieren
- [ ] Optional: Claim in `index.html` anpassen
- [ ] Optional: CV-PDF unter `assets/cv/carl-backes-cv.pdf` + Link in cv.html einkommentieren
