// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом

let forma1 = document.forms.forma1

forma1.onsubmit = function (e) {
    e.preventDefault()
    let name = forma1['name'].value
    let surname = forma1.surname.value
    let age = forma1['age'].value
    let block = document.createElement('div')
    let info = document.createElement('p')
    info.innerText = `Name: ${name},Surname: ${surname}, Age: ${age}`

        block.appendChild(info)
    document.body.appendChild(block)
}

// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1


let block = document.createElement('div')
block.style.fontSize = '50px'

let initialValue = localStorage.getItem('number') || 0
block.innerText = initialValue

document.body.appendChild(block)
window.addEventListener('load', function () {
    let currentNumber = parseInt(block.innerText)
    currentNumber++
    block.innerText = currentNumber
    localStorage.setItem('number', currentNumber)
})

// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

// Це завдання виконано в папці sessions

// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

class Object {
    constructor(id,name,value) {
        this.id = id
        this.name = name
        this.value = value
    }
}

let arrayOfObjects = []
for (let i = 0; i < 100 ; i++) {
    let obj = new Object(i+1, 'Object' + (i+1), Math.floor(Math.random()*100))
    arrayOfObjects.push(obj)
}

console.log(arrayOfObjects)

let arrayBlock = document.createElement('div')
let prevButton = document.createElement('button')
prevButton.innerText = 'Prev'
let nextButton = document.createElement('button')
nextButton.innerText = 'Next'

let startIndex = 0

document.body.appendChild(arrayBlock)
document.body.append(prevButton,nextButton)
function displayObjects(startIndex) {
    arrayBlock.innerHTML = ''
    for (let i = startIndex; i < startIndex + 10 && i < arrayOfObjects.length; i++) {
        let obj = arrayOfObjects[i]
        let div = document.createElement('div')
        div.innerText = `ID:${obj.id}, Name:${obj.name}, Value:${obj.value}`
        arrayBlock.appendChild(div)
    }
}

displayObjects(startIndex)

nextButton.addEventListener('click', function () {
if (startIndex < arrayOfObjects.length){
    startIndex +=10
    displayObjects(startIndex)
}
})

prevButton.addEventListener('click', function () {
    if (startIndex - 10 >= 0) {
        startIndex -=10
        displayObjects(startIndex)
    }
})
// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

let text = document.createElement('div')
text.id = 'text'
document.body.appendChild(text)

let button = document.createElement('button')
button.innerText = 'Hide block'
document.body.appendChild(button)

button.onclick = function () {
    text.style.display = 'none'
}

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача

let forma2 = document.forms['forma2']
let confirmButton = document.getElementById('confirmButton')

confirmButton.onclick = function () {
    if(forma2['age'].value < 18) {
        alert('You are under 18 years old')
    }
}

// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)

// let form = document.createElement('form')
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// let input3 = document.createElement('input')
//  form.append(input1,input2,input3)

let forma3 = document.forms.forma3

let tableContainer = document.getElementById('tableContainer')

let createButton = document.getElementById('createButton')

createButton.onclick = function (e) {
    e.preventDefault()
    let rowCount = parseInt(forma3.rowCount.value)
    let colCount = parseInt(forma3.colCount.value)
    let content = forma3.content.value

    let table = document.createElement('table')

    for (let i = 0; i < rowCount ; i++) {
        let row = document.createElement('tr')
        for (let j = 0; j < colCount; j++) {
            let col = document.createElement('td')
            col.innerHTML = content
            row.appendChild(col)
        }
        table.appendChild(row)
    }

    tableContainer.innerHTML = ''
    tableContainer.appendChild(table)
}
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантажен