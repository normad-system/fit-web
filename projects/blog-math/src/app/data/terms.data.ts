import { MathTerm } from '../models/math.model';

export const TERMS: MathTerm[] = [
  // ── 数と計算 ──
  { slug: 'shizen-suu', term: '自然数', reading: 'しぜんすう', definition: '1, 2, 3, 4, … のように、ものを数えるときに使う正の整数のこと。0は含まないのが一般的です。', example: '1, 2, 3, 100, 999 など', category: '数と計算' },
  { slug: 'seisuu', term: '整数', reading: 'せいすう', definition: '…, −3, −2, −1, 0, 1, 2, 3, … のように、小数や分数のない数のこと。正の整数・0・負の整数をまとめて整数と呼びます。', category: '数と計算' },
  { slug: 'guusuu-kisuu', term: '偶数と奇数', reading: 'ぐうすうときすう', definition: '2で割り切れる整数が偶数、割り切れない整数が奇数です。', example: '偶数：2, 4, 6, 8 / 奇数：1, 3, 5, 7', category: '数と計算' },
  { slug: 'sosuu', term: '素数', reading: 'そすう', definition: '1とその数自身でしか割り切れない、1より大きい自然数。', example: '2, 3, 5, 7, 11, 13, 17, 19, 23, …', category: '数と計算' },
  { slug: 'yakusuu', term: '約数', reading: 'やくすう', definition: 'ある整数を割り切ることができる整数のこと。', example: '12の約数は 1, 2, 3, 4, 6, 12', category: '数と計算' },
  { slug: 'baisuu', term: '倍数', reading: 'ばいすう', definition: 'ある整数に自然数をかけてできる数のこと。', example: '3の倍数は 3, 6, 9, 12, 15, …', category: '数と計算' },
  { slug: 'bunsuu', term: '分数', reading: 'ぶんすう', definition: '全体をいくつかに等しく分けたうちのいくつ分かを表す数。分母（下）と分子（上）で構成されます。', example: '½, ⅓, ¾', category: '数と計算' },
  { slug: 'shousuu', term: '小数', reading: 'しょうすう', definition: '1より小さい端数（はすう）を小数点を使って表した数。', example: '0.5, 3.14, 0.001', category: '数と計算' },
  { slug: 'zettaichi', term: '絶対値', reading: 'ぜったいち', definition: '数直線上で0からの距離。マイナスの符号を取り除いた値。', example: '|−5| = 5, |3| = 3', category: '数と計算' },
  { slug: 'ruijou', term: '累乗', reading: 'るいじょう', definition: '同じ数を何回もかけ合わせること。aのn乗（aⁿ）と書きます。', example: '2³ = 2 × 2 × 2 = 8', category: '数と計算' },
  { slug: 'heihoukon', term: '平方根', reading: 'へいほうこん', definition: '2乗するとaになる数のこと。√a と書きます。', example: '√9 = 3, √2 ≈ 1.414', category: '数と計算' },

  // ── 式と方程式 ──
  { slug: 'houteishiki', term: '方程式', reading: 'ほうていしき', definition: '文字を含む等式で、その文字にある特定の値を代入したときに成り立つ式。', example: '2x + 3 = 7 → x = 2', category: '式と方程式' },
  { slug: 'fuutoushiki', term: '不等式', reading: 'ふとうしき', definition: '大小関係を表す式。>, <, ≧, ≦ を使います。', example: '2x + 1 > 5 → x > 2', category: '式と方程式' },
  { slug: 'insuu-bunkai', term: '因数分解', reading: 'いんすうぶんかい', definition: '多項式を積（かけ算の形）に分解すること。展開の逆の操作。', example: 'x² + 5x + 6 = (x + 2)(x + 3)', category: '式と方程式' },
  { slug: 'tenkai', term: '展開', reading: 'てんかい', definition: 'かけ算の式（積の形）を足し算・引き算の式に変形すること。', example: '(x + 2)(x + 3) = x² + 5x + 6', category: '式と方程式' },
  { slug: 'ikou', term: '移項', reading: 'いこう', definition: '等式の片方の辺から他方の辺へ項を移すこと。移項すると符号が変わります。', example: 'x + 3 = 7 → x = 7 − 3 = 4', category: '式と方程式' },

  // ── 関数 ──
  { slug: 'kansuu', term: '関数', reading: 'かんすう', definition: 'xの値が決まるとyの値がただ1つ決まる関係。y = f(x) と書きます。', category: '関数' },
  { slug: 'ichiji-kansuu', term: '一次関数', reading: 'いちじかんすう', definition: 'y = ax + b の形で表される関数。グラフは直線になります。', example: 'y = 2x + 3', category: '関数', relatedTerms: ['傾き', '切片'] },
  { slug: 'niji-kansuu', term: '二次関数', reading: 'にじかんすう', definition: 'y = ax² + bx + c の形で表される関数。グラフは放物線になります。', example: 'y = x² − 4x + 3', category: '関数' },
  { slug: 'katamuki', term: '傾き', reading: 'かたむき', definition: '直線のグラフの急さを表す数。一次関数 y=ax+b のaにあたります。', example: 'y = 3x + 1 の傾きは3', category: '関数' },
  { slug: 'seppen', term: '切片', reading: 'せっぺん', definition: 'グラフが軸と交わる点の座標。y切片はグラフがy軸を横切る点。', example: 'y = 2x + 5 のy切片は5', category: '関数' },

  // ── 図形 ──
  { slug: 'taihen', term: '対辺', reading: 'たいへん', definition: 'ある頂点の向かい側にある辺のこと。三角比では注目する角の向かい側の辺。', category: '図形' },
  { slug: 'shahenn', term: '斜辺', reading: 'しゃへん', definition: '直角三角形で直角の向かい側にある辺。最も長い辺。', category: '図形' },
  { slug: 'goudou', term: '合同', reading: 'ごうどう', definition: '形も大きさも同じ図形のこと。記号≡を使います。', example: '△ABC ≡ △DEF', category: '図形' },
  { slug: 'souji', term: '相似', reading: 'そうじ', definition: '形は同じで大きさが異なる図形。記号∽を使います。対応する辺の比が等しい。', example: '△ABC ∽ △DEF', category: '図形' },
  { slug: 'enshuu', term: '円周', reading: 'えんしゅう', definition: '円のまわりの長さ。円周＝直径×π（パイ）。', example: '半径5cmの円周 = 2 × π × 5 = 10π ≈ 31.4cm', category: '図形' },

  // ── 解析 ──
  { slug: 'bibun', term: '微分', reading: 'びぶん', definition: '関数の瞬間的な変化の割合を求める操作。接線の傾きを求めることに相当します。', example: 'f(x)=x² → f\'(x)=2x', category: '解析' },
  { slug: 'sekibun', term: '積分', reading: 'せきぶん', definition: '微分の逆演算。関数のグラフとx軸の間の面積を求めることに利用されます。', example: '∫x²dx = x³/3 + C', category: '解析' },
  { slug: 'kyokugen', term: '極限', reading: 'きょくげん', definition: '変数がある値に限りなく近づくとき、関数値が近づく値のこと。', example: 'lim(x→0) sinx/x = 1', category: '解析' },
  { slug: 'doukansuu', term: '導関数', reading: 'どうかんすう', definition: 'もとの関数を微分して得られる関数。f\'(x) や dy/dx と書きます。', category: '解析' },

  // ── 確率・統計 ──
  { slug: 'kakuritsu', term: '確率', reading: 'かくりつ', definition: 'ある事象が起こりやすさを0から1の数で表したもの。', example: 'コインの表が出る確率 = 1/2', category: '確率・統計' },
  { slug: 'junretsu', term: '順列', reading: 'じゅんれつ', definition: 'n個の中からr個を選んで一列に並べる方法の数。ₙPᵣ', example: '₅P₃ = 60', category: '確率・統計' },
  { slug: 'kumiawase', term: '組合せ', reading: 'くみあわせ', definition: 'n個の中からr個を選ぶ方法の数（順番は考えない）。ₙCᵣ', example: '₅C₃ = 10', category: '確率・統計' },
  { slug: 'heikin', term: '平均値', reading: 'へいきんち', definition: 'データの合計を個数で割った値。', example: '(70+80+90)/3 = 80', category: '確率・統計' },
];
