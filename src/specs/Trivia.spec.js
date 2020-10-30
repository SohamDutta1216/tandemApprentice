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

      const handleSubmit = wrapper.find('handleSubmit')

      it('is a class method', () => {
        expect(handleSubmit).toBeDefined()
      })

      it('increments score and questionNumber if the two variables passed in equal each other', () => {
        wrapper.setState({ score: 0, questionNumber: 1 }, [handleSubmit('hi', 'hi')])
        expect(wrapper.state().score).toEqual(1)

      })
    })


  })
})
