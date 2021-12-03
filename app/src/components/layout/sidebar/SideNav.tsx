import React from 'react';

import styles from './SideNav.module.css';

import NavItem from './NavItem';
import Icon, { IconName } from '../../pieces/Icon';
import { Language, languageNames } from '../../../util/language';

export interface Props {
    languages?: Set<Language>;
    selectedLang?: Language | 'all';
    onLangChange?: (language: Language | 'all') => void;
}

export const SideNav = (props: Props) => {
    const languages = props.languages || new Set();
    const selectedLang = props.selectedLang || 'all';
    const { onLangChange } = props;

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
                    <Languages
                        languages={languages}
                        selected={selectedLang}
                        onLangChange={onLangChange}
                    />
                </li>
                <li>
                    <NavItem to="/hq" iconName={IconName.Star}>High Quality</NavItem>
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

interface LanguagesProps {
    languages: Set<Language>;
    selected: Language | 'all';
    onLangChange?: (language: Language | 'all') => void;
}

const Languages = (props: LanguagesProps) => {
    const { languages, selected, onLangChange } = props;

    return (
        <ul>
            <li key="all">
                <button
                    className={
                        styles.langbutton +
                        (selected === 'all' ? ' ' + styles['langbutton-sel'] : '')
                    }
                    onClick={onLangChange && (() => onLangChange('all'))}
                >
                    All
                </button>
            </li>

            {
                Array.from(languages.values())
                    .sort()
                    .map(lang =>
                        <li key={lang}>
                            <LangButton
                                selected={selected === lang}
                                lang={lang}
                                onClick={onLangChange}
                            />
                        </li>
                    )
            }
        </ul>
    );
};

interface LangButtonProps {
    lang: Language;
    selected: boolean;
    onClick?: (lang: Language) => void;
}

const LangButton = (props: LangButtonProps) => {
    const { lang, selected, onClick } = props;

    const languageText = languageNames[lang];

    let className = styles.langbutton;
    if (selected) {
        className += ' ' + styles['langbutton-sel'];
    }

    return (
        <button
            className={className}
            onClick={onClick && (() => onClick(lang))}
        >
            {languageText}
        </button >
    );
};

export default SideNav;