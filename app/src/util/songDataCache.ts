import { GURENGE_LYRICS, PRETENDER_LYRICS, YORU_LYRICS } from "./lyrics";
import { GeniusId } from "./song";
import { SongData } from "./songData";
import { GURENGE_VOCAB, PRETENDER_VOCAB, YORU_VOCAB } from "./vocab";

namespace SongDataCache {
    const GURENGE_GENIUS_ID = 4489125;
    const PRETENDER_GENIUS_ID = 4669815;
    const YORU_GENIUS_ID = 5739522;

    let _cache: Record<GeniusId, SongData> = {
        [GURENGE_GENIUS_ID]: {
            resource: {
                lyrics: GURENGE_LYRICS,
                vocab: GURENGE_VOCAB,
            },
            metadata: {
                genius: {
                    id: GURENGE_GENIUS_ID,
                    url: 'Lisa-jpn-gurenge-lyrics',
                },
                videoId: 'CwkzK-F0Y00',
                title: 'Gurenge',
                artist: 'LiSA',
                thumbnailUrl: 'https://images.genius.com/c2a699dc7c9e358465a34101336a898b.300x300x1.jpg',
                hq: true,
                language: "jpn",
            },
        },

        [PRETENDER_GENIUS_ID]: {
            resource: {
                lyrics: PRETENDER_LYRICS,
                vocab: PRETENDER_VOCAB,
            },
            metadata: {
                genius: {
                    id: PRETENDER_GENIUS_ID,
                    url: 'https://genius.com/Officialdism-pretender-lyrics',
                },
                videoId: 'TQ8WlA2GXbk',
                title: 'Pretender',
                artist: 'Official Hige Dandism',
                thumbnailUrl: 'https://images.genius.com/bb3b555a06e51ca1f7c780823e2e6d9f.300x300x1.jpg',
                hq: true,
                language: "jpn",
            },
        },

        [YORU_GENIUS_ID]: {
            resource: {
                lyrics: YORU_LYRICS,
                vocab: YORU_VOCAB,
            },
            metadata: {
                genius: {
                    id: YORU_GENIUS_ID,
                    url: 'Genius-english-translations-yoasobi-yoru-ni-kakeru-racing-into-the-night-english-translation-lyrics',
                },
                videoId: 'vEyPvak2K9o',
                title: 'Yoru ni Kakeru',
                artist: 'Hatsune Niku',
                thumbnailUrl: 'https://images.genius.com/a8124b2c6e6245702850c18fc787c4cb.300x300x1.jpg',
                hq: true,
                language: "jpn",
            },
        },
    };

    export const get = (geniusId: GeniusId): SongData | undefined => {
        return _cache[geniusId];
    };

    export const cache = (geniusId: GeniusId, data: SongData) => {
        _cache[geniusId] = data;
    };

    export const toLibrary = () => {
        return Object.values(_cache).map(({ metadata }) => metadata);
    };
}

export default SongDataCache;
