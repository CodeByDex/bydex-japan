export enum readingType {
    on = "on",
    kun = "kun",
    kana = "kana"
}

export type reading = {
    id: string;
    kana: string;
    romanji: string;
    type?: readingType;
    meaning?: string;
}

export enum characterType {
    hiragana = "hiragana",
    katakana = "katakana",
    kanji = "kanji"
}

export type character = {
    id: string;
    type: characterType;
    readings: reading[];
    radical: string[];
    stroke: number;
    meaning?: string;
    mnemonic?: string;
    note: string;
    JLPT: 1 | 2 | 3 | 4 | 5;
    grade: 1 | 2 | 3 | 4 | 5 | 6 | 7;
    AP: boolean;
    examples: reading[]
}
