class RecipesAdapter {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  fetchRecipes(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(resObj => {
        resObj.data.forEach(this.sanitizeAndAddRecipe)
      })
  }

  //create new Recipe
  newRecipe(recipeObj){
    let configObj = {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'},
      body: JSON.stringify(recipeObj)
    }
    fetch(this.baseURL, configObj)
      .then(res => res.json())
      .then((resObj) => this.sanitizeAndAddRecipe(resObj.data))
  }

  //update recipe
  updateRecipe(recipeObj){
    let configObj = {
    method: 'PATCH'
    headers: {'Content-Type': 'application/json', 'Accepts': 'application/json'},
    body: JSON.stringify(recipeObj)
  }
  fetch(this.baseURL, configObj)
    .then(res => res.json())
    .then((resObj) => this.sanitizeAndAddRecipe(resObj.data))
}
  // sanitizes new recipe
  sanitizeAndAddRecipe(recipeObj){
    let sanitized = {id: recipeObj.id, ...recipeObj.attributes, user_id: recipeObj.relationships.user.data.id}
    new Recipe(sanitized)
  }
}
