# Lab8_Starter

Name: Richie Porras

## Check your understanding q's (FILL OUT)
1. In your own words: Where would you fit your automated tests in your Bujo project development pipeline? (just write the letter)

`1.`

2. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

`No. Unit testing will not work with testing the "message" feature as it is interacting between users. In other words, there multiple individual components involved that "interact with each other on an application/feature level."`

3. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

`Yes. This is just an individual part of the code in an encapsulated unit and we will be able to check if it is functioning as it should. In this case, "max message length" is set up correctly.`

4. What do you expect to happen if we run our puppeteer tests with the field “headless” set to true?

`I expect that the Puppeteer tests with the field "headless" set to true will run the tests without a browser UI considering a true parameter is the default for Headless; so a visible UI will not be available for our tests. In my observation upon setting headless to true, there was no web pop up of our entries. Meanwhile, setting headless to false creates a web popup with the entries with a message "chrome is being controlled by automated software" before closing.`

5. What would your beforeAll callback look like if you wanted to start from the settings page before every test case?
   
`````

beforeAll(async () => {
    await page.goto('http://127.0.0.1:5500');   // change link to start from settings page and not use gotto
  });

`````
  
   

