// console.log('veikia')

// 1. Susikurkite konstruktorių car, kuris priims brand, model, engine
// ir turės metodą 'turnOn' - kuris alertins 'vrooom'.
// Sukurkite du objektus ir patikrinkite ar veikia.

// 2. Pakoreguokite šį konstruktorių ir pridėkite papildomą property 'basePrice'
// ir metodą 'getPrice'. basePrice propertį įrašys sukuriant objektą,
// tačiau getPric priklausimai nuo variklio išmes kokia yra galutinė kaina.
// Jei variklis 'electric' - kaina bus +10,000; jei 'diesel' +5,000;
// jei 'petrol' - kaina tokia kokia ir basePrice.

function Cars(brand, model, engine, price){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;

    this.getPrice = function(){
        let additionalPrice = 0;
        if (this.engine === 'electric'){
            additionalPrice = 10000;
        } else if(this.engine === 'diesel') {
            additionalPrice = 5000;
        }
        return this.basePrice + additionalPrice;

    }
    this.turnOn = function() {
        alert('vrooom')
    } 
}

const BMW = new Cars('BMW', 'x6', 'diesel', 35000)
const Tesla = new Cars('Tesla', 'Model 3', 'electric', 35000)
const Volvo = new Cars('Volvo', 'V70', 'petrol', 50000)



console.log(BMW.model, BMW.engine, BMW.basePrice)
console.log(Tesla.brand, Tesla.model, Tesla.engine)
console.log(Volvo.model, Volvo.basePrice)

console.log(BMW.getPrice())
console.log(Tesla.getPrice())
console.log(Volvo.getPrice())

BMW.turnOn

