import React from 'react';

import styles from './SideNav.module.css';

import NavItem from './NavItem';
import Icon, { IconName } from '../../pieces/Icon';

export const SideNav = () => {
    return (
        <nav className={styles.sidenav}>
            <ul>
                <li>
                    <NavItem
                        to="/home"
                        icon={<Icon name={IconName.Book} />}
                    >
                        Song Library
                    </NavItem>
                </li>
                <li>
                    <NavItem icon={<Icon name={IconName.Globe} />}>Languages</NavItem>
                    <ul>
                        <li>Japanese</li>
                        <li>French</li>
                        <li><NavItem icon={<Icon name={IconName.Stroopwafel} />}>German</NavItem></li>
                    </ul>
                </li>
                <li>
                    <NavItem icon={<Icon name={IconName.Star} />}>
                        High Quality
                    </NavItem>
                </li>
                <li>
                    <NavItem
                        to="/colors"
                        icon={<Icon name={IconName.Palette} />}
                    >
                        Color Palette
                    </NavItem>
                </li>
            </ul>
        </nav>
    );
};

export default SideNav;