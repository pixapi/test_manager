require 'rails_helper'

RSpec.describe "tests/new", type: :view do
  before(:each) do
    assign(:test, Test.new(
      :name => "MyString",
      :status => "MyString"
    ))
  end

  it "renders new test form" do
    render

    assert_select "form[action=?][method=?]", tests_path, "post" do

      assert_select "input#test_name[name=?]", "test[name]"

      assert_select "input#test_status[name=?]", "test[status]"
    end
  end
end
