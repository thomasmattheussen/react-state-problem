import React from 'react';

import MultipleChoice from '../multiple-choice/MultipleChoice';

import './Question.css';

const Question = (props) => {
    let options;

    const
        { question, type, answers, visual, done } = props;

    switch (type) {
        case 'multiple-choice':
            options = <MultipleChoice options={answers} onChange={done} />
            break;
        default:
            break;
    }

    return (
        <div className="question">
            <h2 className="question__text">{ question }</h2>
            { visual ? <img src={visual.path} alt={visual.description} className="question__visual" /> : ''}
            { options }
        </div>
    );
}

export default Question;