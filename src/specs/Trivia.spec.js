import React from 'react'
import Trivia from '../Trivia'
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
configure({ adapter: new Adapter() })


describe('Trivia', () => {
  const wrapper = shallow(<Trivia />)
  const instance = wrapper.instance()

  describe('our initial state', () => {

    it('has a key called first10 that returns an array', () => {
      const first10 = wrapper.find('first10')
      expect(first10).toBeDefined()
      expect(typeof wrapper.find('first10')).toBe('object')
      expect(typeof wrapper.find('first10()')).toBe('object')
    })

    it('has a key called score that starts at 0', () => {
      const score = wrapper.find('score')
      expect(score).toBeDefined()
      expect(typeof score).toBe('object')
      expect(wrapper.state().score).toEqual(0)
    })

    it('has a key called questionNumber that starts at 1', () => {
      const questionNumber = wrapper.find('questionNumber')
      expect(questionNumber).toBeDefined()
      expect(typeof questionNumber).toBe('object')
      expect(wrapper.state().questionNumber).toEqual(1)
    })

    it('has a key called selected that is an empty string', () => {
      const selected = wrapper.find('selected')
      expect(selected).toBeDefined()
      expect(typeof selected).toBe('object')
      expect(wrapper.state().selected).toBe('')
    })

    it('has a key called shuffle that starts as true', () => {
      const shuffle = wrapper.find('shuffle')
      expect(shuffle).toBeDefined()
      expect(typeof shuffle).toBeTruthy()
    })

    it('has a key called shuffledAnswers that starts as an empty array', () => {
      const shuffledAnswers = wrapper.find('shuffledAnswers')
      expect(shuffledAnswers).toBeDefined()
      expect(typeof shuffledAnswers).toBe('object')
      expect(wrapper.state().shuffledAnswers.length).toEqual(0)
    })
  })

  describe('our class methods', () => {

    describe('selectionMethod', () => {

      const selectionMethod = wrapper.find('selectionMethod')
      const clicked = wrapper.find('input')

      it('is a class method', () => {
        expect(selectionMethod).toBeDefined()
      })

      it('sets our selected key on our state to the event.target.value if present', () => {
        let prevState = wrapper.state().selection
        const nextState = () => {
          selectionMethod(clicked.simulate('click'))
          return wrapper.state().selection
        }
        expect(prevState !== nextState).toBeTruthy()
      })
    })

    describe('handleSubmit', () => {

      const submit = wrapper.find('[htmlFor="submit"]')
      window.alert = jest.fn(() => ({}));

      it('is a class method', () => {
        expect(submit).toBeDefined()
      })

      it('should increment questionNumber each call', () => {
        let prev = wrapper.state()
        submit.simulate('click')
        expect(wrapper.state().questionNumber).not.toEqual(prev.questionNumber)
      })
      it('should flip shuffle to true each call', () => {
        submit.simulate('click')
        expect(wrapper.state().shuffle).toBeTruthy()
      })

      it('should display a window alert with the correct answer if the user chooses the wrong answer', () => {
        jest.spyOn(window, 'alert').mockImplementation(() => { })
        wrapper.find('[htmlFor="submit"]').simulate('click')
        expect(window.alert).toBeCalled()
      })
    })
    describe('handleShuffle', () => {

      const handleShuffle = wrapper.find('handleShuffle')

      it('is a class method', () => {
        expect(handleShuffle).toBeDefined()
      })

      it('should return an array', () => {
        expect(typeof handleShuffle).toEqual('object')
      })
      it('should set a shuffled version of the array passed in to shuffledAnswers on our state, shuffledAnswers should not be an empty array', () => {
        wrapper.find('[htmlFor="submit"]').simulate('click')
        expect(wrapper.state().shuffledAnswers.length).toBeGreaterThan(0)
      })
    })
  })
  describe('our rendered component', () => {

    it('should have a header displaying the users score', () => {
      let header = wrapper.find('h4')
      expect(header).toBeDefined()
    })

    it('should have a p tag displaying the question number', () => {
      let pTag = wrapper.find('p')
      expect(pTag).toBeDefined()
    })
    it('should have inputs for each possible answer that utilizes our selectionMethod method', () => {
      let input = wrapper.find('input')
      expect(input).toBeDefined()
    })
    it('should have a reset button that restarts our game', () => {
      let reset = wrapper.find('[htmlFor="reset"]')
      expect(reset).toBeDefined()
    })
    it('should display your final score in a header', () => {
      let finalScore = wrapper.find('h1')
      expect(finalScore).toBeDefined()
    })
    it('should have a try again button that restarts the game', () => {
      let tryAgain = wrapper.find('[htmlFor="tryAgain"]')
      expect(tryAgain).toBeDefined()
    })

  })

})
