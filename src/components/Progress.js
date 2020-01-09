import React from 'react'
import { useSelector } from 'react-redux'

export const Progress = () => {
    const questions = useSelector((state) => state.quiz.questions)
    const currentIndex = useSelector((state) => state.quiz.currentQuestionIndex)

    return (
        <div>
            {questions.map((question) => (
                <div className={question.id <= currentIndex ? "completed" : "upcoming"}></div>
            ))}
        </div>
    )
}