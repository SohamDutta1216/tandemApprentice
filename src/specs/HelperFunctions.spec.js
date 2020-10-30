const { shuffleData, groupAnswers } = require('../HelperFunctions')


describe('our shuffleData function shuffles all the array passed in', () => {

  const data = ['hello', 'tandem', 'please', 'hire', 'me', ':)']
  const testShuffle = shuffleData(data)

  it('returns an array with the same values it initially contained', () => {
    expect(testShuffle).toEqual(expect.arrayContaining(data))
  })

  it('should only contain values that are strings', () => {
    for (let i = 0; i < testShuffle.length; i++) {
      expect(typeof (testShuffle[i])).toEqual('string')
    }
  })

  it('does not change any values within the array', () => {
    expect(testShuffle).toEqual(data)
  })

  it('shuffles the array passed in so that atleast one position in the array has changed each return', () => {
    expect(testShuffle).not.toStrictEqual(['hello', 'tandem', 'please', 'hire', 'me', ':)'])
  })

})

describe('our groupAnswers function merges two arrays; In our case, we do not need to worry if it is nested or not', () => {

  const arr1 = [':)']
  const arr2 = ['I', 'am', 'a', 'hard', 'worker']
  const desiredOutput = ['I', 'am', 'a', 'hard', 'worker', [':)']]
  const mergedArray = groupAnswers(arr1, arr2)

  it('returns an array', () => {
    expect(typeof (mergedArray)).toEqual('object')
  })

  it('contains all the values from both arrays passed in', () => {
    expect(mergedArray).toEqual(desiredOutput)
  })
})
