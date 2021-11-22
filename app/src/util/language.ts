export type Language =
    "eng" |
    "fra" |
    "jpn" |
    "unknown";

export const languageNames: Record<Language, string> = {
    "eng": "English",
    "fra": "France",
    "jpn": "Japanese",
    "unknown": "Unknown",
};

export const parseLanguageCode = (languageCode: string): Language => {
    const code = Object.keys(languageNames).find(code => code === languageCode);
    // we know the only keys of `languageNames` are of type `Language`, so this cast is fine
    return (code || "unknown") as Language;
};
