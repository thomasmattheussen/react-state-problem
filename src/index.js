import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import reducer from './reducers/index';
import App from './components/app/App';
import Home from './components/home/Home';
import Quiz from './components/quiz/Quiz';
import Questions from './components/questions/Questions';

import './index.css';

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="quiz" component={Quiz}>
                    <Route path=":topicId" component={Questions} />
                </Route>
            </Route>
        </Router>
    </Provider>
    ),
  document.getElementById('root')
);
