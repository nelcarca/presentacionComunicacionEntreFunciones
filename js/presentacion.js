// ██████╗ ██████╗ ███╗   ███╗██╗   ██╗███╗   ██╗██╗ ██████╗ █████╗ ██╗ ██████╗ ███╗   ██╗    ███████╗███╗   ██╗████████╗██████╗ ███████╗
// ██╔════╝██╔═══██╗████╗ ████║██║   ██║████╗  ██║██║██╔════╝██╔══██╗██║██╔═══██╗████╗  ██║    ██╔════╝████╗  ██║╚══██╔══╝██╔══██╗██╔════╝
// ██║     ██║   ██║██╔████╔██║██║   ██║██╔██╗ ██║██║██║     ███████║██║██║   ██║██╔██╗ ██║    █████╗  ██╔██╗ ██║   ██║   ██████╔╝█████╗  
// ██║     ██║   ██║██║╚██╔╝██║██║   ██║██║╚██╗██║██║██║     ██╔══██║██║██║   ██║██║╚██╗██║    ██╔══╝  ██║╚██╗██║   ██║   ██╔══██╗██╔══╝  
// ╚██████╗╚██████╔╝██║ ╚═╝ ██║╚██████╔╝██║ ╚████║██║╚██████╗██║  ██║██║╚██████╔╝██║ ╚████║    ███████╗██║ ╚████║   ██║   ██║  ██║███████╗
//  ╚═════╝ ╚═════╝ ╚═╝     ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝╚══════╝
//                                 ███████╗██╗   ██╗███╗   ██╗ ██████╗██╗ ██████╗ ███╗   ██╗███████╗███████╗                              
//                                 ██╔════╝██║   ██║████╗  ██║██╔════╝██║██╔═══██╗████╗  ██║██╔════╝██╔════╝                              
//                                 █████╗  ██║   ██║██╔██╗ ██║██║     ██║██║   ██║██╔██╗ ██║█████╗  ███████╗                              
//                                 ██╔══╝  ██║   ██║██║╚██╗██║██║     ██║██║   ██║██║╚██╗██║██╔══╝  ╚════██║                              
//                                 ██║     ╚██████╔╝██║ ╚████║╚██████╗██║╚██████╔╝██║ ╚████║███████╗███████║                              
//                                 ╚═╝      ╚═════╝ ╚═╝  ╚═══╝ ╚═════╝╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝╚══════╝                              
                                                                                                                                                     

// CONTEXTO

// Instruciones que realizan una tarea o calcular un valor
// ...nos permite ahorrar codigo, ejecutar muchas tareas en poco espacio, etc..

// Declaracion de una funcion  sin return
//En las funciones declarativas, utilizamos la palabra reservada function al inicio para poder declarar la función

function imprimeMensaje() {
   console.log("hola soy una función");
}
imprimeMensaje();

// Declaracion de una funcion con return

function calculaPromedioTresNumeros(num1, num2, num3) {
   let promedio =(num1+ num2+ num3)/3;
   return "El promedio es: " + promedio + " pesos";
   // return `El promedio es: ${promedio} pesos`;
}
console.log(calculaPromedioTresNumeros(13000,26000,72000));

// Asignar la funcion a una variable

const calcula = calculaPromedioTresNumeros;
console.log(calcula(3000,5000,7000));

//Expresion de una funcion / En la expresión de función, la función podría o no llevar nombre, aunque es más común que se hagan anónimas.

const calculaArea = function(ancho, alto) {
   const area = ancho * alto;
   return area;
}
console.log(calculaArea(26,22));

//Funciones tipo Flecha

const calculaArea2 = (ancho, alto) => {
   const area = ancho * alto;
   return area;
}
console.log(calculaArea(50, 25));

//Funcion flecha con un solo parametro y sola expresion

const multiplicaNumero = x => x**3;
console.log(multiplicaNumero(3));

//Funcion como parametro

const avisaUsuario = (fun, x) => {
   alert(fun(x));
}

const saludaUsuario = (nombre = "amigo") => {
   return `hola ${nombre}`;
}

avisaUsuario(saludaUsuario, "Profesor");

/*El concepto de hoisting(elevado-alzado)

   Al ejecutar un fragmento de código, el motor de JavaScript crea el contexto de ejecución global.

   El contexto tiene 2 fases: creación y ejecución.

   Durante la fase de creación, el motor de JavaScript mueve las declaraciones de variable y función a la parte superior de su contexto (scope).

   En JavaScript  el hoisting funciona solamente con las declaraciones*/

//    A las funciones declarativas se les aplica hoisting, y a la expresión de función, no. Ya que el hoisting solo se aplica en las palabras reservadas var y function.

// Lo que quiere decir que con las funciones declarativas, podemos mandar llamar la función antes de que ésta sea declarada, y con la expresión de función, no, tendríamos que declararla primero, y después mandarla llamar.

/*--- Funciones Recursiva---*//*--- Funciones Recursiva---*//*--- Funciones Recursiva---*/

// const func =() => {
//    return;//caso base
//    func();//caso recursivo
// }


// Son funciones que se llaman a si misma//Simplifica el pensar

/*ej: Factorial de  un numero:

El factorial de un entero positivo n, el factorial de n o n factorial se define en principio como el producto de todos los números enteros positivos desde 1 (es decir, los números naturales) hasta n. Por ejemplo: 

5! = 1x2x3x4x5 =120
4! = 1x2x3x4   =24
3! = 1x2x3     =6
2! = 1x2       =2
1" =           =1

n! = 1x2x3x4x5x6...x(n-1) x n

*/

const factorial = n => {
   if(n<=1) return 1
   return n * factorial(n-1);
}
console.log(factorial(5));

