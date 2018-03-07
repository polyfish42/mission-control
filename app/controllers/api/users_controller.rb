class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  def demo
    @user = demo_user

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: {errors: @user.errors.full_messages}, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end

  def demo_user
    User.new(email: Faker::Internet.unique.email,
             name: Faker::Name.unique.name,
             title: Faker::Job.title,
             bio: Faker::HitchhikersGuideToTheGalaxy.quote,
             password: 'password'
            )
  end
end
