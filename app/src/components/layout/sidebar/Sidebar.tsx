import React from 'react';
import Settings from './Settings';

import { Settings as SettingsValues } from '../../../util/settings';

import styles from './Sidebar.module.css';
import SideNav from './SideNav';
import { Language } from '../../../util/language';

export interface Props {
    languages?: Set<Language>;
    onSettingsChange?: (settings: SettingsValues) => void;
    selectedLanguage?: Language | 'all';
    onLangChange?: (lang: Language | 'all') => void;
}

export const Sidebar = (props: Props) => {
    const { languages, selectedLanguage, onSettingsChange, onLangChange } = props;

    return (
        <div className={styles.sidebar}>
            <header>App Name or Icon</header>

            <SideNav
                languages={languages}
                selectedLang={selectedLanguage}
                onLangChange={onLangChange}
            />

            <footer>
                <Settings onChange={onSettingsChange} />
            </footer>
        </div>
    );
};

export default Sidebar;
