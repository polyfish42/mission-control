class AddPreviewToMessages < ActiveRecord::Migration[5.1]
  def change
    add_column :messages, :preview, :text
  end
end
