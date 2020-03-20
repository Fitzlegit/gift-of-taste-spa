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

    this.element.addEventListener('click', this.renderRecipe)

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


  renderRecipe = () => {
    console.log(this)
    main.innerHTML = `
    <section>
      <div class="container-fluid" style="background-image: url(images/burger-and-vegetables-placed-on-brown-wood-surface-1565982.jpg); height: 100vh;">
          <div class="container-sm">
            <div class="recipe-show" style="padding-right: 800px;">
              <h1>RECIPE - <a style="color: orange"> ${this.name.toUpperCase()}</a></h1>
              <br>
              <h3>Prep Time: <a style="color: orange"> ${this.prep_time} minutes</a> &nbsp; &nbsp; Cook Time: <a style="color: orange"> ${this.cook_time} minutes</h3>
              <h3>Category: &nbsp; <a style="color: orange">${this.category.toUpperCase()} </a> &nbsp; &nbsp; &nbsp; &nbsp;  Diet: &nbsp; <a style="color: orange"> ${this.diet.toUpperCase()}</a></h3>
              <br>
              Story:
              <br><br>
              <p>${this.story}</p>
              <br>
              Ingredients:
              <br><br>
              <p>
                ${this.ingredients}
              </p>
              <br>
              Directions:
              <br><br>
              <p>${this.directions}</p>
              <div><button id='dtlBtn'>Delete</button></div>
              </div>
            </div>
          </div>

    </section>
    `
    //grab delete button element
    const deleteBtn = document.getElementById('dtlBtn')
    //add event listener
    deleteBtn.addEventListener('click', () => recipeAdapter.deleteRecipe(this.id))

  }


}
