Feature: One-liner description of this feature

  # This scenario will run as part of the Meteor dev cycle because it has the @dev tag
  @focus
  Scenario: This scenario will run on both dev and CI
    When I navigate to "/"
    Then I should see the class "hello" from "{}/client/hello.mss"
