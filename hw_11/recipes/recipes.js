
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.
fetch('https://dummyjson.com/recipes')
    .then(res=>res.json())
    .then(({recipes}) => {

        let recipesBlock = document.createElement('div')
        recipesBlock.classList.add('recipesBlock')

        for (const recipe of recipes) {
            let recipeBlock = document.createElement('div')
            recipeBlock.classList.add('recipeBlock')
            console.log(recipe)
            let recipeName = document.createElement('h2')
            recipeName.innerText = recipe.name

            let recipeImg = document.createElement('img')
            recipeImg.src = recipe.image

            let ingredientsList = document.createElement('ul')
            ingredientsList.innerText = 'Ingredients:'
            for (const ingredient of recipe.ingredients) {
                let li = document.createElement('li')
                li.innerText = ingredient
                ingredientsList.appendChild(li)
            }

            let instructions = document.createElement('div')
            instructions.innerText = 'Instructions:'
            for (const instruction of recipe.instructions) {
                let instructionText = document.createElement('p')
                instructionText.innerText = instruction
                instructions.appendChild(instructionText)
            }

            let cookingDescription = document.createElement('div')
            cookingDescription.innerText = `PrepTimeMinutes: ${recipe.prepTimeMinutes }, CookTimeMinutes: ${recipe.cookTimeMinutes}, Servings: ${recipe.servings}, Difficulty: ${recipe.difficulty}`

            recipeBlock.append(recipeName,recipeImg,ingredientsList,instructions,cookingDescription)
            recipesBlock.appendChild(recipeBlock)
        }
        document.body.appendChild(recipesBlock)

    })
