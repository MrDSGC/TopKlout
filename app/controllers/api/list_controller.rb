class Api::ListController < ApplicationController
  def create
    @list = List.new(list_params)
    if @list.save
      render json: {}
    else
      render json:
      @list.errors.full_messages, status: 422
    end
  end

  def update
  end

  private

  def list_params
    params.require(:list).permit(:twitter_id,:rank, :twitter_handle, :klout_score, :user_id)
  end



end
