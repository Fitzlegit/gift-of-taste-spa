const recipeAdapter = new RecipesAdapter("http://localhost:3000/recipes")


recipeAdapter.fetchRecipes()


const menu = document.getElementById('menu')
const main = document.getElementById('main')

// event  listeners
menu.addEventListener('click', handleMenuClick)

function handleMenuClick(event){
  if(event.target.id !== 'menu'){
    callbacks[`${event.target.id}`]()
  }
}


const callbacks = {
  //home: renderHome,
  //myRecipes: renderMyRecipes,
  //newRecipes: renderNewRecipes,
  allRecipes: renderAllRecipes
}

function renderAllRecipes(){
  Recipe.all.forEach(recipe => {
    main.appendChild(recipe.fullRender())
  })
}
