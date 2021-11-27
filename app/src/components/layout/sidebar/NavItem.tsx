import React from 'react';
import { Link } from 'react-router-dom';
import Icon, { IconName } from '../../pieces/Icon';

import sytles from './NavItem.module.css';

export interface Props {
    icon?: React.ReactNode;
    iconName?: IconName;
    to?: string;
};

export const NavItem: React.FC<Props> = (props) => {
    let icon = props.icon;

    if (props.iconName) {
        icon = <Icon name={props.iconName} />;
    }

    const inner_content = <>{icon} {props.children}</>;

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
