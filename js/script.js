
//Link to model car:
//https://modeltoycars.com/1962-volkswagen-classic-bus-ruby-kinsmart-5060d-1-32-scale-diecast-model-toy-car-brand-new-but-not-in-box/

class modelCar {
    constructor (make, model, year, colour, sku, upc, packaging, condition, scale, price) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.colour = colour;
        this.sku = sku;
        this.upc = upc;
        this.packaging = packaging;
        this.condition = condition;
        this.scale = scale;
        this.price = price;
    }
}

const car1 = new modelCar("Volkswagen", "Classic Bus", 1962, "Red", "5060D-KIT-RUBY", "764072011325", "Un-Boxed", "New", "1:32", 5.99);


