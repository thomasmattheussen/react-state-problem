import { shuffle } from 'lodash/collection';

import questionData from '../data/questions.json';

const initialState = {
    questions: questionData,
    currentQuestionIndex: 0,
    currentQuestions: []
};

const questions = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT_QUESTION_INDEX':
            return Object.assign({}, state, {
                currentQuestionIndex: state.currentQuestionIndex + 1
            });

        case 'NEW_QUESTIONS':
            if (action.payload && action.payload.topicId) {
                return Object.assign({}, state, {
                    currentQuestionIndex: 0,
                    currentQuestions: shuffle(questionData.filter((question) => question.topic === action.payload.topicId))
                });
            }

            return state;

        default:
            return state;
    }
};

export default questions;
