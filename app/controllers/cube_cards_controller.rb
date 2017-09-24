class CubeCardsController < ApplicationController
  def create
    @cube = Cube.find(params[:cube_id])
    @cubecard = @cube.cubecards.create(cubecard_params)
    redirect_to cube_path(@cube)
  end

  private
    def cubecard_params
      params.require(:cubecard).permit(:card)
    end
end
