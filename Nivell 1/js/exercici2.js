var vocals = ["A", "E", "I", "O", "U"];
var digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var posiciov, posicion;
var nom = "JOR6DI";
var arrNom = nom.split("");

console.log("Partim del nom " + nom);
for(i = 0; i < arrNom.length; i++) {
    posiciov = vocals.indexOf(arrNom[i]);
    posicion = digits.indexOf(arrNom[i]);

    if (posiciov != -1) {
        console.log("He trobat la VOCAL: " + arrNom[i]);
        continue;
    } else if (posicion != -1) {
        console.log("Els noms de persones no contenen el número: " + arrNom[i]);
        continue;
    } else {
      console.log("He trobat la CONSONANT: " + arrNom[i]);
    }
}