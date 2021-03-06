const recipeAdapter = new RecipesAdapter("http://localhost:3000/recipes")


recipeAdapter.fetchRecipes()


const menu = document.getElementById('menu')
const main = document.getElementById('main')

const formDiv = document.createElement('div')

// event  listeners
menu.addEventListener('click', handleMenuClick)
formDiv.addEventListener('click', handleFormSubmit)

function handleMenuClick(event){
  if(event.target.id !== 'menu'){
    main.innerHTML = ``
    callbacks[`${event.target.id}`]()
  }
}

function handleFormSubmit(event){
  if(event.target.tagName == 'BUTTON'){
    let inputs = formDiv.querySelectorAll('input')
    let select = formDiv.querySelector('select')
    let newRecipeObj = {
      name: inputs[0].value,
      prep_time: inputs[1].value,
      cook_time: inputs[2].value,
      category: select[0].value,
      diet: select[1].value,
      story: document.getElementById('story').value,
      ingredients: document.getElementById('ingredients').value,
      directions: document.getElementById('directions').value,
      user_id: inputs[3].value

    }
    console.log(newRecipeObj)
    recipeAdapter.newRecipe(newRecipeObj)
  }
}

const callbacks = {
  //home: renderHome,
  //myRecipes: renderMyRecipesForm,
  newRecipe: renderNewRecipeForm,
  allRecipes: renderAllRecipes
}

function renderAllRecipes(){
  Recipe.all.forEach(recipe => {
    main.appendChild(recipe.fullRender())
  })
}

function renderNewRecipeForm(){
  formDiv.innerHTML = `
  <section>
    <div class="center">
      <div class="container-md">
        <div class='recipe-form'>
          <label class="recipe-title"><center>Create A New Recipe</center></label>
          <br><br><br>
          <label for="">Name: </label>
          <input type="text" style="padding-right: 36px;"/>
          <br><br>
          <label for="">Prep Time: </label>
          <input type="number" style="width: 4em;">
          <label style="margin-right: 50px;">minutes</label>
          <label for="">Cook Time: </label>
          <input type="number" style="width: 4em;">
          <label>minutes</label>
          <br><br>
          user_id: <input type="text" value="1" style="padding-right: 36px;"/>
          <br><br>
          <label for="">Category: </label>
          <select>
            <option value="snack">Snack</option>
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
            <option value="desert">Desert</option>
            <option value="other">Other</option>
          </select>
          <label for="">Diet: </label>
          <select>
            <option value="balanced">Balanced</option>
            <option value="vegan">Vegan</option>
            <option value="keto">Keto</option>
            <option value="vegatarian">Vegatarian</option>
            <option value="pescatarian">Pescatarian</option>
          </select>
          <br><br>
          <label for="" style="float: right">Story: </label>
          <br><br>
          <textarea id='story' rows="8" cols="83">Tell us all about this food story!</textarea>
          <br><br>
          <label for="" style="float: right;">Ingredients: </label>
          <br><br>
          <textarea id='ingredients' rows="8" cols="83">We're heading to the store for ingredients now!</textarea>
          <br><br>
          <label for="" style="float: right;">Directions: </label>
          <br><br>
          <textarea id='directions' rows="8" cols="83">Let us know your secret!</textarea>
          <br><br
        </div>
      </div>
      <button>Create Recipe</button>
    </div>
  <section>
  `
  main.appendChild(formDiv)
}
