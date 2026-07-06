/* ============================================================
   render-projects.js — erzeugt die Projektkarten
   Liest die Liste PROJECTS aus data/projects.js und baut für
   jeden Eintrag eine Karte in #projekt-liste (projekte.html).
   Diese Datei muss normalerweise NICHT geändert werden —
   neue Projekte kommen in data/projects.js.
   ============================================================ */

(function () {
  const liste = document.getElementById("projekt-liste");
  if (!liste || typeof PROJECTS === "undefined") return;

  PROJECTS.forEach(function (p) {
    const li = document.createElement("li");
    li.className = "project-card";

    const h3 = document.createElement("h3");
    if (p.link) {
      const a = document.createElement("a");
      a.href = p.link;
      a.textContent = p.titel;
      h3.appendChild(a);
    } else {
      h3.textContent = p.titel;
    }

    const meta = document.createElement("p");
    meta.className = "meta";
    meta.append(p.kategorie + " · " + p.jahr + " · ");
    const status = document.createElement("span");
    status.className = "status";
    status.textContent = p.status;
    meta.appendChild(status);

    const text = document.createElement("p");
    text.textContent = p.kurz;

    li.append(h3, meta, text);
    liste.appendChild(li);
  });
})();
