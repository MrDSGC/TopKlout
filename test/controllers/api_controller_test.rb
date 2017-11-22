require 'test_helper'

class ApiControllerTest < ActionDispatch::IntegrationTest
  test "should get RankList" do
    get api_RankList_url
    assert_response :success
  end

end
