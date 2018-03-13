class DropComment < ActiveRecord::Migration[5.1]
  def change
    drop_table :comments
  end
end
