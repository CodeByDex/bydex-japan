export enum readingType {
    on,
    kun,
    kana
}

export type reading = {
    id: string;
    kana: string;
    romanji: string;
    meaning: string;
}

export enum characterType {
    hiragana,
    katakana,
    kanji
}

export type character = {
    id: string;
    type: characterType;
    readings: reading[];
    radical: string[];
    stroke: number;
    meaning: string;
    mnemonic: string;
    note: string;
}
