class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :title
      t.text :bio
      t.string :email, null: false
      t.string :session_token, null: false
      t.string :password_digest, null: false

      t.timestamps
    end
  end
end
