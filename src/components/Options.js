import React from 'react'
import { quiz } from 'reducers/quiz'
import { useSelector, useDispatch } from 'react-redux'

export const Options = () => {
    const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
    const currentIndex = useSelector((state) => state.quiz.currentQuestionIndex)
    const answer = useSelector((state) => state.quiz.answers)
    const dispatch = useDispatch()

    return (
        <>
            {question.options.map((option, index) => (
                <button className={question.correctAnswerIndex === index && answer.length !== currentIndex ? "correctOption" : "options"} type="button" disabled={answer.length !== currentIndex} onClick={() => (dispatch(quiz.actions.submitAnswer({ questionId: question.id, answerIndex: index })))}>{option}</button>
            ))}
        </>
    )
}