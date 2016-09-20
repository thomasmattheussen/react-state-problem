import React from 'react';
import iconHOC from './iconHOC';

const ReplayIcon = (props) => {
    return (
        <path d="M16 6h-6l2.2-2.2C11.2 2.6 9.6 2 8 2s-3 .6-4.2 1.8C2.6 4.8 2 6.4 2 8s.6 3 1.8 4.2C4.8 13.4 6.4 14 8 14s3-.6 4.2-1.8c0 0 .2 0 .3-.2l1.5 1.3C12.6 15 10.4 16 8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8c2.2 0 4.2 1 5.7 2.3L16 0v6z"/>
    );
};

export default iconHOC(ReplayIcon);
