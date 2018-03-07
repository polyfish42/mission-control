require 'test_helper'

class TodoListsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get todo_lists_create_url
    assert_response :success
  end

  test "should get show" do
    get todo_lists_show_url
    assert_response :success
  end

  test "should get index" do
    get todo_lists_index_url
    assert_response :success
  end

  test "should get update" do
    get todo_lists_update_url
    assert_response :success
  end

  test "should get destroy" do
    get todo_lists_destroy_url
    assert_response :success
  end

end
