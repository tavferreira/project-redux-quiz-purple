import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'
import { Progress } from 'components/Progress'
import { Options } from 'components/Options'


export const CurrentQuestion = () => {
  // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector((state) => state.quiz.questions)
  const currentIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const question = questions[currentIndex]
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answer = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()


  if (!question) {
    return <Question>Oh no! I could not find the current question!</Question>
  }

  return (
    !quizOver && (
      <Wrapper>
        <Question>{question.questionText}</Question>
        <Image src={question.image} alt="question" />
        <Options />
        <div>
          <NextButton type="button" disabled={answer.length === currentIndex} onClick={() => (dispatch(quiz.actions.goToNextQuestion()))}>{currentIndex === questions.length - 1 ? "Finish" : "Next question"}</NextButton>
        </div>
        <Progress />
      </Wrapper>
    )
  )
}

const Wrapper = styled.section`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 100%;
  background: #381427;
  min-height: 100vh;
  padding: 10px;
`
const Question = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #e5e5e5;
  font-size: 26px;
  margin-top: 0px;
  text-align: center;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`
const Image = styled.img`
  width: 280px;
  height: 280px;
  margin-bottom: 15px;
  border-radius: 50%;
  border: 5px solid #e5e5e5;
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`
const NextButton = styled.button`
  background: transparent;
  color: #e5e5e5;
  border: px solid #e5e5e5;
  padding: 15px;
  border-radius: 20px;
  margin-top: 15px;
  text-transform: uppercase;
  &:hover {
    background: #5d2242;
    cursor: pointer;
  }
`
