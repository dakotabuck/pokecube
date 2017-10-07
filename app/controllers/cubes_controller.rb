class CubesController < ApplicationController

  def index
    @cubes = Cube.all
    # Here's what will validate the item in the future
    #@cubes = Cube.where(owner_id: 1).all
  end

  def show
    @cube = Cube.find(params[:id])
    @cubecards = CubeCard.where(:cube_id => params[:id])
  end

  def new
    @cube = Cube.new
  end

  # Code for handling submitted form data for cubes/new/
  def create
    @cube = Cube.new(new_cube_params)
    @cube.private = "1"

    if @cube.save
      redirect_to @cube
    else
      render 'new'
    end
  end

  def edit
    @cube = Cube.find(params[:id])
  end

  def update
    @cube = Cube.find(params[:id])

    if params[:private] == "1"
      @cube.private = true
    else
      @cube.private = false
    end

    if @cube.update(cube_params)
      redirect_to @cube
    else
      render 'edit'
    end
  end

  def destroy
    @cube = Cube.find(params[:id])
    @cube.destroy

    redirect_to cubes_path
  end

  private
    # Strong Parameters validation
    def cube_params
      params.require(:cube).permit(:name, :description, :private)
    end

    def new_cube_params
      params.require(:cube).permit(:name)
    end
end
