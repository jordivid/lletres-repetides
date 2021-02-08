var nom = "JORDI";
var cognom = "VIDAÑA";
var arrNom = nom.split("");
var arrCognom = cognom.split("");
var fullName;

arrNom.push(" ");
fullName = arrNom.concat(arrCognom);
console.log(fullName);