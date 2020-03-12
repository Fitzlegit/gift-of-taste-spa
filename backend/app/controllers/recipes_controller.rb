class RecipesController < ApplicationController
  def index
    recipes = Recipe.all
    render json: recipes
  end

  def show
    recipe = Recipe.find_by(params[:id])
    render json: recipe
  end

  def create
    recipe = Recipe.new(recipe_params)
    recipe.save
    render json: recipe
  end

  def update
    recipe = find_by(params[:id])
    recipe.update(recipe_params)
    recipe.save
    render json: recipe
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
