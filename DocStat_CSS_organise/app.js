// ===== 1. Icônes : <i data-i="search"></i> devient une icône =====
const FORMES = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  down: '<path d="M12 4v11M7 11l5 5 5-5M4 20h16"/>',
  up: '<path d="M12 16V4M7 9l5-5 5 5M4 20h16"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  pen: '<path d="M4 20h4L19 9l-4-4L4 16v4z"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  check: '<path d="m5 13 4 4 10-10"/>',
  x: '<path d="M6 6l12 12M18 6 6 18"/>',
  out: '<path d="M9 4H5v16h4M16 8l4 4-4 4M20 12H9"/>',
  inn: '<path d="M15 4h4v16h-4M10 17l5-5-5-5M15 12H3"/>',
  chev: '<path d="m6 9 6 6 6-6"/>',
  file: '<path d="M6 3h8l4 4v14H6zM14 3v4h4"/>',
  fchk: '<path d="M6 3h8l4 4v14H6zM14 3v4h4M9 14l2 2 4-4"/>',
  bld: '<path d="M4 21V8l8-5 8 5v13M9 21v-6h6v6M4 21h16"/>',
  usr: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 3-6 6.5-6s6.5 2.5 6.5 6M16 5a3.5 3.5 0 0 1 0 7M18 14c2.5.5 3.5 2.5 3.5 6"/>',
  shield: '<path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6z"/><path d="m9 12 2 2 4-4"/>',
  dash: '<rect x="3" y="3" width="7" height="9" rx="1"/><rect x="14" y="3" width="7" height="5" rx="1"/><rect x="14" y="12" width="7" height="9" rx="1"/><rect x="3" y="16" width="7" height="5" rx="1"/>',
  bar: '<path d="M4 20V10M10 20V4M16 20v-8M22 20H2"/>',
  ops: '<path d="M4 6h16M4 12h8M4 18h6"/><circle cx="17" cy="16" r="3"/><path d="m21 20-2-2"/>',
  act: '<path d="M3 12h4l3-8 4 16 3-8h4"/>',
  money: '<rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="3"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  calx: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M8 3v4M16 3v4M3 10h18M10 14l4 4M14 14l-4 4"/>',
  copy: '<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  ban: '<circle cx="12" cy="12" r="9"/><path d="m6 6 12 12"/>',
  pct: '<path d="M19 5 5 19"/><circle cx="7" cy="7" r="2.5"/><circle cx="17" cy="17" r="2.5"/>'
};
function icone(nom, taille) {
  const t = taille || 16;
  return `<svg width="${t}" height="${t}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${FORMES[nom]}</svg>`;
}
function iconify() {
  document.querySelectorAll("[data-i]").forEach(e => {
    e.className = "ico";
    e.innerHTML = icone(e.dataset.i, e.dataset.t);
  });
}

// ===== 2. Connexion =====
function seConnecter() {
  const ok = document.getElementById("utilisateur").value.trim() === "admin" &&
             document.getElementById("mdp").value === "admin123";
  if (ok) { localStorage.setItem("connecte", "oui"); window.location.href = "dashboard.html"; }
  else document.getElementById("erreur").style.display = "block";
}
function seDeconnecter() {
  localStorage.removeItem("connecte");
  window.location.href = "login.html";
}

// ===== 3. Barre du haut (écrite une seule fois, utilisée par toutes les pages) =====
function afficherEntete(active) {
  if (localStorage.getItem("connecte") !== "oui") { window.location.href = "login.html"; return; }
  const menu = [
    ["dashboard.html", "Tableau de bord", "dash"], ["statistiques.html", "Statistiques", "bar"],
    ["import.html", "Import", "up"], ["fichiers.html", "Fichiers", "file"],
    ["operations.html", "Opérations", "ops"], ["bureaux.html", "Bureaux", "bld"],
    ["qualite.html", "Qualité", "shield"], ["utilisateurs.html", "Utilisateurs", "usr"]
  ];
  let liens = "";
  for (const m of menu) {
    liens += `<a class="onglet ${m[0] === active ? "actif" : ""}" href="${m[0]}"><i data-i="${m[2]}" data-t="17"></i>${m[1]}</a>`;
  }
  document.getElementById("entete").innerHTML = `
    <div class="entete"><span class="logo">DocStat</span>${liens}
      <div class="profil">
        <div class="compte"><span class="avatar">AK</span><span><b>Amina K.</b><small>Administrateur</small></span><i data-i="chev"></i></div>
        <button class="sortie" onclick="seDeconnecter()"><i data-i="out"></i>Déconnexion</button>
      </div>
    </div>`;
  iconify();
}

// ===== 4. Puces (7 jours / 30 jours ...) : une seule active à la fois =====
function activerPuce(bouton) {
  bouton.parentElement.querySelectorAll(".puce").forEach(p => p.classList.remove("actif"));
  bouton.classList.add("actif");
}

