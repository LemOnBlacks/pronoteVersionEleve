function exos1() {
    // By Guery
    var heure = new Date().getHours();
    var day;
    var d = new Date();
    var heurePrecise = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

    if (heure > 18) {

        switch (new Date().getDay()) {
            case 0:
                day = "Bonsoir, nous somme dimanche";
                break;
            case 1:
                day = "Bonsoir, nous somme lundi";
                break;
            case 2:
                day = "Bonsoir, nous somme mardi";
                break;
            case 3:
                day = "Bonsoir, nous somme mercredi";
                break;
            case 4:
                day = "Bonsoir, nous somme jeudi";
                break;
            case 5:
                day = "Bonsoir, nous somme vendredi";
                break;
            case 6:
                day = "Bonsoir, nous somme samedi";
        }
    }
    else {
        switch (new Date().getDay()) {
            case 0:
                day = "Bonjour, nous somme dimanche";
                break;
            case 1:
                day = "Bonjour, nous somme lundi";
                break;
            case 2:
                day = "Bonjour, nous somme mardi";
                break;
            case 3:
                day = "Bonjour, nous somme mercredi";
                break;
            case 4:
                day = "Bonjour, nous somme jeudi";
                break;
            case 5:
                day = "Bonjour, nous somme vendredi";
                break;
            case 6:
                day = "Bonjour, nous somme samedi";
        }
    }
    alert(day + ", il est " + heurePrecise);
}
function exos2() {
    var x = prompt("Donnez moi un premier nombre: ");
    var y = prompt("Donnez moi un deuxieme nombre: ");
    var z = prompt("Donnez moi un troisieme nombre: ");
    var trois = 3;
    var deux = 2;
    var zero = 0;

    if ((x == y) && (y == z)) { alert("Il y a " + trois + " nombres correspondants"); }
    else if (x == y || x == z || y == z) { alert("Il y a " + deux + " nombres correspondants"); }
    else { alert("Il y a " + zero + " nombre correspondant"); }
}
function exos3() {
    var age = prompt("Donnez moi un âge plus petit ou égal à 16 ans: ");

    if ((age >= 6) && (age <= 7)) { alert("Vous êtes en mini-poussin"); }
    if ((age >= 8) && (age <= 9)) { alert("Vous êtes en poussin"); }
    if ((age >= 10) && (age <= 11)) { alert("Vous êtes en minime"); }
    if ((age >= 12) && (age <= 16)) { alert("Vous êtes en cadet"); }
    else { alert("L'âge spécifié est supérieur à 16 ans ou n'est pas un entier!"); }

}
function exos4() {
    //Affiche les variables
    var jour = prompt("Donnez moi un jour: ");
    var mois = prompt("Donnez moi un mois: ");
    var annees = prompt("Donnez moi une année: ");
    var heure = prompt("Donnez moi une heure: ");
    var minutes = prompt("Donnez moi une minute: ");
    var valide;

    if ((jour < 1) && (jour > 28) && (isNaN(jour)) && (mois == 2)) { valide = false; }
    else if ((jour < 1) && (jour > 30) && (isNaN(jour)) && ((mois == 4) || (mois == 6) || (mois == 9) || (mois == 11))) { valide = false; }
    else if ((jour < 1) && (jour > 31) && (isNaN(jour)) && ((mois == 1) || (mois == 3) || (mois == 5) || (mois == 7) || (mois == 8) || (mois == 10) || (mois == 12))) { valide = false; }
    else if (isNaN(annees)) { valide = false; }
    else if ((mois < 1) || (mois > 12) || (isNaN(mois))) { valide = false; }
    else if ((heure < 1) || (heure > 23) || (isNaN(heure))) { valide = false; }
    else if ((minutes < 1) || (minutes > 59) || (isNaN(minutes))) { valide = false; }
    else { valide = true; }

    if (valide) {
        if ((minutes == 59) && (heure == 23) && (mois == 12) && (jour == 31)) { alert("00/00" + "/" + (parseInt(annees) + 1) + ", 00h00"); }
        else if ((minutes == 59) && (heure == 23) && (jour == 31)) { alert("0/" + (parseInt(mois) + 1) + "/" + annees + ", 00h00"); }
        else if ((minutes == 59) && (heure == 23)) { alert((parseInt(jour) + 1) + "/" + mois + "/" + annees + ", 00h00"); }
        else if ((minutes == 59)) { alert(jour + "/" + mois + "/" + annees + ", " + (parseInt(heure) + 1) + "h00"); }
        else { alert(jour + "/" + mois + "/" + annees + ", " + heure + "h" + (parseInt(minutes) + 1)); }
    }
    else {
        alert("ERROR_404: Vous avez un QI négatif");
    }
}