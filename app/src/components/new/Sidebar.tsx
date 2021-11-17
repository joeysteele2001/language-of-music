import React from 'react';
import Settings from './Settings';

import { Settings as SettingsValues } from '../../util/settings';

import styles from './Sidebar.module.css';
import SideNav from './SideNav';

export interface Props {
    onSettingsChange?: (settings: SettingsValues) => void;
}

export const Sidebar = (props: Props) => {
    const { onSettingsChange } = props;

    return (
        <div className={styles.sidebar}>
            <header>App Name or Icon</header>

            <SideNav />

            <footer>
                <Settings onChange={onSettingsChange} />
            </footer>
        </div>
    );
};

export default Sidebar;
