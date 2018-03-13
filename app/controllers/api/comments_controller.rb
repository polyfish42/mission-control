class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @message = Message.find(params[:comment][:message_id])
    @message.comments << @comment
    @comment.author = current_user

    if @comment.save
      render "api/comments/show"
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :todo_id, :todo_list_id)
  end
end
