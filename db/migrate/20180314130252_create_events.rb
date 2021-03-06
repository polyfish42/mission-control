class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title, default: "Untitled"
      t.datetime :start_date, null: false
      t.datetime :end_date, null: false
      t.text :notes
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :events, :user_id
  end
end
