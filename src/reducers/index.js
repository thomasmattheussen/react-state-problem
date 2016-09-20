import { combineReducers } from 'redux';
import score from './score';
import questions from './questions';

export default combineReducers({
    score,
    questions
});
