class car{
    constructor(brand, model, year){
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.age = this.calcAge();

        console.log(`New ${this.brand} car created, model:${this.model}, year:${this.year}`);
    }

    get properties(){
        return {
            brand:this.brand,
            model:this.model,
            year:this.year,
            age:this.age,
        }
    }

    calcAge(){
        return 2022-this.year;
    }
}

module.exports = car;