"usestrict"
const p_name1 =  document.getElementById("p_name1");
const p_name2 =  document.getElementById("p_name2");
const p_name3 =  document.getElementById("p_name3");
const p_name4 =  document.getElementById("p_name4");
const weapon_check = document.getElementById("weapon_check");
const armor_check = document.getElementById("armor_check");
const quest_check = document.getElementById("quest_check");
const limit_check = document.getElementById("limit_check");
const result = document.getElementById("result");
const star1 = document.getElementById("star1");
const star2 = document.getElementById("star2");
const star3 = document.getElementById("star3");
const star4 = document.getElementById("star4");
const star5 = document.getElementById("star5");
const star6 = document.getElementById("star6");
const star7 = document.getElementById("star7");
const HR8_ = document.getElementById("HR8-");
const event_ = document.getElementById("event");
const m_star1 = document.getElementById("m-star1");
const m_star2 = document.getElementById("m-star2");
const m_star3 = document.getElementById("m-star3");
const m_star4 = document.getElementById("m-star4");
const m_star5 = document.getElementById("m-star5");
const m_star6 = document.getElementById("m-star6");
const ex = document.getElementById("ex");
let quests_nums = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

let weapons = [
	"大剣",
	"太刀",
	"片手剣",
	"双剣",
	"ハンマー",
	"狩猟笛",
	"ランス",
	"ガンランス",
	"スラッシュアックス",
	"チャージアックス",
	"操虫棍",
	"ライトボウガン",
	"ヘビィボウガン",
	"弓"
];

let armor = [
    "アシラ装備",
    "アケノ装備",
    "ジャナフ装備",
    "イソネ装備",
    "しまき装備",
    "ウルク装備",
    "イズチ装備",
    "オロミド装備",
    "ミヅハ装備",
    "クシャナ装備",
    "クルル装備",
    "ゴシャ装備",
    "ジュラ装備",
    "ジンオウ装備",
    "ミツネ装備",
    "カイザー装備",
    "ディアブロ装備",
    "レックス装備",
    "フロギィ装備",
    "カガチ装備",
    "ナルガ装備",
    "なるかみ装備",
    "バギィ装備",
    "バサル装備",
    "バゼル装備",
    "赫耀装備",
    "テンゴ装備",
    "プケプケ装備",
    "フルフル装備",
    "ベリオ装備",
    "ポロス装備",
    "禍鎧装備",
    "ヤツカダ装備",
    "ヨツミ装備",
    "金色装備",
    "ラングロ装備",
    "レイア装備",
    "レウス装備",
    "ルドロス装備",
    "ルナガロ装備",
    "カムラノ装備",
    "チェーン装備",
    "ハンター装備",
    "レザー装備",
    "アルブーロ装備",
    "アロイ装備",
    "インゴット装備",
    "ヴェイク装備",
    "コトル装備",
    "エーデル装備",
    "ガプラス装備",
    "混沌装備",
    "狗竜の革装備",
    "スカルダ装備",
    "スパイオ装備",
    "ズワロ装備",
    "デスギア装備",
    "ボーン装備",
    "マギュル装備",
    "メルホア装備",
    "リノプロ装備",
    "ドロス装備",
    "ウツシ・裏装備",
    "ウツシ・表装備",
    "神凪装備",
    "ファルメル装備",
    "ブリゲイド装備",
    "マカルパ装備",
    "メデュレト装備",
    "依巫装備",
    "ロワーガ装備",
    "ギルドクロス装備",
    "クロオビ装備",
    "アロイS装備",
    "インゴットS装備",
    "カムラノ装・覇",
    "狗竜の革S装備",
    "スカルダS装備",
    "スパイオS装備",
    "ズワロS装備",
    "チェーンS装備",
    "ハンターS装備",
    "ブナハS装備",
    "ボーンS装備",
    "リノプロS装備",
    "ドロスS装備",
    "レザーS装備",
    "アルブーロS装備",
    "ヴァイクS装備",
    "ウツシ裏・覇",
    "ウツシ表・覇",
    "コトルS装備",
    "ガブラスS装備",
    "神凪・願",
    "クロムメタル装備",
    "デスギアS装備",
    "ドーベル装備",	
    "マカルパS装備",
    "マギュルS装備",
    "メルホアS装備",	
    "依巫・祈装備",
    "ファルメルS装備",
    "ブリゲイドS装備",
    "メデュレトS装備",
    "ロワーガS装備",
    "蒼世ノ侍装備",
    "クロオビS装備",
    "アルブーロX装備",
    "アロイX装備",
    "インゴットX装備",
    "ヴァイクX装備",
    "エーデルX装備",
    "ガーディアン装備",
    "カムラノ装・継",
    "タロス装備",
    "ギルドバード装備",
    "クロムメタルX装備",
    "ゴギョウ装備",
    "狗竜の革X装備",
    "スカラー装備",
    "スカルダX装備",
    "スパイオX装備",
    "ズワロX装備",
    "チェーンX装備",
    "デスギアX装備",
    "ドーベルX装備",
    "バギィX装備",
    "ハンターX装備",
    "ファルメルX装備",
    "ブナハX装備",
    "ボーンX装備",
    "マカルパX装備",
    "マギュルX装備",
    "メルホアX装備",
    "ユクモノ装備",
    "ランゴ装備",
    "ランポス装備",
    "リノプロX装備",
    "ドロスX装備",
    "レザーX装備",
    "ロワーガX装備",
    "王国軽装騎士装備",
    "王国砲術隊装備",
    "混沌・真",
    "ウツシ表・真",
    "ウツシ裏・真",
    "コトルX装備",
    "エコール装備",
    "ガブラスX装備",
    "グローシア装備",
    "ダマスクX装備",
    "ディグニ装備",
    "バルバニア装備",
    "ブリゲイドX装備",
    "ホーク装備",
    "依巫・燿装備",
    "王国重装騎士装備",
    "神凪・洸",
    "は　だ　か"
];

