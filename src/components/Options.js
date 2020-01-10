import React from 'react';
import styled from 'styled-components/macro';
import { quiz } from 'reducers/quiz';
import { useSelector, useDispatch } from 'react-redux';

const StyledOptions = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 2rem 5rem;

  @media screen and (min-width: 869px) {
    width: 60%;
    flex-direction: row;
    justify-content: center;
  }
`;

const Button = styled.button`
  background-color: ${props => (props.correctOption ? 'green' : '#c4a748')};
  color: #e5e5e5;
  border-style: none;
  border-radius: 3px;
  font-weight: bold;
  padding: 10px;
  margin: 5px;

  &:hover {
    opacity: 0.7;
  }

  &:disabled {
    opacity: ${props => (props.correctOption ? 1 : 0.6)};
  }
`;

export const Options = () => {
  const question = useSelector(
    state => state.quiz.questions[state.quiz.currentQuestionIndex]
  );
  const currentIndex = useSelector(state => state.quiz.currentQuestionIndex);
  const answer = useSelector(state => state.quiz.answers);
  const dispatch = useDispatch();

  // console.log(answer.length !== currentIndex);

  // question.correctAnswerIndex === index &&

  return (
    <StyledOptions>
      {question.options.map((option, index) => {
        console.log(
          question.correctAnswerIndex === index &&
            answer.length !== currentIndex
        );
        return (
          <Button
            key={index + option}
            correctOption={
              question.correctAnswerIndex === index &&
              answer.length !== currentIndex
            }
            type="button"
            disabled={answer.length !== currentIndex}
            onClick={() =>
              dispatch(
                quiz.actions.submitAnswer({
                  questionId: question.id,
                  answerIndex: index
                })
              )
            }
          >
            {option}
          </Button>
        );
      })}
    </StyledOptions>
  );
};
