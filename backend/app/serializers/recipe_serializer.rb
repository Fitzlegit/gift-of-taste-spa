class RecipeSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :ingredients, :directions,
             :diet, :category, :cook_time,
             :prep_time, :story

  belongs_to :user
end
