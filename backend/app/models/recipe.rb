class Recipe < ApplicationRecord
  belongs_to :cookbook_id
  belongs_to :user_id
end
