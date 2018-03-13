class CreateMessages < ActiveRecord::Migration[5.1]
  def change
    create_table :messages do |t|
      t.string :title, null: false
      t.text :body
      t.integer :user_id, null: false

      t.timestamps
    end
  end
end
