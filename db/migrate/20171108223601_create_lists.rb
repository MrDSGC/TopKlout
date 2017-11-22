class CreateLists < ActiveRecord::Migration[5.1]
  def change
    create_table :lists do |t|
      t.string :twitter_id, null: false
      t.integer :rank
      t.string :twitter_handle
      t.integer :klout_score
      t.integer :user_id
      t.timestamps
    end
  end
end
