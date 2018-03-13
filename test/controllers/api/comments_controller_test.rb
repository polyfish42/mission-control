require 'test_helper'

class Api::CommentsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_comments_create_url
    assert_response :success
  end

end
