// Ciklai-While ir Do...While
// 1.1. su while ciklus vardas konsoleje 3 katus

// let i = 0;
// let vardas = "Jone";

// while(i < 3){
//   i++
//   console.log(vardas)
// }
// ARBA

// const name = 'Jone';
// let i = 3;
// while (i > 0) {
//   console.log(name);
//   i--;
// }

// 1.2. kintamasis combo

// let combo = '';
// const vardas = 'Jone';
// let times = 5;
// do{
//   combo += vardas;
//   times--;
// } while(times > 0);
// console.log(combo);

// let i = 0
// let combo = 'Jone'
// let times = 5
// do{
//   console.log(combo += 'Jone')
//   i++
// } while(i < 5)

// 2.1 suskaiciuoti cos(0)
// console.log(Math.cos(0))

// 2.2. random skaicius [1;5]
// const randomsk = Math.floor(Math.random() * 5) + 1
// console.log(randomsk)

// 2.2. random sk [5;12]
// const randomsk = Math.floor(Math.random() * (12-5+1)) + 5
// console.log(randomsk)

// 2.3. loterijos bilietas su math and if else

// const loterijos_bilietas = Math.floor(Math.random() * 5) + 1
// console.log(loterijos_bilietas)

// if (loterijos_bilietas === 1){
//   alert('Laimejote bilieta')
// } else {
//   alert('Nelaimejote')
// }

//3. DOM pratimai
// 3.1. su js sukurti h2elementa
// document.body.innerHTML = "<h2>Jone</h2>";

// ARBA
// const name = 'John';
// const h2 = document.createElement('h2');
// h2.textContent = name;
// document.body.append(h2);

// 3.2. html elementa su java script perrasyti i savo varda

// let name = "Jone"
// document.getElementById("name").textContent = name

//3.3. viena list itema pakeisti i kita pavadinima
// document.querySelector('li:last-child').textContent = 'Suris'


//3.4. istaisyti klaida su javascript i blue
// document.getElementsByTagName('span')[1].textContent = 'blue'
// document.querySelector('.bluetext > span').textContent = 'blue';

// 3.5. order list apkeisiti vietom du elementus
const pirmas_is_saraso = document.querySelector('li:first-child');
const antras_is_saraso = document.querySelector('li:nth-child(2)');

const bmw_group = pirmas_is_saraso.textContent;
const vw_group = antras_is_saraso.textContent;

pirmas_is_saraso.textContent = vw_group;
antras_is_saraso.textContent = bmw_group;