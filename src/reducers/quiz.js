import { createSlice } from '@reduxjs/toolkit'

// Change these to your own questions!
const questions = [
  { id: 1, questionText: 'To make the color purple, you will need to mix which two primary paint colors?', image: './assets/colors.jpg', options: ['Yellow and Red', 'Blue and Yellow', 'Blue and Green', 'Red and Blue'], correctAnswerIndex: 3 },
  { id: 2, questionText: 'A popular musical band of the 1970s was called:', image: './assets/band.jpg', options: ['Deep Purple', 'Purple Jones', 'Purple People Eaters', 'Johnson Purple'], correctAnswerIndex: 0 },
  { id: 3, questionText: 'Which of the following gemstones is known for its purple appearance?', image: './assets/gemstone.jpg', options: ['Opal', 'Emerald', 'Amethyst', 'Onyx'], correctAnswerIndex: 2 },
  { id: 4, questionText: 'Which Cluedo character is purple?', image: './assets/cluedo.jpg', options: ['The Old lady', 'The Colonel', 'The Professor', 'The Actress'], correctAnswerIndex: 2 },
  { id: 5, questionText: 'In 2002, a vote was held by the manufacturers of M&Ms to decide on which of three new colours was the most popular. The first was purple, the other two were:', image: './assets/mm.jpg', options: ['Aqua and Pink', 'Lemon and Rust', 'Tangerine and Almond', 'Apple and Grey'], correctAnswerIndex: 0 },
  { id: 6, questionText: 'Which one of these HEX-codes is purple?', image: './assets/hexcolors.jpg', options: ['#95F252', '#6A0DAD', '#5D5D5D', '#CC3300'], correctAnswerIndex: 1 }
]

const initialState = {
  questions,
  answers: [],
  currentQuestionIndex: 0,
  quizOver: false
}

export const quiz = createSlice({
  name: 'quiz',
  initialState,
  reducers: {

    /**
     * Use this action when a user selects an answer to the question.
     * The answer will be stored in the `quiz.answers` state with the
     * following values:
     *
     *    questionId  - The id of the question being answered.
     *    answerIndex - The index of the selected answer from the question's options.
     *    question    - A copy of the entire question object, to make it easier to show
     *                  details about the question in your UI.
     *    answer      - The answer string.
     *    isCorrect   - true/false if the answer was the one which the question says is correct.
     *
     * When dispatching this action, you should pass an object as the payload with `questionId`
     * and `answerIndex` keys. See the readme for more details.
     */
    submitAnswer: (state, action) => {
      const { questionId, answerIndex } = action.payload
      const question = state.questions.find((q) => q.id === questionId)

      if (!question) {
        throw new Error('Could not find question! Check to make sure you are passing the question id correctly.')
      }

      if (question.options[answerIndex] === undefined) {
        throw new Error(`You passed answerIndex ${answerIndex}, but it is not in the possible answers array!`)
      }

      state.answers.push({
        questionId,
        answerIndex,
        question,
        answer: question.options[answerIndex],
        isCorrect: question.correctAnswerIndex === answerIndex
      })
    },

    /**
     * Use this action to progress the quiz to the next question. If there's
     * no more questions (the user was on the final question), set `quizOver`
     * to `true`.
     *
     * This action does not require a payload.
     */
    goToNextQuestion: (state) => {
      if (state.currentQuestionIndex + 1 === state.questions.length) {
        state.quizOver = true
      } else {
        state.currentQuestionIndex += 1
      }
    },

    /**
     * Use this action to reset the state to the initial state the page had
     * when it was loaded. Who doesn't like re-doing a quiz when you know the
     * answers?!
     *
     * This action does not require a payload.
     */
    restart: () => {
      return initialState
    }

  }
})
