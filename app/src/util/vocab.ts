import { AnnotatedText } from "./text";

import gurenge from '../resources/vocab/gurenge.json';
import pretender from '../resources/vocab/pretender.json';
import yoru from '../resources/vocab/yoru-ni-kakenu.json';

export type VocabList = VocabWord[];

export type VocabWord = {
    word: AnnotatedText,
    defn: AnnotatedText,
    difficulty: Difficulty,
};

export type Difficulty = "beg" | "int" | "adv";

const VOCAB_MAP = {
    'MpYy6wwqxoo': gurenge,
    'idk': pretender,
    'idk2': yoru,
};
