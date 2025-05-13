#Author: Karolaynmazo@gmail.com
Feature: As a QA Analyst
I want to test the funtionality of saucemo 

  Background:
    Given that customer wants to navigate to the saucemo page 

  Scenario: Login in the page
  When A user enters the username "standard_user", the password "secret_sauce", and clicks on the login button
  Then you can see the main page with title "Products"
