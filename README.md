# Tandem Apprenticeship 2020 Code Challenge
## Goal

Your goal is to create an application that displays trivia questions with multiple-choice answers to select from.

![Alt text](/background.png "preview")

### Assumptioms

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
- implement google OAuth and use our RDBMS to