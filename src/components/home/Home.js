import React from 'react';

import { Link } from 'react-router';
import { map } from 'lodash/collection';

import * as topicIcons from '../icons/topics/index';

import { topics } from '../../data/general.json';

const Home = (props) => {
    console.log(topics);

    return (
        <div className="container">
            <div className="app__header">
                <h1>Quiz</h1>
            </div>
            <ul className="app__topics">
                {
                    map(topics, ({ slug, label, icon }) => {
                        return (
                            <li className="app__topic" key={slug}>
                                <Link to={`/quiz/${slug}`}>
                                    { React.createElement(topicIcons[icon], { className: 'app__topic-icon' }) }
                                    <span className="app__topic-lbl">{ label }</span>
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Home;