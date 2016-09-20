import React, { Component } from 'react';

import { connect } from 'react-redux';

import { newQuestions } from '../../actions/questions';

import './Quiz.css';

class Quiz extends Component {
    componentWillMount() {
        this.props.newQuestions();
    }

    render() {
        const
            { params, currentQuestions } = this.props,
            topicId = params.topicId,
            quizData = currentQuestions;

        return (
            <div className="quiz">
                { React.cloneElement(this.props.children, { questions: quizData, topicId }) }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currentQuestions: state.questions.currentQuestions
    };
};

const mapDispatchToProps = (dispatch, { params }) => {
    const { topicId } = params;
    return {
        newQuestions() {
            dispatch(newQuestions({topicId}));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
