import React from 'react';
import iconHOC from './iconHOC';

const FinishIcon = (props) => {
    return (
        <g>
            <rect x="4.3" y="4.7" width="2.3" height="2.7"/>
            <rect x="9.3" y="4.7" width="2.3" height="2.7"/>
            <path d="M14.3,0v2H2V0H0.3v16H2v-6h2.3h2.3h2.7h2.3h2.7v6h1.3V0H14.3z M9.3,9.7V7.3H6.7v2.3H4.3V7.3H2V4.7h2.3V2.3h2.3v2.3h2.7V2.3
                h2.3v2.3H14v2.7h-2.3v2.3H9.3z"/>
        </g>
    );
};

export default iconHOC(FinishIcon);
