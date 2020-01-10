import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { quiz } from "reducers/quiz";
import { Progress } from "components/Progress";
import { Options } from "components/Options";

export const CurrentQuestion = () => {
  // const question = useSelector((state) => state.quiz.questions[state.quiz.currentQuestionIndex])
  const questions = useSelector(state => state.quiz.questions);
  const currentIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const question = questions[currentIndex];
  const quizOver = useSelector(state => state.quiz.quizOver);
  const answer = useSelector(state => state.quiz.answers);
  const dispatch = useDispatch();

  if (!question) {
    return <Question>Oh no! I could not find the current question!</Question>;
  }

  return (
    !quizOver && (
      <Wrapper>
        <QuestionWrapper>
          <Question>{question.questionText}</Question>
        </QuestionWrapper>
        <Image src={question.image} alt="question" />
        <Options />
        <div>
          <NextButton
            type="button"
            disabled={answer.length === currentIndex}
            onClick={() => dispatch(quiz.actions.goToNextQuestion())}
          >
            {currentIndex === questions.length - 1 ? "Finish" : "Next question"}
          </NextButton>
        </div>
        <Progress />
      </Wrapper>
    )
  );
};

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
`;
const QuestionWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  @media (min-width: 768px) {
    width: 65%;
  }
`;
const Question = styled.h1`
  font-family: "Roboto", sans-serif;
  color: #e5e5e5;
  font-size: 18px;
  text-align: center;
  @media (min-width: 768px) {
    font-size: 22px;
  }
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid #e5e5e5;
  @media (min-width: 768px) {
    width: 250px;
    height: 250px;
  }
`;
const NextButton = styled.button`
  background: transparent;
  color: #e5e5e5;
  border: 3px solid #e5e5e5;
  padding: 15px;
  border-radius: 20px;
  text-transform: uppercase;
  &:hover {
    background: #5d2242;
    cursor: pointer;
  }
`;
