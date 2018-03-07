class Api::TodoListsController < ApplicationController
  def create
    @todo_list = TodoList.new(todo_list_params)

    if @todo_list.save
      render "api/todo_lists/show"
    else
      render json: {errors: @todo_list.errors.full_messages}, status: 422
    end
  end

  def show
    @todo_list = TodoList.find(params[:id])
    render "api/todo_lists/show"
  end

  def index
    @todo_lists = TodoList.all
    render "api/todo_lists/index"
  end

  def update
    @todo_list = TodoList.find(params[:id])

    if @todo_list.update_attributes(todo_list_params)
      render "api/todo_lists/show"
    else
      render json: {errors: @todo_list.errors.full_messages}, status: 422
    end
  end

  def destroy
    @todo_list = TodoList.find(params[:id])
    @todo_list.destroy!
    render "api/todo_lists/show"
  end

  def todo_list_params
    params.require(:todo_list).permit(:name, :description, :user_id)
  end
end
