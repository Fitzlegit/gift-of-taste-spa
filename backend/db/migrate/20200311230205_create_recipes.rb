class CreateRecipes < ActiveRecord::Migration[6.0]
  def change
    create_table :recipes do |t|
      t.string :name
      t.text :ingredients
      t.text :directions
      t.string :story
      t.string :cook_time
      t.string :prep_time
      t.string :diet
      t.string :category
      t.references :cookbook_id, null: false, foreign_key: true
      t.references :user_id, null: false, foreign_key: true

      t.timestamps
    end
  end
end
