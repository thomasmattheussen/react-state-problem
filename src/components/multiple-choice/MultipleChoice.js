import React, { Component } from 'react';
import cx from 'classnames';

import './MultipleChoice.css';

const
    initialState = {
        selectedValue: null
    };

class MultipleChoice extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    handleChange(value, correct) {
        this.setState({
            selectedValue: value
        });

        this.props.onChange(correct);
    }

    render() {
        const
            { options } = this.props,
            getStateClass = (option, ndx) => {
                let sc = '';

                if (this.state.selectedValue !== null) {
                    if (this.state.selectedValue === ndx) {
                        sc = option.correct ? 'is-correct' : 'is-incorrect';
                    } else if (option.correct) {
                        sc = 'is-correct';
                    }
                }

                return sc;
            };

        return (
            <ul className="multiple-choice">
                { options.map((option, ndx) => {
                    return (
                        <li key={`option-${ndx}`} className={cx('multiple-choice__option', getStateClass(option, ndx))}>
                            <button className="multiple-choice__button" onClick={() => this.handleChange(ndx, option.correct)}>{option.answer}</button>
                        </li>
                    );
                }) }
            </ul>
        );
    };
}

export default MultipleChoice;
