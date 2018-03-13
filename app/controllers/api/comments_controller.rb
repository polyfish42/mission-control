class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    @comment.user = current_user

    if @comment.save
      render "api/comment/show"
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body, :message_id, :todo_id, :todo_list_id)
  end
end
