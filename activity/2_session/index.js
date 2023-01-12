// Ejercicio 1
  let alumno = {
    nombre: "Jose",
    edad: 25,
    curso: "Full Stack"
  };
  console.log(Object.keys(alumno));
// Ejercicio 2
/*
El valor de this, se puede definir como el objeto en contexto en el que se esta ejecutando el codigo actual

Contexto Global: fuera de cualquier función, this se referirá al objeto global ya sea en modo estricto o no.
Ejemplo: En los navegadores Web el objeto window
*/
console.log("Ejemplo de llamada de this global")
console.log(this.document === document); // true

// En los navegadores web, el objeto window también es un objeto global:
console.log(this === window); // true

this.a = 37;
console.log(window.a); // 37
/*
Contexto de la función: Dentro de una función el valor de this depende de como se ejecute la llamada.
*/
console.log("Ejemplo de llamada de this en contexto de la función")
var o = {
  prop: 37,
  f: function() {
    return this.prop;
  }
};

console.log(o.f()); // logs 37

// Ejercicio 3
  class InvertirCadena{
    constructor(cadenaInvertir){
      this.cadenaInvertir = cadenaInvertir;
    };
    reverseString = ()=>{
      if(this.cadenaInvertir ==""){
        throw new SyntaxError("Cadena de texto vacía")
      }else{
        this.reverse = this.cadenaInvertir.split("").reverse().join("");
        console.log(this.reverse);
      }
    } 

  };
  let invertirCadena = new InvertirCadena("Hola mundo");
  invertirCadena.reverseString();
 
// Ejercicio 4
 class Login{
  constructor(username,password ){
    this.username=username;
    this.password=password;
  }

    login = ()=>{
      if(this.username === "admin" && this.password === "passwd"){
      alert ("El usuario esté logeado");
    } else {
      alert("Usuario o la contraseña son incorrectas.");
    };
 }

}
let userLogin = new Login("admin", "passwd")
userLogin.login();

// Ejercicio 5

// Ejercicio 6

let loginWitUsername = (username, password) => {
    return new Promise(function (resolve, rejected) {
      setTimeout(() => {
        if (username === "admin" && password === "passwd") {
          resolve("User logged in");
        } else {
          rejected("Error: invalid username or password");
        }
      }, 200);
    });
};
