var getPerson = function (person) {
    //return console.log(Object.values(person)) 
};
var person1 = { name: "Fran", age: 38, profession: "Developer" };
getPerson(person1);
// Ejercicio 2
function sumOrConcatenate(num1, num2) {
    if (typeof num1 === "number" && typeof num2 === "number") {
        console.log(num1 + num2);
    }
    if (typeof num1 === "string" && typeof num2 === "string") {
        console.log(num1 + "-" + num2);
    }
    if (typeof num1 === "number" && typeof num2 === "string" || typeof num1 === "string" && typeof num2 === "number") {
        console.log(num1 + "+" + num2);
    }
}
sumOrConcatenate(1, 2);
sumOrConcatenate("Hola", "Mundo");
sumOrConcatenate("Hola", 3);
function OnVehicle(veh) {
    return veh.turnOnEngine !== undefined;
}
function getvehicleInfo(veh) {
    if (OnVehicle(veh)) {
        veh.pressPedal;
    }
    else {
        veh.openThrottle;
    }
}
// Ejercicio 4
var array1 = ['Hello', 'I', 'have', 3, 'tasks'];
function StringNumArray(array) {
    console.log(array.slice(1));
}
;
StringNumArray(array1);
