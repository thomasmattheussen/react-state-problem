import React, { Component } from 'react';

import { connect } from 'react-redux';
import Slider from 'nuka-carousel';

import Question from '../question/Question';
import Start from '../start/Start';
import Result from '../result/Result';
import Score from '../score/Score';
import ProgressSteps from '../progress-steps/ProgressSteps';
import FinishIcon from '../icons/Finish';
import { incrementScore, resetScore } from '../../actions/score';
import { incrementQuestionIndex, newQuestions } from '../../actions/questions';

import './Questions.css';

const
    sliderSettings = {
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        decorators: [],
        dragging: false
    };

class Questions extends Component {
    afterSlide(currentSlide) {
        const list = window.document.querySelector('.questions__slider .slider-list');
        const nextSlide = list.childNodes[currentSlide];
        list.style.height = nextSlide.offsetHeight + 'px';
    }

    render() {
        const
            {
                questions,
                onAnswered,
                onNextQuestion,
                onRestart,
                score,
                topicId,
                currentQuestionIndex
            } = this.props,
            steps = [<FinishIcon/>, ...Array.from(questions.keys()).map((i) => i + 1), <FinishIcon/>],
            onDone = (correct) => {
                onAnswered(correct);
                setTimeout(() => onNextQuestion(), 1000);
            };

        return (
            <div className="questions">
                <Score amount={score} className="questions__score"></Score>
                <ProgressSteps steps={steps} activeStep={currentQuestionIndex} className="questions__progress-steps" />
                <div className="container">
                    <Slider {...sliderSettings} afterSlide={this.afterSlide} slideIndex={currentQuestionIndex} className="questions__slider">
                        <Start onStart={() => onNextQuestion()} topicId={topicId}  />

                        {currentQuestionIndex > 0 &&
                            questions.map((question, ndx) => {
                                return (
                                    <Question {...question} done={onDone} key={`question-${question.id}`} />
                                );
                            })
                        }

                        <Result score={score} onRestart={() => onRestart()}/>
                    </Slider>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        score: state.score,
        currentQuestionIndex: state.questions.currentQuestionIndex
    };
};

const mapDispatchToProps = (dispatch, { topicId }) => {
    return {
        onAnswered: (correct) => {
            if (correct) {
                dispatch(incrementScore());
            }
        },
        onNextQuestion: () => {
            dispatch(incrementQuestionIndex());
        },
        onRestart: () => {
            dispatch(newQuestions({ topicId }));
            dispatch(resetScore());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
