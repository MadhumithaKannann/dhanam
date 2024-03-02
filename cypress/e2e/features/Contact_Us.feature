Feature: WebdriverUniversity - Contact Us page

Scenario: Valid Contact Us form submission
Given i validate the webdriveruniversity homepage
When I click on the contact us button
And I type a first name 
And I type a last name 
And I type an mail address
And I type a comment
And I click on the submit button
Then U should be submitted with a successful contact us submission form



Scenario: invalid contact us form submission
Given i validate the webdriveruniversity homepage
When I click on the contact us button
And I type a first name 
And I type a last name
And I type a comment
And I click on the submit button
Then U should be submitted with a unsuccessful contact us submission form


Scenario: Valid contact us form submission- using specific data
Given i validate the webdriveruniversity homepage
When I click on the contact us button
And I type a specific first name "madhu"
And I type a specific last name "woods"
And I type a specific email address "madhu@gmail.com"
And I type a specific word "hello hai" and number 679 within the comment input field
And I click on the submit button
Then U should be submitted with a successful contact us submission form

Scenario: Valid contact us form submission- using specific data2
Given i validate the webdriveruniversity homepage
When I click on the contact us button
And I type a specific first name "Sushmi"
And I type a specific last name "Kannan"
And I type a specific email address "sushmi@gmail.com"
And I type a specific word "hello madhu" and number 876 within the comment input field
And I click on the submit button
Then U should be submitted with a successful contact us submission form


