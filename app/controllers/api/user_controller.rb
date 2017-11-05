class Api::UserController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      redner 'api/users/show'
    else
      render json:
      @user.errors.full_messages, status:422
    end
  end

  privateb

  def user_params
    params.require(:user).permit(:username, :password,:biography, :profile_pic_url)
  end

end
