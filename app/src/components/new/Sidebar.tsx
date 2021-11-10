import React from 'react';
import Settings from './Settings';

import { Settings as SettingsValues } from '../../util/settings';

import './Sidebar.css';
import { Link } from 'react-router-dom';

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
                    <li><Link to="/home">Song Library</Link></li>
                    <li>
                        Languages
                        <ul>
                            <li>Japanese</li>
                            <li>French</li>
                        </ul>
                    </li>
                    <li>High Quality</li>
                    <li><Link to="/colors">Color Palette</Link></li>
                </ul>
            </nav>

            <footer>
                <Settings onChange={onSettingsChange} />
            </footer>
        </div>
    );
};

export default Sidebar;
