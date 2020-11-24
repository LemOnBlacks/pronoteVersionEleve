function e1() {
    var text = "";
    var i;
    var myWindow = window.open("", "demo", "width=250,height=500");

    for (i = 0; i <= 100; i++) {
        if (i % 10 == 0) { text += "<br><b>The number is " + i + "</b><br>"; }
        else { text += "The number is " + i + "<br>"; }
    }
    myWindow.document.write(text);
}
function e2for() {
    var somme = 0;
    var point;
    var i;

    for (i = 1; i <= 5; i++) {
        point = Number(prompt("Quel est le nombre de points pour l'épreuve " + parseInt(i) + "? "));
        somme = somme + point;

    }
    alert("Le cavalier qui a le plus de points a " + somme + " points.")
}
function e2while() {
    var n = 0;
    var somme = 0;
    var point;

    while (n < 5) {
        point = Number(prompt("Quel est le nombre de points pour l'épreuve " + parseInt(n + 1) + " ?"));
        n = n + 1;
        somme = somme + point

    }
    alert("Le cavalier qui a le plus de points a " + somme + " points.")
}
function e3() {
    var text = "";
    var i;
    var myWindow = window.open("", "demo", "width=250,height=500");


    myWindow.document.write("Table de 9 : <br><br>")
    for (i = 0; i < 11; i++) {
        text += "9 x " + i + " = " + 9 * i + "<br>";
    }
    myWindow.document.write(text);
}
function e3bis() {
    var i;
    var k;
    var myWindow = window.open("", "demo", "width=250,height=500");


    for (i = 0; i < 11; i++) {
        myWindow.document.write("<br><b> Table de " + i + " : </b><br><br>");
        for (k = 0; k < 11; k++) {
            myWindow.document.write(i + " x " + k + " = " + i * k + " <br>");
        }
    }
}
function e4() {
    var i;
    var j;
    var k;
    var accu = 1;
    var myWindow = window.open("", "demo", "width=650,height=500");


    myWindow.document.write("<p style=\"text-align:justify;color:red;\"><b>Voici la liste de toutes les combinaisons possibles pour obtenir 1 Euro avec des pièces de 2 centimes, 5 centimes et 10 centimes: </b></p><br><br>")

    for (i = 0; i < 51; i++) {
        for (j = 0; j < 41; j++) {
            for (k = 0; k < 11; k++) {
                if ((2 * i + 5 * j + 10 * k) == 100) {
                    myWindow.document.write("<p style=\"text-align:justify;margin:0;\">" + accu + " ----> " + "<span style=\"color:blue;\">Une combinaison</span>: " + "<b>1 euro = 2 centimes x " + i + " + " + " 5 centimes x " + j + " + " + "10 centimes x " + k + " </b></p>");
                    accu = accu + 1
                }
            }
        }
    }
    myWindow.document.write("<br><br><b>Il y a " + parseInt(accu - 1) + " combinaisons</b>")
}
