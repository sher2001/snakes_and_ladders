class GamesController < ApplicationController
  def create
    @game = Game.new(
      board: generate_board,
      players: [],
      current_turn: 0,
      status: 'pending'
    )
    if @game.save
      render json: @game, status: :created
    else
      render json: @game.errors, status: :unprocessable_entity
    end
  end

  def show
    @game = Game.find(params[:id])
    render json: @game
  end

  def roll_dice
    @game = Game.find(params[:id])
    # TODO Dice roll and update logic goes here
    render json: @game
  end

  private

  def generate_board
    # Generate snakes and ladders
    # TODO (need to make it dynamic)
    snakes = { 16 => 6, 47 => 26, 49 => 11 } # Example
    ladders = { 2 => 38, 15 => 45, 22 => 77 } # Example
    { snakes: snakes, ladders: ladders }
  end
end
