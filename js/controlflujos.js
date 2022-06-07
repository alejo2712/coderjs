/*
Práctica clase1

let valor1;
let valor2;

valor1=parseInt(prompt("Ingresá un número"));
valor2=parseInt(prompt("Ingresa otro número para sumarlo"));

result = valor1 + valor2;

alert("La sumá de los dos números es: " + result);
*/

let valor1;
let valor2=2;
let result=1;

valor1=parseInt(prompt("Ingresá un valor para multiplicar por 2"));
valor2=parseInt(prompt("Ingresá cuantas veces que multiplicar el valor ingresado anteriormete por 2"));
result=valor1;

for (let i=1; i<=valor2; i++) {
    result = result * 2;
    alert ("El resultado de la ejecucion #" + i + " es " + result);
}
`