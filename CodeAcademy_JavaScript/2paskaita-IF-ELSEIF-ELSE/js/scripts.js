// console.log('veikia!')

//1. uzduotis su amziumi, pilnametis ar ne - alert

// const legalAge=20
// let clientAge=30

// if (clientAge>=legalAge) {
//     alert('pilnametis')
// } else{
//     alert('nepilnametis')
// }


//2. ilgas vardas ar ne?
// let name='Martynas'

// if (name.length>6) {
//     console.log('Ilgas vardas')
// } 


//3. 100 > mano amzius <0 ->Invalid age, 1>manoamzius>18 ->cild, 19>mano amzius>99_>Adult
// let manoAmzius=3

// if (manoAmzius>100 || manoAmzius<0) {
//     console.log('Invalid age');
// } else if (manoAmzius<18) {
//     console.log('Child');
// } else {
//     console.log('Adult')
// }


//4. uzduotis su variable car
let car='Volvo'

if(car==='VW' || car==='Audi' || car==='Bentley' || car==='Bugatti' || car==='Lamborghini' || car==='Porsche') {
    console.log('VW group')
} else if (car==='BMW' || car==='Mini' || car==='Rolls-Royce') {
    console.log('BMW group')
} else {
    console.log('Nei vienam')
}