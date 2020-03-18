class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: RecipeSerializer.new(recipes)
  end

  def show
    recipe = Recipe.find_by(params[:id])
    render json: RecipeSerializer.new(recipe)
  end

  def create
    newRecipe = Recipe.new(recipe_params)
    newRecipe.save
    render json: RecipeSerializer.new(newRecipe)
  end

  def update
    updateRecipe = find_by(params[:id])
    updateRecipe.update(recipe_params)
    updateRecipe.save
    render json: RecipeSerializer.new(updateRecipe)
  end

  def destroy
    recipe = Recipe.find_by(params[:id])
    recipe.delete
  end

  private

  def recipe_params
    params.require(:recipe).permit(:name, :story, :directions, :ingredients,
                                   :category, :diet, :cook_time, :prep_time,
                                   :user_id)
  end
end
