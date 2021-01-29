// EXERCICE : FORMULAIRE DE CONVERSION

// gérer l'event click sur le bouton "euros->francs"
// cible : le bouton d'id "versfrancs"
// event : clic
// action : convertir en francs

let cible1 = document.getElementById("versfrancs");

cible1.addEventListener("click", conversionFrancs);

function conversionFrancs(event) {
  // récupérer la valeur saisie
  let valEuro = document.getElementById("valeur").value;
  // faire la conversion
  let valFranc = valEuro * 6.55;
  // afficher le résultat
  document.getElementById("resultat").value = valFranc;
}

// gérer l'event click sur le bouton "francs->euros"
// cible : le bouton d'id "verseuros"
// event : clic
// action : convertir en euros

let cible2 = document.getElementById("verseuros");

cible2.addEventListener("click", conversionEuros);

function conversionEuros(event) {
  // récupérer la valeur saisie
  let valFranc = document.getElementById("valeur").value;
  // faire la conversion
  let valEuros = valFranc / 6.55;
  // afficher le résultat
  document.getElementById("resultat").value = valEuros;
}

// EXERCICE : VERIFICATION SAISIE

// gérer la saisie d'un mot de passe
// cible : la zone de saisie
// event : la saisie d'un caractère -> input
// action : vérifier la longueur du mot de passe

let cible3 = document.getElementById("passwd");

cible3.addEventListener("input", verifSaisie);

function verifSaisie(event) {
  // récupérer la valeur saisie
  let val = document.getElementById("passwd").value.length;
  if (val < 4) {
    document.getElementById("msgPasswd").textContent = "longueur faible";
    document.getElementById("msgPasswd").style.color = "red";
  }
  if (val > 4 && val < 8) {
    document.getElementById("msgPasswd").textContent = "longueur moyenne";
    document.getElementById("msgPasswd").style.color = "orange";
  }
  if (val > 8) {
    document.getElementById("msgPasswd").textContent = "longueur bonne";
    document.getElementById("msgPasswd").style.color = "green";
  }
}
