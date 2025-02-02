import { readingType, characterType, reading, character } from "../../lib/definitions";

const characters: character[] = [
/********************************************************************************************/
// #region Katakana
/*********************************************************************************************/
//aiueo
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
            id: "アメリカ",
            kana: "アメリカ",
            romanji: "amerika",
            meaning: "America"
        }
    ]
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
            id: "イギリス",
            kana: "イギリス",
            romanji: "igirisu",
            meaning: "England"
        }
    ]
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
            id: "ウサギ",
            kana: "ウサギ",
            romanji: "usagi",
            meaning: "rabbit"
        }
    ]
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
            id: "エネルギー",
            kana: "エネルギー",
            romanji: "enerugii",
            meaning: "energy"
        }
    ]
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
            id: "オレンジ",
            kana: "オレンジ",
            romanji: "orenji",
            meaning: "orange"
        }
    ]
},
//kakikukeko
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
            id: "カメラ",
            kana: "カメラ",
            romanji: "kamera",
            meaning: "camera"
        }
    ]
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
            id: "キャンプ",
            kana: "キャンプ",
            romanji: "kyanpu",
            meaning: "camp"
        }
    ]
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
            id: "クッキー",
            kana: "クッキー",
            romanji: "kukkii",
            meaning: "cookie"
        }
    ]
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
            id: "ケーキ",
            kana: "ケーキ",
            romanji: "keeki",
            meaning: "cake"
        }
    ]
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
    radical: ['己'],
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
            meaning: "coffee"
        }
    ]
},
//sasisuseso
{
    id: "サ",
    type: characterType.katakana,
    readings: [
        {
            id: "サ",
            kana: "サ",
            romanji: "sa",
            type: readingType.kana,
        }
    ],
    radical: ['散'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "サラダ",
            kana: "サラダ",
            romanji: "sarada",
            meaning: "salad"
        }
    ]
},
{
    id: "シ",
    type: characterType.katakana,
    readings: [
        {
            id: "シ",
            kana: "シ",
            romanji: "shi",
            type: readingType.kana,
        }
    ],
    radical: ['之'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "システム",
            kana: "システム",
            romanji: "shisutemu",
            meaning: "system"
        }
    ]
},
{
    id: "ス",
    type: characterType.katakana,
    readings: [
        {
            id: "ス",
            kana: "ス",
            romanji: "su",
            type: readingType.kana,
        }
    ],
    radical: ['須'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "スープ",
            kana: "スープ",
            romanji: "suupu",
            meaning: "soup"
        }
    ]
},
{
    id: "セ",
    type: characterType.katakana,
    readings: [
        {
            id: "セ",
            kana: "セ",
            romanji: "se",
            type: readingType.kana,
        }
    ],
    radical: ['世'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "セーター",
            kana: "セーター",
            romanji: "seetaa",
            meaning: "sweater"
        }
    ]
},
{
    id: "ソ",
    type: characterType.katakana,
    readings: [
        {
            id: "ソ",
            kana: "ソ",
            romanji: "so",
            type: readingType.kana,
        }
    ],
    radical: ['曽'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ソファー",
            kana: "ソファー",
            romanji: "sofuaa",
            meaning: "sofa"
        }
    ]
},
//tatituteto
{
    id: "タ",
    type: characterType.katakana,
    readings: [
        {
            id: "タ",
            kana: "タ",
            romanji: "ta",
            type: readingType.kana,
        }
    ],
    radical: ['多'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "タクシー",
            kana: "タクシー",
            romanji: "takushii",
            meaning: "taxi"
        }
    ]
},
{
    id: "チ",
    type: characterType.katakana,
    readings: [
        {
            id: "チ",
            kana: "チ",
            romanji: "chi",
            type: readingType.kana,
        }
    ],
    radical: ['千'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "チーズ",
            kana: "チーズ",
            romanji: "chiizu",
            meaning: "cheese"
        }
    ]
},
{
    id: "ツ",
    type: characterType.katakana,
    readings: [
        {
            id: "ツ",
            kana: "ツ",
            romanji: "tsu",
            type: readingType.kana,
        }
    ],
    radical: ['州'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ツアー",
            kana: "ツアー",
            romanji: "tsuaa",
            meaning: "tour"
        }
    ]
},
{
    id: "テ",
    type: characterType.katakana,
    readings: [
        {
            id: "テ",
            kana: "テ",
            romanji: "te",
            type: readingType.kana,
        }
    ],
    radical: ['天'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "テスト",
            kana: "テスト",
            romanji: "tesuto",
            meaning: "test"
        }
    ]
},
{
    id: "ト",
    type: characterType.katakana,
    readings: [
        {
            id: "ト",
            kana: "ト",
            romanji: "to",
            type: readingType.kana,
        }
    ],
    radical: ['止'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "トイレ",
            kana: "トイレ",
            romanji: "toire",
            meaning: "toilet"
        }
    ]
},
//naninuneno
{
    id: "ナ",
    type: characterType.katakana,
    readings: [
        {
            id: "ナ",
            kana: "ナ",
            romanji: "na",
            type: readingType.kana,
        }
    ],
    radical: ['奈'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ナイフ",
            kana: "ナイフ",
            romanji: "naifu",
            meaning: "knife"
        }
    ]
},
{
    id: "ニ",
    type: characterType.katakana,
    readings: [
        {
            id: "ニ",
            kana: "ニ",
            romanji: "ni",
            type: readingType.kana,
        }
    ],
    radical: ['二'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ニコニコ",
            kana: "ニコニコ",
            romanji: "nikoniko",
            meaning: "smiling"
        }
    ]
},
{
    id: "ヌ",
    type: characterType.katakana,
    readings: [
        {
            id: "ヌ",
            kana: "ヌ",
            romanji: "nu",
            type: readingType.kana,
        }
    ],
    radical: ['奴'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヌード",
            kana: "ヌード",
            romanji: "nuudo",
            meaning: "nude"
        }
    ]
},
{
    id: "ネ",
    type: characterType.katakana,
    readings: [
        {
            id: "ネ",
            kana: "ネ",
            romanji: "ne",
            type: readingType.kana,
        }
    ],
    radical: ['祢'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ネクタイ",
            kana: "ネクタイ",
            romanji: "nekutai",
            meaning: "necktie"
        }
    ]
},
{
    id: "ノ",
    type: characterType.katakana,
    readings: [
        {
            id: "ノ",
            kana: "ノ",
            romanji: "no",
            type: readingType.kana,
        }
    ],
    radical: ['乃'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ノート",
            kana: "ノート",
            romanji: "nooto",
            meaning: "notebook"
        }
    ]
},
//hahihuheho
{
    id: "ハ",
    type: characterType.katakana,
    readings: [
        {
            id: "ハ",
            kana: "ハ",
            romanji: "ha",
            type: readingType.kana,
        }
    ],
    radical: ['八'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ハンバーガー",
            kana: "ハンバーガー",
            romanji: "hanbaagaa",
            meaning: "hamburger"
        }
    ]
},
{
    id: "ヒ",
    type: characterType.katakana,
    readings: [
        {
            id: "ヒ",
            kana: "ヒ",
            romanji: "hi",
            type: readingType.kana,
        }
    ],
    radical: ['比'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヒーター",
            kana: "ヒーター",
            romanji: "hiitaa",
            meaning: "heater"
        }
    ]
},
{
    id: "フ",
    type: characterType.katakana,
    readings: [
        {
            id: "フ",
            kana: "フ",
            romanji: "fu",
            type: readingType.kana,
        }
    ],
    radical: ['不'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "フルーツ",
            kana: "フルーツ",
            romanji: "furuutsu",
            meaning: "fruits"
        }
    ]
},
{
    id: "ヘ",
    type: characterType.katakana,
    readings: [
        {
            id: "ヘ",
            kana: "ヘ",
            romanji: "he",
            type: readingType.kana,
        }
    ],
    radical: ['部'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヘリコプター",
            kana: "ヘリコプター",
            romanji: "herikoputaa",
            meaning: "helicopter"
        }
    ]
},
{
    id: "ホ",
    type: characterType.katakana,
    readings: [
        {
            id: "ホ",
            kana: "ホ",
            romanji: "ho",
            type: readingType.kana,
        }
    ],
    radical: ['保'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ホテル",
            kana: "ホテル",
            romanji: "hoteru",
            meaning: "hotel"
        }
    ]
},
//mamimumemo
{
    id: "マ",
    type: characterType.katakana,
    readings: [
        {
            id: "マ",
            kana: "マ",
            romanji: "ma",
            type: readingType.kana,
        }
    ],
    radical: ['末'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "マシン",
            kana: "マシン",
            romanji: "mashin",
            meaning: "machine"
        }
    ]
},
{
    id: "ミ",
    type: characterType.katakana,
    readings: [
        {
            id: "ミ",
            kana: "ミ",
            romanji: "mi",
            type: readingType.kana,
        }
    ],
    radical: ['三'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ミルク",
            kana: "ミルク",
            romanji: "miruku",
            meaning: "milk"
        }
    ]
},
{
    id: "ム",
    type: characterType.katakana,
    readings: [
        {
            id: "ム",
            kana: "ム",
            romanji: "mu",
            type: readingType.kana,
        }
    ],
    radical: ['牟'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ムービー",
            kana: "ムービー",
            romanji: "muubii",
            meaning: "movie"
        }
    ]
},
{
    id: "メ",
    type: characterType.katakana,
    readings: [
        {
            id: "メ",
            kana: "メ",
            romanji: "me",
            type: readingType.kana,
        }
    ],
    radical: ['女'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "メニュー",
            kana: "メニュー",
            romanji: "menyuu",
            meaning: "menu"
        }
    ]
},
{
    id: "モ",
    type: characterType.katakana,
    readings: [
        {
            id: "モ",
            kana: "モ",
            romanji: "mo",
            type: readingType.kana,
        }
    ],
    radical: ['毛'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "モーター",
            kana: "モーター",
            romanji: "mootaa",
            meaning: "motor"
        }
    ]
},
//yayuyo
{
    id: "ヤ",
    type: characterType.katakana,
    readings: [
        {
            id: "ヤ",
            kana: "ヤ",
            romanji: "ya",
            type: readingType.kana,
        }
    ],
    radical: ['也'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヤバイ",
            kana: "ヤバイ",
            romanji: "yabai",
            meaning: "dangerous; awesome (slang)"
        }
    ]
},
{
    id: "ユ",
    type: characterType.katakana,
    readings: [
        {
            id: "ユ",
            kana: "ユ",
            romanji: "yu",
            type: readingType.kana,
        }
    ],
    radical: ['由'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ユニフォーム",
            kana: "ユニフォーム",
            romanji: "yunifoomu",
            meaning: "uniform"
        }
    ]
},
{
    id: "ヨ",
    type: characterType.katakana,
    readings: [
        {
            id: "ヨ",
            kana: "ヨ",
            romanji: "yo",
            type: readingType.kana,
        }
    ],
    radical: ['与'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヨガ",
            kana: "ヨガ",
            romanji: "yoga",
            meaning: "yoga"
        }
    ]
},
//rarirurero
{
    id: "ラ",
    type: characterType.katakana,
    readings: [
        {
            id: "ラ",
            kana: "ラ",
            romanji: "ra",
            type: readingType.kana,
        }
    ],
    radical: ['良'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ラジオ",
            kana: "ラジオ",
            romanji: "rajio",
            meaning: "radio"
        }
    ]
},
{
    id: "リ",
    type: characterType.katakana,
    readings: [
        {
            id: "リ",
            kana: "リ",
            romanji: "ri",
            type: readingType.kana,
        }
    ],
    radical: ['利'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "リモコン",
            kana: "リモコン",
            romanji: "rimokon",
            meaning: "remote control"
        }
    ]
},
{
    id: "ル",
    type: characterType.katakana,
    readings: [
        {
            id: "ル",
            kana: "ル",
            romanji: "ru",
            type: readingType.kana,
        }
    ],
    radical: ['流'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ルール",
            kana: "ルール",
            romanji: "ruuru",
            meaning: "rule"
        }
    ]
},
{
    id: "レ",
    type: characterType.katakana,
    readings: [
        {
            id: "レ",
            kana: "レ",
            romanji: "re",
            type: readingType.kana,
        }
    ],
    radical: ['礼'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "レストラン",
            kana: "レストラン",
            romanji: "resutoran",
            meaning: "restaurant"
        }
    ]
},
{
    id: "ロ",
    type: characterType.katakana,
    readings: [
        {
            id: "ロ",
            kana: "ロ",
            romanji: "ro",
            type: readingType.kana,
        }
    ],
    radical: ['呂'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ロボット",
            kana: "ロボット",
            romanji: "robotto",
            meaning: "robot"
        }
    ]
},
//wawon
{
    id: "ワ",
    type: characterType.katakana,
    readings: [
        {
            id: "ワ",
            kana: "ワ",
            romanji: "wa",
            type: readingType.kana,
        }
    ],
    radical: ['和'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ワイン",
            kana: "ワイン",
            romanji: "wain",
            meaning: "wine"
        }
    ]
},
{
    id: "ヲ",
    type: characterType.katakana,
    readings: [
        {
            id: "ヲ",
            kana: "ヲ",
            romanji: "wo",
            type: readingType.kana,
        }
    ],
    radical: ['乎'],
    stroke: 2,
    note: "This character is rarely used in modern Japanese, and is primarily used as a particle in writing.",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヲタク",
            kana: "ヲタク",
            romanji: "otaku",
            meaning: "otaku (often used to refer to a person passionate about anime, manga, etc.)"
        }
    ]
},
{
    id: "ン",
    type: characterType.katakana,
    readings: [
        {
            id: "ン",
            kana: "ン",
            romanji: "n",
            type: readingType.kana,
        }
    ],
    radical: ['无'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "コンピューター",
            kana: "コンピューター",
            romanji: "konpyuutaa",
            meaning: "computer"
        }
    ]
},
// #endregion
/********************************************************************************************/
// #region Hiragana
/*********************************************************************************************/
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
// #endregion
/********************************************************************************************/
// #region Kanji
/*********************************************************************************************/
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
                romanji: "ICHIgatsu",
                type: readingType.on,
                meaning: "January"
            },
            {
                id: "一番",
                kana: "いちばん",
                romanji: "ICHIban",
                type: readingType.on,
                meaning: "first, best"
            },
            {
                id: "一冊",
                kana: "いっさつ",
                romanji: "Issatsu",
                type: readingType.on,
                meaning: "one periodical (book, magazine, etc.)"
            },
        ]
    },

// #endregion
]

export default characters;