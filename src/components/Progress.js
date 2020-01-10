import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

export const Progress = () => {
  const questions = useSelector(state => state.quiz.questions);
  const currentIndex = useSelector(state => state.quiz.currentQuestionIndex);

  return (
    <ProgressWrapper>
      {questions.map(question => (
        <ProgressBar completed={question.id <= currentIndex + 1} />
      ))}
    </ProgressWrapper>
  );
};

const ProgressBar = styled.div`
  height: 15px;
  width: 65px;
  background-color: ${props => (props.completed ? "#248232" : "#AFD1B4")};
  border: #e5e5e5 1px solid;

  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

const ProgressWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;
