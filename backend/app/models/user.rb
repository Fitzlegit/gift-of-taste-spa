class User < ApplicationRecord
  has_many :cookbooks
  has_many :recipes
end
