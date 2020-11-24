function ex1() {
    // Affiche les variables
    var PrixHT;
    var TauxTVA = 0.196;
    var PrixHT = prompt("Entrez un prix en Eur: ");

    // Debut du script
    alert("Le montant de TVA correspondant en euros est: " + PrixHT * TauxTVA);
}
function ex2() {
    // Affiche les constantes
    var jourNaissance = prompt("Quel est ton jour de naissance? (jj)");
    var moisNaissance = prompt("Quel est ton mois de naissance? (mm)");
    var anneeNaissance = prompt("Quelle est ton année de naissance? (aaaa)");

    if ((jourNaissance > 1) && (jourNaissance < 31) && (moisNaissance > 1) && (moisNaissance < 13)) { alert("Tu es né le: " + jourNaissance + "/" + moisNaissance + "/" + anneeNaissance); }
    else { alert("ERROR_404: Vous avez un QI négatif..."); }

}
function ex3() {
    // Affiche les const
    var anneeNaissance = prompt("Quelle est ton année de naissance?");
    var anneeActuelle = prompt("En quelle année sommes nous? ");
    var differenceAnnee = anneeActuelle - anneeNaissance;

    if (anneeActuelle > anneeNaissance) { alert("Vous avez, ou aurez dans l'année " + differenceAnnee + " ans"); }
    else { alert("Tu peux pas être né après une année qui n'est pas encore passée..."); }
}
function ex4() {
    // Affiche les constantes
    var marqueVoiture = prompt("Quel est la marque de la voiture?");
    var consommationMoyenne = prompt("Quel est la consommation moyenne pour 100 km?");
    var prixLitreCarburant = prompt("Quel est le coût du litre de carburant utilisé? ");
    var nombresKmEffectues = prompt("Quel est le nombre de kilomètres effectués?");
    var sommes = (nombresKmEffectues * consommationMoyenne) / 100;
    var prix = sommes * prixLitreCarburant;

    // Debut du script
    alert("Le coût total pour un parcours de " + nombresKmEffectues +
        " km efféctué avec un véhicule de la marque " + marqueVoiture + " consommant " + consommationMoyenne +
        "\n litres pour 100 km en moyenne dont le prix au litre du carburant est " + prixLitreCarburant + " est de " + prix + " euros.");
}
function ex5() {
    // Affiche les constantes
    var montantAchat = prompt("Quel est le montant de vos achats?");
    var montantRemise = montantAchat * 0.05;
    var montantTotal = montantAchat - montantRemise;

    // Debut du script
    alert("Le montant de la remise est de: " + montantRemise + "\n Le motant de vos achats après réduction est de: " + montantTotal);
}
function ex6() {
    // Affiche les constantes
    var cg_c = 2;
    var ang_c = 2;
    var math_c = 3;
    var cejm_c = 3;
    var e4_c = 4;
    var e5_c = 4;
    var e6_c = 4;
    var cg = prompt("Ta note en Culture General: ");
    var ang = prompt("Ta note en Anglais: ");
    var math = prompt("Ta note en math: ");
    var cejm = prompt("Ta note en CEJM: ");
    var e4 = prompt("Ta note en E4: ");
    var e5 = prompt("Ta note en E5: ");
    var e6 = prompt("Ta note en E6: ");
    var c_tt = ang_c + cg_c + math_c + cejm_c + e4_c + e5_c + e6_c;
    var re = (cg * cg_c) + (ang * ang_c) + (math * math_c) + (cejm * cejm_c) + (e4 * e4_c) + (e5 * e5_c) + (e6 * e6_c);
    var moy = re / c_tt;

    alert("Culture générale: " + cg + "\n Anglais: " + ang +
        "\n Mathématiques " + math + "\n Economie-Droit: " + cejm +
        "\n Epreuve E4: " + e4 + "\n Epreuve E5: " + e5 +
        "\n Epreuve E6: " + e6 + "\n Votre moyenne: " + moy);
}
function ex7() {
    // Affiche les variables
    var sec = prompt("Indiquez le temps en seconde: ");
    var minute = sec / 60;
    var heure = minute / 60;

    // Debut du script
    alert(sec + " secondes equivaut à " + minute + " minutes et à " + heure + "heures");
}
function ex8() {
    // Affiche les variables
    var heureDebut = prompt("Heure de debut: ");
    var fin = prompt("Heure de fin: ");
    var inter = fin - heureDebut;
    var minute2 = inter * 60;
    var seconde2 = minute2 * 60;


    // Debut du script
    if (inter > 0) {
        alert("L'évenement a duré " + inter + " heures soit " + minute2 + " minutes ou bien " + seconde2 + " secondes.");
    }
    else {
        alert("Utiliser la machine à remonter le temps");
    }
}
