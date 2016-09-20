import React from 'react';

import Score from '../score/Score';
import ReplayIcon from '../icons/Replay';

import './Result.css';

const Result = (props) => {
    const { score, onRestart } = props;

    return (
        <div className="result">
            <Score amount={score} className="result__score" />
            <button className="btn btn--primary btn--block result__btn" onClick={onRestart}><ReplayIcon/> Try again</button>
        </div>
    );
}

export default Result;
