//Clase Card
class Card {
    constructor(name, cost){
        this.name = name;
        this.cost = cost;
    }
    invocar(){
        console.log("Se invoca al jugador: ", this.name);
    }
}

//La class unit hereda de la class card
class Unit extends Card {
    constructor(name, cost, power, res){
        super(name, cost),
        this.power = power,
        this.res = res;
    }
    attack(){
        //reduce target res by power
        this.res -= 1;
        this.power -=1; 
        console.log("Ataque se descuenta -1 en power : " + this.power + " Y se descuenta -1 a resilencia: " + this.res  );
    }   
    hardAlgorithm(){
        //Aumenta la resistencia del objetivo en +3
        if( this.cost >=2 ){
            this.cost -= 2;
            this.res += 3;
            console.log("Se decuenta costo -2: " + this.cost + " Se aumenta resilencia +3: " + this.res); 
        }  
    }

    promiseOfrejection(){
        //reducir la resistencia del objetivo en -2
            this.cost -= 1;
            this.res -= 2;
            console.log("Se decuenta costo -1: " + this.cost + " Se descuenta resilencia -2: " + this.res); 
    }

    programmingPair(){
        //aumentar el poder del objetivo en +2
        if( this.cost >=3 ){
            this.cost -= 3;
            this.res += 2;
            console.log("Se decuenta costo -3: "  + this.cost + " Se aumenta resilencia +2: " + this.res); 
        }  
    }
}


const tarjetUnidad1 = new Unit ("Ninja Cinturon Rojo", 3, 3, 4);
const tarjetUnidad2 = new Unit ("Ninja Cinturon Negro", 4, 5, 4);
tarjetUnidad1.invocar();
tarjetUnidad1.hardAlgorithm();
tarjetUnidad2.invocar();
tarjetUnidad2.promiseOfrejection();
tarjetUnidad1.programmingPair();
tarjetUnidad1.attack();





