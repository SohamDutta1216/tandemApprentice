const { shuffleData, groupAnswers } = require('../HelperFunctions.js')

describe('our shuffleData function', () => {

  const data = ['hello', 'tandem', 'please', 'hire', 'me', ':)']
  const testShuffle = shuffleData(data)

  it('returns an array with the same values it initially contained', () => {
    expect(testShuffle).toEqual(expect.arrayContaining(data))
  })

  it('does not change any values within the array', () => {
    expect(testShuffle).toEqual(data)
  })

  it('shuffles the array passed in so that atleast one position in the array has changed each return', () => {
    expect(testShuffle).not.toStrictEqual(['hello', 'tandem', 'please', 'hire', 'me', ':)'])
  })

  it('should only contain values that are strings', () => {
    for (let i = 0; i < testShuffle.length; i++) {
      expect(typeof (testShuffle[i])).toEqual('string')
    }
  })
})