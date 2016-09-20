import React from 'react';

import cx from 'classnames';
import Slider from 'nuka-carousel';

import './ProgressSteps.css';


const
    sliderSettings = {
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cellAlign: 'center',
        decorators: [],
        dragging: false
    };

const ProgressStep = (props) => {
    const { text, active, className } = props;
    return (
        <div className={cx('progress-steps__step', active ? 'is-active' : '', className)}>{text}</div>
    );
};

const ProgressSteps = (props) => {
    const
        { steps, activeStep, className } = props;

    return (
        <Slider {...sliderSettings} className={cx('progress-steps', className)} slideIndex={activeStep}>
            {steps.map((step, index) => <ProgressStep text={step} active={activeStep === index} key={index} />)}
        </Slider>
    );
}

export default ProgressSteps;
