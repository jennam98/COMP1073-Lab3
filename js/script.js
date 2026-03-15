
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

const displayCar1 = document.getElementById("displayCar1");

displayCar1.innerHTML = `
<h2>${car1.make} ${car1.model} (${car1.year})</h2>
<ul>
    <li>Colour: ${car1.colour}</li>
    <li>SKU: ${car1.sku}</li>
    <li>UPC: ${car1.upc}</li>
    <li>Packaging: ${car1.packaging}</li>
    <li>Condition: ${car1.condition}</li>
    <li>Scale: ${car1.scale}</li>
    <li>Price: $${car1.price}</li>
</ul> 
`;



