class ApplicationController < ActionController::Base
  rescue_from ActiveRecord::RecordNotFound, with: :not_found
  rescue_from ActiveRecord::RecordInvalid, with: :bad_request

  def index; end

  def render_jsonapi_response(resource)
    if resource.errors.empty?
      render jsonapi: resource
    else
      render jsonapi_errors: resource.errors, status: 400
    end
  end

  private

  def not_found
    render json: {
      errors: [
        {
          status: 404,
          message: 'Not Found.'
        }
      ]
    }, status: :not_found
  end

  def bad_request
    render json: {
      errors: [
        status: 400,
        message: 'Invalid Parameters Passed.'
      ]
    }, status: :bad_request
  end
end
