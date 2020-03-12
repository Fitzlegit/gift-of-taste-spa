class Cookbook < ApplicationRecord
  belongs_to :user
  has_many :recipes, through: :user
end
