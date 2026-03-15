
//Link to model cars:
//https://modeltoycars.com/1962-volkswagen-classic-bus-ruby-kinsmart-5060d-1-32-scale-diecast-model-toy-car-brand-new-but-not-in-box/
//https://modeltoycars.com/1962-volkswagen-classic-bus-ruby-kinsmart-5060d-1-32-scale-diecast-model-toy-car-brand-new-but-not-in-box/

//Adding model car class
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
//Creating model car objects
const car1 = new modelCar("Volkswagen", "Classic Bus", 1962, "Red", "5060D-KIT-RUBY", "764072011325", "Un-Boxed", "New", "1:32", 5.99);
const car2 = new modelCar("Volkswagen", "Super Beetle Convertible", 1975, "Blue", "JLSP107A-JL-BLUE", "680334688657", "With Box", "New", "1:64", 9.99);

//Creating variables to link to the html elements
const displayCar1 = document.getElementById("displayCar1");
const displayCar2 = document.getElementById("displayCar2");

//Using .innerHTML property to display the model car information 
displayCar1.innerHTML = `
<h2>${car1.year} ${car1.make} ${car1.model} </h2>
<img id="car1-image" src="images/car1.jpg" alt="${car1.make} ${car1.model}" width="300">
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

displayCar2.innerHTML = `
<h2>${car2.year} ${car2.make} ${car2.model} </h2>
<img id="car2-image" src="images/car2.jpg" alt="${car2.make} ${car2.model}" width="300">
<ul>
    <li>Colour: ${car2.colour}</li>
    <li>SKU: ${car2.sku}</li>
    <li>UPC: ${car2.upc}</li>
    <li>Packaging: ${car2.packaging}</li>
    <li>Condition: ${car2.condition}</li>
    <li>Scale: ${car2.scale}</li>
    <li>Price: $${car2.price}</li>
</ul> 
`;



