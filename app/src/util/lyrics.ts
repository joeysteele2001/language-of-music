import { Milliseconds } from './duration';
import { AnnotatedText } from './text';

export type Lyrics = { times?: Milliseconds[], lyrics: LyricsText };
export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];

// TODO: add times to Pretender and Yoru... lyrics
