class CreateTodoLists < ActiveRecord::Migration[5.1]
  def change
    create_table :todo_lists do |t|
      t.string :name, null: false
      t.text :description
      t.integer :user_id

      t.timestamps
    end
    add_index :todo_lists, :user_id
  end
end
