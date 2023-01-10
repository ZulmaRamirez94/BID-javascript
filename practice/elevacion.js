/*--------------------------------------------------------------------------------*/
//N" 01
/*--------------------------------------------------------------------------------*/

console.log(hello);                                   
var hello = 'world';    
/*  var hello; // el interprete comprende que se eleva la variable  VAR                             
    console.log(hello); => seguidamente lee el console.log e imprime como indefinido
    hello ='world';  */

/*---------------------------------------------------------------------------------*/
//N" 02
/*---------------------------------------------------------------------------------*/
var needle = 'haystack'; 
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
/* var needle; El interprete, eleva la variable de manera global
needle = 'haystack';  Se inocializa la variable
test(); Se llama a la función 
var needle; se declara la variable local 
needle = 'magnet'; se inicializa la variable local
console.log(needle); Se imprime donde fue llamada la funcion */

/*---------------------------------------------------------------------------------*/
//N" 03
/*---------------------------------------------------------------------------------*/
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
/*var brendan; Se declara la variable de manera global
brendan = 'super cool'; Se inicializa la variable global
var brendan; se inicializa la variable local dentro de la funcion print
brendan = 'only okay'; Se inicializa la variable local
console.log(brendan); se pretende imprimir el contenido de la variable local
                        pero no se imprime ya que la funcion no fue inicializada
console.log(brendan); se imprime el contenido de la variable global incializada al inicio */

/*---------------------------------------------------------------------------------*/
//N" 04
/*---------------------------------------------------------------------------------*/

var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
/*
var food; Se declara la variable de manera global
food = 'chicken'; Se inicializa la varible global
console.log(food); Se imprime la variable inicializada arriba
eat(); Se inicializa la funcion eat
var food; Se declara una variable local
food = 'half-chicken'; se inicializa una variable local
console.log(food); Se imprime el valor cuando se inicializa la funcion
var food: se vuelve a declarar la misma variable
food = 'gone'; se vuelve a inicializar otro valor en la variable local

*/

/*---------------------------------------------------------------------------------*/
//N" 05
/*---------------------------------------------------------------------------------*/
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

/*
Tira error, debido a que mean no es una funcion.

*/

/*---------------------------------------------------------------------------------*/
//N" 06
/*---------------------------------------------------------------------------------*/

console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

/*
var genre; se declara la variable goblal
console.log(genre); imprime indefinido debido a que la variable no se inicializo
rewind(); inicializa la funcion
var genre; se crea una variable local 
genre = "rock"; inicializa la variable local
console.log(genre); imprime en contenido de la variable local donde se inicializa la funcion
var genre; se declara otra variable local
genre = "r&b"; se inicializa otra variable local
console.log(genre); se imprime el nuevo valor de la variable local asignada
console.log(genre); al salir de la funcion imprime el valor de la variable global inicializada
al principio
*/

/*---------------------------------------------------------------------------------*/
//N" 07
/*---------------------------------------------------------------------------------*/

dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
/*
var dojo; se declara una variable global, debido a que no figura alli, se toma por 
determinado como "var".
dojo = "san jose"; se inicializa una variable
console.log(dojo); se imprime el contenido de la variable
learn(); se inicializa la funcion
var dojo; se crea una variable local
dojo = "seattle"; se inicializa una variable 
console.log(dojo); se imprime el contenido de la variable donde inicializo la funcion
dojo = "burbank"; se reemplaza el valor de la variable anterior
console.log(dojo); imprime el contenido del a nueva variable donde se inicializo la funcion
console.log(dojo); se vuelve a imprimir el valor de la variable global
*/

/*---------------------------------------------------------------------------------*/
//N" 08
/*---------------------------------------------------------------------------------*/

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

/*
console.log(makeDojo("Chicago", 65)); deberia tirar indefinido
console.log(makeDojo("Berkeley", 0)); deberia tirar indefinido
const dojo = {}; es una constante no se le puede cambiar un valor por ella toda la
operacion no se ejecuta porque tira un error.

*/





