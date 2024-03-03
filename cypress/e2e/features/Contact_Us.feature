Feature: WebdriverUniversity - Contact Us page

    Background:
        Given i validate the webdriveruniversity homepage
        When I click on the contact us button

    Scenario: Valid Contact Us form submission
        And I type a first name
        And I type a last name
        And I type an mail address
        And I type a comment
        And I click on the submit button
        Then U should be submitted with a successful contact us submission form



    Scenario: invalid contact us form submission
        And I type a first name
        And I type a last name
        And I type a comment
        And I click on the submit button
        Then U should be submitted with a unsuccessful contact us submission form


    Scenario: Valid contact us form submission- using specific data
        And I type a specific first name "madhu"
        And I type a specific last name "woods"
        And I type a specific email address "madhu@gmail.com"
        And I type a specific word "hello hai" and number 679 within the comment input field
        And I click on the submit button
        Then U should be submitted with a successful contact us submission form

    Scenario: Valid contact us form submission- using specific data2
        And I type a specific first name "Sushmi"
        And I type a specific last name "Kannan"
        And I type a specific email address "sushmi@gmail.com"
        And I type a specific word "hello madhu" and number 876 within the comment input field
        And I click on the submit button
        Then U should be submitted with a successful contact us submission form
    @smoke
    Scenario Outline: validate contact us submitted -using scenario outline
        When I type a '<firstName>' and a last name '<lastName>'
        And I type a email '<emailAddress>' and a comment '<comment>'
        And I click on the submit button
        Then I should be presented with header test '<message>'

        Examples:
            | firstName | lastName | emailAddress    | comment    | message                     |
            | john      | jones    | vjbkj@gmail.com | vhgfvhjhhv | Thank You for your Message! |
            | gvv       | hhhjhm   | hjh@gmail.com   | yhguyfyuj  | Thank You for your Message! |
            | gvv       | hhhjhm   | set@gmail.com   | yhguyfyuj  | Error: Invalid email Address|

