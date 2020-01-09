import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { quiz } from 'reducers/quiz'


export const CurrentQuestion = () => {
  const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const currentIndex = useSelector((state) => state.quiz.currentQuestionIndex)
  const quizOver = useSelector((state) => state.quiz.quizOver)
  const answer = useSelector((state) => state.quiz.answers)
  const dispatch = useDispatch()


  if (!question) {
    return <h1>Oh no! I could not find the current question!</h1>
  }

  return (
    !quizOver && (
      <div>
        <h1>Question: {question.questionText}</h1>
        <img src={question.image} />
        {question.options.map((option, index) => (
          <button className={question.correctAnswerIndex === index && answer.length !== currentIndex ? "correctOption" : "options"} type="button" disabled={answer.length !== currentIndex} onClick={() => (dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })))}>{option}</button>
        ))}
        <div>
          <button type="button" disabled={answer.length === currentIndex} onClick={() => (dispatch(quiz.actions.goToNextQuestion()))}>Next question</button>
        </div>
      </div>
    )
  )
}
