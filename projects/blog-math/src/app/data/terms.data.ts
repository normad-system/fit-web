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

  // ── 図形（追加） ──
  { slug: 'suichoku-nitoubunsen', term: '垂直二等分線', reading: 'すいちょくにとうぶんせん', definition: '線分の中点を通り、その線分に垂直な直線。2点から等距離にある点の集合。', category: '図形' },
  { slug: 'seishi-mentai', term: '正多面体', reading: 'せいためんたい', definition: 'すべての面が合同な正多角形で、各頂点に集まる面の数が等しい立体。正四面体・正六面体・正八面体・正十二面体・正二十面体の5種類のみ。', example: 'サイコロ＝正六面体', category: '図形' },
  { slug: 'enshukaku', term: '円周角', reading: 'えんしゅうかく', definition: '円周上の1点と弧の両端を結んでできる角。同じ弧に対する円周角は中心角の半分に等しい。', example: '半円の弧に対する円周角 = 90°', category: '図形' },
  { slug: 'souji-hi', term: '相似比', reading: 'そうじひ', definition: '相似な図形の対応する辺の長さの比。相似比がm:nのとき、面積比はm²:n²、体積比はm³:n³。', example: '相似比2:3→面積比4:9', category: '図形' },
  { slug: 'goshin', term: '五心', reading: 'ごしん', definition: '三角形に関する5つの中心（重心・外心・内心・垂心・傍心）の総称。', category: '図形' },
  { slug: 'houbekino-teiri', term: '方べきの定理', reading: 'ほうべきのていり', definition: '円の外部または内部の点から引いた2本の直線（弦や接線）について、PA·PB = PC·PD が成り立つ定理。', category: '図形' },

  // ── 数と式（追加） ──
  { slug: 'renritsu', term: '連立方程式', reading: 'れんりつほうていしき', definition: '複数の方程式を同時に満たす解を求める問題。加減法と代入法で解く。', example: '2x+y=7, x−y=2 → x=3, y=1', category: '式と方程式' },
  { slug: 'jouhou-koushiki', term: '乗法公式', reading: 'じょうほうこうしき', definition: '展開のための公式。(a+b)²=a²+2ab+b²、(a+b)(a−b)=a²−b²など。', category: '式と方程式' },
  { slug: 'taigu', term: '対偶', reading: 'たいぐう', definition: '命題「p⇒q」に対して「¬q⇒¬p」のこと。もとの命題と対偶は必ず真偽が一致する。', category: '式と方程式' },

  // ── 関数（追加） ──
  { slug: 'kodobou', term: '弧度法', reading: 'こどほう', definition: '角度をラジアン（rad）という単位で表す方法。半径rの円弧の長さがrになる角が1ラジアン。180°= π rad。', example: '90° = π/2 rad', category: '関数' },
  { slug: 'shisuu-kansuu', term: '指数関数', reading: 'しすうかんすう', definition: 'y = aˣ の形で表される関数（a > 0, a ≠ 1）。底aが1より大きければ単調増加。', example: 'y = 2ˣ', category: '関数' },
  { slug: 'taisuu-kansuu', term: '対数関数', reading: 'たいすうかんすう', definition: 'y = log_a x の形で表される関数。指数関数の逆関数。', example: 'y = log₂ x', category: '関数' },
  { slug: 'kahouteiiri', term: '加法定理', reading: 'かほうていり', definition: '三角関数の角度の和・差に関する公式。sin(α±β), cos(α±β), tan(α±β) を展開する。', example: 'sin(α+β)=sinα cosβ+cosα sinβ', category: '関数' },

  // ── ベクトル ──
  { slug: 'bekutoru', term: 'ベクトル', reading: 'べくとる', definition: '大きさと向きを持つ量。矢印で表し、成分表示では(a₁, a₂)のように書く。', example: '→a=(3,2)', category: '図形' },
  { slug: 'naiseki', term: '内積', reading: 'ないせき', definition: '2つのベクトルの演算。→a·→b=|→a||→b|cosθ で定義される。成分ではa₁b₁+a₂b₂。内積が0のとき2ベクトルは垂直。', example: '(3,2)·(1,4) = 11', category: '図形' },

  // ── 解析（追加） ──
  { slug: 'chikan-sekibun', term: '置換積分', reading: 'ちかんせきぶん', definition: '変数を別の変数に置き換えて積分を簡単にする方法。合成関数の微分の逆。', example: '∫2x cos(x²)dx → t=x² と置換', category: '解析' },
  { slug: 'bubun-sekibun', term: '部分積分', reading: 'ぶぶんせきぶん', definition: '積の微分公式を逆に利用する積分法。∫f g\'dx = fg − ∫f\'g dx。', example: '∫x eˣ dx = (x−1)eˣ + C', category: '解析' },

  // ── 二次曲線 ──
  { slug: 'daen', term: '楕円', reading: 'だえん', definition: '2つの焦点からの距離の和が一定となる点の軌跡。x²/a²+y²/b²=1 で表す。', example: '惑星の軌道は楕円', category: '図形' },
  { slug: 'soukyokusen', term: '双曲線', reading: 'そうきょくせん', definition: '2つの焦点からの距離の差が一定となる点の軌跡。x²/a²−y²/b²=1 で表し、漸近線を持つ。', category: '図形' },

  // ── 確率・統計（追加） ──
  { slug: 'bunsan', term: '分散', reading: 'ぶんさん', definition: 'データの散らばり具合を表す指標。各データの偏差の2乗の平均。', example: 'σ² = (1/n)Σ(xᵢ − x̄)²', category: '確率・統計' },
  { slug: 'hyoujun-hensa', term: '標準偏差', reading: 'ひょうじゅんへんさ', definition: '分散の正の平方根。データが平均からどの程度ばらついているかを元の単位で表す。', example: 'σ = √分散', category: '確率・統計' },
  { slug: 'soukan-keisuu', term: '相関係数', reading: 'そうかんけいすう', definition: '2つの変数間の直線的関係の強さを−1から1で表す指標。', example: 'r ≈ 1（強い正の相関）', category: '確率・統計' },
  { slug: 'chuuouchi', term: '中央値', reading: 'ちゅうおうち', definition: 'データを大きさの順に並べたとき真ん中にくる値。メジアンとも呼ぶ。', example: '1,3,5,7,9 の中央値は5', category: '確率・統計' },
  { slug: 'saibinchi', term: '最頻値', reading: 'さいひんち', definition: 'データの中で最も多く出現する値。モードとも呼ぶ。', example: '1,2,2,3,5 の最頻値は2', category: '確率・統計' },
];
