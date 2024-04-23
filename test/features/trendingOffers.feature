Feature: Select Trending Offers

Scenario: As a user I want to select a trending offer from the list
  Given I am on the studentbeans homepage
  When I click on "Trending Now" link on the navigation list
  When I select the 6th discount from the navigation list
  Then I should see the correct discount details from the selected trend