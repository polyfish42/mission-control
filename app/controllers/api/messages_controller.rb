class Api::MessagesController < ApplicationController
  def create
    @message = Message.new(message_params)
    @message.user = current_user
    @message.preview = Nokogiri::HTML(@message.body[0,200]).text

    if @message.save
      render "api/messages/show"
    else
      render json: {errors: @message.errors.full_messages}, status: 422
    end
  end

  def show
    @message = Message.includes(:comments).find(params[:id])
    render "api/messages/show"
  end

  def index
    @messages = Message.all
    render "api/messages/index"
  end

  def update
    @message = Message.find(params[:id])

    if @message.update_attributes(message_params)
      @message.update_attributes(preview: Nokogiri::HTML(@message.body[0,200]).text)
      render "api/messages/show"
    else
      render json: {errors: @message.errors.full_messages}, status: 422
    end
  end

  def destroy
    @message = Message.find(params[:id])
    @message.destroy!
    render "api/messages/show"
  end

  def message_params
    params.require(:message).permit(:title, :body)
  end
end
