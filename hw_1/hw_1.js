// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//     Вивести кожну змінну за допомогою: console.log
//
// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ. З'єднати їх в одну змінну person (Не об'єкт, просто за допомоги конкатенації)
//
// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//     let a = 100; let b = '100'; let c = true;
//
// Додаткове для тих хто цікавився prompt`oм
// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль


let hello = "hello"
console.log(hello)

let owu = "owu"
console.log(owu)

let com = "com"
console.log(com)

let ua = "ua"
console.log(ua)

let n1 = 1
console.log(n1)

let n2 = 10
console.log(n2)

let n3 = -999
console.log(n3)

let n4 = 123
console.log(n4)

let p = 3.14
console.log(p)

let n5 = 2.7
console.log(n5)

let n6 = 16
console.log(n6)

let t = true
console.log(t)

let f = false
console.log(f)

let firstName = "Iryna"
let middleName = "Pavlivna"
let lastName ="Mruchok"
let person = firstName + ' ' + middleName + ' ' + lastName
console.log(person)

let a = 100
console.log(typeof a)

let b = '100'
console.log(typeof b)

let c = true
console.log(typeof c)

let userName = prompt('Please, enter your name')
let userMiddleName = prompt('Please, enter your middle name')
let userAge = prompt('Please. enter your age')
console.log(`${userName} ${userMiddleName} ${userAge}`)