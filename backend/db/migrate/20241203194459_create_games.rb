class CreateGames < ActiveRecord::Migration[8.0]
  def change
    create_table :games do |t|
      t.json :board
      t.json :players
      t.integer :current_turn
      t.string :status

      t.timestamps
    end
  end
end
