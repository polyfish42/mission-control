class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    parent.comments << @comment
    @comment.author = current_user

    if @comment.save
      render "api/comments/show"
    else
      render json: {errors: @comment.errors.full_messages}, status: 422
    end
  end

  def comment_params
    params.require(:comment).permit(:body)
  end

  def parent
    cp = params[:comment]
    if !!cp[:message_id]
      Message.find(cp[:message_id])
    elsif !!cp[:todo_id]
      Todo.find(cp[:todo_id])
    elsif !!cp[:todo_list_id]
      TodoList.find(cp[:todo_list_id])
    end
  end
end
