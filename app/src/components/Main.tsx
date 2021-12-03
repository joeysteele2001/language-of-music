import React from 'react';
import { Route, Switch } from 'react-router';
import Sidebar from './layout/sidebar/Sidebar';
import SongGallery from './content/SongGallery';
import SongPage from './content/SongPage';
import TopBar from './layout/TopBar';
import ColorPalette from './content/ColorPalette';

import { DEFAULT_PRESET } from '../util/settings';
import { getLibrary, SongLibrary } from '../util/songLibrary';
import { Loading } from '../util/loading';

import './Main.css';
import { Language } from '../util/language';
import HqExplanation from './content/HqExplanation';
import YoutubeID from '../back/YoutubeID';
import GeniusURL from '../back/GeniusURL';
import GeniusSearch from '../back/GeniusSearch';
import Scraper from '../back/scraper';
import translate from '../back/translate';

export const Main = () => {
    const [settings, setSettings] = React.useState(DEFAULT_PRESET);
    const [lang, setLang] = React.useState<Language | 'all'>('all');
    const [library, setLibrary] = React.useState<Loading<SongLibrary>>();

    React.useEffect(() => {
        getLibrary().then(setLibrary);
    }, []);

    const languages = new Set(library?.languages);

    return (
        <div className="Main">
            <Sidebar
                languages={languages}
                onSettingsChange={setSettings}
                onLangChange={setLang}
                selectedLanguage={lang}
            />

            <div className="main-side">
                <TopBar onAddSong={query => {
                    console.log(`Adding song: ${query}`);
                    YoutubeID(query).then(id => console.log(`'${query}' YouTube ID: ${id}`));

                    GeniusSearch(query).then(id => {
                        console.log(`'${query}' Genius ID: ${id}'`);
                        return GeniusURL(id);
                    }).then(url => {
                        console.log(`'${query}' Genius URL: ${url}`);
                        return Scraper(url);
                    }).then(lyrics => {
                        console.log(`'${query}' Lyrics:`);
                        console.log(lyrics);
                        const testWord = lyrics.split(' ')[0];
                        return translate(testWord);
                    }).then(translation => {
                        console.log(`'${query}' first word translation: ${translation}`);
                    });
                }} />

                <main>
                    <Switch>
                        <Route path="/songpage">
                            <SongPage settings={settings} />
                        </Route>

                        <Route path="/colors">
                            <ColorPalette />
                        </Route>

                        <Route path="/hqexplanation">
                            <HqExplanation />
                        </Route>

                        <Route path="/hq">
                            <h1>High Quality</h1>
                            <SongGallery songs={
                                library?.songs.filter(song => song.hq)
                            } />
                        </Route>

                        <Route path="/">
                            <h1>Home</h1>
                            <SongGallery songs={library?.songs} lang={lang} />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default Main;
