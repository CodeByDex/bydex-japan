import { readingType, characterType, reading, character } from "../../lib/definitions";

const characters: character[] = [
/********************************************************************************************/
// #region Katakana
/*********************************************************************************************/
// AIUEO
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
        radical: ['左'],
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
            }]
    },
    {
        id: "シ",
        type: characterType.katakana,
        readings: [
            {
                id: "シ",                
                kana: "シ",
                romanji: "si",
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
                id: "シャンプー",
                kana: "シャンプー",
                romanji: "syanpuu",
                meaning: "shampoo"
            }]
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
        radical: ['寸'],
        stroke: 2,
        note: "",
        JLPT: 5,
        grade: 1,
        AP: true,
        examples: [
            {
                id: "スーパー",
                kana: "スーパー",
                romanji: "suupaa",
                meaning: "supermarket"
            }]
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
            }]
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
            }]
    },
/**
 * Here’s a list of katakana characters, their origin kanji, stroke count, and an example word using the katakana:

| **Katakana** | **Origin Kanji** | **Stroke Count** | **Example Word** |
|--------------|------------------|------------------|------------------|
| ア (a)       | 阿               | 2                | アメリカ (America) |
| イ (i)       | 伊               | 2                | イギリス (England) |
| ウ (u)       | 宇               | 3                | ウサギ (rabbit) |
| エ (e)       | 江               | 3                | エネルギー (energy) |
| オ (o)       | 於               | 3                | オレンジ (orange) |
| カ (ka)      | 加               | 2                | カメラ (camera) |
| キ (ki)      | 幾               | 3                | キャンプ (camp) |
| ク (ku)      | 久               | 2                | クッキー (cookie) |
| ケ (ke)      | 介               | 3                | ケーキ (cake) |
| コ (ko)      | 己               | 2                | コーヒー (coffee) |
| サ (sa)      | 左               | 3                | サラダ (salad) |
| シ (shi)     | 之               | 3                | シャンプー (shampoo) |
| ス (su)      | 寸               | 2                | スーパー (supermarket) |
| セ (se)      | 世               | 3                | セーター (sweater) |
| ソ (so)      | 曽               | 2                | ソファー (sofa) |
| タ (ta)      | 多               | 3                | タクシー (taxi) |
| チ (chi)     | 千               | 3                | チーズ (cheese) |
| ツ (tsu)     | 川               | 3                | ツナ (tuna) |
| テ (te)      | 天               | 4                | テレビ (television) |
| ト (to)      | 止               | 2                | トマト (tomato) |
| ナ (na)      | 奈               | 2                | ナイフ (knife) |
| ニ (ni)      | 二               | 2                | ニュース (news) |
| ヌ (nu)      | 奴               | 2                | ヌードル (noodle) |
| ネ (ne)      | 祢               | 4                | ネクタイ (necktie) |
| ノ (no)      | 乃               | 1                | ノート (notebook) |
| ハ (ha)      | 八               | 2                | ハンバーガー (hamburger) |
| ヒ (hi)      | 比               | 2                | ヒーター (heater) |
| フ (fu)      | 不               | 1                | フルーツ (fruit) |
| ヘ (he)      | 部               | 1                | ヘリコプター (helicopter) |
| ホ (ho)      | 保               | 4                | ホテル (hotel) |
| マ (ma)      | 万               | 2                | マンガ (manga) |
| ミ (mi)      | 三               | 3                | ミルク (milk) |
| ム (mu)      | 牟               | 2                | ムービー (movie) |
| メ (me)      | 女               | 2                | メニュー (menu) |
| モ (mo)      | 毛               | 3                | モーター (motor) |
| ヤ (ya)      | 也               | 2                | ヤクルト (Yakult) |
| ユ (yu)      | 由               | 2                | ユニフォーム (uniform) |
| ヨ (yo)      | 与               | 3                | ヨーグルト (yogurt) |
| ラ (ra)      | 良               | 2                | ラーメン (ramen) |
| リ (ri)      | 利               | 2                | リモコン (remote control) |
| ル (ru)      | 流               | 2                | ルビー (ruby) |
| レ (re)      | 礼               | 1                | レモン (lemon) |
| ロ (ro)      | 呂               | 3                | ロボット (robot) |
| ワ (wa)      | 和               | 2                | ワイン (wine) |
| ヲ (wo)      | 乎               | 3                | ヲタク (otaku) |
| ン (n)       | 尓               | 2                | マンション (mansion) |

Let me know if you'd like more examples or further details!
 * 
 */
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