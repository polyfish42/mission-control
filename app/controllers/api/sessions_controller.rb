class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login(@user)
      render "api/users/show"
    else
      render json: {errors: ["Invalid email or password"]}
    end
  end

  def destroy
    @user = current_user
    logout
    render 'api/users/show'
  end
end
