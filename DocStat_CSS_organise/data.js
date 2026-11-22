// ===== Données d'exemple (fausses) : plus tard, elles viendront de la base =====
const bureaux = [
  { cp: "09000", code: "09100", nom: "BLIDA-RP",        wilaya: "Blida", actif: true },
  { cp: "09001", code: "09101", nom: "BOUFARIK-RP",     wilaya: "Blida", actif: true },
  { cp: "09002", code: "09102", nom: "MEFTAH",          wilaya: "Blida", actif: true },
  { cp: "09003", code: "09103", nom: "BOUGARA",         wilaya: "Blida", actif: true },
  { cp: "09004", code: "09104", nom: "MOUZAIA",         wilaya: "Blida", actif: true },
  { cp: "09005", code: "09105", nom: "CHIFFA",          wilaya: "Blida", actif: true },
  { cp: "09006", code: "09106", nom: "HAMMAM MELOUANE", wilaya: "Blida", actif: true }
];
const fichiers = [
  { nom: "09100_2026-11-13.xlsx", bureau: "BLIDA-RP",    date: "2026-11-13" },
  { nom: "09100_2026-11-12.xlsx", bureau: "BLIDA-RP",    date: "2026-11-12" },
  { nom: "09101_2026-11-13.xlsx", bureau: "BOUFARIK-RP", date: "2026-11-13" },
  { nom: "09101_2026-11-12.xlsx", bureau: "BOUFARIK-RP", date: "2026-11-12" },
  { nom: "09102_2026-11-13.xlsx", bureau: "MEFTAH",      date: "2026-11-13" },
  { nom: "09103_2026-11-11.xlsx", bureau: "BOUGARA",     date: "2026-11-11" }
];
const jours = ["07/11", "08/11", "09/11", "10/11", "11/11", "12/11", "13/11"];
const operations = [
  { section: "CHÈQUES POSTAUX", nom: "Paiement à vue",        nb: 259, montant: "10 046 900,00" },
  { section: "CHÈQUES POSTAUX", nom: "Retrait à vue",         nb: 0,   montant: "0,00" },
  { section: "CHÈQUES POSTAUX", nom: "Retrait espèces",       nb: 44,  montant: "1 512 200,00" },
  { section: "CHÈQUES POSTAUX", nom: "Chèque Secours",        nb: 17,  montant: "256 900,00" },
  { section: "CHÈQUES POSTAUX", nom: "Versement Accéléré",    nb: 2,   montant: "68 000 000,00" },
  { section: "ENCAISSEMENTS",   nom: "Encaissements SONELGAZ", nb: 4,  montant: "12 691,97" },
  { section: "ENCAISSEMENTS",   nom: "Encaissements SEAAL",   nb: 0,   montant: "0,00" },
  { section: "MONÉTIQUE",       nom: "Opérations DAB GAB",    nb: 457, montant: "9 876 000,00" },
  { section: "MONÉTIQUE",       nom: "Opérations TPE Cash",   nb: 12,  montant: "250 100,00" },
  { section: "MANDATS",         nom: "Emission mandats 1421", nb: 8,   montant: "0,00" },
  { section: "DIVERS",          nom: "Code Internet",         nb: 6,   montant: "0,00" },
  { section: "DIVERS",          nom: "Commande Carnets",      nb: 12,  montant: "0,00" }
];
