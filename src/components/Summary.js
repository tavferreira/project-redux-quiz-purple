import React from 'react'
import { useSelector } from 'react-redux'
import styled from "styled-components"
import { Restart } from 'components/Restart'

export const Summary = () => {
    const quizOver = useSelector((state) => state.quiz.quizOver)
    const answers = useSelector((state) => state.quiz.answers)
    const correctAnswers = answers.filter(answer => {
        return answer.isCorrect === true
    })

    return (
        quizOver && (
            <SummaryWrapper>
                <SummaryHeader>Result</SummaryHeader>
                <List><ListItems><AnswerRow>Correct answers</AnswerRow><ResultRow>👤</ResultRow></ListItems>{answers.map(answer => (<ListItems><AnswerRow>{answer.question.options[answer.question.correctAnswerIndex]}</AnswerRow><ResultRow>{answer.isCorrect ? "✔️" : "❌"}</ResultRow></ListItems>))}</List>
                <QuizResult>{correctAnswers.length} correct answers out of {answers.length}</QuizResult>
                <Restart />
            </SummaryWrapper>
        )
    )
}

const SummaryWrapper = styled.div`
display: flex;
color: #e5e5e5;
flex-direction: column;
justify-content: center;
align-items: center;
border: 5px solid #e5e5e5
border-radius: 15px;
width: 300px;
margin: auto;
background: #223127;
`

const List = styled.div`

`

const SummaryHeader = styled.text`

`

const ListItems = styled.div`
display: flex;
justify-content: space-between;
&:first-child{
    text-transform: uppercase;
    font-weight: 700;
}
`

const AnswerRow = styled.div`
display: flex;
margin-right: 50px;
margin-top: 10px;

`

const ResultRow = styled.div`
display: flex;
margin-top: 10px;
`

const QuizResult = styled.text`
font-weight: 700;
margin: 30px 0px 30px 0px;
`