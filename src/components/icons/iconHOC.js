import React from 'react';

import cx from 'classnames';

import './Icon.css';

export default (Icon) => {
    return (props) => {
        const {className, ...other} = props;

        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" className={cx('icon', className)} {...other}>
                <Icon />
            </svg>
        )
    };
};
