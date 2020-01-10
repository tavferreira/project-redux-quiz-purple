import React from 'react';
import styled from 'styled-components/macro';
import { quiz } from 'reducers/quiz';
import { useSelector, useDispatch } from 'react-redux';

const StyledOptions = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const Button = styled.button`
  background-color: ${props => (props.correctOption ? '#ff0000' : '#c4a748')};
  color: #e5e5e5;
  border: 1px solid red;
  padding: 5px 0;
  margin: 5px;
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
