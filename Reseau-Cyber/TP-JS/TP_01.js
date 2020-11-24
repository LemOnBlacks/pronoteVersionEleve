function exo_1() {
    var m = prompt("entrez votre nom\n", "");
    alert("Bienvenue à toi " + m);
}


// Exercice 2 du TP

function exo_2() {
    var numerique1 = 15;
    var numerique2 = 3.14;
    var texte = "ma variable";
    var boolean = false;
    var var_nom_initialisee;
    var var_nulle = null;

    alert(" La variable numerique 1 est de type : " + typeof numerique1 + "\n La variable numerique 2 est de type : " + 
    typeof numerique2 + "\n La variable texte est de type : " + typeof texte + "\n La variable boolean 1 est de type : " + typeof boolean +
    "\n La variable var_nom_initialisee est de type : " + typeof var_nom_initialisee + "\n La variable var_nulle est de type : " + typeof var_nulle);
}


// Exercice 3 du TP
function exo_3() {
    const pi = 3.14;

    var rayon1 = 5.5
    var rayon2 = 3.5
    var surface1;
    var surface2
    var difference;

    surface1 = rayon1 * rayon1 * pi;
    surface2 = rayon2 * rayon2 * pi;
    difference = surface1 - surface2;

    alert(" La surface du cercle 1 est: " + surface1 + "\n La surface du cercle 2 est: " + surface2 +
     "\n La différence de surface entre les deux cercles est de : " + difference);
}

// document.writeline("La différence de surface entre les deux cercles est = a " + difference);



// Exercice 4 du TP
function exo_4() {
    var nombre = 15;
    var nombreentexte = "10";
    var nombreenchiffre = parseInt(nombreentexte);
    somme = nombre + nombreentexte;
    alert("Voici le résultat avant conversation : " + somme);
    somme = nombre + nombreenchiffre;
    alert("Voici le résultat après conversion : " + somme);

    nombreenchiffre = 15;
    nombreentexte = nombreenchiffre.toString();
    total = 10 + nombreentexte;
    alert("Le total est : " + total);
}