// Ejercicio 1
interface Person {
    name: string;
    age: number;
    profession: string;
}

let getPerson = (person: Person):void=> 
{   
     //return console.log(Object.values(person)) 
   
}

let person1= {name: "Fran", age: 38, profession:"Developer"};
getPerson(person1);
// Ejercicio 2
function sumOrConcatenate(num1: number | string, num2: number | string){
    if(typeof num1 === "number" && typeof num2 === "number"){
        console.log(num1+num2)

    } if(typeof num1 === "string" && typeof num2 === "string"){
        console.log(num1+"-"+num2)
    }
    if(typeof num1  === "number" && typeof num2 === "string" || typeof num1 === "string" && typeof num2 === "number" ){
        console.log(num1+"+"+num2)
    }
}
sumOrConcatenate(1,2)
sumOrConcatenate("Hola","Mundo")
sumOrConcatenate("Hola",3)

// Ejercicio 3
interface Car {
    tires: number;
    turnOnEngine:()=>void;
    pressPedal:()=>void;
}
interface Motorcycle {
    tires: number;
    turnOnEngine:()=>void;
    openThrottle:()=>void;
}

type Vehicle = Car | Motorcycle;
function OnVehicle(veh: Vehicle): veh is Car{
    return (veh as Car).turnOnEngine !== undefined;
}

function getvehicleInfo(veh: Vehicle) {
    if(OnVehicle(veh)){
        veh.pressPedal;
    }else{
        veh.openThrottle;
    }
}

// Ejercicio 4
const array1 = ['Hello', 'I', 'have', 3, 'tasks'];

function StringNumArray(array: Array<string|number>){
      console.log(array.slice(1))
};


StringNumArray(array1);