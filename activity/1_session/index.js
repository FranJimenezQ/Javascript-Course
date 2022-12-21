// Ejercicio 1
import "./aboutme.js";
console.log("Ejercicio 1");

// Ejercicio 2

// Ejercicio 3

// Ejercicio 4
    for(let i = 0; i <= 100; i++){
        if(i % 7 == 0 ){
            console.log(`${i} Es divisible entre 7` );
        }
    }
// Ejercicio 5
/*
Cuando le decimos al navegador que utilice un script en formato type= module, le estamos diciendo que vea a este archivo como un modulo y este sera capaz de importar elementos de otros modulos.
Cuando simplemente importamos un script, el navegador solo podra utilizar elementos que pertenecen a ese archivo.
*/
// Ejercicio 6

var formatter = new Object();
formatter={
    prefix: "Hello",
    append(frase){
        console.log(formatter.prefix +" "+ frase)
    },
    };

formatter.append("World");

formatter.apply = function (print) {
    console.log(print.toLowerCase());
}

formatter.apply("IM FRANCISCO");

