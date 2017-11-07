class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @userlogin(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"], status: 404
    end
  end

  private

  def user_params
    params_require(:user).permit(:username, :password, :session_token)
  end

end
