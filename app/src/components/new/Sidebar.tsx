import React from 'react';
import Settings from './Settings';

import { Settings as SettingsValues } from '../../util/settings';

import './Sidebar.css';

export interface Props {
    onSettingsChange?: (settings: SettingsValues) => void;
}

export const Sidebar = (props: Props) => {
    const { onSettingsChange } = props;

    return (
        <div className="Sidebar">
            <header>App Name or Icon</header>

            <nav>
                <ul>
                    <li>Song Library</li>
                    <li>
                        Languages
                        <ul>
                            <li>Japanese</li>
                            <li>French</li>
                        </ul>
                    </li>
                    <li>High Quality</li>
                </ul>
            </nav>

            <footer>
                <Settings onChange={onSettingsChange} />
            </footer>
        </div>
    );
};

export default Sidebar;
