import React from 'react';

import { withRouter } from 'react-router';

import { topics } from '../../data/general.json';

import * as topicIcons from '../icons/topics/index';

import './Start.css';

const Start = (props) => {
    const
        { onStart, params } = props,
        { topicId } = params,
        topic = topics[topicId];

    return (
        <div className="start">
            { React.createElement(topicIcons[topic.icon], {className: 'start__icon'}) }
            <h1 className="start__title">{topic.label}</h1>
            <p className="start__text">Good luck</p>
            <button className="btn btn--primary btn--block start__btn" onClick={onStart}>
                Start!
            </button>
        </div>
    );
}

export default withRouter(Start);
