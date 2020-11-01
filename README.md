# Tandem Apprenticeship 2020 Code Challenge
## Goal

Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.

![Alt text](https://i.postimg.cc/fT0cc67G/Screen-Shot-2020-11-01-at-9-39-14-AM.png "preview")

### Assumptions

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.

### Acceptance Criteria

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time.
- Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer
- A user can see the score they received at the end of the round

### Running

- git clone
- cd into the project directory
- ```npm install```
- ```npm start```
- Go to http://localhost:3000/

### Testing

This project was tested using Jest and Enzyme
- either cd into the spec files you wish to test individually and run ```npm test```
- or ```npm test``` and ```a``` to run all tests

### Tech Stack

- React
- Materialize CSS
- Enzyme
- Jest

### Dependencies

```
"@testing-library/jest-dom": "^5.11.5"
"@testing-library/react": "^11.1.0"
"@testing-library/user-event": "^12.1.10"
"react": "^17.0.1"
"react-dom": "^17.0.1"
"react-scripts": "4.0.0"
"web-vitals": "^0.2.4"
"enzyme": "^3.11.0",
"enzyme-adapter-react-16": "^1.15.5"
```

### Resources

Testing
- Jest docs - https://jestjs.io/docs/en/getting-started
- Enzyme docs - https://enzymejs.github.io/enzyme/
- 'How to get started unit testing React components with Jest & Enzyme' by
WellPaidGeek on YouTube https://www.youtube.com/watch?v=XUlGzJLZe2Q&ab_channel=WellPaidGeek
- 'How to Directly Test React Component Methods with Enzyme' by Brian Ambielli https://bambielli.com/til/2018-03-04-directly-test-react-component-methods/

### Future Features

- implement a RDBMS such as PostgresSQL to hold all our JSON data
- create a sign-up and log-in component
- implement google OAuth and use our database to keep track of user login information and allow easy sign-up/log-in
- create a component to handle user submissions for their own questions and answers
- use our database to hold user submissions for new questions and answers
- create a database model and a well structured schema
- add a 'Categories' key on our data so that users can submit groups of questions under a certain topic
- create a landing page for our users rather than starting at the trivia game itself
- have our landing page render lists of categories to choose from and a search bar to search for categories
- implement pagination on our landing page
- implement the new React hooks syntax rather than the legacy React syntax; At this point Redux would most likely need to be implemented as well
- implement React-share and React-helmet so logged in users can share their score with friends on social media
- improve the UI/UX, possibly creating a custom library rather than using Materialize CSS
