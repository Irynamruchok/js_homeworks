
//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)
let url = new URL('https://jsonplaceholder.typicode.com/users')
fetch(url)
.then(res=> res.json())
.then((users) => {
    let usersList = document.createElement('ul')
    for (const user of users) {
        let li = document.createElement('li')
        let link = document.createElement('a')
        link.href = `user-details.html?id=${user.id}`
        link.innerText = `${user.id} - ${user.name}`
        li.appendChild(link)
        usersList.appendChild(li)
    }
    document.body.appendChild(usersList)
})

