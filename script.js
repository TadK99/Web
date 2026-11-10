let filtres = ["theme", "public", "niveau", "langue", "format"];

function filtrer() {
  let bds = document.querySelectorAll(".bd");
  let compteur = 0;

  bds.forEach(function(bd) {
    let ok = true;
    filtres.forEach(function(f) {
      let valeur = document.getElementById(f).value;
      if (valeur && bd.dataset[f] != valeur) {
        ok = false;
      }
    });
    bd.style.display = ok ? "block" : "none";
    if (ok) compteur++;
  });

  document.getElementById("rien").className = compteur == 0 ? "" : "cache";
}

filtres.forEach(function(f) {
  document.getElementById(f).addEventListener("change", filtrer);
});

function reponse(bouton, juste) {
  let resultat = document.getElementById("resultat");
  if (juste) {
    resultat.textContent = "Bravo ! Le CO₂ garde la chaleur autour de la Terre, comme une couverture.";
    bouton.style.background = "green";
  } else {
    resultat.textContent = "Pas tout à fait, réessaie !";
    bouton.style.background = "red";
  }
}