// ===== 5. Graphique en lignes (SVG) =====
// series = [{ nom, valeurs, couleur, tirets }]
function graphique(id, labels, series, max) {
  const W = 640, H = 250, G = 56, HT = 16, B = 36;
  const x = i => G + i * (W - G - 16) / (labels.length - 1);
  const y = v => HT + (H - HT - B) * (1 - v / max);
  let s = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Graphique">`;
  for (let g = 0; g <= max; g += max / 4) {
    s += `<line x1="${G}" x2="${W - 16}" y1="${y(g)}" y2="${y(g)}" stroke="#e3e9f3"/>`;
    s += `<text x="${G - 8}" y="${y(g) + 4}" font-size="11" text-anchor="end" fill="#4a5b6c">${g}</text>`;
  }
  labels.forEach((l, i) => s += `<text x="${x(i)}" y="${H - 12}" font-size="11" text-anchor="middle" fill="#4a5b6c">${l}</text>`);
  for (const serie of series) {
    const pts = serie.valeurs.map((v, i) => x(i).toFixed(0) + "," + y(v).toFixed(0)).join(" ");
    s += `<polyline points="${pts}" fill="none" stroke="${serie.couleur}" stroke-width="3" stroke-dasharray="${serie.tirets || ""}" stroke-linejoin="round"/>`;
    serie.valeurs.forEach((v, i) => s += `<circle cx="${x(i)}" cy="${y(v)}" r="3.5" fill="${serie.couleur}"/>`);
  }
  document.getElementById(id).innerHTML = s + "</svg>";
}

// ===== 6. Bureaux : afficher, chercher, ajouter, supprimer =====
function afficherBureaux() {
  const texte = document.getElementById("recherche").value.toLowerCase();
  let lignes = "";
  bureaux.forEach((b, i) => {
    if ((b.nom + b.code + b.cp).toLowerCase().includes(texte)) {
      lignes += `<tr><td>${b.cp}</td><td>${b.code}</td><td>${b.nom}</td><td>${b.wilaya}</td>
        <td><span class="badge ${b.actif ? "vert" : "jaune"}">${b.actif ? "Actif" : "Désactivé"}</span></td>
        <td><button class="btn btn-rouge" onclick="supprimerBureau(${i})"><i data-i="trash"></i>Supprimer</button></td></tr>`;
    }
  });
  document.getElementById("corps").innerHTML = lignes || "<tr><td colspan='6'>Aucun bureau.</td></tr>";
  iconify();
}
function ajouterBureau() {
  const nom = document.getElementById("nom").value.trim(), code = document.getElementById("code").value.trim();
  if (!nom || !code) { alert("Le nom et le code comptable sont obligatoires."); return; }
  bureaux.push({ cp: document.getElementById("cp").value, code: code, nom: nom, wilaya: "Blida", actif: true });
  ["cp", "code", "nom"].forEach(id => document.getElementById(id).value = "");
  afficherBureaux();
}
function supprimerBureau(i) {
  if (confirm("Supprimer le bureau " + bureaux[i].nom + " ?")) { bureaux.splice(i, 1); afficherBureaux(); }
}

// ===== 7. Fichiers : recherche par nom, bureau et date =====
function remplirBureaux() {
  document.getElementById("bureau").innerHTML = "<option value=''>Tous</option>" + bureaux.map(b => `<option>${b.nom}</option>`).join("");
}
function afficherFichiers() {
  const nom = document.getElementById("nomf").value.toLowerCase(), bureau = document.getElementById("bureau").value;
  const du = document.getElementById("du").value, au = document.getElementById("au").value;
  let lignes = "", n = 0;
  for (const f of fichiers) {
    if (nom && !f.nom.toLowerCase().includes(nom)) continue;
    if (bureau && f.bureau !== bureau) continue;
    if (du && f.date < du) continue;
    if (au && f.date > au) continue;
    n++;
    lignes += `<tr><td>${f.nom}</td><td>${f.bureau}</td><td>${f.date.split("-").reverse().join("/")}</td>
      <td><a class="btn btn-gris" href="contenu.html"><i data-i="eye"></i>Ouvrir</a></td></tr>`;
  }
  document.getElementById("nb").textContent = n + " fichier(s) trouvé(s)";
  document.getElementById("corps").innerHTML = lignes || "<tr><td colspan='4'>Aucun fichier.</td></tr>";
  iconify();
}

// ===== 8. Contenu d'un fichier : recherche par opération =====
function afficherOperations() {
  const texte = document.getElementById("rech").value.toLowerCase(), cacher = document.getElementById("zero").checked;
  let lignes = "", derniere = "";
  for (const o of operations) {
    if (texte && !o.nom.toLowerCase().includes(texte)) continue;
    if (cacher && o.nb === 0) continue;
    if (o.section !== derniere) { lignes += `<tr class="section"><td colspan="3">${o.section}</td></tr>`; derniere = o.section; }
    lignes += `<tr><td>${o.nom}</td><td>${o.nb}</td><td>${o.montant}</td></tr>`;
  }
  document.getElementById("corps").innerHTML = lignes || "<tr><td colspan='3'>Aucune opération.</td></tr>";
}
