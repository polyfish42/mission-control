class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.string :name, null: false
      t.date :due_date
      t.text :description
      t.boolean :done, default: false
      t.integer :todo_list_id
      t.integer :user_id

      t.timestamps
    end
    add_index :todos, :todo_list_id
    add_index :todos, :user_id
  end
end
