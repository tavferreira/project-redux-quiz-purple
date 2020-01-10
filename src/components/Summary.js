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
            <Wrapper>
                <SummaryWrapper>
                    <SummaryHeader>Result</SummaryHeader>
                    <List><ListItems><AnswerRow>Correct answers</AnswerRow><ResultRow>👤</ResultRow></ListItems>{answers.map(answer => (<ListItems><AnswerRow>{answer.question.options[answer.question.correctAnswerIndex]}</AnswerRow><ResultRow>{answer.isCorrect ? "✔️" : "❌"}</ResultRow></ListItems>))}</List>
                    <QuizResult>{correctAnswers.length} correct answers out of {answers.length}</QuizResult>
                    <Restart />
                </SummaryWrapper>
            </Wrapper>
        )
    )
}

const Wrapper = styled.section`
  background: #381427;
  min-height: 100vh;
  display: flex;
  align-items: center;
`
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
  padding: 15px;
`
const List = styled.div`

`
const SummaryHeader = styled.h1`
  font-family: 'Roboto', sans-serif;
  color: #e5e5e5;
  font-size: 18px;
  margin-top: 0px;
  text-align: center;
  text-transform: uppercase;
  @media (min-width: 768px) {
    font-size: 26px;
  }
`
const ListItems = styled.div`
  display: flex;
  justify-content: space-between;
  &:first-child {
    text-transform: uppercase;
    font-weight: 700;
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 5px;
}
&:last-child {
    border-bottom: 1px solid #e5e5e5;
    padding-bottom: 5px;
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