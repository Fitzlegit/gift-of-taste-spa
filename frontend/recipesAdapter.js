class RecipesAdapter {
  constructor(baseURL){
    this.baseURL = baseURL;
  }

  fetchRecipes(){
    fetch(this.baseURL)
      .then(res => res.json())
      .then(resObj => {
        resObj.data.forEach(recipeObj => {
          let sanitized = {id: recipeObj.id, ...recipeObj.attributes, user_id: recipeObj.relationships.user.data.id}
          new Recipe(sanitized)
        })
      })
      .then(() => console.log(Recipe.all))
  }
}
