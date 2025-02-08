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
            id: "ウール",
            kana: "ウール",
            romanji: "uuru",
            meaning: "wool"
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
            id: "キッチン",
            kana: "キッチン",
            romanji: "kicchin",
            meaning: "kitchen"
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
            id: "ニット",
            kana: "ニット",
            romanji: "nitto",
            meaning: "knit wear"
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
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ヌードル",
            kana: "ヌードル",
            romanji: "nuudoru",
            meaning: "noodle"
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
    stroke: 4,
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
    stroke: 2,
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
    stroke: 2,
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
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "フルーツ",
            kana: "フルーツ",
            romanji: "furuutsu",
            meaning: "fruit"
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
    stroke: 1,
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
    stroke: 4,
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
            id: "マカロニ",
            kana: "マカロニ",
            romanji: "makaroni",
            meaning: "macaroni"
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
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "ムース",
            kana: "ムース",
            romanji: "muusu",
            meaning: "moose"
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
    stroke: 3,
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
            id: "ヤンキー",
            kana: "ヤンキー",
            romanji: "yankii",
            meaning: "delinquent"
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
    stroke: 3,
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
    stroke: 1,
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
    stroke: 3,
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
    stroke: 2,
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
    stroke: 3,
    note: "This character is rarely used in modern Japanese, and is primarily used as a particle in writing.",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: []
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
    stroke: 2,
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
//aiueo
{
    id: "あ",
    type: characterType.hiragana,
    readings: [
        {
            id: "あ",
            kana: "あ",
            romanji: "a",
            type: readingType.kana,
        }
    ],
    radical: ['安'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "朝日",
            kana: "あさ",
            romanji: "asa",
            meaning: "morning"
        }
    ]
},
{
    id: "い",
    type: characterType.hiragana,
    readings: [
        {
            id: "い",
            kana: "い",
            romanji: "i",
            type: readingType.kana,
        }
    ],
    radical: ['以'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "犬",
            kana: "いぬ",
            romanji: "inu",
            meaning: "dog"
        }
    ]
},
{
    id: "う",
    type: characterType.hiragana,
    readings: [
        {
            id: "う",
            kana: "う",
            romanji: "u",
            type: readingType.kana,
        }
    ],
    radical: ['宇'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "うさぎ",
            kana: "うさぎ",
            romanji: "usagi",
            meaning: "rabbit"
        }
    ]
},
{
    id: "え",
    type: characterType.hiragana,
    readings: [
        {
            id: "え",
            kana: "え",
            romanji: "e",
            type: readingType.kana,
        }
    ],
    radical: ['衣'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "絵",
            kana: "え",
            romanji: "e",
            meaning: "drawing"
        }
    ]
},
{
    id: "お",
    type: characterType.hiragana,
    readings: [
        {
            id: "お",
            kana: "お",
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
            id: "折り紙",
            kana: "おりがみ",
            romanji: "origami",
            meaning: "origami"
        }
    ]
},
//kakikukeko
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
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "傘",
            kana: "かさ",
            romanji: "kasa",
            meaning: "umbrella"
        }
    ]
},
{
    id: "き",
    type: characterType.hiragana,
    readings: [
        {
            id: "き",
            kana: "き",
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
            id: "狐",
            kana: "きつね",
            romanji: "kitsune",
            meaning: "fox"
        }
    ]
},
{
    id: "く",
    type: characterType.hiragana,
    readings: [
        {
            id: "く",
            kana: "く",
            romanji: "ku",
            type: readingType.kana,
        }
    ],
    radical: ['久'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "熊",
            kana: "くま",
            romanji: "kuma",
            meaning: "bear"
        }
    ]
},
{
    id: "け",
    type: characterType.hiragana,
    readings: [
        {
            id: "け",
            kana: "け",
            romanji: "ke",
            type: readingType.kana,
        }
    ],
    radical: ['計'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "煙",
            kana: "けむり",
            romanji: "kemuri",
            meaning: "smoke"
        }
    ]
},
{
    id: "こ",
    type: characterType.hiragana,
    readings: [
        {
            id: "こ",
            kana: "こ",
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
            id: "小鳥",
            kana: "ことり",
            romanji: "kotori",
            meaning: "small bird"
        }
    ]
},
//sasisuseso
{
    id: "さ",
    type: characterType.hiragana,
    readings: [
        {
            id: "さ",
            kana: "さ",
            romanji: "sa",
            type: readingType.kana,
        }
    ],
    radical: ['左'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "皿",
            kana: "さら",
            romanji: "sara",
            meaning: "plate"
        }
    ]
},
{
    id: "し",
    type: characterType.hiragana,
    readings: [
        {
            id: "し",
            kana: "し",
            romanji: "shi",
            type: readingType.kana,
        }
    ],
    radical: ['之'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "仕事",
            kana: "しごと",
            romanji: "shigoto",
            meaning: "work/job"
        }
    ]
},
{
    id: "す",
    type: characterType.hiragana,
    readings: [
        {
            id: "す",
            kana: "す",
            romanji: "su",
            type: readingType.kana,
        }
    ],
    radical: ['寸'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "酢",
            kana: "す",
            romanji: "su",
            meaning: "vinegar"
        }
    ]
},
{
    id: "せ",
    type: characterType.hiragana,
    readings: [
        {
            id: "せ",
            kana: "せ",
            romanji: "se",
            type: readingType.kana,
        }
    ],
    radical: ['世'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "世界",
            kana: "せかい",
            romanji: "sekai",
            meaning: "world"
        }
    ]
},
{
    id: "そ",
    type: characterType.hiragana,
    readings: [
        {
            id: "そ",
            kana: "そ",
            romanji: "so",
            type: readingType.kana,
        }
    ],
    radical: ['曽'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "空",
            kana: "そら",
            romanji: "sora",
            meaning: "sky"
        }
    ]
},
//tatituteto
{
    id: "た",
    type: characterType.hiragana,
    readings: [
        {
            id: "た",
            kana: "た",
            romanji: "ta",
            type: readingType.kana,
        }
    ],
    radical: ['太'],
    stroke: 4,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "多分",
            kana: "たぶん",
            romanji: "tabun",
            meaning: "maybe"
        }
    ]
},
{
    id: "ち",
    type: characterType.hiragana,
    readings: [
        {
            id: "ち",
            kana: "ち",
            romanji: "chi",
            type: readingType.kana,
        }
    ],
    radical: ['知'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "千",
            kana: "ち",
            romanji: "chi",
            meaning: "thousand"
        }
    ]
},
{
    id: "つ",
    type: characterType.hiragana,
    readings: [
        {
            id: "つ",
            kana: "つ",
            romanji: "tsu",
            type: readingType.kana,
        }
    ],
    radical: ['川'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "津波",
            kana: "つなみ",
            romanji: "tsunami",
            meaning: "tsunami"
        }
    ]
},
{
    id: "て",
    type: characterType.hiragana,
    readings: [
        {
            id: "て",
            kana: "て",
            romanji: "te",
            type: readingType.kana,
        }
    ],
    radical: ['天'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "天気",
            kana: "てんき",
            romanji: "tenki",
            meaning: "weather"
        }
    ]
},
{
    id: "と",
    type: characterType.hiragana,
    readings: [
        {
            id: "と",
            kana: "と",
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
            id: "止まる",
            kana: "とまる",
            romanji: "tomaru",
            meaning: "to stop"
        }
    ]
},
//naninuneno
{
    id: "な",
    type: characterType.hiragana,
    readings: [
        {
            id: "な",
            kana: "な",
            romanji: "na",
            type: readingType.kana,
        }
    ],
    radical: ['奈'],
    stroke: 4,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "名前",
            kana: "なまえ",
            romanji: "namae",
            meaning: "name"
        }
    ]
},
{
    id: "に",
    type: characterType.hiragana,
    readings: [
        {
            id: "に",
            kana: "に",
            romanji: "ni",
            type: readingType.kana,
        }
    ],
    radical: ['仁'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "日本語",
            kana: "にほんご",
            romanji: "nihongo",
            meaning: "Japanese (language)"
        }
    ]
},
{
    id: "ぬ",
    type: characterType.hiragana,
    readings: [
        {
            id: "ぬ",
            kana: "ぬ",
            romanji: "nu",
            type: readingType.kana,
        }
    ],
    radical: ['奴'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "布",
            kana: "ぬの",
            romanji: "nuno",
            meaning: "cloth"
        }
    ]
},
{
    id: "ね",
    type: characterType.hiragana,
    readings: [
        {
            id: "ね",
            kana: "ね",
            romanji: "ne",
            type: readingType.kana,
        }
    ],
    radical: ['祢'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "猫",
            kana: "ねこ",
            romanji: "neko",
            meaning: "cat"
        }
    ]
},
{
    id: "の",
    type: characterType.hiragana,
    readings: [
        {
            id: "の",
            kana: "の",
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
            id: "能力",
            kana: "のうりょく",
            romanji: "nouryoku",
            meaning: "ability"
        }
    ]
},
// はひふへほ
{
    id: "は",
    type: characterType.hiragana,
    readings: [
        {
            id: "は",
            kana: "は",
            romanji: "ha",
            type: readingType.kana,
        }
    ],
    radical: ['波'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "花火",
            kana: "はなび",
            romanji: "hanabi",
            meaning: "fireworks"
        }
    ]
},
{
    id: "ひ",
    type: characterType.hiragana,
    readings: [
        {
            id: "ひ",
            kana: "ひ",
            romanji: "hi",
            type: readingType.kana,
        }
    ],
    radical: ['比'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "光る",
            kana: "ひかる",
            romanji: "hikaru",
            meaning: "to shine"
        }
    ]
},
{
    id: "ふ",
    type: characterType.hiragana,
    readings: [
        {
            id: "ふ",
            kana: "ふ",
            romanji: "fu",
            type: readingType.kana,
        }
    ],
    radical: ['不'],
    stroke: 4,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "風呂",
            kana: "ふろ",
            romanji: "furo",
            meaning: "bath"
        }
    ]
},
{
    id: "へ",
    type: characterType.hiragana,
    readings: [
        {
            id: "へ",
            kana: "へ",
            romanji: "he",
            type: readingType.kana,
        }
    ],
    radical: ['部'],
    stroke: 1,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "部屋",
            kana: "へや",
            romanji: "heya",
            meaning: "room"
        }
    ]
},
{
    id: "ほ",
    type: characterType.hiragana,
    readings: [
        {
            id: "ほ",
            kana: "ほ",
            romanji: "ho",
            type: readingType.kana,
        }
    ],
    radical: ['保'],
    stroke: 4,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "星空",
            kana: "ほしぞら",
            romanji: "hoshizora",
            meaning: "starry sky"
        }
    ]
},
// まみむめも
{
    id: "ま",
    type: characterType.hiragana,
    readings: [
        {
            id: "ま",
            kana: "ま",
            romanji: "ma",
            type: readingType.kana,
        }
    ],
    radical: ['末'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "丸い",
            kana: "まるい",
            romanji: "marui",
            meaning: "round"
        }
    ]
},
{
    id: "み",
    type: characterType.hiragana,
    readings: [
        {
            id: "み",
            kana: "み",
            romanji: "mi",
            type: readingType.kana,
        }
    ],
    radical: ['美'],
    stroke: 2,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "水",
            kana: "みず",
            romanji: "mizu",
            meaning: "water"
        }
    ]
},
{
    id: "む",
    type: characterType.hiragana,
    readings: [
        {
            id: "む",
            kana: "む",
            romanji: "mu",
            type: readingType.kana,
        }
    ],
    radical: ['武'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "無理",
            kana: "むり",
            romanji: "muri",
            meaning: "impossible"
        }
    ]
},
{
    id: "め",
    type: characterType.hiragana,
    readings: [
        {
            id: "め",
            kana: "め",
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
            id: "眼鏡",
            kana: "めがね",
            romanji: "megane",
            meaning: "eye glasses"
        }
    ]
},
{
    id: "も",
    type: characterType.hiragana,
    readings: [
        {
            id: "も",
            kana: "も",
            romanji: "mo",
            type: readingType.kana,
        }
    ],
    radical: ['毛'],
    stroke: 3,
    note: "",
    JLPT: 5,
    grade: 1,
    AP: true,
    examples: [
        {
            id: "森",
            kana: "もり",
            romanji: "mori",
            meaning: "forest"
        }
    ]
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