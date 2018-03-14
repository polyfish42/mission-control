require 'test_helper'

class Api::EventsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_events_create_url
    assert_response :success
  end

  test "should get show" do
    get api_events_show_url
    assert_response :success
  end

  test "should get index" do
    get api_events_index_url
    assert_response :success
  end

  test "should get update" do
    get api_events_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_events_destroy_url
    assert_response :success
  end

end
