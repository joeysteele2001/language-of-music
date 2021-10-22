import React from 'react';

import './Button.css';

export interface Props {
    children: React.ReactNode[] | React.ReactNode;
}

export const Button = (props: Props) => {
    const { children } = props;

    return (
        <div className="Button">
            {children}
        </div>
    );
}

export default Button;
