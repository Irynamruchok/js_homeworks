// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function calcRectangleArea (a,b) {
    return a * b;
}
console.log(calcRectangleArea(7,4))
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const pi = 3.14
function calcCircleArea(r) {
    return pi * (r ** 2);
}
console.log(calcCircleArea( 10))
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function calcCylinderArea(h,r) {
    return pi * h * r;
}
console.log(calcCylinderArea(15,4))
// - створити функцію яка приймає масив та виводить кожен його елемент
let stringsArray = ["apple", "banana", "orange", "grape", "kiwi"];
function printArrayElements(array) {
    for (const arrayElement of array) {
        console.log(arrayElement)
    }
}
printArrayElements(stringsArray)
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
function createParagraphWithText(text) {
    document.write(`<p>${text}</p>`)
}
createParagraphWithText('some text')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function createUL(text) {
    document.write(`<ul>
                      <li>${text}</li>
                      <li>${text}</li>
                      <li>${text}</li>
                    </ul>`)
}
createUL('some interesting information')
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function createUL2(text,number) {
    document.write(`<ul>`)
    for (let i = 0; i < number; i++) {
       document.write(`<li>${text}</li>`)
    }
    document.write(`</ul>`)
}
createUL2('text information',3)
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildPrimitiveList(array) {
    document.write(`<ul>`)
    for (const arrayElement of array) {
        document.write(`<li>${arrayElement}</li>`)
    }
    document.write(`</ul>`)
}
buildPrimitiveList([11, 67,'hello', true])
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let people = [
    { id: 1, name: 'John', age: 30 },
    { id: 2, name: 'Alice', age: 25 },
    { id: 3, name: 'Bob', age: 35 }
];
function processObjectArray(arrayOfObj) {
    for (const arrayOfObjElement of arrayOfObj) {
        document.write(`<div>`)
        for (let arrayOfObjElementKey in arrayOfObjElement) {
           document.write(`<p>${arrayOfObjElementKey} : ${arrayOfObjElement[arrayOfObjElementKey]}</p>`)
        }
        document.write(`</div>`)
    }
}
processObjectArray(people)

// - створити функцію яка повертає найменьше число з масиву
function findMinNumber(arr) {
    let minNumber = arr[0];
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
      if (arrElement < minNumber)  {
          minNumber = arrElement
      }
    }
    console.log(minNumber)
}
findMinNumber([100001,33,45,500,8,10,67])

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sumArrElements(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        const arrElement = arr[i];
         sum += arrElement
    }
    return sum
}

console.log(sumArrElements([3, 5, 7]))
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
function swap(arr, index1, index2) {
    let temp = arr[index1]
      arr[index1] = arr[index2]
      arr[index2] = temp

         console.log(arr)
}
swap([11,22,33,44], 0,1)

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let currency;
    for (const item of currencyValues) {
      if (item.currency === exchangeCurrency) {
          currency = item.value
      }
    }
 return  sumUAH / currency
}
console.log(exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD' ))