class UsersController < ApplicationController
  def create
    user = User.new(user_params)
    user.save
    rander json: user
  end

  def show; end

  def destroy
    user = User.find_by(params[:id])
    user.delete
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password_digest)
  end
end
