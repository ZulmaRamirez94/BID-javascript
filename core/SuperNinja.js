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
        console.log(`El nombre es ${this.nombre}, su fuerza es ${this.fuerza}, tiene la velocidad de ${this.velocidad} y su salud es ${this.salud} `);
    }
    drinkSake() {
        this.salud +=10;
    }
}   
const ninja1 = new ninja("Hyabusa", 10);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

//Clase Sensei que hereda de ninja
class sensei extends ninja {
    constructor(sabiduria){
        super("nombre", "salud", "velocidad", "fuerza", sabiduria);
        this.sabiduria = 10;
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log("Lo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses.");
    }
}
const superSensei = new sensei ("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();
// -> "Nombre: Master Splinter, Salud: 210, Velocidad: 10, Fuerza: 10"
