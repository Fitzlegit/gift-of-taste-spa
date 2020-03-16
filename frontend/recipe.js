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

    Recipe.all.push(this)
  }
}
