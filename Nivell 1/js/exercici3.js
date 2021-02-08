var nom = "JOORDIII";
var arrNom = nom.split("");
var valor;
var lletres = new Map();

for(i = 0; i < arrNom.length; i++) {
    if(lletres.has(arrNom[i])) {
        valor = lletres.get(arrNom[i]);
        valor += 1;
        lletres.set(arrNom[i], valor);
    } else {
        lletres.set(arrNom[i], 1);
    }
}

console.log(lletres);