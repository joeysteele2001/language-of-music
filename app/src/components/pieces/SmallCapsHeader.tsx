import React from 'react';

import './SmallCapsHeader.css';

export const SmallCapsHeader: React.FC = (props) => {
    const { children } = props;

    return <h2 className="all-caps">{children}</h2>
};

export default SmallCapsHeader;
