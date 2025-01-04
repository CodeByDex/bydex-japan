import { readingType, characterType, reading, character } from "@/app/lib/definitions";

const characters: character[] = [
/********************************************************************************************
Katakana Section
*********************************************************************************************/
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
        examples: [
            {
                id: "アパート",
                kana: "アパート",
                romanji: "apaato",
                meaning: "apartment"
            }]
    },
    {
        id: "イ",
        type: characterType.katakana,
        readings: [
            {
                id: "イ",                
                kana: "イ",
                romanji: "i",
                type: readingType.kana,
            }
        ],
        radical: ['伊'],
        stroke: 2,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "イラスト",
                kana: "イラスト",
                romanji: "irasuto",
                meaning: "illustration"
            }]
    },
    {
        id: "ウ",
        type: characterType.katakana,
        readings: [
            {
                id: "ウ",                
                kana: "ウ",
                romanji: "u",
                type: readingType.kana,
            }
        ],
        radical: ['宇'],
        stroke: 3,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "ウール",
                kana: "ウール",
                romanji: "uuru",
                meaning: "wool"
            }]
    },
    {
        id: "エ",
        type: characterType.katakana,
        readings: [
            {
                id: "エ",                
                kana: "エ",
                romanji: "e",
                type: readingType.kana,
            }
        ],
        radical: ['江'],
        stroke: 3,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "エンジン",
                kana: "エンジン",
                romanji: "enzin",
                meaning: "engine"
            }]
    },
    {
        id: "オ",
        type: characterType.katakana,
        readings: [
            {
                id: "オ",                
                kana: "オ",
                romanji: "o",
                type: readingType.kana,
            }
        ],
        radical: ['於'],
        stroke: 3,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "オムレツ",
                kana: "オムレツ",
                romanji: "omuretsu",
                meaning: "omlet"
            }]
    },
    {
        id: "カ",
        type: characterType.katakana,
        readings: [
            {
                id: "カ",                
                kana: "カ",
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
        examples: [
            {
                id: "カレー",
                kana: "カレー",
                romanji: "karee",
                meaning: "curry"
            }]
    },
    {
        id: "キ",
        type: characterType.katakana,
        readings: [
            {
                id: "キ",                
                kana: "キ",
                romanji: "ki",
                type: readingType.kana,
            }
        ],
        radical: ['幾'],
        stroke: 3,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "キッチン",
                kana: "キッチン",
                romanji: "kicchin",
                meaning: "kitchen"
            }]
    },
    {
        id: "ク",
        type: characterType.katakana,
        readings: [
            {
                id: "ク",                
                kana: "ク",
                romanji: "ku",
                type: readingType.kana,
            }
        ],
        radical: ['久'],
        stroke: 2,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "クラス",
                kana: "クラス",
                romanji: "kurasu",
                meaning: "class"
            }]
    },
    {
        id: "ケ",
        type: characterType.katakana,
        readings: [
            {
                id: "ケ",                
                kana: "ケ",
                romanji: "ke",
                type: readingType.kana,
            }
        ],
        radical: ['介'],
        stroke: 3,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "ケープ",
                kana: "ケープ",
                romanji: "keepu",
                meaning: "cape"
            }]
    },
    {
        id: "コ",
        type: characterType.katakana,
        readings: [
            {
                id: "コ",                
                kana: "コ",
                romanji: "ko",
                type: readingType.kana,
            }
        ],
        radical: ['弓'],
        stroke: 2,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "コーヒー",
                kana: "コーヒー",
                romanji: "koohii",
                meaning: "Coffee"
            }]
    },


/********************************************************************************************
Hiragana Section
*********************************************************************************************/
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
        examples: [
            {
                id: "からて",
                kana: "からて",
                romanji: "karate",
                meaning: "karate"
            }]
    },

/********************************************************************************************
Kanji Section
*********************************************************************************************/
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
            {
                id: "一月",
                kana: "いちがつ",
                romanji: "ichigatsu",
                meaning: "January"
            },
            {
                id: "一番",
                kana: "いちばん",
                romanji: "ichiban",
                meaning: "first, best"
            },
            {
                id: "一冊",
                kana: "いっさつ",
                romanji: "issatsu",
                meaning: "one periodical (book, magazine, etc.)"
            },
        ]
    },
]

export default characters;