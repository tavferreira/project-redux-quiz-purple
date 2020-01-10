import React from 'react'
import { useSelector } from 'react-redux'
import { Restart } from 'components/Restart'

export const Summary = () => {
    const quizOver = useSelector((state) => state.quiz.quizOver)
    const answers = useSelector((state) => state.quiz.answers)
    const correctAnswers = answers.filter(answer => {
        return answer.isCorrect === true
    })

    return (
        //quizOver && (
        <>
            <div>Summary</div>
            <ul>{answers.map(answer => (<li>{answer.question.options[answer.question.correctAnswerIndex]} - {answer.isCorrect ? "✔️" : "❌"}</li>))}</ul>
            <p>{correctAnswers.length} correct answers out of {answers.length}</p>
            <Restart />
        </>
        //)
    )
}