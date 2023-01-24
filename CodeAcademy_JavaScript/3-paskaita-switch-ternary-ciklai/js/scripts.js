// 1.Switch salyga

// let car='Tesla'

// switch(car){
//     case "VW":
//     case "Audi":
//     case "Bentley":
//     case "Bugatti":
//     case "Lamborghini":
//     case "Porche":
//         console.log('VW group');
//         break;
//     case "BMW":
//     case "Mini":
//     case "Rolls-Royce":
//         console.log('BMW group');
//         break;
//     default:
//         console.log('Nei VW group, nei BMW')
// }


// let userInput = 'svogunas'
// switch(userInput){
//     case "bananas":
//     case "aplesinas":
//     case "slyva":
//         console.log('vaisius');
//         break;
//     case "morka":
//     case "agurkas":
//     case "svogunas":
//         console.log('darzove');
//         break;
//     default:
//         console.log('Nei tas nei tas')
// }


// let weekDay = new Date().getDay();
// switch(weekDay){
//   case 0:
//     weekDay = 'Sekmadienis';
//     break;
//   case 1:
//     weekDay = 'Pirmadienis';
//     break;
//   case 2:
//     weekDay = 'Antradienis';
//     break;
//   case 3:
//     weekDay = 'Trečiadienis';
//     break;
//   case 4:
//     weekDay = 'Ketvirtadienis';
//     break;
//   case 5:
//     weekDay = 'Penktadienis';
//     break;
//   case 6:
//     weekDay = 'Šeštadienis';
//     break;
// }
// console.log(weekDay);

// 2.1 Ternary operatorius
// // 2.1 vardo ilgis
// const vardas = 'Martynas';
// Manovardas = vardas.length < 5 ? 'Trumpas vardas' : 'Ilgas vardas';
// console.log(Manovardas)

// 2.2. / 3. ar  gali vairuoti
// const legalAge = 18
// let clientAge = 20
// Driver = clientAge <0 || clientAge > 120  ? console.log("Invalid Age") : clientAge >= legalAge ? 'Can drive' : "Can't drive";
// console.log(Driver)

//2.4. iphone true false
// const phone = 'Samsung';
// const isIphoneUser = phone === 'iPhone'
// console.log(isIphoneUser)

// Ciklas 3.1

// for(let i = 0; i < 10; i++){
//     console.log('Martynas')
// }

// Ciklas 3.2
// const name = 'Martynas'
// const count = 6
// for(let i = 0; i < count; i++){
//     console.log(name)
// }

// // Ciklas 3.3
// const name = 'Martynas'
// const count = 6
// for(let i = 0; i < count; i++){
//     console.log(i + '.' + name)
// }


//Ciklas 3.4
let i = 10;
while(i > 0) {
  console.log(i);
  i--;
}