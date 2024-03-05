// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let calcRectangleArea = (a,b) => a * b
console.log(calcRectangleArea(10,5))

// - створити функцію яка обчислює та повертає площу кола з радіусом r
const pi = 3.14
let calcCircleArea = (r) =>  pi * r ** 2
console.log(calcCircleArea(10))

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let calcCylinderArea = (h,r) => pi * h * r
console.log(calcCylinderArea(8,3))

// - створити функцію яка приймає масив та виводить кожен його елемент
let stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];
let printArrayElements = array => {
    for (const element of array) {
        console.log(element)
    }
}
printArrayElements(stringsArray)

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraphWithText = text => document.write(`<div><p>${text}</p></div>`)
createParagraphWithText('hello hello')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createUl = text => document.write(`<ul> </ul> <li>${text}</li> <li>${text}</li> <li>${text}</li> </ul`)
createUl('some text')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let createUl2 = (text, number) => {
    document.write(`<ul>`)
    for (let i = 0; i < number ; i++) {
        document.write(`<li>${text}</li>`)
    }
    document.write(`</ul`)
}
createUl2('some interesting text', 6)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let buildPrimitiveList = (array) => {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
}
buildPrimitiveList([25,'hello', -4, true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];
let processObjectArray = (array) => {
    for (const arrayElement of array) {
        document.write(`<div>`)
        for (const arrayElementKey in arrayElement) {
            document.write(`<p>${arrayElementKey} : ${arrayElement[arrayElementKey]}</p>`)
        }
        document.write(`</div>`)
    }
}
processObjectArray(people)

// - створити функцію яка повертає найменьше число з масиву
let findMinNumber = (array) => {
    let minNumber = array[0]
    for (const arrayElement of array) {
      if (arrayElement < minNumber) {
          minNumber = arrayElement
      }
    }
    return minNumber
}
console.log(findMinNumber([35,11,67,9,89]))

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumArrElements = (array) => {
    let sum = 0
    for (const element of array) {
    sum += element
    }
    return sum
}
console.log(sumArrElements([3,5,10]))

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
let swap = (array, index1, index2) => {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
}
console.log(swap([1,2,3], 1,2))

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
let exchange = (sumUAH,currencyValues,exchangeCurrency) => {
    let currency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            currency = item.value
        }
    }
    return sumUAH / currency
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD'))
