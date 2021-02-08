var sortida = document.getElementById("salida");

document.getElementById("btn1").addEventListener("click", function() {
    let nom = "JORDI";
    let arrNom = nom.split("");

    sortida.innerHTML = "";

    for(i = 0; i < arrNom.length; i++) {
        sortida.innerHTML += arrNom[i] + "<br/>";
    }
});

document.getElementById("btn2").addEventListener("click", function() {
    let vocals = ["A", "E", "I", "O", "U"];
    let digits = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    let posicio;
    let nom = "JOR6DI";
    let arrNom = nom.split("");

    sortida.innerHTML = "Partim del nom " + nom + "<br/>";
    for(i = 0; i < arrNom.length; i++) {
        posicio = vocals.indexOf(arrNom[i]);
        if (posicio != -1) {
            sortida.innerHTML += "He trobat la VOCAL: " + arrNom[i] + "<br/>";
            continue;
        }
        
        posicio = digits.indexOf(arrNom[i]);
        if (posicio != -1) {
            sortida.innerHTML += "Els noms de persones no contenen el número: " + arrNom[i] + "<br/>";
            continue;
        }

        sortida.innerHTML += "He trobat la CONSONANT: " + arrNom[i] + "<br/>";
    }
});

document.getElementById("btn3").addEventListener("click", function() {
    let nom = "JOORDIII";
    let arrNom = nom.split("");
    let valor;
    let lletres = new Map();

    for(i = 0; i < arrNom.length; i++) {
        if(lletres.has(arrNom[i])) {
            valor = lletres.get(arrNom[i]);
            valor += 1;
            lletres.set(arrNom[i], valor);
        } else {
            lletres.set(arrNom[i], 1);
        }
    }

    sortida.innerHTML = "";

    for (let [clau, valor] of lletres) {
        sortida.innerHTML += clau + ": " + valor + "<br/>";
    }
});

document.getElementById("btn4").addEventListener("click", function() {
    let nom = "JORDI";
    let cognom = "VIDAÑA";
    let arrNom = nom.split("");
    let arrCognom = cognom.split("");
    let fullName;

    arrNom.push(" ");
    fullName = arrNom.concat(arrCognom);
    sortida.innerHTML = "";

    for(i = 0; i < fullName.length; i++) {  
        sortida.innerHTML += i + ": " + fullName[i] + "<br/>";
    }
});

document.getElementById("btn5").addEventListener("click", function() {
    let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    let rex = /[a-zA-Z0-9ñÑ._%+-]+@[a-zA-Z0-9ñÑ.-]+\.[a-zA-Z]{2,4}/g;
    let warr = str.match(rex);
    let arr = new Array();

    for(i = 0; i < warr.length; i++) {
        if(arr.indexOf(warr[i]) == -1) {
            arr.push(warr[i]);
        }
    }

    sortida.innerHTML = "";

    for(i = 0; i < arr.length; i++) {
        sortida.innerHTML += arr[i] + "<br/>";
    }
});