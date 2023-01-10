//Clase Ninja
class ninja {
    constructor(nombre, salud, velocidad, fuerza){
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName() {
        console.log(`El nombre del ninja es ${this.nombre}`);
    }
    showStats() {
        console.log(`El nombre es ${this.nombre}, su fuerza es de ${this.fuerza}, tiene la velocidad ${this.velocidad} y la salud es ${this.salud} del ninja ` );
    }
    drinkSake() {
        this.salud +=10;
    }
}   
const ninja1 = new ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
