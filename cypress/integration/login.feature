Feature: User Login

  Background:
    Given User visits login page

  @run
  Scenario Outline: Failing or Succeeding to Login
    When User enters "<username>" username
    And User enters "<password>" password
    And User Selects "<location>" Login Location
    And User Logs in
    Then System Evaluates Login "<status>"
    Examples:
      | username  | password  | location      | status |
      | admin     | wrongPas  | object:7      | false  |
      | wrongUser | Admin123  | object:7      | false  |
      | wrongUser | wrongPas  | object:7      | false  |
      | admin     | Admin123  | object:7      | false  |
      | superman  | Admin123  | object:7      | true   |
@run
  Scenario: Just Login
    When User enters username
    And User enters password
    And User Selects Login Location
    And User Logs in
    Then User navigates to dashboard