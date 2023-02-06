class Api::ThrowsController < ApplicationController
  def index
    result = ThrowsService.new(action: validate_params)

    render json: {
      body: result.determine_result
    }, status: :ok
  end

  private

  def validate_params
    params.require(:throw)
  end
end