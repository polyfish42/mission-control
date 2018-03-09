class Api::TodosController < ApplicationController
  def create
    @todo = Todo.new(todos_params)
    @todo.user = current_user
    #TODO when doing assignments this will be missing
    # @todo.assignees << User.find(params[:todo][:assignee_id])

    if @todo.save
      @todo_list = @todo.todo_list

      render "api/todo_lists/show"
    else
      render json: {errors: @todo.errors.full_messages}, status: 422
    end
  end

  def show
    @todo = Todo.find(params[:id])
    render "api/todos/show"
  end

  def update
    @todo = Todo.find(params[:id])

    if @todo.update_attributes(todos_params)
      render "api/todos/show"
    else
      render json: {errors: @todo.errors.full_messages}, status: 422
    end
  end

  def destroy
    @todo = Todo.find(params[:id])
    @todo.destroy!
    render "api/todos/show"
  end

  private

  def todos_params
    params.require(:todo).permit(:name, :due_date, :description, :done, :todo_list_id, :assignee_id)
  end
end