let limit = [
    "回復薬禁止",
    "歩き禁止",
	"回復薬グレート禁止",
    "ダッシュ禁止",
    "緊急回避禁止",
    "状態異常回復系アイテム禁止",
    "ドーピングアイテム禁止",
    "食事禁止",
    "片目封印",
    "目標カメラ封印",
    "コックピット非表示",
    "食事以外のスキル無し",
    "モンスター討伐ごとに肉お供え",
    "ポーチ3枠(ガンナー5枠)まで",
    "鉄蟲糸技禁止",
    "粉塵・秘薬類禁止",
    "十字キー・右スティック封印",
    "奇声しか発せない",
    "ハイテンションでプレイ",
    "ローテンションでプレイ",
    "情緒不安定でプレイ",
    "左親指封印",
    "右親指封印"
];
let quests = [
    [
        "クエスト：\n【★1】社に住まう無法者\n目標：\nジャグラス8頭の討伐",
        "クエスト：\n【★1】整備の前のイズチ退治\n目標：\nイズチ8頭の討伐",
        "クエスト：\n【★1】三位一体の薙ぎ鎌\n目標：\nオサイズチ1頭の狩猟",
        "クエスト：\n【★1】真夜中のクルルヤック退治\n目標：\nクルルヤック1頭の狩猟",
        "クエスト：\n【★1】寒冷群島のカマイタチ\n目標：\nオサイズチ1頭の狩猟",
        "クエスト：\n【★1】眠狗竜、寒冷群島に現る\n目標：\nドスバギィ1頭の狩猟",
        "クエスト：\n【★1】迫る雪玉にご注意を\n目標：\nウルクスス1頭の狩猟",
        "クエスト：\n【★1】大社跡を駈ける毒狗竜\n目標：\nドスフロギィ1頭の狩猟",
        "クエスト：\n【★1】ハチミツ争奪戦！\n目標：\nアオアシラ1頭の狩猟",
        "クエスト：\n【★1】大社跡に夜の静けさを\n目標：\nイズチとオルタロス合計20頭の討伐",
        "クエスト：\n【★1】最近話題の厄介者たち\n目標：\nスクアギルとブナハブラ合計20頭の討伐",
        "クエスト：\n【★1】丸呑み力士\n目標：\nヨツミワドウ1頭の狩猟"
    ],
    [
        "クエスト：\n【★2】食べ盛りの青熊獣\n目標：\nアオアシラ1頭の狩猟",
        "クエスト：\n【★2】寒冷群島夢心地\n目標：\nバギィ10頭の討伐",
        "クエスト：\n【★2】眠気をうちやぶれ！\n目標：\nドスバギィ1頭の狩猟",
        "クエスト：\n【★2】食べないで白兎獣\n目標：\nウルクスス1頭の狩猟",
        "クエスト：\n【★2】百虫夜行\n目標：\nオルタロスとブナハブラ合計14匹の討伐",
        "クエスト：\n【★2】変幻の唐傘\n目標：\nアケノシルム1頭の狩猟",
        "クエスト：\n【★2】百竜夜行、来たる\n目標：\n最終関門の防衛",
        "クエスト：\n【★2】しっぽでぐるぐる\n目標：\nビシュテンゴ1頭の狩猟",
        "クエスト：\n【★2】本気のプケプケ観察\n目標：\nプケプケ1頭の狩猟",
        "クエスト：\n【★2】水没する水没林\n目標：\nロアルドロス1頭の狩猟",
        "クエスト：\n【★2】かたーいアタマのボルボロス\n目標：\nボルボロス1頭の狩猟",
        "クエスト：\n【★2】迫り来る白い影\n目標：\nフルフル1頭の狩猟",
        "クエスト：\n【★2】砂原転がるラングロトラ\n目標：\nラングロトラ1頭の狩猟",
        "クエスト：\n【★2】振り向けばバサルモス\n目標：\nバサルモス1頭の狩猟",
        "クエスト：\n【★2】女王様になる方法\n目標：\nリオレイア1頭の狩猟",
        "クエスト：\n【★2】ボクもワタシもケストドン？\n目標：\nケストドン15頭の討伐",
        "クエスト：\n【★2】皮・皮・皮！\n目標：\nジャグラスとルドロス合計20頭の討伐",
        "クエスト：\n【★2】兎と蛙のぶつかり稽古\n目標：\nウルクスス1頭とヨツミワドウ1頭の狩猟",
        "クエスト：\n【★2】水の獣と火の竜と\n目標：\nロアルドロス1頭とリオレイア1頭の狩猟",
        "クエスト：\n【★2】百竜夜行、来たる\n目標：\n最終関門の防衛",
        "クエスト：\n【★2】鬼火\n目標：\nマガイマガド1頭の狩猟"
    ],
    [
        "クエスト：\n【★3】眠りへのいざない\n目標：\nイソネミクニ1頭の狩猟",
        "クエスト：\n【★3】氷雪ファイター\n目標：\nゴシャハギ1頭の狩猟",
        "クエスト：\n【★3】飛竜地を跳ねる\n目標：\nトビカガチ1頭の狩猟",
        "クエスト：\n【★3】泥、どろ、オロミドロ\n目標：\nオロミドロ1頭の狩猟",
        "クエスト：\n【★3】溶岩洞の暴れん坊\n目標：\nアンジャナフ1頭の狩猟",
        "クエスト：\n【★3】闇夜を奔る双星\n目標：\nナルガクルガ1頭の狩猟",
        "クエスト：\n【★3】泡狐に魅せられて\n目標：\nタマミツネ1頭の狩猟",
        "クエスト：\n【★3】王者、溶岩洞に降り立つ\n目標：\nリオレウス1頭の狩猟",
        "クエスト：\n【★3】水月に共鳴\n目標：\nジンオウガ1頭の狩猟",
        "クエスト：\n【★3】白騎士対狩人\n目標：\nベリオロス1頭の狩猟",
        "クエスト：\n【★3】友に向けられた咆哮\n目標：\nティガレックス1頭の狩猟",
        "クエスト：\n【★3】鋭い角にご注意を\n目標：\nディアブロス1頭の狩猟",
        "クエスト：\n【★3】テールテール\n目標：\nビシュテンゴ1頭とオロミドロ1頭の狩猟",
        "クエスト：\n【★3】荒レ狂ウモノタチ\n目標：\nティガレックスとゴシャハギの狩猟",
        "クエスト：\n【★3】災禍の中でも美しく\n目標：\nボルボロス、トビカガチ、マガイマガドの狩猟",
        "クエスト：\n【★3】青いヌシ\n目標：\n最終関門の防衛",
        "クエスト：\n【★3】丸呑み河童蛙\n目標：\nヨツミワドウ1頭の狩猟",
        "クエスト：\n【★3】砂原の大泥棒\n目標：\nクルルヤック1頭の狩猟",
        "クエスト：\n【★3】泥沼の土砂竜\n目標：\nボルボロス1頭の狩猟",
        "クエスト：\n【★3】毒霧に濡れた水没林\n目標：\nドスフロギィ1頭の狩猟",
        "クエスト：\n【★3】海綿質素材が作る砂漠の未来\n目標：\nロアルドロス1頭の狩猟",
        "クエスト：\n【★3】顔のないバケモノ退治？\n目標：\nフルフル1頭の狩猟",
        "クエスト：\n【★3】砂原に蠢く謎の集団\n目標：\nジャギィとジャギィノス合計14頭の討伐",
        "クエスト：\n【★3】水も滴るいい女\n目標：\nルドロス10頭の討伐",
        "クエスト：\n【★3】山林の荒法師\n目標：\nビシュテンゴ1頭の狩猟"
    ],
    [
        "クエスト：\n【★4】黄泉路への歌声\n目標：\nイソネミクニ1頭の狩猟",
        "クエスト：\n【★4】吹き荒ぶ銀世界\n目標：\nベリオロス1頭の狩猟",
        "クエスト：\n【★4】女王様のお通りだ\n目標：\nリオレイア1頭の狩猟",
        "クエスト：\n【★4】宙を駆ける白き影\n目標：\nトビカガチ1頭の狩猟",
        "クエスト：\n【★4】赤熱の輪舞曲\n目標：\nラングロトラ1頭の狩猟",
        "クエスト：\n【★4】夜泣く岩石\n目標：\nバサルモス1頭の狩猟",
        "クエスト：\n【★4】特別許可試験・其の一\n目標：\nアケノシルム1頭とリオレイア1頭の狩猟",
        "クエスト：\n【★4】ドクターの孤独な毒研究\n目標：\nプケプケ1頭の狩猟",
        "クエスト：\n【★4】親子の糸\n目標：\nツケヒバキ10匹の討伐",
        "クエスト：\n【★4】ぶちかませ巴戦\n目標：\nアオアシラ1頭とヨツミワドウ1頭の狩猟",
        "クエスト：\n【★4】悪逆無道\n目標：\nマガイマガド1頭の狩猟",
        "クエスト：\n【★4】取り巻くつむじ風\n目標：\nオサイズチ1頭の狩猟",
        "クエスト：\n【★4】グルメ・モンスターズ\n目標：\nアオアシラ1頭とクルルヤック1頭の狩猟",
        "クエスト：\n【★4】寒地にて舟を漕ぐ\n目標：\nドスバギィ2頭の狩猟",
        "クエスト：\n【★4】傘鳥円舞\n目標：\nアケノシルム1頭の狩猟",
        "クエスト：\n【★4】大場所・寒冷群島\n目標：\nヨツミワドウ1頭の狩猟",
        "クエスト：\n【★4】可愛いものにも牙はある\n目標：\nウルクスス1頭の狩猟",
        "クエスト：\n【★4】ある夜フルフルを狩る\n目標：\nフルフル1頭の狩猟",
        "クエスト：\n【★4】うさ団子への道を守れ！の巻\n目標：\nイズチとバギィ合計20頭の討伐",
        "クエスト：\n【★4】たまごだんご争奪戦！の巻\n目標：\nクルルヤック2頭の狩猟",
        "クエスト：\n【★4】会得せよ！片手剣の型\n目標：\nアケノシルム1頭の狩猟",
        "クエスト：\n【★4】理解せよ！狩猟笛の型\n目標：\nオサイズチとヨツミワドウの狩猟",
        "クエスト：\n【★4】変幻せよ！剣斧の型\n目標：\nウルクスス1頭とフルフル1頭の狩猟",
        "クエスト：\n【★4】学べ！軽弩の型\n目標：\nドスバギィ1頭とドスフロギィ1頭の狩猟",
        "クエスト：\n【★4】毒の錦を纏う\n目標：\nドスフロギィ1頭の狩猟",
        "クエスト：\n【★4】慎重派と突進派\n目標：\nジャグラスとブルファンゴ合計20頭の討伐",
        "クエスト：\n【★4】青くて丸くて愛しいあの子\n目標：\nアオアシラ1頭の捕獲",
        "クエスト：\n【★4】不穏の沼影\n目標：\nジュラトドス1頭の狩猟"
    ],
    [
        "クエスト：\n【★5】疾風迅竜\n目標：\nナルガクルガ1頭",
        "クエスト：\n【★5】帯電雷狼竜\n目標：\nジンオウガ1頭",
        "クエスト：\n【★5】夜の砂漠の追跡者\n目標：\nアンジャナフ1頭",
        "クエスト：\n【★5】月夜に舞う\n目標：\nボルボロス1頭の狩猟",
        "クエスト：\n【★5】リオレウス警報発令中\n目標：\nボルボロス1頭の狩猟",
        "クエスト：\n【★5】特別許可試験・其の二\n目標：\nオサイズチ1頭とビシュテンゴ1頭とマガイマガド1頭の狩猟",
        "クエスト：\n【★5】隠し味はうたた寝の巻\n目標：\nイソネミクニ1頭の捕獲",
        "クエスト：\n【★5】ビリビリorスヤスヤ？\n目標：\nフルフル1頭とイソネミクニ1頭の狩猟",
        "クエスト：\n【★5】砂原騒然\n目標：\nクルルヤック1頭とアンジャナフ1頭の狩猟",
        "クエスト：\n【★5】灼熱の大一番\n目標：\nヨツミワドウ1頭とラングロトラ1頭の狩猟",
        "クエスト：\n【★5】泥土の隠者\n目標：\nオロミドロ1頭の狩猟",
        "クエスト：\n【★5】水と共に生きるもの\n目標：\nロアルドロス1頭の狩猟",
        "クエスト：\n【★5】泥の中でも立ち上がれ\n目標：\nボルボロス1頭の狩猟",
        "クエスト：\n【★5】砂原の魔球にご注意を\n目標：\nラングロトラ2頭の狩猟",
        "クエスト：\n【★5】一柿入魂\n目標：\nビシュテンゴ1頭の狩猟",
        "クエスト：\n【★5】それは血となり毒となる\n目標：\nプケプケ1頭の狩猟",
        "クエスト：\n【★5】岩の上にも三年\n目標：\nバサルモス1頭の狩猟",
        "クエスト：\n【★5】女王に魅せられて\n目標：\nリオレイア1頭の狩猟",
        "クエスト：\n【★5】見極めよ！大剣の型\n目標：\nビシュテンゴ2頭の狩猟",
        "クエスト：\n【★5】体で覚えよ！ハンマーの型\n目標：\nプケプケ1頭とボルボロス1頭の狩猟",
        "クエスト：\n【★5】心得よ！ランスの型\n目標：\nリオレイア1頭の捕獲",
        "クエスト：\n【★5】一体となれ！盾斧の型\n目標：\nロアルドロスとジュラトドスの狩猟",
        "クエスト：\n【★5】狙い穿て！重弩の型\n目標：\nバサルモス1頭とラングロトラ1頭の狩猟",
        "クエスト：\n【★5】最近話題の固いやつら\n目標：\nリノプロスとケストドン合計20頭の討伐",
        "クエスト：\n【★5】水没林の迷惑集団\n目標：\nルドロスとフロギィ合計20頭の討伐",
        "クエスト：\n【★5】寒地を呑み込む影\n目標：\nフルフル1頭とヨツミワドウ1頭の狩猟",
        "クエスト：\n【★5】妖艶なる舞\n目標：\nタマミツネ1頭の狩猟"
    ],
    [
        "クエスト：\n【★6】特別許可試験・其の三\n目標：\nリオレウス1頭とジンオウガ1頭とオロミドロ1頭の狩猟",
        "クエスト：\n【★6】彷徨える雪鬼獣\n目標：\nゴシャハギ1頭の狩猟",
        "クエスト：\n【★6】蠢く声\n目標：\nティガレックス1頭の狩猟",
        "クエスト：\n【★6】ねじれた欲望\n目標：\nディアブロス1頭の狩猟",
        "クエスト：\n【★6】大社跡での肝試し\n目標：\nマガイマガド1頭とジンオウガ1頭の狩猟",
        "クエスト：\n【★6】電光雷轟、夢幻泡影\n目標：\nトビカガチ1頭とタマミツネ1頭の狩猟",
        "クエスト：\n【★6】天空の王者、大地の暴君\n目標：\nリオレウス1頭とティガレックス1頭の狩猟",
        "クエスト：\n【★6】いざ挑め、覇者の行列\n目標：\nラージャン1頭とバゼルギウス1頭とマガイマガド1頭の狩猟",
        "クエスト：\n【★6】山河に一閃、響く雷鳴\n目標：\nジンオウガ1頭の狩猟",
        "クエスト：\n【★6】冥途へ誘う歌声\n目標：\nイソネミクニ1頭の狩猟",
        "クエスト：\n【★6】琥珀色の牙を研ぐ\n目標：\nベリオロス",
        "クエスト：\n【★6】頭上を飛び跳ねる脅威\n目標：\nトビカガチ1頭の狩猟",
        "クエスト：\n【★6】猛追、蛮顎竜\n目標：\nアンジャナフ1頭の狩猟",
        "クエスト：\n【★6】赤き双眸、夜陰を断つ\n目標：\nナルガクルガ1頭の狩猟",
        "クエスト：\n【★6】天上に紅蓮咲く\n目標：\nリオレウス",
        "クエスト：\n【★6】かけっこ泥んこ大騒ぎ！の巻\n目標：\nナルガクルガ1頭とジュラトドス1頭の狩猟",
        "クエスト：\n【★6】研ぎ澄ませ！太刀の型\n目標：\nジンオウガ1頭とタマミツネ1頭の狩猟",
        "クエスト：\n【★6】乱れ裂け！双剣の型\n目標：\nアンジャナフ1頭とリオレイア1頭の狩猟",
        "クエスト：\n【★6】磨け！銃槍の型\n目標：\nベリオロス1頭の捕獲",
        "クエスト：\n【★6】修練せよ！操虫棍の型\n目標：\nイソネミクニ1頭とアケノシルム1頭の狩猟",
        "クエスト：\n【★6】鍛えよ！弓の型\n目標：\nトビカガチ2頭の狩猟",
        "クエスト：\n【★6】溶岩洞の掃討戦\n目標：\nウロコトルとツケヒバキ合計20頭の討伐",
        "クエスト：\n【★6】英俊豪傑\n目標：\nアンジャナフとタマミツネとジンオウガの狩猟",
        "クエスト：\n【★6】風神\n目標：\n最終関門の防衛",
        "クエスト：\n【★6】火吹き御前\n目標：\nヤツカダキ1頭の狩猟"
    ],
    [
        "クエスト：\n【★7】雪鬼獣がやってくる\n目標：\nゴシャハギ1頭の狩猟",
        "クエスト：\n【★7】\n目標：\nマガイマガド1頭の狩猟",
        "クエスト：\n【★7】泥海へ手招く\n目標：\nオロミドロ1頭の狩猟",
        "クエスト：\n【★7】地底を駆ける角竜\n目標：\nディアブロス1頭の狩猟",
        "クエスト：\n【★7】轟轟たる咆哮\n目標：\nティガレックス1頭の狩猟",
        "クエスト：\n【★7】悪鬼羅刹\n目標：\nラージャン1頭の狩猟",
        "クエスト：\n【★7】火加減注意！紫炎と火球の巻\n目標：\nリオレウス1頭とマガイマガド1頭の狩猟",
        "クエスト：\n【★7】大社跡の大騒動\n目標：\nオロミドロ1頭とタマミツネ1頭の狩猟",
        "クエスト：\n【★7】猛き力は大地が如く\n目標：\nゴシャハギ1頭とヨツミワドウ1頭の狩猟",
        "クエスト：\n【★7】激突・激烈・激励の乱\n目標：\nディアブロス1頭とアンジャナフ1頭の狩猟",
        "クエスト：\n【★7】乱暴者たちにご注意を\n目標：\nラージャン1頭とジンオウガ1頭の狩猟",
        "クエスト：\n【★7】方々から迫る脅威\n目標：\nヤツカダキ1頭とフルフル1頭の狩猟",
        "クエスト：\n【★7】疾風怒濤の大舞台\n目標：\nトビカガチとナルガクルガとティガレックスの狩猟",
        "クエスト：\n【★7】うさ団子貫く四つの角！の巻\n目標：\nディアブロス2頭の狩猟",
        "クエスト：\n【★7】火吹き御前\n目標：\nヤツカダキ1頭の狩猟",
        "クエスト：\n【★7】雷神\n目標：\nナルハタタヒメ1頭の討伐"
    ],
    [
        "クエスト：\n【HR8↑】牛飲馬食、ヌシ・アオアシラ\n目標：\nヌシ・アオアシラ1頭の討伐",
        "クエスト：\n【HR8↑】ウツシ教官の挑戦状・其の一\n目標：\nオロミドロ1頭とジンオウガ1頭の狩猟",
        "クエスト：\n【HR8↑】ウツシ教官の挑戦状・其の二\n目標：\nゴシャハギ1頭とラージャン1頭の狩猟",
        "クエスト：\n【HR8↑】ウツシ教官の挑戦状・其の三\n目標：\nマガイマガド1頭とナルガクルガ1頭の狩猟",
        "クエスト：\n【HR8↑】猛き炎と、闊歩する強者ども\n目標：\nリオレイア1頭とティガレックス1頭とヤツカダキ1頭の狩猟",
        "クエスト：\n【HR8↑】猛き炎よ、怒髪を鎮めよ\n目標：\nラージャン1頭の捕獲",
        "クエスト：\n【HR8↑】古の幻影\n目標：\nオオナズチ1頭の討伐",
        "クエスト：\n【HR8↑】嵐に舞う黒い影\n目標：\nクシャルダオラの討伐",
        "クエスト：\n【HR8↑】炎国の王\n目標：\nテオテスカトルの討伐",
        "クエスト：\n【HR8↑】優美高妙、ヌシ・リオレイア\n目標：\nヌシ・リオレイアの討伐",
        "クエスト：\n【HR8↑】千紫万紅、ヌシ・タマミツネ\n目標：\nヌシ・タマミツネの討伐",
        "クエスト：\n【HR8↑】ウツシ教官の挑戦状・其の四\n目標：\nティガレックス1頭とアンジャナフ1頭の狩猟",
        "クエスト：\n【HR8↑】ウツシ教官の挑戦状・其の五\n目標：\nヤツカダキ1頭とリオレウス1頭の狩猟",
        "クエスト：\n【HR8↑】百竜ノ淵源\n目標：\nイブシマキヒコ1頭とナルハタタヒメ1頭の討伐",
        "クエスト：\n【HR8↑】奇しき赫耀\n目標：\nバルファルク1頭の討伐",
        "クエスト：\n【HR8↑】為虎添翼、ヌシ・リオレウス\n目標：\nヌシ・リオレウス1頭の討伐",
        "クエスト：\n【HR8↑】痛烈無比、ヌシ・ディアブロス\n目標：\nヌシ・ディアブロス1頭の討伐",
        "クエスト：\n【HR8↑】電光雷轟、ヌシ・ジンオウガ\n目標：\nヌシ・ジンオウガ1頭の討伐",
        "クエスト：\n【HR8↑】災禍を纏うもの\n目標：\nマガイマガド1頭とバゼルギウス1頭の狩猟",
        "クエスト：\n【HR8↑】竜獣戯画\n目標：\nゴシャハギ1頭とティガレックス1頭とタマミツネ1頭の狩猟",
        "クエスト：\n【HR8↑】嵐ト炎ヲ司ルモノ\n目標：\nクシャルダオラ1体とテオテスカトル1体の討伐",
        "クエスト：\n【HR8↑】鬼はいずこ\n目標：\nオオナズチ1体の討伐とラージャン1頭の狩猟",
        "クエスト：\n【HR8↑】凶星、業火の地に降る\n目標：\nバルファルク1体の討伐とヤツカダキ1匹の狩猟",
        "クエスト：\n【HR8↑】猛者たちの酒宴\n目標：\nディアブロス1頭とリオレウス1頭とマガイマガド1頭の狩猟",
        "クエスト：\n【HR8↑】ヌシの名を戴くもの\n目標：\nヌシ・タマミツネ1頭とヌシ・リオレウス1頭とヌシ・ジンオウガ1頭の討伐"
    ],
    [
        "クエスト：\n【イベント】急いては熊を仕損じる\n目標：\nヌシアオアシラ1頭の討伐",
        "クエスト：\n【イベント】破滅の鳥竜？\n目標：\n全てのターゲットの狩猟\n・ドスバギィ\n・オサイズチ\n・クルルヤック",
        "クエスト：\n【イベント】泥と翁のポップカルチャー\n目標：\nオロミドロ1頭の狩猟",
        "クエスト：\n【イベント】氷の刃が眩しくて\n目標：\nゴシャハギ１頭の狩猟",
        "クエスト：\n【イベント】SF・サイキョー流昇段試験\n目標：\nラージャン1頭の狩猟",
        "クエスト：\n【イベント】青いヒーローの頼れる相棒\n目標：ジンオウガの狩猟\n",
        "クエスト：\n【イベント】たとえ鎧が砕けても\n目標：\n全てのターゲットの狩猟\n・ラングロトラ\n・バサルモス\n・リオレウス",
        "クエスト：\n【イベント】瓜二つな音速の影\n目標：\nナルガクルガの討伐",
        "クエスト：\n【イベント】水清ければ月宿る\n目標：\n全てのターゲットの狩猟\n・ジュラトドス\n・イソネミクニ\n・タマミツネ",
        "クエスト：\n【イベント】雪中暴牙\n目標：\n全てのターゲットの狩猟\n・ウルクスス\n・ベリオロス\n・ゴシャハギ",
        "クエスト：\n【イベント】USJ・大社跡の大立ち回り！\n目標：\n全てのターゲットの狩猟\n・ヨツミワドウ\n・オロミドロ\n・マガイマガド",
        "クエスト：\n【イベント】雷電陰陽\n目標：\n全てのターゲットの狩猟\n・ジンオウガ\n・フルフル",
        "クエスト：\n【イベント】あの日の思い出\n目標：\n全てのターゲットの狩猟\n・オサイズチ\n・タマミツネ\n・マガイマガド",
        "クエスト：\n【イベント】溶岩洞の巨大ガマ\n目標：\nヨツミワドウ1頭の狩猟",
        "クエスト：\n【イベント】人魚竜は妖麗に舞う\n目標：\nイソネミクニ1頭の狩猟",
        "クエスト：\n【イベント】夜の湿地で化かし合い\n目標：\nオオナズチ1頭の狩猟",
        "クエスト：\n【イベント】百竜夜行：魅惑のパレード\n目標：\n最終関門の防衛",
        "クエスト：\n【イベント】USJ・青熊たちの猛進マーチ！\n目標：\n最終関門の防衛",
        "クエスト：\n【イベント】代表的百竜夜行\n目標：\n最終関門の防衛",
        "クエスト：\n【イベント】炎帝、熱砂の地を見下ろす\n目標：\nテオテスカトルの討伐",
        "クエスト：\n【イベント】駆け抜けるデザイア\n目標：\n全てのターゲットの狩猟\n・ロアルドロス\n・プケプケ\n・ビシュテンゴ",
        "クエスト：\n【イベント】大地激高\n目標：\n全てのターゲットの狩猟\n・ボルボロス\n・リオレイア\n・ディアブロス",
        "クエスト：\n【イベント】熊と河童の揃い踏み\n目標：\n全てのターゲットの狩猟\n・アオアシラ\n・ヨツミワドウ",
        "クエスト：\n【イベント】暴走気味に燃え上がる熱情\n目標：\n全てのターゲットの狩猟\n・ラングロトラ\n・アンジャナフ\n・ティガレックス",
        "クエスト：\n【イベント】金獅子ブチギレ\n目標：\n最終関門の防衛",
        "クエスト：\n【イベント】影の迅竜\n目標：\nナルガクルガ1頭の狩猟",
        "クエスト：\n【イベント】雪風に舞う朱の唐傘\n目標：\nアケノシルム1頭の狩猟",
        "クエスト：\n【イベント】百竜夜行：泥土の進軍\n目標：\n全てのターゲットの狩猟\n・ビシュテンゴ\n・オロミドロ",
        "クエスト：\n【イベント】砂漠に咲く白糸の花\n目標：\nヤツカダキ1頭の狩猟",
        "クエスト：\n【イベント】爆鱗爆砕\n目標：\nバゼルギウスの討伐",
        "クエスト：\n【イベント】金獅子パーティーナイト！\n目標：\n全てのターゲットの狩猟\n・ドスフロギィ2頭\n・ラージャン",
        "クエスト：\n【イベント】傘鳥三頭、残暴惨況\n目標：\nアケノシルム3頭の狩猟",
        "クエスト：\n【イベント】プリンセスたちの宴\n目標：\n全てのターゲットの狩猟\n・イソネミクニ\n・リオレイア\n・ヤツカダキ",
        "クエスト：\n【イベント】最小雪主、あらわる！\n目標：\nウルクススの討伐",
        "クエスト：\n【イベント】称号・モノノフの心\n目標：\n全てのターゲットの狩猟\n・ゴシャハギ\n・マガイマガド",
        "クエスト：\n【イベント】称号・シノビの心\n目標：\n全てのターゲットの狩猟\n・トビカガチ\n・ベリオロス\n・ナルガクルガ",
        "クエスト：\n【イベント】称号・ゴウケツの心\n目標：\n全てのターゲットの狩猟\n・ティガレックス\n・ディアブロス",
        "クエスト：\n【イベント】称号・ライバルの心\n目標：\n全てのターゲットの狩猟\n・ヌシ・タマミツネ\n・ヌシ・ジンオウガ",
        "クエスト：\n【イベント】砂塵に揺らめく嵐の支配者\n目標：\nクシャルダオラ1頭の討伐",
        "クエスト：\n【イベント】夫婦ゲンカはガルクも食わない\n目標：\n全てのターゲットの狩猟\n・ヌシ・リオレウス\n・ヌシ・リオレイア",
        "クエスト：\n【イベント】暴君の背くらべ\n目標：\nヌシ・ディアブロス2頭の狩猟",
        "クエスト：\n【イベント】風神再臨\n目標：\nイブシマキヒコの討伐",
        "クエスト：\n【イベント】雷神再臨\n目標：\nナルハタタヒメの討伐",
        "クエスト：\n【イベント】ヌシ・アオアシラ重大事変\n目標：\nヌシ・アオアシラの討伐",
        "クエスト：\n【イベント】百竜夜行：龍虎カムラ夜討\n目標：\n最終関門の防衛",
        "クエスト：\n【イベント】ヌシ・リオレイア重大事変\n目標：\nヌシリオレイアの討伐",
        "クエスト：\n【イベント】ヌシ・タマミツネ重大事変\n目標：\nヌシタマミツネの討伐",
        "クエスト：\n【イベント】称号・ヌシの心\n目標：\n全てのターゲットの狩猟\n・ヌシ・アオアシラ\n・ヌシ・リオレイア\n・ヌシ・ディアブロスの狩猟",
        "クエスト：\n【イベント】侵襲！大天狗と小天狗\n目標：\nビシュテンゴ2頭の狩猟",
        "クエスト：\n【イベント】炎の如く、日々を力強く生きろ\n目標：\nマガイマガド1頭の討伐",
        "クエスト：\n【イベント】ヌシ・リオレウス重大事変\n目標：\nヌシ・リオレウスの討伐",
        "クエスト：\n【イベント】チャレンジクエスト07\n目標：\n全てのターゲットの狩猟\n・ヌシ・ジンオウガ\n・ヌシ・タマミツネ\n・ヌシ・ディアブロス",
        "クエスト：\n【イベント】我ら楽土がかぞいろは\n目標：\n全てのターゲットの狩猟\n・イブシマキヒコ\n・百竜ノ淵源ナルハタタヒメ",
        "クエスト：\n【イベント】ヌシ・ディアブロス重大事変\n目標：\nヌシ・ディアブロスの討伐",
        "クエスト：\n【イベント】ヌシ・ジンオウガ重大事変\n目標：\nヌシ・ジンオウガの討伐",
        "クエスト：\n【イベント】高難度:赫耀動乱\n目標：\n奇しき赫耀のバルファルクの討伐",
        "クエスト：\n【イベント】称号・ツワモノの心\n目標：\n全てのターゲットの狩猟\n・オオナズチ\n・クシャルダオラ\n・テオ・テスカトル",
        "クエスト：\n【イベント】チャレンジクエスト01\n目標：\nヨツミワドウ1頭の討伐",
        "クエスト：\n【イベント】チャレンジクエスト02\n目標：\nジンオウガの討伐",
        "クエスト：\n【イベント】チャレンジクエスト03\n目標：\nティガレックス1頭の討伐",
        "クエスト：\n【イベント】チャレンジクエスト04\n目標：\nマガイマガドの討伐",
        "クエスト：\n【イベント】チャレンジクエスト05\n目標：\nヤツカダキ1頭の討伐",
        "クエスト：\n【イベント】チャレンジクエスト06\n目標：\n全てのターゲットの狩猟\n・イソネミクニ\n・ゴシャハギ\n・マガイマガドの狩猟"
    ],
    [
        "クエスト：\n【M★1】静寂を切り裂くもの\n目標：\nダイミョウザザミ1匹の狩猟",
        "クエスト：\n【M★1】お船様の露払い\n目標：\nヤオザミとランポス合計15頭の討伐",
        "クエスト：\n【M★1】可及的速やかに狩猟を\n目標：\nクルルヤック1頭の狩猟",
        "クエスト：\n【M★1】木陰の水獣ウォッチング\n目標：\nロアルドロス1頭の狩猟",
        "クエスト：\n【M★1】大社跡の相撲大会？\n目標：\nアオアシラ2頭の狩猟",
        "クエスト：\n【M★1】河童蛙の通せん坊\n目標：\nヨツミワドウ1頭の狩猟",
        "クエスト：\n【M★1】火、恐れずに足りず\n目標：\nアケノシルム1頭の狩猟",
        "クエスト：\n【M★1】迫り転がる赤い玉\n目標：\nラングロトラ1頭の狩猟",
        "クエスト：\n【M★1】あの身にまとう泥が決め手\n目標：\nボルボロス1頭の狩猟",
        "クエスト：\n【M★1】密林のポイズンカーペット\n目標：\nドスフロギィ2頭の狩猟",
        "クエスト：\n【M★1】緋色天狗の来攻\n目標：\nビシュテンゴ亜種1頭の狩猟",
    ],
    [
        "クエスト：\n【M★2】女王様のたたずむ庭\n目標：\nリオレイア1頭の狩猟",
        "クエスト：\n【M★2】ただ喰らう白き化生\n目標：\nフルフル1頭の狩猟",
        "クエスト：\n【M★2】安眠快眠イソネ枕\n目標：\nイソネミクニ1頭の狩猟",
        "クエスト：\n【M★2】砂塵に潜む毒々\n目標：\nプケプケ1頭の狩猟",
        "クエスト：\n【M★2】鳥竜夜会へようこそ\n目標：\nアケノシルム1頭と\nクルルヤック1頭の狩猟",
        "クエスト：\n【M★2】ヤブをつついて蛮顎竜を出す\n目標：\nアンジャナフ1頭の狩猟",
        "クエスト：\n【M★2】迅雷、止めを知らず\n目標：\nトビカガチ1頭の狩猟",
        "クエスト：\n【M★2】不気味な岸壁\n目標：\nバサルモス1頭の狩猟",
        "クエスト：\n【M★2】泥の底より来たる者\n目標：\nジュラトドス1頭の狩猟",
        "クエスト：\n【M★2】大社跡の大喧嘩\n目標：\nオサイズチ1頭と\nリオレイア1頭の狩猟",
        "クエスト：\n【M★2】鳥竜の三連星\n目標：\nオサイズチ1頭と\nドスフロギィ1頭と\nドスバギィ1頭の狩猟",
        "クエスト：\n【M★2】暴走する剛力の怪物\n目標：\nガランゴルム1頭の狩猟"
    ],
    [
        "クエスト：\n【M★3】泥翁竜の試練\n目標：\nオロミドロ1頭の狩猟",
        "クエスト：\n【M★3】音を断ち切る鎌\n目標：\nショウグンギザミ1匹の狩猟",
        "クエスト：\n【M★3】氷上の白騎士\n目標：\nベリオロス1頭の狩猟",
        "クエスト：\n【M★3】雪鬼獣の服が欲しいの\n目標：\nゴシャハギ1頭の狩猟",
        "クエスト：\n【M★3】迷惑千万、密林のならず者たち\n目標：\nアンジャナフ1頭と\nトビカガチ1頭の狩猟",
        "クエスト：\n【M★3】凍える海から手招くもの\n目標：\nイソネミクニ亜種1頭の狩猟",
        "クエスト：\n【M★3】密林に潜む暗殺者\n目標：\nナルガクルガ1頭の狩猟",
        "クエスト：\n【M★3】砂原巡る蜘蛛の巣\n目標：\nヤツカダキ1匹の狩猟",
        "クエスト：\n【M★3】幸福の願いには怨念を\n目標：\nマガイマガド1頭の狩猟",
        "クエスト：\n【M★3】歌姫と大男の恋物語！？\n目標：\nガランゴルム1頭と\nイソネミクニ1頭の狩猟",
        "クエスト：\n【M★3】盾と鎌でハサミ討ち！\n目標：\nダイミョウザザミ1匹と\nショウグンギザミ1匹の狩猟",
        "クエスト：\n【M★3】氷狼、月を振り返らず\n目標：\nルナガロン1頭の狩猟"
    ],
    [
        "クエスト：\n【M★4】泡狐竜のあのヒラヒラ\n目標：\nタマミツネ1頭の狩猟",
        "クエスト：\n【M★4】砂塵に潜む暴君\n目標：\nディアブロス1頭の狩猟",
        "クエスト：\n【M★4】朽ちたる城に、王は眠る\n目標：\nリオレウス1頭の狩猟",
        "クエスト：\n【M★4】鎌と火炎の危険度問題\n目標：\nショウグンギザミ1匹とリオレイア1頭の狩猟",
        "クエスト：\n【M★4】スゴウデ薬師の捜索\n目標：\nライゼクス1頭の狩猟",
        "クエスト：\n【M★4】神なき社の雷狼竜\n目標：\nジンオウガ1頭の狩猟",
        "クエスト：\n【M★4】千刃、襲来\n目標：\nセルレギオス1頭の狩猟",
        "クエスト：\n【M★4】ドロはドロでも熱いドロドロ\n目標：\nオロミドロ亜種1頭の狩猟",
        "クエスト：\n【M★4】婦人に人気の白騎士と鎧武者\n目標：\nベリオロス1頭と\nマガイマガド1頭の狩猟",
        "クエスト：\n【M★4】黒き衣を纏う竜\n目標：\nゴアマガラ1頭の狩猟",
        "クエスト：\n【M★4】絶対強者\n目標：\nティガレックス1頭の狩猟",
        "クエスト：\n【M★4】噴煙うずまく妃の御前\n目標：\nヤツカダキ亜種1匹の狩猟",
        "クエスト：\n【M★4】城塞高地に悪霊のウワサ！？\n目標：\nルナガロン1頭と\nガランゴルム1頭の狩猟",
        "クエスト：\n【M★4】月光染めし紅\n目標：\nメルゼナ1体の討伐"
    ],
    [
        "クエスト：\n【M★5】オトモ思いの助太刀ねがい\n目標：\nラージャン1頭の狩猟",
        "クエスト：\n【M★5】爆鱗注意報\n目標：\nバゼルギウス1頭の狩猟",
        "クエスト：\n【M★5】危険な森林浴\n目標：\nルナガロン1頭とジンオウガ1頭の狩猟",
        "クエスト：\n【M★5】暗黒にまみれし凶刃\n目標：\nゴアマガラ1頭とセルレギオス1頭の狩猟",
        "クエスト：\n【M★5】黒の中の白\n目標：\nシャガルマガラ1体の討伐",
        "クエスト：\n【M★5】霧のごとく消え去る物\n目標：\nオオナズチ1体の討伐",
        "クエスト：\n【M★5】氷点下の支配者\n目標：\nクシャルダオラ1体の討伐",
        "クエスト：\n【M★5】燃えさかる日輪より紅く\n目標：\nテオテスカトル1体の討伐",
        "クエスト：\n【M★5】悪魔の再来\n目標：\nガイアデルム1体の討伐"
    ],
    [
        "クエスト：\n【M★6】逆巻く因果\n目標：\nイブシマキヒコ1体の討伐",
        "クエスト：\n【M★6】戦慄く神解\n目標：\n百竜ノ淵源ナルハタタヒメ1体の討伐",
        "クエスト：\n【M★6】羅刹激昂、天を衝く\n目標：\n激昂したラージャン1頭の狩猟",
        "クエスト：\n【M★6】終焉の天に星は燃ゆ\n目標：\nバルファルク1頭の討伐"
    ],
    [
        "クエスト：\n【EX★1】傀異調査：ドスバギィ\n目標：\nドスバギィ（傀異化）1頭の討伐",
        "クエスト：\n【EX★1】傀異調査：アオアシラ\n目標：\nアオアシアケノシルム（傀異化）1頭の討伐ラ（傀異化）1頭の討伐",
        "クエスト：\n【EX★1】傀異調査：オサイズチ\n目標：\nオサイズチ（傀異化）1頭の討伐",
        "クエスト：\n【EX★1】傀異調査：クルルヤック\n目標：\nクルルヤック（傀異化）1頭の討伐",
        "クエスト：\n【EX★1】傀異調査：ドスフロギィ\n目標：\nドスフロギィ（傀異化）1頭の討伐",
        "クエスト：\n【EX★1】傀異調査：ラングロトラ\n目標：\nラングロトラ（傀異化）1頭の討伐",
        "クエスト：\n【EX★1】傀異調査：ウルクスス\n目標：\nウルクスス（傀異化）1頭の討伐",

        "クエスト：\n【EX★2】傀異調査：アケノシルム\n目標：\nアケノシルム（傀異化）1頭の討伐",
        "クエスト：\n【EX★2】傀異調査：ヨツミワドウ\n目標：\nヨツミワドウ（傀異化）1頭の討伐",
        "クエスト：\n【EX★2】傀異調査：ダイミョウザザミ\n目標：\nダイミョウザザミ（傀異化）1頭の討伐",

        "クエスト：\n【EX★3】傀異調査：ビシュテンゴ亜種\n目標：\nビシュテンゴ亜種（傀異化）1頭の討伐",
        "クエスト：\n【EX★3】傀異調査：リオレイア\n目標：\nリオレイア（傀異化）1頭の討伐",
        "クエスト：\n【EX★3】傀異調査：ジュラトドス\n目標：\n	ジュラトドス（傀異化）1頭の討伐",
        "クエスト：\n【EX★3】傀異調査：アンジャナフ\n目標：\nアンジャナフ（傀異化）1頭の討伐",
        "クエスト：\n【EX★3】傀異調査：プケプケ\n目標：\nプケプケ（傀異化）1頭の討伐",
        "クエスト：\n【EX★3】傀異調査：ショウグンギザミ\n目標：\nショウグンギザミ（傀異化）1頭の討伐",

        "クエスト：\n【EX★4】傀異調査：ガランゴルム\n目標：\nガランゴルム1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：イソネミクニ亜種\n目標：\nイソネミクニ亜種1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：マガイマガド\n目標：\nマガイマガド1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：ヤツカダキ\n目標：\nヤツカダキ1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：ベリオロス\n目標：\nベリオロス1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：ゴシャハギ\n目標：\nゴシャハギ1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：ナルガクルガ\n目標：\nナルガクルガ1頭の討伐",
        "クエスト：\n【EX★4】傀異調査：オロミドロ\n目標：\nオロミドロ1頭の討伐",
    ]
];

