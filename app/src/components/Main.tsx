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
import Icon, { IconName } from './pieces/Icon';
import { Link } from 'react-router-dom';
import GeniusSearch from '../back/GeniusSearch';
import { getMetadata } from '../util/songData';
import { SongMetadata } from '../util/song';

export const Main = () => {
    const [settings, setSettings] = React.useState(DEFAULT_PRESET);
    const [lang, setLang] = React.useState<Language | 'all'>('all');
    const [library, setLibrary] = React.useState<Loading<SongLibrary>>();
    const [searching, setSearching] = React.useState<string | undefined>(undefined);

    const addToLibrary = (song: SongMetadata) => {
        const add = (library: SongLibrary, song: SongMetadata) => {
            let newSongs = library.songs;
            const isElem = library.songs.find(s => s.genius.id === song.genius.id) !== undefined;
            if (!isElem) {
                newSongs.push(song);
            }

            return new SongLibrary(Object.values(newSongs));
        };

        setLibrary(library => library && add(library, song));
        setSearching(undefined);
    };

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
                    setSearching(query);
                    GeniusSearch(query)
                        .then(result => getMetadata(result.id))
                        .then(addToLibrary);
                }
                } />

                <main>
                    <Switch>
                        <Route path="/songpage">
                            <SongPage settings={settings} reportSong={addToLibrary} />
                        </Route>

                        <Route path="/colors">
                            <ColorPalette />
                        </Route>

                        <Route path="/hqexplanation">
                            <HqExplanation />
                        </Route>

                        <Route path="/hq">
                            <h1>
                                High Quality&nbsp;
                                <Link to="/hqexplanation" className="main-q"><Icon name={IconName.QuestionCircle} /></Link>
                            </h1>
                            <SongGallery
                                songs={
                                    library?.songsArr.filter(song => song.hq)
                                }
                                onlyHq={true}
                            />
                        </Route>

                        <Route path="/">
                            <h1>Home</h1>
                            <SongGallery songs={library?.songsArr} lang={lang} searching={searching} />
                        </Route>
                    </Switch>
                </main>
            </div>
        </div>
    );
};

export default Main;
