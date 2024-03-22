// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.
let cartBlock = document.createElement('div')
cartBlock.classList.add('cartBlock')
fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(({carts}) => {
        for (const cart of carts) {
          let container =  document.createElement('div')
              container.classList.add('container')
              cartBlock.appendChild(container)

            for (const product of cart.products) {

                let imgBlock = document.createElement('div')
                imgBlock.classList.add('imgBlock')
                let img = document.createElement('img')
                img.src = product.thumbnail
                imgBlock.appendChild(img)

                let orderSummaryBlock = document.createElement('div')
                orderSummaryBlock.classList.add('orderSummaryBlock')

                let h1 = document.createElement('h1')
                h1.innerText = product.title

                let h2 = document.createElement('h2')
                h2.innerText = `Price: ${product.price} $`

                let quantity = document.createElement('span')
                quantity.innerText = `Quantity - ${product.quantity} pieces`

                let total = document.createElement('span')
                total.innerText = `Total - ${product.total} $`

                let discountPercentage = document.createElement('span')
                discountPercentage.innerText = `Discount Percentage - ${product.discountPercentage} %`

                let discountedPrice = document.createElement('span')
                discountedPrice.innerText = `Discounted Price - ${product.discountedPrice} $`

                orderSummaryBlock.append(h1,h2,quantity,total,discountPercentage,discountedPrice)
                container.append(imgBlock,orderSummaryBlock)
            }
        }

    })
document.body.appendChild(cartBlock)







