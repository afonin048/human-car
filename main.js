class Human {
    constructor(name, age){
        this.name = name;
        this.age = age;
        
    }
    sayHi(){
        console.log(`Hi i'm ${this.name}, i'm ${this.age}`)
    }
}
let michael = new Human("Michael", 22);
michael.sayHi();


class Car  {
    constructor(brand, model, year, license){
        
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.license = license;
        

        
        
    }
    getCar(){
        console.log(`This is ${this.brand} ${this.model}, year of issue ${this.year}, license plate ${this.license}. Owner of this car: ${michael.name}, age:${michael.age} `)
        if (michael.age < 18 ){
            console.log(`You're too young. Leave the car, please! And come back in ${18-michael.age} years`)
        }
    }
    
}

let audi = new Car("Audi", "A7", 2021, "BH3333OM" );
audi.getCar();
