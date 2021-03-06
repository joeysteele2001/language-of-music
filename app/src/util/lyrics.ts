import { Milliseconds } from './duration';
import { AnnotatedText } from './text';

import fallingLyrics from '../resources/lyrics/falling-in-love.json';
import gurengeLyrics from '../resources/lyrics/gurenge-lisa.json';
import yoruNiKakeruLyrics from '../resources/lyrics/yoru-ni-kakeru.json';
import pretenderLyrics from '../resources/lyrics/pretender.json';

import gurengeTrans from '../resources/lyrics/gurenge-lisa-translation.json';
import yoruNiKakeruTrans from '../resources/lyrics/yoru-ni-kakeru-translation.json';
import pretenderTrans from '../resources/lyrics/pretender-translation.json';

export type Lyrics = { times?: Milliseconds[], lyrics: LyricsText, translation?: LyricsText };
export type LyricsText = LyricsLine[];
export type LyricsLine = AnnotatedText[];

const mergeLyricsAndTranslation = (lyrics: Lyrics, translation?: { translation: LyricsText }) => {
    if (!translation) {
        return lyrics;
    }

    return {
        ...lyrics,
        translation: translation.translation,
    };
};

export const GURENGE_LYRICS = mergeLyricsAndTranslation(gurengeLyrics, gurengeTrans);
export const YORU_LYRICS = mergeLyricsAndTranslation(yoruNiKakeruLyrics, yoruNiKakeruTrans);
export const PRETENDER_LYRICS = mergeLyricsAndTranslation(pretenderLyrics, pretenderTrans);
export const FALLING_LYRICS = mergeLyricsAndTranslation(fallingLyrics);

