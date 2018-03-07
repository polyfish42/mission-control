class CreateAssignments < ActiveRecord::Migration[5.1]
  def change
    create_table :assignments do |t|
      t.integer :user_id, null: false
      t.integer :todo_id, null: false
    end
  end
end
