
//PROBLEMA 1
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)//se imprime el primera elemento de la lista 
console.log(otherRandomCar)// se imprime el segundo elemento de la lista 

//PROBLEMA 2
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);//no se imprime "name", tira un error debido a que no se le invoca de forma inadecuada al elemento.
console.log(otherName); // deberia de imrpimrir 'Elon', pero debido al error de arriba, no se ejecuta


//PROBLEMA 3
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password); //imprime el elemento de dentro de la variable constante '12345'
console.log(hashedPassword);//Imprime indefinido, debido a que la variable se reconoce pero no encuentra su valor

//PROBLEMA 4
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);// Imprime falso
console.log(first == third); //Imprime verdadero  debido index 1=2 y index 7=2

//PROBLEMA 5
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key); // Se imprime 'value'
console.log(secondKey); //Se imprime la lista [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // Se imprime el contenido del index 0 de la lista que es  '1'
console.log(willThisWork); // Se imprime el contenido del index 1 de la lista que es  '5'