function generate_quest() {
    let p1_name = `【${p_name1.value}】\n`;
    if(p_name2.value.length == 0 && p_name3.value.length == 0 && p_name4.value.length == 0) {
        p1_name = "";
    }
    let p1_text = "";
    let p1_weapon = "";
    let p1_armor = "";
    let p1_limit = "";
    if(weapon_check.checked) {
        p1_weapon = "武器：" + weapons[Math.floor(Math.random() * weapons.length)] + "\n";
    }
    if(armor_check.checked) {
        p1_armor = "防具：" + armor[Math.floor(Math.random() * armor.length)] + "\n";
    }
    if(limit_check.checked) {
        p1_limit = "縛り：" + limit[Math.floor(Math.random() * limit.length)];
    }
    if(p_name1.value != "") {
        p1_text = `${p1_name}${p1_weapon}${p1_armor}${p1_limit}\n＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿`;
    }

    let p2_name = `【${p_name2.value}】\n`;
    let p2_text = "";
    let p2_weapon = "";
    let p2_armor = "";
    let p2_limit = "";
    if(weapon_check.checked) {
        p2_weapon = "武器：" + weapons[Math.floor(Math.random() * weapons.length)] + "\n";
    }
    if(armor_check.checked) {
        p2_armor = "防具：" + armor[Math.floor(Math.random() * armor.length)] + "\n";
    }
    if(limit_check.checked) {
        p2_limit = "縛り：" + limit[Math.floor(Math.random() * limit.length)];
    }
    if(p_name2.value != "") {
        p2_text = `${p2_name}${p2_weapon}${p2_armor}${p2_limit}\n＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿`;
    }

    let p3_name = `【${p_name3.value}】\n`;
    let p3_text = "";
    let p3_weapon = "";
    let p3_armor = "";
    let p3_limit = "";
    if(weapon_check.checked) {
        p3_weapon = "武器：" + weapons[Math.floor(Math.random() * weapons.length)] + "\n";
    }
    if(armor_check.checked) {
        p3_armor = "防具：" + armor[Math.floor(Math.random() * armor.length)] + "\n";
    }
    if(limit_check.checked) {
        p3_limit = "縛り：" + limit[Math.floor(Math.random() * limit.length)];
    }
    if(p_name3.value != "") {
        p3_text = `${p3_name}${p3_weapon}${p3_armor}${p3_limit}\n＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿`;
    }

    let p4_name = `【${p_name4.value}】\n`;
    let p4_text = "";
    let p4_weapon = "";
    let p4_armor = "";
    let p4_limit = "";
    if(weapon_check.checked) {
        p4_weapon = "武器：" + weapons[Math.floor(Math.random() * weapons.length)] + "\n";
    }
    if(armor_check.checked) {
        p4_armor = "防具：" + armor[Math.floor(Math.random() * armor.length)] + "\n";
    }
    if(limit_check.checked) {
        p4_limit = "縛り：" + limit[Math.floor(Math.random() * limit.length)];
    }
    if(p_name4.value != "") {
        p4_text = `${p4_name}${p4_weapon}${p4_armor}${p4_limit}\n＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿＿`;
    }

    if(star1.checked == false && quests_nums.indexOf(0) != -1) {
        star1_num = quests_nums.indexOf(0);
        quests_nums.splice(star1_num,1);
    }
    if(star1.checked == true && quests_nums.indexOf(0) == -1) {
        quests_nums.push(0);
    }
    if(star2.checked == false && quests_nums.indexOf(1) != -1) {
        star2_num = quests_nums.indexOf(1);
        quests_nums.splice(star2_num,1);
    }
    if(star2.checked == true && quests_nums.indexOf(1) == -1) {
        quests_nums.push(1);
    }
    if(star3.checked == false && quests_nums.indexOf(2) != -1) {
        star3_num = quests_nums.indexOf(2);
        quests_nums.splice(star3_num,1);
    }
    if(star3.checked == true && quests_nums.indexOf(2) == -1) {
        quests_nums.push(2);
    }
    if(star4.checked == false && quests_nums.indexOf(3) != -1) {
        star4_num = quests_nums.indexOf(3);
        quests_nums.splice(star4_num,1);
    }
    if(star4.checked == true && quests_nums.indexOf(3) == -1) {
        quests_nums.push(3);
    }
    if(star5.checked == false && quests_nums.indexOf(4) != -1) {
        star5_num = quests_nums.indexOf(4);
        quests_nums.splice(star5_num,1);
    }
    if(star5.checked == true && quests_nums.indexOf(4) == -1) {
        quests_nums.push(4);
    }
    if(star6.checked == false && quests_nums.indexOf(5) != -1) {
        star6_num = quests_nums.indexOf(5);
        quests_nums.splice(star6_num,1);
    }
    if(star6.checked == true && quests_nums.indexOf(5) == -1) {
        quests_nums.push(5);
    }
    if(star7.checked == false && quests_nums.indexOf(6) != -1) {
        star7_num = quests_nums.indexOf(6);
        quests_nums.splice(star7_num,1);
    }
    if(star7.checked == true && quests_nums.indexOf(6) == -1) {
        quests_nums.push(6);
    }
    if(HR8_.checked == false && quests_nums.indexOf(7) != -1) {
        HR8_num = quests_nums.indexOf(7);
        quests_nums.splice(HR8_num,1);
    }
    if(HR8_.checked == true && quests_nums.indexOf(7) == -1) {
        quests_nums.push(7);
    }
    if(event_.checked == false && quests_nums.indexOf(8) != -1) {
        event_num = quests_nums.indexOf(8);
        quests_nums.splice(event_num,1);
    }
    if(event_.checked == true && quests_nums.indexOf(8) == -1) {
        quests_nums.push(8);
    }
    if(m_star1.checked == false && quests_nums.indexOf(9) != -1) {
        m_star1_num = quests_nums.indexOf(9);
        quests_nums.splice(m_star1_num,1);
    }
    if(m_star1.checked == true && quests_nums.indexOf(9) == -1) {
        quests_nums.push(9);
    }
    if(m_star2.checked == false && quests_nums.indexOf(10) != -1) {
        m_star2_num = quests_nums.indexOf(10);
        quests_nums.splice(m_star2_num,1);
    }
    if(m_star2.checked == true && quests_nums.indexOf(10) == -1) {
        quests_nums.push(10);
    }
    if(m_star3.checked == false && quests_nums.indexOf(11) != -1) {
        m_star3_num = quests_nums.indexOf(11);
        quests_nums.splice(m_star3_num,1);
    }
    if(m_star3.checked == true && quests_nums.indexOf(11) == -1) {
        quests_nums.push(11);
    }
    if(m_star4.checked == false && quests_nums.indexOf(12) != -1) {
        m_star4_num = quests_nums.indexOf(12);
        quests_nums.splice(m_star4_num,1);
    }
    if(m_star4.checked == true && quests_nums.indexOf(12) == -1) {
        quests_nums.push(12);
    }
    if(m_star5.checked == false && quests_nums.indexOf(13) != -1) {
        m_star5_num = quests_nums.indexOf(13);
        quests_nums.splice(m_star5_num,1);
    }
    if(m_star5.checked == true && quests_nums.indexOf(13) == -1) {
        quests_nums.push(13);
    }
    if(m_star6.checked == false && quests_nums.indexOf(14) != -1) {
        m_star6_num = quests_nums.indexOf(14);
        quests_nums.splice(m_star6_num,1);
    }
    if(m_star6.checked == true && quests_nums.indexOf(14) == -1) {
        quests_nums.push(14);
    }
    if(ex.checked == false && quests_nums.indexOf(15) != -1) {
        ex_num = quests_nums.indexOf(15);
        quests_nums.splice(ex_num,1);
    }
    if(ex.checked == true && quests_nums.indexOf(15) == -1) {
        quests_nums.push(15);
    }
    
    random_num = Math.floor(Math.random() * quests_nums.length);

    quests_text = "\n" + quests[quests_nums[random_num]][Math.floor(Math.random() * quests[quests_nums[random_num]].length)];
    result_text = p1_text + p2_text + p3_text + p4_text
    if(quest_check.checked) {
        result_text = p1_text + p2_text + p3_text + p4_text + quests_text;
    }
    result.innerHTML = result_text;
}

document.getElementById("generate_btn").addEventListener("click",function() {
    generate_quest();
})