// const YORU_CHORDS_RAW = `<ruby><rb>沈</rb><rp>(</rp><rt>しず</rt><rp>)</rp></ruby><span class="chord">Ab</span>むよう<span class="chord">Bb</span>に<ruby><rb>溶</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>けて<span class="chord">Gm</span>ゆくよう<span class="chord">Cm</span>に  <span class="chord">Fm7</span> <span class="chord">G7</span> <span class="chord">Cm</span> <span class="chord">Bb</span> <span class="chord">Eb</span>  
// <ruby><rb>二</rb><rp>(</rp><rt>ふた</rt><rp>)</rp></ruby><span class="chord">Ab</span><ruby><rb>人</rb><rp>(</rp><rt>り</rt><rp>)</rp></ruby>だけ<span class="chord">Bb</span>の<ruby><rb>空</rb><rp>(</rp><rt>そら</rt><rp>)</rp></ruby>が<span class="chord">Gm</span><ruby><rb>広</rb><rp>(</rp><rt>ひろ</rt><rp>)</rp></ruby>がる<ruby><rb>夜</rb><rp>(</rp><rt>よる</rt><rp>)</rp></ruby><span class="chord">Cm</span>に  
// 「<span class="chord">Ab</span>さよなら」<span class="chord">Gm</span>だけだっ<span class="chord">Cm</span>た  
// そ<span class="chord">Bb</span>の <span class="chord">Eb</span><ruby><rb>一言</rb><rp>(</rp><rt>ひとこと</rt><rp>)</rp></ruby><span class="chord">Ab</span>で<ruby><rb>全</rb><rp>(</rp><rt>すべ</rt><rp>)</rp></ruby><span class="chord">Gm</span>てが<ruby><rb>分</rb><rp>(</rp><rt>わ</rt><rp>)</rp></ruby>かっ<span class="chord">Cm</span>た  
// <ruby><rb>日</rb><rp>(</rp><rt>ひ</rt><rp>)</rp></ruby><span class="chord">Bb</span>が <span class="chord">Eb</span><ruby><rb>沈</rb><rp>(</rp><rt>しず</rt><rp>)</rp></ruby>み<span class="chord">Ab</span><ruby><rb>出</rb><rp>(</rp><rt>だ</rt><rp>)</rp></ruby>した<span class="chord">Bb</span><ruby><rb>空</rb><rp>(</rp><rt>そら</rt><rp>)</rp></ruby>と<span class="chord">Gm</span><ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>の<ruby><rb>姿</rb><rp>(</rp><rt>すがた</rt><rp>)</rp></ruby><span class="chord">Cm</span>  
// フェン<span class="chord">Ab</span>ス<ruby><rb>越</rb><rp>(</rp><rt>ご</rt><rp>)</rp></ruby>しに<span class="chord">Gm</span> <ruby><rb>重</rb><rp>(</rp><rt>かさ</rt><rp>)</rp></ruby>なってい<span class="chord">Cm</span>た  <span class="chord">Csus4</span>   <span class="chord">C</span>   
// <span class="chord">Ab</span><ruby><rb>初</rb><rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>めて<ruby><rb>会</rb><rp>(</rp><rt>あ</rt><rp>)</rp></ruby>っ<span class="chord">Gm</span>た<ruby><rb>日</rb><rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>か<span class="chord">Cm</span>ら  
// <span class="chord">Bb</span><ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby>の <span class="chord">Eb</span><ruby><rb>心</rb><rp>(</rp><rt>こころ</rt><rp>)</rp></ruby><span class="chord">Ab</span>の<ruby><rb>全</rb><rp>(</rp><rt>すべ</rt><rp>)</rp></ruby><span class="chord">Gm</span>てを<ruby><rb>奪</rb><rp>(</rp><rt>うば</rt><rp>)</rp></ruby>っ<span class="chord">Cm</span>た  
// ど<span class="chord">Bb</span>こか<span class="chord">Eb</span><ruby><rb>儚</rb><rp>(</rp><rt>はかな</rt><rp>)</rp></ruby><span class="chord">Ab</span>い<ruby><rb>空</rb><rp>(</rp><rt>くう</rt><rp>)</rp></ruby><span class="chord">Bb</span><ruby><rb>気</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby>を<ruby><rb>纏</rb><rp>(</rp><rt>まと</rt><rp>)</rp></ruby><span class="chord">Gm</span>う<ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby><span class="chord">Cm</span>は  
// <ruby><rb>寂</rb><rp>(</rp><rt>さび</rt><rp>)</rp></ruby><span class="chord">Ab</span>しい<ruby><rb>目</rb><rp>(</rp><rt>め</rt><rp>)</rp></ruby><span class="chord">Gm</span>をしてた<span class="chord">Cm</span>んだ    
// いつだって <span class="chord">Ab</span>チックタック<span class="chord">Bb</span>と  
// <ruby><rb>鳴</rb><rp>(</rp><rt>な</rt><rp>)</rp></ruby>る<ruby><rb>世界</rb><rp>(</rp><rt>せかい</rt><rp>)</rp></ruby>で<span class="chord">Gm</span><ruby><rb>何度</rb><rp>(</rp><rt>なんど</rt><rp>)</rp></ruby>だって<span class="chord">Cm</span>さ  
// <ruby><rb>触</rb><rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>れる<ruby><rb>心</rb><rp>(</rp><rt>こころ</rt><rp>)</rp></ruby><span class="chord">Ab</span><ruby><rb>無</rb><rp>(</rp><rt>な</rt><rp>)</rp></ruby>い<ruby><rb>言葉</rb><rp>(</rp><rt>ことば</rt><rp>)</rp></ruby>うる<span class="chord">Gm</span>さい<ruby><rb>声</rb><rp>(</rp><rt>こえ</rt><rp>)</rp></ruby>に  
// <span class="chord">Cm</span><ruby><rb>涙</rb><rp>(</rp><rt>なみだ</rt><rp>)</rp></ruby>が<span class="chord">Bb</span><ruby><rb>零</rb><rp>(</rp><rt>こぼ</rt><rp>)</rp></ruby>れ<span class="chord">Eb</span>そうでも  
// <span class="chord">Ab</span> ありき<span class="chord">Bb</span>たりな<span class="chord">Bdim</span><ruby><rb>喜</rb><rp>(</rp><rt>よろこ</rt><rp>)</rp></ruby>び<span class="chord">Cm</span>きっと<ruby><rb>二</rb><rp>(</rp><rt>ふた</rt><rp>)</rp></ruby><span class="chord">Ab</span><ruby><rb>人</rb><rp>(</rp><rt>り</rt><rp>)</rp></ruby>なら<ruby><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby>つけられ<span class="chord">G7</span>る   
// <ruby><rb>騒</rb><rp>(</rp><rt>さわ</rt><rp>)</rp></ruby>が<span class="chord">Ab</span>しい<ruby><rb>日々</rb><rp>(</rp><rt>ひび</rt><rp>)</rp></ruby><span class="chord">Bb</span>に<ruby><rb>笑</rb><rp>(</rp><rt>わら</rt><rp>)</rp></ruby>え<span class="chord">Gm</span>ない<ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby><span class="chord">Cm</span>に  
// <ruby><rb>思</rb><rp>(</rp><rt>おも</rt><rp>)</rp></ruby><span class="chord">Ab</span>い<ruby><rb>付</rb><rp>(</rp><rt>つ</rt><rp>)</rp></ruby>く<span class="chord">Gm</span><ruby><rb>限</rb><rp>(</rp><rt>かぎ</rt><rp>)</rp></ruby>り<ruby><rb>眩</rb><rp>(</rp><rt>まぶ</rt><rp>)</rp></ruby><span class="chord">Cm</span>しい<ruby><rb>明日</rb><rp>(</rp><rt>あす</rt><rp>)</rp></ruby><span class="chord">Bb</span>を  
// <span class="chord">Eb</span><ruby><rb>明</rb><rp>(</rp><rt>あ</rt><rp>)</rp></ruby>け<span class="chord">Ab</span>ない<ruby><rb>夜</rb><rp>(</rp><rt>よる</rt><rp>)</rp></ruby><span class="chord">Bb</span>に<ruby><rb>落</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby>ちて<span class="chord">Gm</span>ゆく<ruby><rb>前</rb><rp>(</rp><rt>まえ</rt><rp>)</rp></ruby><span class="chord">Cm</span>に  
// <ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby><span class="chord">Ab</span>の<ruby><rb>手</rb><rp>(</rp><rt>て</rt><rp>)</rp></ruby>を<ruby><rb>掴</rb><rp>(</rp><rt>つか</rt><rp>)</rp></ruby>んでほ<span class="chord">G7</span>ら   
// <ruby><rb>忘</rb><rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れてし<span class="chord">Ab</span>まいたく<span class="chord">Bb</span>て<ruby><rb>閉</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>じ<ruby><rb>込</rb><rp>(</rp><rt>こ</rt><rp>)</rp></ruby><span class="chord">Gm</span>めた<ruby><rb>日々</rb><rp>(</rp><rt>ひび</rt><rp>)</rp></ruby><span class="chord">Cm</span>も  
// <ruby><rb>抱</rb><rp>(</rp><rt>だ</rt><rp>)</rp></ruby>き<span class="chord">Ab</span>しめた<span class="chord">Gm</span><ruby><rb>温</rb><rp>(</rp><rt>ぬく</rt><rp>)</rp></ruby>もりで<span class="chord">Cm</span><ruby><rb>溶</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>かすから<span class="chord">Bb</span>  
// <span class="chord">Eb</span><ruby><rb>怖</rb><rp>(</rp><rt>こわ</rt><rp>)</rp></ruby><span class="chord">Ab</span>くない<span class="chord">Bb</span>よいつか<span class="chord">Bdim</span><ruby><rb>日</rb><rp>(</rp><rt>ひ</rt><rp>)</rp></ruby>が<ruby><rb>昇</rb><rp>(</rp><rt>のぼ</rt><rp>)</rp></ruby><span class="chord">Cm</span>るまで<span class="chord">Ab</span> <ruby><rb>二人</rb><rp>(</rp><rt>ふたり</rt><rp>)</rp></ruby><span class="chord">Bb</span>でいよう   
// <span class="chord">Ab</span><ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>に<span class="chord">Gm</span>しか<ruby><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby><span class="chord">Cm</span>えない  
// <span class="chord">Eb</span><ruby><rb>何</rb><rp>(</rp><rt>なに</rt><rp>)</rp></ruby>かを<ruby><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby><span class="chord">Ab</span>つめる<span class="chord">Gm</span><ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>が<span class="chord">Cm</span><ruby><rb>嫌</rb><rp>(</rp><rt>きら</rt><rp>)</rp></ruby>いだ  
// <ruby><rb>見</rb><rp>(</rp><rt>み</rt><rp>)</rp></ruby><span class="chord">Bb</span><ruby><rb>惚</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>れ<span class="chord">Eb</span>てい<span class="chord">Ab</span>るかのよ<span class="chord">Bb</span>うな<span class="chord">Bdim</span><ruby><rb>恋</rb><rp>(</rp><rt>こい</rt><rp>)</rp></ruby>するよう<span class="chord">Cm</span>な  
// そん<span class="chord">Ab</span>な<ruby><rb>顔</rb><rp>(</rp><rt>かお</rt><rp>)</rp></ruby>が<span class="chord">Gm</span><ruby><rb>嫌</rb><rp>(</rp><rt>きら</rt><rp>)</rp></ruby>い<span class="chord">Cm</span>だ  <span class="chord">Csus4</span>   <span class="chord">C</span>   
// <ruby><rb>信</rb><rp>(</rp><rt>しん</rt><rp>)</rp></ruby>じてい<span class="chord">Ab</span>たいけど<ruby><rb>信</rb><rp>(</rp><rt>しん</rt><rp>)</rp></ruby>じれ<span class="chord">Gm</span>ないこと  
// そんなの<span class="chord">Cm</span>どうしたってきっと  
// これから<span class="chord">Ab</span>だって いくつも<span class="chord">Gm</span>あって  
// そのたんび<span class="chord">Cm</span><ruby><rb>怒</rb><rp>(</rp><rt>おこ</rt><rp>)</rp></ruby>って<ruby><rb>泣</rb><rp>(</rp><rt>な</rt><rp>)</rp></ruby>いていくの  
// それでも<span class="chord">Ab</span>きっといつかは<span class="chord">Bb</span>きっと<ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby>らは<span class="chord">Gm</span>きっと  
// <ruby><rb>分</rb><rp>(</rp><rt>わ</rt><rp>)</rp></ruby>か<span class="chord">Cm</span>り<ruby><rb>合</rb><rp>(</rp><rt>あ</rt><rp>)</rp></ruby>える<span class="chord">Ab</span>さ<ruby><rb>信</rb><rp>(</rp><rt>しん</rt><rp>)</rp></ruby><span class="chord">Bb</span>じてるよ  
// <span class="chord">Ab</span>もう<ruby><rb>嫌</rb><rp>(</rp><rt>いや</rt><rp>)</rp></ruby>だって<span class="chord">Gm</span><ruby><rb>疲</rb><rp>(</rp><rt>つか</rt><rp>)</rp></ruby>れたんだっ<span class="chord">Cm</span>て  
// がむ<span class="chord">Eb</span>しゃらに<ruby><rb>差</rb><rp>(</rp><rt>さ</rt><rp>)</rp></ruby><span class="chord">Ab</span>し<ruby><rb>伸</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>べた<span class="chord">Bb</span><ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby>の<ruby><rb>手</rb><rp>(</rp><rt>て</rt><rp>)</rp></ruby><span class="chord">Cm</span>を
// <ruby><rb>振</rb><rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>り<span class="chord">Bb</span><ruby><rb>払</rb><rp>(</rp><rt>はら</rt><rp>)</rp></ruby>う<span class="chord">Eb</span><ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>  
// <span class="chord">Ab</span>もう<ruby><rb>嫌</rb><rp>(</rp><rt>いや</rt><rp>)</rp></ruby>だって<span class="chord">Bb</span><ruby><rb>疲</rb><rp>(</rp><rt>つか</rt><rp>)</rp></ruby>れたよ<span class="chord">Bdim</span>なんて  
// <ruby><rb>本</rb><rp>(</rp><rt>ほん</rt><rp>)</rp></ruby><span class="chord">Cm</span><ruby><rb>当</rb><rp>(</rp><rt>とう</rt><rp>)</rp></ruby>は<span class="chord">Ab</span><ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby>も<ruby><rb>言</rb><rp>(</rp><rt>い</rt><rp>)</rp></ruby>い<span class="chord">Gm</span>たいん<span class="chord">Cm</span>だ  <span class="chord">Csus4</span>   <span class="chord">C</span>      
// Ah ほらまた <span class="chord">Ab</span>チックタック <span class="chord">Bb</span>と  
// <ruby><rb>鳴</rb><rp>(</rp><rt>な</rt><rp>)</rp></ruby>る<ruby><rb>世界</rb><rp>(</rp><rt>せかい</rt><rp>)</rp></ruby>で<span class="chord">Gm</span><ruby><rb>何度</rb><rp>(</rp><rt>なんど</rt><rp>)</rp></ruby>だって<span class="chord">Cm</span>さ  
// <ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>の<ruby><rb>為</rb><rp>(</rp><rt>ため</rt><rp>)</rp></ruby>に<span class="chord">Ab</span><ruby><rb>用意</rb><rp>(</rp><rt>ようい</rt><rp>)</rp></ruby>した<ruby><rb>言葉</rb><rp>(</rp><rt>ことば</rt><rp>)</rp></ruby><span class="chord">Gm</span>どれも<ruby><rb>届</rb><rp>(</rp><rt>とど</rt><rp>)</rp></ruby><span class="chord">Cm</span>かない  
// 「<ruby><rb>終</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby><span class="chord">Bb</span>わり<span class="chord">Eb</span>にし<span class="chord">Ab</span>たい」 だなんて<span class="chord">Bb</span>さ  
// <ruby><rb>釣</rb><rp>(</rp><rt>つ</rt><rp>)</rp></ruby>られて<ruby><rb>言葉</rb><rp>(</rp><rt>ことば</rt><rp>)</rp></ruby><span class="chord">Bdim</span>にした<span class="chord">Cm</span><ruby><rb>時</rb><rp>(</rp><rt>とき</rt><rp>)</rp></ruby>  
// <ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby><span class="chord">Ab</span>は<ruby><rb>初</rb><rp>(</rp><rt>はじ</rt><rp>)</rp></ruby>めて<ruby><rb>笑</rb><rp>(</rp><rt>わら</rt><rp>)</rp></ruby>っ<span class="chord">Gm</span>た   
// <ruby><rb>騒</rb><rp>(</rp><rt>さわ</rt><rp>)</rp></ruby>が<span class="chord">G</span>しい<ruby><rb>日々</rb><rp>(</rp><rt>ひび</rt><rp>)</rp></ruby><span class="chord">A</span>に<ruby><rb>笑</rb><rp>(</rp><rt>わら</rt><rp>)</rp></ruby>え<span class="chord">F#m</span>なくなってい<span class="chord">Bm</span>た  
// <ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby><span class="chord">G</span>の<ruby><rb>目</rb><rp>(</rp><rt>め</rt><rp>)</rp></ruby>に<span class="chord">F#m</span><ruby><rb>映</rb><rp>(</rp><rt>うつ</rt><rp>)</rp></ruby>る<ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby><span class="chord">Bm</span>は<ruby><rb>綺</rb><rp>(</rp><rt>き</rt><rp>)</rp></ruby><span class="chord">A</span><ruby><rb>麗</rb><rp>(</rp><rt>れい</rt><rp>)</rp></ruby>だ  
// <span class="chord">E</span><ruby><rb>明</rb><rp>(</rp><rt>あ</rt><rp>)</rp></ruby>け<span class="chord">G</span>ない<ruby><rb>夜</rb><rp>(</rp><rt>よる</rt><rp>)</rp></ruby><span class="chord">A</span>に<ruby><rb>零</rb><rp>(</rp><rt>こぼ</rt><rp>)</rp></ruby>れ<span class="chord">F#dim</span>た<ruby><rb>涙</rb><rp>(</rp><rt>なみだ</rt><rp>)</rp></ruby> &ensp; <span class="chord">Bm</span>も  
// <ruby><rb>君</rb><rp>(</rp><rt>みき</rt><rp>)</rp></ruby><span class="chord">G</span>の<ruby><rb>笑顔</rb><rp>(</rp><rt>えがお</rt><rp>)</rp></ruby>に<ruby><rb>溶</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>けてい<span class="chord">F#7</span>く <span class="chord">G#m</span>   <span class="chord">A</span>   
// <ruby><rb>変</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>わら<span class="chord">Bb</span>ない<ruby><rb>日々</rb><rp>(</rp><rt>ひび</rt><rp>)</rp></ruby><span class="chord">C</span>に<ruby><rb>泣</rb><rp>(</rp><rt>な</rt><rp>)</rp></ruby>いて<span class="chord">Am</span>いた<ruby><rb>僕</rb><rp>(</rp><rt>ぼく</rt><rp>)</rp></ruby><span class="chord">Dm</span>を  
// <ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby><span class="chord">Bb</span>は<ruby><rb>優</rb><rp>(</rp><rt>やさ</rt><rp>)</rp></ruby>し<span class="chord">Am</span>く<ruby><rb>終</rb><rp>(</rp><rt>お</rt><rp>)</rp></ruby>わり<span class="chord">Dm</span>へと<span class="chord">C</span><ruby><rb>誘</rb><rp>(</rp><rt>さそ</rt><rp>)</rp></ruby>う  
// <span class="chord">F</span><ruby><rb>沈</rb><rp>(</rp><rt>しず</rt><rp>)</rp></ruby><span class="chord">Bb</span>むように<ruby><rb>溶</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>けて<span class="chord">Am</span>ゆくよう<span class="chord">Dm</span>に  
// <ruby><rb>染</rb><rp>(</rp><rt>し</rt><rp>)</rp></ruby>み<span class="chord">Bb</span><ruby><rb>付</rb><rp>(</rp><rt>つ</rt><rp>)</rp></ruby>いた<ruby><rb>霧</rb><rp>(</rp><rt>きり</rt><rp>)</rp></ruby>が<ruby><rb>晴</rb><rp>(</rp><rt>は</rt><rp>)</rp></ruby>れ<span class="chord">A7</span>る   
// <ruby><rb>忘</rb><rp>(</rp><rt>わす</rt><rp>)</rp></ruby>れて<span class="chord">Bb</span>しまいたく<span class="chord">C</span>て<ruby><rb>閉</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby>じ<ruby><rb>込</rb><rp>(</rp><rt>こ</rt><rp>)</rp></ruby><span class="chord">Am</span>めた<ruby><rb>日々</rb><rp>(</rp><rt>ひび</rt><rp>)</rp></ruby><span class="chord">Dm</span>に  
// <ruby><rb>差</rb><rp>(</rp><rt>さ</rt><rp>)</rp></ruby>し<span class="chord">Bb</span><ruby><rb>伸</rb><rp>(</rp><rt>の</rt><rp>)</rp></ruby>べてく<span class="chord">Am</span>れた<ruby><rb>君</rb><rp>(</rp><rt>きみ</rt><rp>)</rp></ruby>の<span class="chord">Dm</span><ruby><rb>手</rb><rp>(</rp><rt>て</rt><rp>)</rp></ruby>を<ruby><rb>取</rb><rp>(</rp><rt>と</rt><rp>)</rp></ruby><span class="chord">C</span>る  
// <span class="chord">F</span><ruby><rb>涼</rb><rp>(</rp><rt>すず</rt><rp>)</rp></ruby><span class="chord">Bb</span>しい<ruby><rb>風</rb><rp>(</rp><rt>かぜ</rt><rp>)</rp></ruby><span class="chord">C</span>が<ruby><rb>空</rb><rp>(</rp><rt>そら</rt><rp>)</rp></ruby>を<span class="chord">C#dim</span><ruby><rb>泳</rb><rp>(</rp><rt>およ</rt><rp>)</rp></ruby>ぐ &ensp; <span class="chord">Dm</span>ように<ruby><rb>今</rb><rp>(</rp><rt>いま</rt><rp>)</rp></ruby><span class="chord">Bb</span> <ruby><rb>吹</rb><rp>(</rp><rt>ふ</rt><rp>)</rp></ruby>き<ruby><rb>抜</rb><rp>(</rp><rt>ぬ</rt><rp>)</rp></ruby><span class="chord">C</span>けてい<span class="chord">F</span>く  
// <ruby><rb>繋</rb><rp>(</rp><rt>つな</rt><rp>)</rp></ruby>いだ<ruby><rb>手</rb><rp>(</rp><rt>て</rt><rp>)</rp></ruby><span class="chord">Bb</span>を<ruby><rb>離</rb><rp>(</rp><rt>はな</rt><rp>)</rp></ruby>さ<span class="chord">C</span>ないで<span class="chord">F</span>よ  
// <ruby><rb>二</rb><rp>(</rp><rt>ふた</rt><rp>)</rp></ruby><span class="chord">C</span><ruby><rb>人</rb><rp>(</rp><rt>り</rt><rp>)</rp></ruby>いま<span class="chord">Bb</span><ruby><rb>夜</rb><rp>(</rp><rt>よる</rt><rp>)</rp></ruby>に<ruby><rb>駆</rb><rp>(</rp><rt>か</rt><rp>)</rp></ruby>け<span class="chord">C</span><ruby><rb>出</rb><rp>(</rp><rt>だ</rt><rp>)</rp></ruby>していく  `;

// (() => {
//     console.log(yoruNiKakeruTrans.translation.length);

//     const chordsRaw1 = YORU_CHORDS_RAW.split('\n');
//     const chordsRaw2 = chordsRaw1.map(line => {
//         return line.replace(/<ruby>([^<]*)<\/ruby>/g, '{"text":"$1"}');
//     });
//     console.log(chordsRaw2);

// })();
