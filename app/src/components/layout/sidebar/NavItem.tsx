import React from 'react';
import { Link } from 'react-router-dom';

import sytles from './NavItem.module.css';

export interface Props {
    icon?: React.ReactNode;
    to?: string;
};

export const NavItem: React.FC<Props> = (props) => {
    const inner_content = <>{props.icon} {props.children}</>;

    let content;
    if (props.to) {
        content = <Link to={props.to}>{inner_content}</Link>;
    } else {
        content = inner_content;
    }

    return (
        <div className={sytles.navitem}>
            {content}
        </div>
    );
};

export default NavItem;
