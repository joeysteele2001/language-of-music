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
                        to="/"
                        icon={<Icon name={IconName.Book} />}
                    >
                        Song Library
                    </NavItem>
                </li>
                <li>
                    <NavItem iconName={IconName.Globe}>Languages</NavItem>
                    <ul>
                        <li>Japanese</li>
                        <li>French</li>
                        <li>
                            <NavItem iconName={IconName.Stroopwafel}>
                                German
                            </NavItem>
                        </li>
                    </ul>
                </li>
                <li>
                    <NavItem iconName={IconName.Star}>High Quality</NavItem>
                </li>
                <li>
                    <NavItem to="/colors" iconName={IconName.Palette}>
                        Color Palette
                    </NavItem>
                </li>
            </ul>
        </nav >
    );
};

export default SideNav;