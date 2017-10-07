class CubeCardsController < ApplicationController
  def create
    @cube = Cube.find(params[:cube_id])
    @cube_card = @cube.cube_cards.create(cube_card_params)
    redirect_to cube_path(@cube)
  end

  private
    def cube_card_params
      params.require(:cube_card).permit(:cube_id, :card_id)
      #params.require(:card)
    end
end
