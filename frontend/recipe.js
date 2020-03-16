class Recipe {

  static all = []
  constructor({id, name, ingredients, directions, story, cook_time, prep_time, diet, category, user_id}) {
    this.id = id;
    this.name = name;
    this.ingredients = ingredients;
    this.directions = directions;
    this.story = story;
    this.cook_time = cook_time;
    this.prep_time = prep_time;
    this.diet = diet;
    this.category = category;
    this.user_id = user_id;


    this.element = document.createElement('div')
    this.element.className = 'recipe'
    this.element.id = `recipe-${this.id}`

    Recipe.all.push(this)
  }

  // user(){
  //  return User.all.find(user => user.id === this.user_id)
  // }

  fullRender(){
    this.element.innerHTML = `
    <h1>${this.name}</h1>
    <p>${this.story}</p>
    `
    return this.element
  }

}
