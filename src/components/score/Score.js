import React from 'react';
import cx from 'classnames';

import './Score.css';

const Score = (props) => {
    const {amount, className} = props;

    return (
        <div className={cx('score', className)}>
            <div className="score__amount">{amount}</div>
        </div>
    );
}

export default Score;
