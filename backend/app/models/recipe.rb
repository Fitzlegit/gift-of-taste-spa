class Recipe < ApplicationRecord
  belongs_to :cookbook
  belongs_to :user
end
