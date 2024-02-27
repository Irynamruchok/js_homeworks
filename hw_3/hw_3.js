// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Масив:
//
//     let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
//
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список з даними з масиву
//
// -----------------------------------------------
//
//     Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон
//
// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

//
//
// --------------------
//     є масив
// let users = [
//     {name: 'vasya', age: 31, status: false},
//     {name: 'petya', age: 30, status: true},
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false},
//     {name: 'max', age: 30, status: true},
//     {name: 'anya', age: 31, status: false},
//     {name: 'oleg', age: 28, status: false},
//     {name: 'andrey', age: 29, status: true},
//     {name: 'masha', age: 30, status: true},
//     {name: 'olya', age: 31, status: false},
//     {name: 'max', age: 31, status: true}
// ];
// за допомоги циклу вивести:
//     - користувачів зі статусом true
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let myArray = [
    "Hello, world!",
    "How are you?",
    "This is just an example",
    "Array with random text",
    "Imagine your data here",
    "Very interesting!",
    "JavaScript is a great language",
    "Nice to meet you",
    "May the code be with you",
    "Good luck with your project!"
];

for (const string of myArray) {
    document.write(`<div><p>${string}</p> </div>`)
}

let myObjectsArray = [
    { name: "John", age: 25, city: "New York" },
    { name: "Emily", age: 30, city: "Los Angeles" },
    { name: "David", age: 22, city: "Chicago" },
    { name: "Sarah", age: 28, city: "Miami" },
    { name: "Michael", age: 35, city: "San Francisco" },
    { name: "Emma", age: 29, city: "Seattle" },
    { name: "Daniel", age: 26, city: "Boston" },
    { name: "Olivia", age: 32, city: "Austin" },
    { name: "William", age: 27, city: "Denver" },
    { name: "Sophia", age: 31, city: "Portland" }
];
let index = 0
for (const myObjectsArrayElement of myObjectsArray) {
    document.write(`<div><p>${myObjectsArrayElement.name} ${index++} </p></div>`)
}
for (let i = 0; i < myObjectsArray.length; i++) {
    const myObjectsArrayElement = myObjectsArray[i];
  document.write(`<div> ${myObjectsArrayElement.city} ${i} </div>`)
}

const textArray = [
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text ",
    "Text "
];
 let i = 0
while (i < textArray.length) {
     let textItem = textArray[i]
     document.write(`<h1>${textItem}</h1>`)
     i++
}

let indx = 0
while (indx < textArray.length){
     let textItem = textArray[indx]
    document.write(`<h1> ${textItem} ${indx}</h1>`)
    indx ++
}

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];
    document.write(`<ul>`)
for (const listOfItem of listOfItems) {
    document.write(`<li>${listOfItem}</li>`)
}
    document.write(`</ul>`)

//------------------------------------------------------------------------------

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

for (const product of products) {
   document.write(`<div class="product-card"> <h3 class="product-title"> ${product.title} Price - ${product.price} </h3>
                       <img src=${product.image} alt=${product.title}>
                   </div>`)
}
for (let j = 0; j < products.length; j++) {
    const product = products[j];
    document.write(`<div class="product-card"> <h3 class="product-title"> ${product.title} Price - ${product.price} </h3>
                       <img src=${product.image} alt=${product.title}>
                    </div>`)
}
// -----------------------------------------------------------------------------
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
for (const user of users) {
    if (user.status === true) {
        console.log(user)
    }
}
for (let j = 0; j < users.length; j++) {
    const user = users[j];
    if (user.status === true) {
        console.log(user)
    }
}
for (const user of users) {
    if (user.status === false) {
        console.log(user)
    }
}
for (let j = 0; j < users.length; j++) {
    const user = users[j];
    if (user.status === false) {
        console.log(user)
    }
}
for (const user of users) {
    if (user.age > 30) {
        console.log(user)
    }
}
for (let j = 0; j < users.length; j++) {
    const user = users[j]
    if (user.age > 30) {
        console.log(user)
    }
}