// Susikuriame h1 elementą, jame įrašome savo vardą, pastilizuojame,
// kad elementas būtų raudonas ir pridedame jį prie <body>.
// Sukuriame <ul> elementą, o jame - tris <li> elementus su mašinų
// brand'ais. <body> turi atsirasti <ul>, kuriame trys <li>

// let body = document.querySelector('body')

// let vardas = document.createElement('h1');
// vardas.innerHTML = 'Jone'
// vardas.style = 'color: red';

// let list = document.createElement('ul')
// let opel = document.createElement('li')
// opel.innerHTML = 'Opel'
// let volvo = document.createElement('li')
// volvo.innerHTML = 'Volvo'
// let audi = document.createElement('li')
// audi.innerHTML = 'Audi'

// body.appendChild(vardas)
// body.appendChild(list)
// list.appendChild(opel)
// list.appendChild(volvo)
// list.appendChild(audi)


//Visiškai nenaudojant HTML, sukuriame ir pastilizuojame apačioje 
//atvaizduotą puslapį (stiliaus aspektai nėra itin svarbūs, tad 
//žiūrėkite savo nuožiūra kaip turėtų atrodyti puslapis):

let body = document.querySelector('body')

let card = document.createElement('div')
card.style = 'width: 80%; background-color: aqua; border: solid blue; display: block; margin: 0 auto'

let photo = document.createElement('img')
photo.src = 'https://t4.ftcdn.net/jpg/03/83/25/83/360_F_383258331_D8imaEMl8Q3lf7EKU2Pi78Cn0R7KkW9o.jpg'
photo.style = 'width: 150px; display: block; margin: 0 auto; border-radius: 50%;'

let name = document.createElement('h1')
name.innerHTML = "Trent Walton"
name.style = 'text-align: center'

let job = document.createElement('h2')
job.innerText = 'Founder & 1/3 of @paravelinc'
job.style = ('color: gray; text-align: center')

let place = document.createElement('h2')
place.innerText = 'Austin, TX'
place.style = ('color: gray; text-align: center')

body.appendChild(card)
card.appendChild(photo)
card.appendChild(name)
card.appendChild(job)
card.appendChild(place)