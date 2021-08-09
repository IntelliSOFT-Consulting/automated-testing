Feature: Patient Search

  Background:
    Given User clicks on Find Patient App

  @run
  Scenario Outline: Searching existing or non-existing patient
    When User enters existing "<name>" patient
    Then Return Search Results "<status>"
    Examples:
      | name      | status |
      | test      | true   |
      | babarika  | false  |