//VARIABLES
//Globales
var nombre = "nelsjhair";
console.log(nombre);
var id = 12312;
console.log(id);
var llueve = false;
console.log(llueve);
//Constantes
const año = 2024;
console.log();
//De bloque
let edad=20;
console.log(edad);
//ESTRUCTURAS DE CONTROL
let par = 91203122
if(par%2===0){
    console.log(par+ ' es par');
}else{
    console.log(par+' no es par');
}
for (let i=0;i<=5;i++){
    console.log(i);
}
for (let i=10; i>0;i--){
    console.log(i);
}
let counter = 0;
while(counter<5){
    counter++;
    console.log(counter);
}
let cont2 = 10
while(cont2>=0){
    console.log(cont2);
    cont2--;
}
//OPERADORES
let suma = 5+5;
console.log(suma);
let resta =8-5;
console.log(resta);
let multply = 2*3;
console.log(multply);
let divi = 8/2;
console.log(divi);
let modulo = 20%5;
console.log(modulo);
let sumaMultiplicaciónModulo = 8+9*5%5;
console.log(sumaMultiplicaciónModulo);
//COMPARACIÓN
let mayorQue =10>5;
let menoQue = 5<5;
let menorIgualQue = 10>=10;
let mayorIgualQue = 11<=15;
let iguaQue = 10===10;
let difernteQue = 10!==5;
//OPERADORES LÓGICO
let and = true&&true;//1
let or = false || true;
let not =! false;
//ESTRUTURA DE DATOS
const persona= {
    nombre: "Carlos",
    edad: 25,
    ocupación: "Desarrollador",
}
const colores = ["rojo","verde","azul"];
console.log(persona);
console.log(colores);
//ACCEDER A ATRIBUTOS
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.ocupación);
console.log('Mi nombre es '+persona.nombre+' y tengo '+persona.edad+' años.');
persona.nombre = "Juan";
persona["Apellido: "]= "Rivadeneyra";
console.log(persona);
persona["CI:"]=2131;
persona.edad = 20;
persona.ocupación = "estudiante";
console.log(colores.lenght);
console.log(colores[0]);
console.log(colores[1]);
console.log(colores[2]);
console.log(colores.find("azul"));
colores.reverse();
colores.sort();
console.log(colores);
//EJERCICIO
for(let i=0; i<colores.length;i++){
    console.log('Elemento: '+colores[i]+' índice: '+i);
}
colores.push("púrpura");
colores.push("blanco");
colores.push("negro");
console.log(colores);
colores.reverse();
console.log(colores);
colores.sort();
console.log(colores);
colores.push("violeta");
colores.push("Amarillo");
colores.sort();
console.log(colores);

colores.push(1);
colores.push(2);
colores.push(3);
console.log(colores);
colores.push([4,5,6]);
console.log(colores);
var elemento = colores.pop();
console.log(elemento);
console.log(colores);
console.log(colores.find="Amarillo");
console.log(colores.findIndex="Amarillo");