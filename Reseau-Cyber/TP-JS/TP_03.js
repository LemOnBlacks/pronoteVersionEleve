function exo1() {
    if (new Date().getHours() < 18) { alert("Bonne journée!"); } else { alert("Bonne soirée!") }
}

function exo2() {
    // Affiche message de confirmation
    if (confirm("Cette page indique" + "\n" + "Voulez-vous poursuivre?")) {
        alert("Super!")
    } else {
        alert("Dommage!")
    }
}

function exo3() {
    // Affiche plusieurs messages de confimation
    if (confirm("Cette page indique: " + "\n" + "Aimez-vous le JavaScript?")) {
        if (confirm("Cette page indique: " + "\n" + "Voulez-vous poursuivre?")) {
            alert("Super!")
        } else {
            alert("Dommage!")
        }
    } else {
        alert("Dommage!")
    }
}

function exo4() {
    // Affiche les variables
    var x = prompt("Donnez moi un nombre ENTIER: "),
        y = prompt("Donnez moi un autre nombre ENTIER: "),
        z = x + y,
        w = z % 2;

    // Debut du script
    if (w == 0) {
        alert("La somme de vos deux nombres est paire.")
    } else {
        alert("La somme de vos deux nombres est impaire.")
    }
}

function exo5() {
    // Affiche les variables
    var p = prompt("Quel est le montant de la facture? ");
    const red = 0.05;
    ty = p * red;
    yt = p - ty;

    // Debut du script
    if (p > 500) {
        alert("Vous devez payer: " + yt);
    } else {
        alert("Vous devez payer: " + p)
    }
}

function exo6() {
    // Affiche les variables
    var g = prompt("Montant de la commande: ");
    const ju = 0.05;
    ku = 0.10;
    var li = g - g * ju;
    var lo = g - g * ku;

    // Debut de l'algorithme
    if (g >= 10000) {
        if (g <= 25000) {
            alert("Vous devez payer:" + "\n" + li + "EUROS");
        } else {
            alert("Vous devez payer:" + "\n" + lo + "EUROS");
        }
    } else {
        alert("Vous devez payer:" + "\n" + g + "EUROS");
    }
}

function exo7() {
    // Affiche les variables
    var bu = prompt("Donnez moi un nombre: ");
    var cv = prompt("Donnez moi un autre nombre: ");
    var mp = prompt("Donnez moi un dernier nombre: ");

    // Debut du script
    alert("Le nombre le plus grand est: " + Math.max(bu, cv, mp));
}

function exo8() {
    //Affiche les variables
    var jour = prompt("Donnez moi un jour: ");
    var mois = prompt("Donnez moi un mois: ");
    var annees = prompt("Donnez moi une année: ");
    var heure = prompt("Donnez moi une heure: ");
    var minutes = prompt("Donnez moi une minute: ");
    var valide;

    // fevrier
    if ((jour < 1) && (jour > 28) && (isNaN(jour)) && (mois == 2)) { valide = false; } else if ((jour < 1) && (jour > 30) && (isNaN(jour)) && ((mois == 4) || (mois == 6) || (mois == 9) || (mois == 11))) { valide = false; } else if ((jour < 1) && (jour > 31) && (isNaN(jour)) && ((mois == 1) || (mois == 3) || (mois == 5) || (mois == 7) || (mois == 8) || (mois == 10) || (mois == 12))) { valide = false; } else if (isNaN(annees)) { valide = false; } else if ((mois < 1) || (mois > 12) || (isNaN(mois))) { valide = false; } else if ((heure < 1) || (heure > 23) || (isNaN(heure))) { valide = false; } else if ((minutes < 1) || (minutes > 59) || (isNaN(minutes))) { valide = false; } else { valide = true; }

    if (valide) {
        alert(jour + "/" + mois + "/" + annees + ", " + heure + "h" + minutes);
    } else {
        alert("ERROR_404");
    }
}