# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'

User.delete_all
Recipe.delete_all

users_name = [
  'Jackie',
  'Earl',
  'Ariel',
  'Tyree'
]




users_name.each do |name|
  User.create(username: name)
end

ingredients = []

categories = [
  'Snack',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Dessert',
  'Drinks'
]

User.all.each do |user|
  3.times do
    6.times do
      ingredients << Faker::Food.unique.ingredient
    end
    Recipe.create(
      name: Faker::Food.unique.dish,
      ingredients: ingredients,
      directions: Faker::Lorem.paragraph,
      story: Faker::Food.description,
      cook_time: rand(30..120).to_s + ' mins',
      prep_time: rand(30..120).to_s + ' mins',
      diet: Faker::Lorem.word,
      category: categories.sample,
      user_id: user.id
    )
  end
end
