class CubeCardsController < ApplicationController
  def create
    @cube = Cube.find(params[:cube_id])

    @cube_card = @cube.cube_cards.create(cube_card_params)
    redirect_to cube_path(@cube)
  end

  def destroy
    @cube = Cube.find(params[:cube_id])
    @cube_card = @cube.cube_cards.find(params[:id])
    @cube_card.destroy
    redirect_to cube_path(@cube)
  end

  private
    def cube_card_params
      params.require(:cube_card).permit(:cube_id, :set_id, :card_number)
      #params.require(:card)
    end
end
