class CreateAttendings < ActiveRecord::Migration[5.1]
  def change
    create_table :attendings do |t|
      t.integer :user_id, null: false
      t.integer :event_id, null: false
    end
  end
end
