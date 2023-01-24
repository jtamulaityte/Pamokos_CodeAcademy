// console.log('veikia')

//1. Susikuriame objektą "car". Duodame jam tris properties: "doors",
// "color", "brand". Reikšmes įrašykite patys, tik atminkite - doors
// bus skaičius, o color ir brand - string'ai. Pasiconsole'inkite 
// ir patikrinkite ar matosi car objektas, ar galite atskirai pasiimti
// vieną iš jo parametrų (pvz. car.doors).

let car = {
    doors: 5,
    color: 'red',
    brand: 'BMW'
};

console.log(car.brand)

//2. Sukuriame formą su dviem input - name ir surname.

// let body = document.querySelector('body')

// let form = document.createElement('form');
// form.setAttribute("method", "post");
// form.setAttribute("action", "submit.php");

// let name = document.createElement("input");
// name.type = "text";
// name.setAttribute("placeholder", "Name")

// let surname = document.createElement("input");
// surname.type = "text";
// surname.setAttribute("placeholder", "Surname")


// body.appendChild(form)
// form.appendChild(name);
// form.appendChild(surname);

// //Pateikus formą, JS turi pasiimti vardą ir pavardę ir sukurti objektą
// // pavadinimu 'person'. Šis objektas turės du parametrus - name ir 
// // surname. Kai tik objektas susikuria (t.y. dar addEventListener
// // funkcijoje) - atsispausdink objektą ir pažiūrėk ar viskas gerai
// // veikia. Hint: už funkcijos ribų negali atspausdinti objekto,
// // nes const person = {} yra limituotas konkrečiame bloke (šiuo atveju
// // - funkcijoje). Už jos ribų jis neegzistuoja.

// let btn = document.createElement("input")
// btn.setAttribute('type','submit')
// form.appendChild(btn)

// document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     // console.log(e)
 
//     const person = {
//         name: document.querySelector('input').value,
//         surname: document.querySelector('input:nth-of-type(2)').value,
//     }
//     console.log(person)
// });

// 3. Sukurk formą, kurioje vartotojas įrašo vardą ir įveda amžių. 
// Pateikus duomenis, turi susikurti objektas, kuriame du properties
// - name ir isLegalAge. Name - string, o isLegalAge - boolean.

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e)

    const name = e.target.elements.name.value;
    const age = Number(e.target.elements.age.value);
    const isLegaleAge = age >=18;

    const person = {
        name: name,
        isLegale: isLegaleAge,
    }
    console.log(person)
});
