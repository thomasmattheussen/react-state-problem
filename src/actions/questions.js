export const incrementQuestionIndex = () => {
  return {
    type: 'INCREMENT_QUESTION_INDEX'
  }
};

export const newQuestions = (payload) => {
  return {
    type: 'NEW_QUESTIONS',
    payload
  }
};
