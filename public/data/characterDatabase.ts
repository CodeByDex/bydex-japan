import { readingType, characterType, reading, character } from "@/app/lib/definitions";

const characters: character[] = [
    {
        id: "ア",
        type: characterType.katakana,
        readings: [
            {
                id: "ア",                
                kana: "ア",
                romanji: "a",
                type: readingType.kana,
            }
        ],
        radical: ['阿'],
        stroke: 2,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: ["アパート　apaato　apartment"]
    },
    {
        id: "か",
        type: characterType.hiragana,
        readings: [
            {
                id: "か",
                kana: "か",
                romanji: "ka",
                type: readingType.kana,
            }
        ],
        radical: ['加'],
        stroke: 2,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: ["からて　karate　karate"]
    },
    {
        id: "一",
        type: characterType.kanji,
        readings: [
            {
                id: "一",
                kana: "いち",
                romanji: "ICHI",
                type: readingType.on,
                meaning: "one"
            },
            {
                id: "一",
                kana: "いつ",
                romanji: "ITSU",
                type: readingType.on,
                meaning: "one"
            },
            {
                id: "一",
                kana: "ひと",
                romanji: "hito-",
                type: readingType.kun,
                meaning: "one"
            },
            {
                id: "一つ",
                kana: "ひとつ",
                romanji: "hitotsu",
                type: readingType.kun,
                meaning: "one"
            },
        ],
        radical: ['一'],
        mnemonic: "",
        meaning: "one",
        stroke: 1,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            "一月　ichigatsu　January",
            "一番　ichiban　first, best",
            "一冊　issatsu　one periodical (book, magizine, etc.)"
        ]
    },
]

export default characters;