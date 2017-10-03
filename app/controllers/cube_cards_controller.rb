class CubeCardsController < ApplicationController
  def create
    @cube = Cube.find(params[:id])
    @cubecard = @cube.cubecards.create(cubecard_params)
    redirect_to cube_path(@cube)
  end

  private
    def cubecard_params
      params.require(:card).permit(:id)
      #params.require(:card)
    end
end
