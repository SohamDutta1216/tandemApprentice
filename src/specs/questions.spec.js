const questions = require('../data/Questions')

test('our questions data has a length greater than 0', () => {
  let currentLength = questions.length
  expect(currentLength).toBeGreaterThan(0)
})

test('our questions are defined', () => {
  expect(questions.map(quest => quest.question)).toBeDefined()
})

test('our incorrect answers are defined', () => {
  expect(questions.map(quest => quest.incorrect)).toBeDefined()
})

test('our correct answers are defined', () => {
  expect(questions.map(quest => quest.correct)).toBeDefined()
})
