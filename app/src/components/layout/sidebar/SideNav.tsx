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

    // const [selectedLang, setSelectedLang] = React.useState<Language | "all">('all');

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
                        <button
                            className={
                                styles.langbutton +
                                (selectedLang === 'all' ? ' ' + styles['langbutton-sel'] : '')
                            }
                            onClick={onLangChange && (() => onLangChange('all'))}
                        >
                            All
                        </button>

                        {
                            Array.from(languages.values())
                                .sort()
                                .map(lang =>
                                    <li>
                                        <LangButton
                                            key={lang}
                                            selected={selectedLang === lang}
                                            lang={lang}
                                            onClick={onLangChange}
                                        />
                                    </li>
                                )
                        }
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