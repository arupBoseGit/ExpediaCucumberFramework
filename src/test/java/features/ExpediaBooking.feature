Feature: Expedia various types of booking

  Scenario: As a user I want to search hotel in Expedia
    Given I am navigated to Expedia
    When I choose hotel booking tab
    And I provide hotel booking information
    Then I should be able to view list of hotel search result