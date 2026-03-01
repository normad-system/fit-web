import { MathTopic } from '../models/math.model';

export const TOPICS: MathTopic[] = [
  // ────────── 小学1年生 ──────────
  {
    slug: 'counting-numbers',
    title: 'かずをかぞえよう',
    grade: 'elementary-1',
    summary: '1から100までの数を覚えて、ものの数をかぞえる練習をしよう！',
    keywords: ['数', 'かぞえる', '1年'],
    order: 1,
    content: `
      <h2>🔢 かずってなあに？</h2>
      <p>わたしたちのまわりには、いろいろな<strong>かず</strong>があります。りんごが3こ、えんぴつが5ほん…。かずを使うと、ものがいくつあるか<strong>はっきり</strong>わかります。</p>

      <h3>1から10までかぞえよう</h3>
      <div class="example-box">
        <p>🍎 → 1（いち）</p>
        <p>🍎🍎 → 2（に）</p>
        <p>🍎🍎🍎 → 3（さん）</p>
        <p>🍎🍎🍎🍎 → 4（し・よん）</p>
        <p>🍎🍎🍎🍎🍎 → 5（ご）</p>
      </div>

      <h3>10より大きいかず</h3>
      <p>10のあとは、<strong>じゅういち（11）</strong>、<strong>じゅうに（12）</strong>…とつづきます。10が「じゅう」で、そこに1、2、3…をたすんですね。</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>おうちにあるものをかぞえてみましょう。おかしの数、くつの数、なんでもOK！毎日かぞえると、かずにつよくなりますよ。</p>
      </div>

      <h3>かずのじゅんばん</h3>
      <p>かずには<strong>じゅんばん</strong>があります。1の次は2、2の次は3。これを<strong>すうちょくせん（数直線）</strong>で見てみよう。</p>
      <div class="example-box">
        <p>← 1 — 2 — 3 — 4 — 5 — 6 — 7 — 8 — 9 — 10 →</p>
        <p>みぎにいくほど、かずは<strong>大きく</strong>なります。</p>
      </div>
    `,
  },
  {
    slug: 'addition-basics',
    title: 'たしざん',
    grade: 'elementary-1',
    summary: 'はじめてのたしざん！あわせていくつになるかな？',
    keywords: ['たしざん', '足し算', '合わせる'],
    order: 2,
    content: `
      <h2>➕ たしざんをしよう！</h2>
      <p>たしざんは、<strong>あわせる</strong>ことです。りんごが2こあって、3こもらったら、あわせて何こ？</p>

      <div class="example-box">
        <p>🍎🍎 ＋ 🍎🍎🍎 ＝ 🍎🍎🍎🍎🍎</p>
        <p><strong>2 ＋ 3 ＝ 5</strong></p>
      </div>

      <h3>たしざんのきまり</h3>
      <ul>
        <li>＋（たす）のきごうを使います</li>
        <li>＝（は）のあとにこたえを書きます</li>
        <li><strong>たされるかず ＋ たすかず ＝ こたえ</strong></li>
      </ul>

      <h3>くりあがりのたしざん</h3>
      <p>7 ＋ 5 のように、こたえが10をこえるたしざんです。</p>
      <div class="example-box">
        <p>7 ＋ 5 = ?</p>
        <p>7にあと3たすと10。5から3つかったので、のこり2。</p>
        <p>だから 7 ＋ 5 ＝ <strong>12</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>ゆびを使ってかぞえてもOK！なれてきたら、あたまの中でできるようになりますよ。</p>
      </div>
    `,
  },
  {
    slug: 'subtraction-basics',
    title: 'ひきざん',
    grade: 'elementary-1',
    summary: 'ひきざんは「のこりはいくつ？」。ちがいをもとめよう。',
    keywords: ['ひきざん', '引き算', 'のこり'],
    order: 3,
    content: `
      <h2>➖ ひきざんをしよう！</h2>
      <p>ひきざんは、<strong>のこりをもとめる</strong>けいさんです。</p>

      <div class="example-box">
        <p>🍎🍎🍎🍎🍎 から 🍎🍎 をたべた → 🍎🍎🍎</p>
        <p><strong>5 − 2 ＝ 3</strong></p>
      </div>

      <h3>ひきざんのつかいかた</h3>
      <ul>
        <li>のこりはいくつ？ → ひきざん</li>
        <li>ちがいはいくつ？ → ひきざん</li>
      </ul>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>「あわせるときはたしざん、へるときはひきざん」と覚えましょう！</p>
      </div>
    `,
  },

  // ────────── 小学2年生 ──────────
  {
    slug: 'multiplication-intro',
    title: 'かけざん（九九）',
    grade: 'elementary-2',
    summary: '九九を覚えて、かけ算マスターになろう！',
    keywords: ['かけ算', '掛け算', '九九'],
    order: 1,
    content: `
      <h2>✖️ かけざんってなあに？</h2>
      <p>おなじ数をなんかいもたすのが<strong>かけ算</strong>です。</p>

      <div class="example-box">
        <p>🍭🍭🍭 が 4ふくろ → 3 × 4 ＝ 12こ</p>
        <p>3 ＋ 3 ＋ 3 ＋ 3 とおなじです。</p>
      </div>

      <h3>🎵 九九をおぼえよう</h3>
      <p>日本では<strong>九九（くく）</strong>という、かけ算の表をおぼえます。リズムにのせてとなえると、すぐにおぼえられますよ！</p>

      <div class="kuku-table">
        <p><strong>2の段：</strong>にいちが2、ににんが4、にさんが6、にしが8、にごじゅう…</p>
        <p><strong>5の段：</strong>ごいちが5、ごにじゅう、ごさんじゅうご…</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>九九は毎日声に出してとなえましょう。お風呂の時間がおすすめです！3週間もすれば完璧にいえるようになりますよ。</p>
      </div>
    `,
  },
  {
    slug: 'clock-and-time',
    title: 'とけいと時間',
    grade: 'elementary-2',
    summary: '時計の読み方と、時間のけいさんを学ぼう。',
    keywords: ['時計', '時間', '何時', '何分'],
    order: 2,
    content: `
      <h2>🕐 とけいをよもう</h2>
      <p>とけいには<strong>みじかいはり</strong>（時）と<strong>ながいはり</strong>（分）があります。</p>

      <div class="example-box">
        <p>🕒 みじかいはりが3、ながいはりが12 → <strong>3時ちょうど</strong></p>
        <p>🕞 みじかいはりが3と4のあいだ、ながいはりが6 → <strong>3時30分（3時半）</strong></p>
      </div>

      <h3>時間のけいさん</h3>
      <p>1時間 ＝ <strong>60分</strong>です。</p>
      <div class="example-box">
        <p>2時から4時まで → <strong>2時間</strong></p>
        <p>3時15分から3時45分まで → <strong>30分</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>おうちの時計を見ながら「今なんじ？」とクイズをだしあうと、楽しくおぼえられます！</p>
      </div>
    `,
  },

  // ────────── 小学3年生 ──────────
  {
    slug: 'division-basics',
    title: 'わり算',
    grade: 'elementary-3',
    summary: 'わり算はわけること！何等分できるかを計算しよう。',
    keywords: ['わり算', '割り算', '等分'],
    order: 1,
    content: `
      <h2>➗ わり算をしよう</h2>
      <p>わり算は、ものを<strong>同じ数ずつわける</strong>計算です。</p>

      <div class="example-box">
        <p>🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪🍪 12個のクッキーを3人でわけると？</p>
        <p><strong>12 ÷ 3 ＝ 4</strong>　→ 1人4個ずつ！</p>
      </div>

      <h3>わり算とかけ算の関係</h3>
      <p>わり算はかけ算の<strong>ぎゃく</strong>です。</p>
      <div class="example-box">
        <p>3 × 4 ＝ 12 ←→ 12 ÷ 3 ＝ 4</p>
        <p>だから、九九を覚えていると、わり算もすぐにできます！</p>
      </div>

      <h3>あまりのあるわり算</h3>
      <div class="example-box">
        <p>13 ÷ 4 ＝ 3 あまり 1</p>
        <p>13個を4人でわけると、1人3個ずつで、1個あまります。</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>「〇は△のいくつぶん？」と考えるとわり算がわかりやすくなります。</p>
      </div>
    `,
  },
  {
    slug: 'fractions-intro',
    title: 'はじめての分数',
    grade: 'elementary-3',
    summary: '分数で「半分」や「4分の1」を表そう。',
    keywords: ['分数', '半分', '4分の1'],
    order: 2,
    content: `
      <h2>🍕 分数ってなあに？</h2>
      <p>ピザを2つに同じ大きさにわけたら、1つ分は<strong>2分の1（½）</strong>です。</p>

      <div class="example-box">
        <p>🍕 → 🍕の半分 ＝ ½</p>
        <p>🍕を4つにわけた1つ ＝ ¼</p>
      </div>

      <h3>分数のしくみ</h3>
      <p>分数は<strong>ぶんぼ（分母）</strong>と<strong>ぶんし（分子）</strong>でできています。</p>
      <div class="example-box">
        <p>³⁄₄ → 分母は4（4つにわけた）、分子は3（そのうち3つ分）</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>折り紙を実際に折って切ってみると、分数がイメージしやすくなります！</p>
      </div>
    `,
  },

  // ────────── 小学4年生 ──────────
  {
    slug: 'large-numbers',
    title: '大きな数（億・兆）',
    grade: 'elementary-4',
    summary: '億、兆という大きな数の世界を探検しよう！',
    keywords: ['億', '兆', '大きな数', '位'],
    order: 1,
    content: `
      <h2>🌟 大きな数のせかい</h2>
      <p>これまでは万（10000）までの数をならいましたね。今度は<strong>もっと大きな数</strong>を学びましょう！</p>

      <h3>数のくらい（位）</h3>
      <div class="example-box">
        <p>一（1）→ 十（10）→ 百（100）→ 千（1000）→ <strong>万（10000）</strong></p>
        <p>→ 十万 → 百万 → 千万 → <strong>億（100000000）</strong></p>
        <p>→ 十億 → 百億 → 千億 → <strong>兆（1000000000000）</strong></p>
      </div>

      <h3>身近な大きい数</h3>
      <ul>
        <li>日本の人口 → 約1億2000万人</li>
        <li>地球から太陽までの距離 → 約1億5000万km</li>
        <li>国の予算 → 約100兆円</li>
      </ul>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>大きな数を読むコツは、右から4けたずつ区切ること。4けたごとに「万」「億」「兆」と変わります。</p>
      </div>
    `,
  },
  {
    slug: 'angles',
    title: '角度',
    grade: 'elementary-4',
    summary: '角度の測り方と、三角形・四角形の角を調べよう。',
    keywords: ['角度', '分度器', '三角形', '四角形'],
    order: 2,
    content: `
      <h2>📐 角度を学ぼう</h2>
      <p>角度はまがり具合の大きさを表す数字で、<strong>°（度）</strong>という単位を使います。</p>

      <div class="example-box">
        <p>まっすぐ → 180°</p>
        <p>直角（かどっこ）→ 90°</p>
        <p>ぐるっと一回り → 360°</p>
      </div>

      <h3>分度器の使い方</h3>
      <ol>
        <li>分度器の中心を角の頂点にあわせる</li>
        <li>0°の線を一方の辺にあわせる</li>
        <li>もう一方の辺が指す目盛りを読む</li>
      </ol>

      <h3>三角形の内角の和</h3>
      <p>どんな三角形でも、3つの角を全部たすと<strong>180°</strong>になります！</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>三角形を紙で作って、3つの角を切りとって並べてみましょう。一直線（180°）になることが確かめられます！</p>
      </div>
    `,
  },

  // ────────── 小学5年生 ──────────
  {
    slug: 'decimal-calc',
    title: '小数のかけ算・わり算',
    grade: 'elementary-5',
    summary: '小数どうしの計算をマスターしよう！',
    keywords: ['小数', 'かけ算', 'わり算', '小数点'],
    order: 1,
    content: `
      <h2>📍 小数のかけ算</h2>
      <p>小数のかけ算は、整数のかけ算と同じようにやって、<strong>あとから小数点を打つ</strong>のがポイントです。</p>

      <div class="example-box">
        <p><strong>2.3 × 1.5 ＝ ?</strong></p>
        <p>① 整数として計算：23 × 15 ＝ 345</p>
        <p>② 小数点以下のけた数を数える：2.3は1けた ＋ 1.5は1けた ＝ 合計2けた</p>
        <p>③ 345の右から2けたに小数点 → <strong>3.45</strong></p>
      </div>

      <h3>小数のわり算</h3>
      <div class="example-box">
        <p><strong>7.2 ÷ 0.3 ＝ ?</strong></p>
        <p>両方を10倍して → 72 ÷ 3 ＝ <strong>24</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>「小数点をなくすと楽になる」がコツです。わる数を整数にすれば、いつもの計算と同じです！</p>
      </div>
    `,
  },
  {
    slug: 'area-volume',
    title: '面積と体積',
    grade: 'elementary-5',
    summary: '平面の面積と、立体の体積をもとめる公式を学ぼう。',
    keywords: ['面積', '体積', '公式', '平方', '立方'],
    order: 2,
    content: `
      <h2>📏 面積の公式</h2>
      <div class="example-box">
        <p><strong>長方形の面積</strong> ＝ たて × よこ</p>
        <p><strong>三角形の面積</strong> ＝ 底辺 × 高さ ÷ 2</p>
        <p><strong>台形の面積</strong> ＝ （上底 ＋ 下底）× 高さ ÷ 2</p>
      </div>

      <h3>体積の公式</h3>
      <div class="example-box">
        <p><strong>直方体の体積</strong> ＝ たて × よこ × 高さ</p>
        <p>例：4cm × 3cm × 5cm ＝ <strong>60cm³</strong></p>
      </div>

      <h3>単位の関係</h3>
      <ul>
        <li>1m² ＝ 10000cm²</li>
        <li>1L ＝ 1000cm³ ＝ 1000mL</li>
      </ul>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>面積はcm²（平方センチメートル）、体積はcm³（立方センチメートル）。「²は2次元＝面」「³は3次元＝立体」と覚えましょう。</p>
      </div>
    `,
  },
  {
    slug: 'ratio-percent',
    title: '割合と百分率',
    grade: 'elementary-5',
    summary: '割合（わりあい）とパーセントの考え方を学ぼう。',
    keywords: ['割合', 'パーセント', '百分率', '歩合'],
    order: 3,
    content: `
      <h2>📊 割合とは？</h2>
      <p>割合とは、全体を1としたときの一部分の大きさのことです。</p>
      <div class="example-box">
        <p>クラス40人のうち、女子は20人。</p>
        <p>割合 ＝ 20 ÷ 40 ＝ <strong>0.5</strong></p>
        <p>百分率（パーセント）＝ 0.5 × 100 ＝ <strong>50%</strong></p>
      </div>

      <h3>割合の3つの表し方</h3>
      <ul>
        <li><strong>小数</strong>：0.5</li>
        <li><strong>百分率（%）</strong>：50%</li>
        <li><strong>歩合</strong>：5割（ごわり）</li>
      </ul>

      <h3>大事な公式</h3>
      <div class="example-box">
        <p><strong>割合 ＝ くらべる量 ÷ もとにする量</strong></p>
        <p><strong>くらべる量 ＝ もとにする量 × 割合</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>野球の打率やセールの割引を見かけたら、「これを小数にするといくつかな？」と考えてみるとグッと身近になりますよ。</p>
      </div>
    `,
  },

  // ────────── 小学6年生 ──────────
  {
    slug: 'speed-distance-time',
    title: '速さ・距離・時間',
    grade: 'elementary-6',
    summary: '速さ＝距離÷時間！3つの関係をマスターしよう。',
    keywords: ['速さ', '距離', '時間', 'みはじ'],
    order: 1,
    content: `
      <h2>🏃 速さ・距離・時間の関係</h2>
      <p>この3つには、とても便利な関係があります。</p>

      <div class="example-box">
        <p><strong>速さ ＝ 距離 ÷ 時間</strong></p>
        <p><strong>距離 ＝ 速さ × 時間</strong></p>
        <p><strong>時間 ＝ 距離 ÷ 速さ</strong></p>
      </div>

      <h3>「みはじ」の図</h3>
      <p>「<strong>み（道のり）・は（速さ）・じ（時間）</strong>」の頭文字で覚えましょう！</p>
      <div class="example-box">
        <p>上に「み」、左下に「は」、右下に「じ」。</p>
        <p>横にならんだ2つはかけ算、上÷下はわり算です。</p>
      </div>

      <h3>例題</h3>
      <div class="example-box">
        <p>時速60kmで3時間走ると、距離は？</p>
        <p>距離 ＝ 60 × 3 ＝ <strong>180km</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>単位に注意！「時速km」なら時間も「時間」で合わせましょう。分速なら「分」です。</p>
      </div>
    `,
  },
  {
    slug: 'ratio-proportion',
    title: '比と比の値・比例反比例',
    grade: 'elementary-6',
    summary: 'a：bの比、比例・反比例のグラフを学ぼう。',
    keywords: ['比', '比例', '反比例', 'グラフ'],
    order: 2,
    content: `
      <h2>⚖️ 比（ひ）とは？</h2>
      <p>2つの量の割合を「：」を使って表すのが<strong>比</strong>です。</p>
      <div class="example-box">
        <p>りんご3個とみかん5個 → りんご：みかん ＝ <strong>3：5</strong></p>
      </div>

      <h3>比例と反比例</h3>
      <p><strong>比例：</strong>xが2倍になると、yも2倍になる関係。y ＝ kx</p>
      <p><strong>反比例：</strong>xが2倍になると、yは½になる関係。y ＝ k/x</p>

      <div class="example-box">
        <p>【比例の例】1個80円のりんご → x個の値段 y ＝ 80x</p>
        <p>【反比例の例】120kmを時速xkmで走る時間 y ＝ 120/x</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>せんせいのポイント：</strong>比例のグラフは原点を通る直線、反比例のグラフはなめらかな曲線です。グラフの形を覚えておくと、式を立てるとき役立ちます。</p>
      </div>
    `,
  },

  // ────────── 中学1年生 ──────────
  {
    slug: 'positive-negative',
    title: '正負の数',
    grade: 'junior-1',
    summary: 'マイナスの数が登場！正の数・負の数の計算を学ぼう。',
    keywords: ['正の数', '負の数', 'マイナス', '絶対値'],
    order: 1,
    content: `
      <h2>➕➖ 正負の数</h2>
      <p>中学に入ると、0より小さい<strong>負の数（マイナスの数）</strong>が登場します。</p>

      <div class="example-box">
        <p>… −3, −2, −1, 0, +1, +2, +3 …</p>
        <p>温度計で0℃より下がマイナス。−5℃は「零下5度」です。</p>
      </div>

      <h3>絶対値（ぜったいち）</h3>
      <p>数直線上で0からの距離のことです。|−5| ＝ 5, |+3| ＝ 3</p>

      <h3>計算のルール</h3>
      <div class="example-box">
        <p><strong>同符号のたし算：</strong>（+3）＋（+5）＝ +8、（−3）＋（−5）＝ −8</p>
        <p><strong>異符号のたし算：</strong>（+5）＋（−3）＝ +2（絶対値の大きい方の符号）</p>
        <p><strong>かけ算：</strong>同符号 → プラス、異符号 → マイナス</p>
        <p>（−2）×（−3）＝ +6、（−2）×（+3）＝ −6</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「マイナス × マイナス ＝ プラス」は最初は不思議に感じますが、借金（マイナス）がなくなる（マイナス）のはうれしい（プラス）！とイメージすると覚えやすいですよ。</p>
      </div>
    `,
  },
  {
    slug: 'variables-equations',
    title: '文字式と方程式',
    grade: 'junior-1',
    summary: 'xやaを使った式の書き方と、一次方程式の解き方。',
    keywords: ['文字式', '方程式', '一次方程式', 'x'],
    order: 2,
    content: `
      <h2>🔤 文字式のルール</h2>
      <p>数学では、わからない数を<strong>xやa</strong>などの文字で表します。</p>

      <div class="example-box">
        <p>「1本a円のペンを5本買うと？」→ <strong>5a 円</strong></p>
        <p>×は省略。数字は文字の前に書く。</p>
      </div>

      <h3>一次方程式</h3>
      <p>「＝」が入った式で、xの値を求めることを<strong>方程式を解く</strong>といいます。</p>

      <div class="example-box">
        <p><strong>3x + 5 = 20</strong></p>
        <p>3x = 20 − 5（移項する・符号が変わる）</p>
        <p>3x = 15</p>
        <p>x = 15 ÷ 3 ＝ <strong>5</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>方程式は「天秤（てんびん）」と同じ。左右に同じことをすれば、つり合いは崩れません。これが移項のしくみです。</p>
      </div>
    `,
  },
  {
    slug: 'plane-figures',
    title: '平面図形（作図と移動）',
    grade: 'junior-1',
    summary: 'コンパスと定規を使った作図、図形の対称性と移動を学ぼう。',
    keywords: ['作図', '垂直二等分線', '角の二等分線', '対称', '移動'],
    order: 3,
    content: `
      <h2>📐 基本の作図</h2>
      <p>中学校の作図では、<strong>コンパスと定規（目盛りなし）</strong>だけで図形をかきます。</p>

      <h3>3つの基本作図</h3>
      <div class="example-box">
        <p>① <strong>垂直二等分線</strong>：線分の真ん中を通り、垂直に交わる直線</p>
        <p>② <strong>角の二等分線</strong>：角をちょうど半分に分ける直線</p>
        <p>③ <strong>垂線</strong>：ある点から直線に垂直な線を引く</p>
      </div>

      <h3>図形の移動</h3>
      <p>図形は動かしても形と大きさは変わりません。移動には3種類あります。</p>
      <div class="example-box">
        <p>🔄 <strong>平行移動</strong>：同じ方向に同じ距離だけずらす</p>
        <p>🪞 <strong>対称移動（線対称）</strong>：ある直線を軸にして裏返す</p>
        <p>🔃 <strong>回転移動</strong>：ある点を中心に一定の角度だけ回す</p>
      </div>

      <h3>対称な図形</h3>
      <ul>
        <li><strong>線対称</strong>：折り目（対称の軸）で折ると重なる図形</li>
        <li><strong>点対称</strong>：ある点を中心に180°回すと重なる図形</li>
      </ul>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>作図の問題では「なぜそれで正しいか」を説明できることが大事です。垂直二等分線の作図は「2つの円の交点を結ぶ」がポイント！</p>
      </div>
    `,
  },
  {
    slug: 'space-figures',
    title: '空間図形',
    grade: 'junior-1',
    summary: '立体の名前・見取図・展開図・表面積と体積を学ぼう。',
    keywords: ['空間図形', '角柱', '円柱', '角錐', '円錐', '球', '展開図'],
    order: 4,
    content: `
      <h2>🧊 立体の種類</h2>
      <p>空間にある立体にはさまざまな種類があります。</p>

      <div class="example-box">
        <p><strong>角柱</strong>：底面が多角形で、側面が長方形の立体（三角柱、四角柱…）</p>
        <p><strong>円柱</strong>：底面が円の柱状の立体</p>
        <p><strong>角錐</strong>：底面が多角形で、頂点が1つの立体（三角錐、四角錐…）</p>
        <p><strong>円錐</strong>：底面が円で、頂点が1つの立体</p>
        <p><strong>球</strong>：すべての面が曲面の丸い立体</p>
      </div>

      <h3>正多面体</h3>
      <p>すべての面が同じ正多角形で、各頂点に同じ数の面が集まる立体。<strong>5種類だけ</strong>存在します。</p>
      <div class="example-box">
        <p>正四面体（正三角形×4）、正六面体（正方形×6＝サイコロ）、正八面体、正十二面体、正二十面体</p>
      </div>

      <h3>体積と表面積の公式</h3>
      <div class="example-box formula">
        <p><strong>角柱・円柱の体積</strong> ＝ 底面積 × 高さ</p>
        <p><strong>角錐・円錐の体積</strong> ＝ 底面積 × 高さ × ⅓</p>
        <p><strong>球の体積</strong> ＝ 4πr³/3</p>
        <p><strong>球の表面積</strong> ＝ 4πr²</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>錐（すい）の体積は柱の体積の3分の1。これは実験でも確認できます。円錐に水を3杯入れると同じ底面積・高さの円柱がちょうどいっぱいになります！</p>
      </div>
    `,
  },
  {
    slug: 'data-frequency',
    title: '資料の整理（度数分布と代表値）',
    grade: 'junior-1',
    summary: 'ヒストグラムの作り方、平均値・中央値・最頻値を学ぼう。',
    keywords: ['度数分布', 'ヒストグラム', '平均値', '中央値', '最頻値', '代表値'],
    order: 5,
    content: `
      <h2>📊 資料を整理しよう</h2>
      <p>たくさんのデータを分かりやすくまとめる方法を学びましょう。</p>

      <h3>度数分布表</h3>
      <p>データをいくつかの<strong>階級</strong>（区間）に分けて、各階級に入るデータの個数（<strong>度数</strong>）を表にまとめたもの。</p>
      <div class="example-box">
        <p>テストの点数を10点ごとに区切る → 40〜50点：3人、50〜60点：7人、60〜70点：12人…</p>
      </div>

      <h3>ヒストグラム（柱状グラフ）</h3>
      <p>度数分布表を棒グラフにしたもの。データの散らばりが一目でわかります。</p>

      <h3>代表値</h3>
      <div class="example-box">
        <p><strong>平均値</strong>：データの合計 ÷ データの個数</p>
        <p><strong>中央値（メジアン）</strong>：データを大きさの順に並べた真ん中の値</p>
        <p><strong>最頻値（モード）</strong>：最も多く現れた値</p>
      </div>

      <h3>範囲（レンジ）</h3>
      <p>最大値 − 最小値。データの散らばり具合を表します。</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>平均値は極端な値に影響されやすい！年収のように偏りがあるデータでは中央値の方が実態に近いことが多いです。</p>
      </div>
    `,
  },

  // ────────── 中学2年生 ──────────
  {
    slug: 'linear-functions',
    title: '一次関数',
    grade: 'junior-2',
    summary: 'y = ax + b のグラフを書いて、変化の割合を理解しよう。',
    keywords: ['一次関数', 'グラフ', '傾き', '切片'],
    order: 1,
    content: `
      <h2>📈 一次関数 y = ax + b</h2>
      <p>xが変わるとyも一定の割合で変わる関係です。</p>

      <div class="example-box">
        <p><strong>y = 2x + 3</strong></p>
        <p>x=0のとき y=3、x=1のとき y=5、x=2のとき y=7</p>
        <p>xが1増えると、yは2ずつ増える → <strong>傾き（変化の割合）＝ 2</strong></p>
      </div>

      <h3>グラフの要素</h3>
      <ul>
        <li><strong>a（傾き）</strong>：グラフの急さ。正なら右上がり、負なら右下がり。</li>
        <li><strong>b（切片）</strong>：グラフがy軸と交わる点。x=0のときのyの値。</li>
      </ul>

      <h3>直線のグラフの書き方</h3>
      <ol>
        <li>y軸上にb（切片）の点を取る</li>
        <li>そこからa（傾き）の分だけ進んだ点を取る（右に1、上にa）</li>
        <li>2点を直線で結ぶ</li>
      </ol>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「傾き」は「1進むと何変わる？」です。スキーのゲレンデの急さと同じイメージ！急な坂＝傾きが大きいということです。</p>
      </div>
    `,
  },
  {
    slug: 'triangle-congruence',
    title: '三角形の合同',
    grade: 'junior-2',
    summary: '合同条件と証明のしかたを学ぼう。',
    keywords: ['合同', '証明', '三角形', '合同条件'],
    order: 2,
    content: `
      <h2>🔺 合同とは？</h2>
      <p>形も大きさも同じ2つの図形を<strong>合同</strong>といいます。</p>

      <h3>三角形の合同条件（3つ）</h3>
      <div class="example-box">
        <p>① <strong>3辺がそれぞれ等しい</strong>（SSS）</p>
        <p>② <strong>2辺とその間の角がそれぞれ等しい</strong>（SAS）</p>
        <p>③ <strong>1辺とその両端の角がそれぞれ等しい</strong>（ASA）</p>
      </div>

      <h3>証明の書き方</h3>
      <div class="example-box">
        <p>△ABCと△DEFにおいて、</p>
        <p>AB ＝ DE …①</p>
        <p>∠A ＝ ∠D …②</p>
        <p>AC ＝ DF …③</p>
        <p>①②③より、2辺とその間の角がそれぞれ等しいので、</p>
        <p>△ABC ≡ △DEF（証明終わり）</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>証明は「数学の作文」です。根拠→結論の流れを意識して、番号を振って整理すると、読みやすい証明になります。</p>
      </div>
    `,
  },
  {
    slug: 'simultaneous-equations',
    title: '連立方程式',
    grade: 'junior-2',
    summary: '2つの未知数、2つの式。加減法と代入法で解こう。',
    keywords: ['連立方程式', '加減法', '代入法', '二元一次方程式'],
    order: 3,
    content: `
      <h2>🔗 連立方程式とは？</h2>
      <p>2つの文字（x, y）を含む2つの方程式を組み合わせて、両方を同時に満たす値を求めます。</p>

      <h3>解き方① 加減法</h3>
      <p>2つの式を足したり引いたりして、一方の文字を消します。</p>
      <div class="example-box">
        <p>2x + y = 7 …①</p>
        <p>x − y = 2 …②</p>
        <p>①＋② → 3x = 9 → x = 3</p>
        <p>x = 3 を①に代入 → y = 1</p>
        <p>答え：<strong>x = 3, y = 1</strong></p>
      </div>

      <h3>解き方② 代入法</h3>
      <p>一方の式からxまたはyの式を作り、もう一方に代入します。</p>
      <div class="example-box">
        <p>y = 2x + 1 …①</p>
        <p>3x + y = 11 …②</p>
        <p>②に①を代入 → 3x + (2x + 1) = 11</p>
        <p>5x = 10 → x = 2、y = 5</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>どちらの方法が計算しやすいかは問題次第。「一方の文字の係数が同じ・または1」なら楽に消せます。両方できるようにしておきましょう。</p>
      </div>
    `,
  },
  {
    slug: 'probability-basics',
    title: '確率の基本',
    grade: 'junior-2',
    summary: '起こりやすさを数で表そう。樹形図や表を使って求める確率。',
    keywords: ['確率', '樹形図', '場合の数', '同様に確からしい'],
    order: 4,
    content: `
      <h2>🎲 確率とは？</h2>
      <p>ある事柄の起こりやすさを<strong>0から1の数</strong>で表したものが確率です。</p>

      <div class="example-box formula">
        <p><strong>確率 ＝ ある事柄の起こる場合の数 ÷ すべての場合の数</strong></p>
      </div>

      <h3>確率の基本</h3>
      <ul>
        <li>必ず起こる → 確率 = 1</li>
        <li>絶対に起こらない → 確率 = 0</li>
        <li>確率は 0 ≦ p ≦ 1 の範囲</li>
      </ul>

      <h3>樹形図で場合を数える</h3>
      <div class="example-box">
        <p>コインを2枚投げるとき</p>
        <p>1枚目：表 → 2枚目：表 or 裏</p>
        <p>1枚目：裏 → 2枚目：表 or 裏</p>
        <p>全部で <strong>4通り</strong>。2枚とも表は1通り。</p>
        <p>確率 ＝ 1/4 ＝ <strong>0.25</strong></p>
      </div>

      <h3>「同様に確からしい」が条件</h3>
      <p>確率の計算では、どの結果も同じ起こりやすさであることが前提です。サイコロの各目が出る確率はそれぞれ1/6。</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「少なくとも1つは〜」の確率は、余事象（1 − 起こらない確率）を使うと楽に解けます。この考え方は高校でも大活躍しますよ！</p>
      </div>
    `,
  },

  // ────────── 中学3年生 ──────────
  {
    slug: 'quadratic-equation',
    title: '二次方程式',
    grade: 'junior-3',
    summary: 'ax²+bx+c=0 の解き方を3通りの方法で学ぼう。',
    keywords: ['二次方程式', '因数分解', '解の公式', '平方完成'],
    order: 1,
    content: `
      <h2>📐 二次方程式とは？</h2>
      <p>xの2乗が入った方程式です。<strong>ax² + bx + c = 0</strong> の形で表します。</p>

      <h3>解き方① 因数分解</h3>
      <div class="example-box">
        <p>x² − 5x + 6 = 0</p>
        <p>(x − 2)(x − 3) = 0</p>
        <p>x = 2 または x = 3</p>
      </div>

      <h3>解き方② 平方根を利用</h3>
      <div class="example-box">
        <p>x² = 9</p>
        <p>x = ±3</p>
      </div>

      <h3>解き方③ 解の公式</h3>
      <div class="example-box formula">
        <p>x = (−b ± √(b²−4ac)) / 2a</p>
        <p>すべての二次方程式に使える最強の公式！</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>まず因数分解できないか試す→できなければ解の公式。この順番で考えましょう。解の公式は暗記必須です！</p>
      </div>
    `,
  },
  {
    slug: 'pythagorean-theorem',
    title: '三平方の定理（ピタゴラスの定理）',
    grade: 'junior-3',
    summary: 'a²+b²=c²。直角三角形の辺の関係を学ぼう。',
    keywords: ['三平方の定理', 'ピタゴラス', '直角三角形'],
    order: 2,
    content: `
      <h2>📐 三平方の定理</h2>
      <p>直角三角形において、<strong>a² + b² = c²</strong>（cは斜辺＝一番長い辺）</p>

      <div class="example-box formula">
        <p><strong>a² + b² = c²</strong></p>
        <p>例：3² + 4² = 9 + 16 = 25 = 5²　→ 斜辺は5</p>
      </div>

      <h3>有名な直角三角形</h3>
      <ul>
        <li>3：4：5</li>
        <li>5：12：13</li>
        <li>1：1：√2（直角二等辺三角形）</li>
        <li>1：2：√3（30°-60°-90°の三角形）</li>
      </ul>

      <h3>使い方の例</h3>
      <div class="example-box">
        <p>2点A(1, 2)とB(4, 6)の距離は？</p>
        <p>横の差 = 3、縦の差 = 4</p>
        <p>距離 = √(3² + 4²) = √25 = <strong>5</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>この定理は約2500年前にピタゴラスが証明したといわれています。中学最後にして最も大切な定理の一つです。高校数学でもずっと使いますよ！</p>
      </div>
    `,
  },
  {
    slug: 'expansion-factoring',
    title: '式の展開と因数分解',
    grade: 'junior-3',
    summary: '乗法公式を使った展開と、逆演算の因数分解をマスターしよう。',
    keywords: ['展開', '因数分解', '乗法公式', '多項式'],
    order: 3,
    content: `
      <h2>📝 式の展開</h2>
      <p>かっこをはずして、足し算・引き算の形にすることを<strong>展開</strong>といいます。</p>

      <h3>乗法公式</h3>
      <div class="example-box formula">
        <p><strong>(a + b)² = a² + 2ab + b²</strong></p>
        <p><strong>(a − b)² = a² − 2ab + b²</strong></p>
        <p><strong>(a + b)(a − b) = a² − b²</strong></p>
        <p><strong>(x + a)(x + b) = x² + (a+b)x + ab</strong></p>
      </div>

      <h3>因数分解</h3>
      <p>展開の<strong>逆</strong>の操作です。多項式を積（かけ算）の形に変形します。</p>
      <div class="example-box">
        <p>x² + 5x + 6 = <strong>(x + 2)(x + 3)</strong></p>
        <p>→ 足して5、かけて6になる2つの数は2と3</p>
        <p>x² − 9 = <strong>(x + 3)(x − 3)</strong> ← a² − b² の公式</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>因数分解は「足してp、かけてq」のペアを見つけるのがカギ。展開で検算する習慣をつけましょう。高校入試の超頻出テーマです！</p>
      </div>
    `,
  },
  {
    slug: 'square-roots',
    title: '平方根',
    grade: 'junior-3',
    summary: '√（ルート）の意味と計算方法を学ぼう。有理数と無理数の違いも。',
    keywords: ['平方根', 'ルート', '√', '有理数', '無理数'],
    order: 4,
    content: `
      <h2>√ 平方根とは？</h2>
      <p>2乗して a になる数を、a の<strong>平方根</strong>といいます。</p>

      <div class="example-box">
        <p>9の平方根 → 3 と −3（3² = 9, (−3)² = 9）</p>
        <p>2の平方根 → √2 と −√2</p>
        <p>√2 ≈ 1.41421356…（割り切れない！）</p>
      </div>

      <h3>有理数と無理数</h3>
      <ul>
        <li><strong>有理数</strong>：分数で表せる数（整数・有限小数・循環小数）</li>
        <li><strong>無理数</strong>：分数で表せない数（√2, √3, π など）</li>
      </ul>

      <h3>ルートの計算</h3>
      <div class="example-box formula">
        <p>√a × √b = √(ab)　例：√2 × √3 = √6</p>
        <p>√a ÷ √b = √(a/b)　例：√12 ÷ √3 = √4 = 2</p>
        <p>√12 = √(4×3) = 2√3（根号の中をできるだけ小さくする）</p>
      </div>

      <h3>分母の有理化</h3>
      <div class="example-box">
        <p>1/√3 = 1/√3 × √3/√3 = <strong>√3/3</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>√の中身を素因数分解すると、ルートを簡単にできます。√50 = √(25×2) = 5√2。テストでは「最も簡単な形にせよ」が定番です。</p>
      </div>
    `,
  },
  {
    slug: 'quadratic-function-intro',
    title: '関数 y = ax²',
    grade: 'junior-3',
    summary: '中学で初めて登場する2乗の関数。放物線のグラフを学ぼう。',
    keywords: ['二次関数', 'y=ax²', '放物線', 'グラフ', '変化の割合'],
    order: 5,
    content: `
      <h2>📈 関数 y = ax²</h2>
      <p>xの2乗に比例する関数です。グラフは<strong>放物線</strong>になります。</p>

      <div class="example-box">
        <p>y = x²：(0,0), (1,1), (2,4), (3,9), (−1,1), (−2,4)</p>
        <p>→ 原点を通り、左右対称のU字型カーブ</p>
      </div>

      <h3>グラフの特徴</h3>
      <ul>
        <li><strong>a > 0</strong>のとき：上に開く（下に凸）</li>
        <li><strong>a < 0</strong>のとき：下に開く（上に凸）</li>
        <li>|a| が大きいほどグラフは<strong>細く</strong>、小さいほど<strong>広がる</strong></li>
        <li>グラフは<strong>y軸について対称</strong></li>
      </ul>

      <h3>変化の割合</h3>
      <div class="example-box">
        <p>y = x² で xが1から3に変わるとき</p>
        <p>変化の割合 = (9 − 1)/(3 − 1) = 8/2 = <strong>4</strong></p>
        <p>一次関数と違い、変化の割合は<strong>一定ではない</strong>！</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>y = ax² の変化の割合は a(p+q) で求められます（xがpからqに変わるとき）。この公式を覚えると計算が速くなりますよ。</p>
      </div>
    `,
  },
  {
    slug: 'similarity',
    title: '相似な図形',
    grade: 'junior-3',
    summary: '形が同じで大きさが違う図形。相似条件・相似比を学ぼう。',
    keywords: ['相似', '相似比', '相似条件', '面積比', '体積比'],
    order: 6,
    content: `
      <h2>🔍 相似とは？</h2>
      <p>形は同じで大きさが異なる2つの図形を<strong>相似</strong>といいます。記号は<strong>∽</strong>。</p>

      <h3>三角形の相似条件（3つ）</h3>
      <div class="example-box">
        <p>① <strong>3組の辺の比がすべて等しい</strong></p>
        <p>② <strong>2組の辺の比とその間の角がそれぞれ等しい</strong></p>
        <p>③ <strong>2組の角がそれぞれ等しい</strong>（よく使う！）</p>
      </div>

      <h3>相似比と面積比・体積比</h3>
      <div class="example-box formula">
        <p>相似比が m : n のとき</p>
        <p><strong>面積比 = m² : n²</strong></p>
        <p><strong>体積比 = m³ : n³</strong></p>
        <p>例：相似比2:3 → 面積比4:9、体積比8:27</p>
      </div>

      <h3>中点連結定理</h3>
      <div class="example-box">
        <p>三角形の2辺の中点を結ぶ線分は、残りの辺に<strong>平行</strong>で、長さは<strong>半分</strong>。</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>相似の問題では「2組の角が等しい」条件が最もよく使われます。平行線があれば錯角・同位角を探して、相似の三角形を見つけましょう。</p>
      </div>
    `,
  },
  {
    slug: 'inscribed-angle',
    title: '円周角の定理',
    grade: 'junior-3',
    summary: '円周角は中心角の半分！円と角度の美しい関係を学ぼう。',
    keywords: ['円周角', '中心角', '円', '弧', '定理'],
    order: 7,
    content: `
      <h2>⭕ 円周角の定理</h2>
      <p>円の同じ弧に対する<strong>円周角</strong>は<strong>中心角の半分</strong>です。</p>

      <div class="example-box formula">
        <p><strong>円周角 = 中心角 × ½</strong></p>
        <p>同じ弧に対する円周角は、円周上のどこにとっても<strong>等しい</strong></p>
      </div>

      <h3>重要な性質</h3>
      <div class="example-box">
        <p>🔵 半円（直径）に対する円周角 = <strong>90°</strong></p>
        <p>→ 直径の上に三角形を作ると、必ず直角三角形になる！</p>
      </div>

      <h3>円に内接する四角形</h3>
      <div class="example-box">
        <p>円に内接する四角形の<strong>対角の和 = 180°</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「半円の弧に対する円周角は90°」は非常に便利な性質です。直角が出てきたら、円が隠れていないか考えましょう。図形の証明問題で大活躍します。</p>
      </div>
    `,
  },

  // ────────── 高校1年（数Ⅰ・A）──────────
  {
    slug: 'quadratic-function',
    title: '二次関数とグラフ',
    grade: 'high-1',
    summary: 'y=ax²+bx+c のグラフ、頂点、最大値・最小値を学ぼう。',
    keywords: ['二次関数', '放物線', '頂点', '平方完成'],
    order: 1,
    content: `
      <h2>📈 二次関数 y = ax² + bx + c</h2>
      <p>二次関数のグラフは<strong>放物線（パラボラ）</strong>です。a > 0 なら下に凸、a < 0 なら上に凸になります。</p>

      <h3>平方完成</h3>
      <p>グラフの頂点を求めるために、式を y = a(x − p)² + q の形に変形しましょう。</p>
      <div class="example-box formula">
        <p>y = x² − 6x + 11</p>
        <p>= (x² − 6x + 9) + 2</p>
        <p>= <strong>(x − 3)² + 2</strong></p>
        <p>頂点：(3, 2)、軸：x = 3</p>
      </div>

      <h3>最大値・最小値</h3>
      <p>定義域（xの範囲）が限られているとき、グラフの端点も確認する必要があります。</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>平方完成のコツ → xの係数の半分を2乗する。−6の半分は−3、(−3)²=9 を足して引く。これを機械的にできるようになりましょう。</p>
      </div>
    `,
  },
  {
    slug: 'trigonometric-ratios',
    title: '三角比（sin, cos, tan）',
    grade: 'high-1',
    summary: '直角三角形の辺の比 sin, cos, tan を理解しよう。',
    keywords: ['三角比', 'sin', 'cos', 'tan', '正弦', '余弦', '正接'],
    order: 2,
    content: `
      <h2>📐 三角比とは？</h2>
      <p>直角三角形の角度と辺の長さの比の関係です。</p>

      <div class="example-box formula">
        <p><strong>sin θ = 対辺 / 斜辺</strong></p>
        <p><strong>cos θ = 隣辺 / 斜辺</strong></p>
        <p><strong>tan θ = 対辺 / 隣辺</strong></p>
      </div>

      <h3>覚え方</h3>
      <p>「<strong>サイン（sin）・コサイン（cos）・タンジェント（tan）</strong>」は「<strong>筆(sinは対/斜)、コシ(cosは隣/斜)、タン(tanは対/隣)</strong>」と覚える方法もあります。</p>

      <h3>有名角の値</h3>
      <div class="example-box">
        <p>sin 30° = 1/2、cos 30° = √3/2、tan 30° = 1/√3</p>
        <p>sin 45° = √2/2、cos 45° = √2/2、tan 45° = 1</p>
        <p>sin 60° = √3/2、cos 60° = 1/2、tan 60° = √3</p>
      </div>

      <h3>重要公式</h3>
      <div class="example-box formula">
        <p>sin²θ + cos²θ = 1</p>
        <p>tan θ = sin θ / cos θ</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>30°, 45°, 60°の値はテストに頻出！理屈を理解した上で暗記しましょう。1:2:√3 の三角形と、1:1:√2 の三角形がもとになっています。</p>
      </div>
    `,
  },
  {
    slug: 'probability-permutation',
    title: '場合の数と確率',
    grade: 'high-1',
    summary: '順列(P)・組合せ(C)と確率の計算方法を学ぼう。',
    keywords: ['確率', '順列', '組合せ', '場合の数', 'P', 'C'],
    order: 3,
    content: `
      <h2>🎲 場合の数</h2>

      <h3>順列（P: Permutation）</h3>
      <p>n個のものからr個を<strong>順番を考えて</strong>選ぶ方法の数。</p>
      <div class="example-box formula">
        <p>ₙPᵣ = n! / (n−r)!</p>
        <p>例：5人から3人を並べる → ₅P₃ = 5 × 4 × 3 = 60通り</p>
      </div>

      <h3>組合せ（C: Combination）</h3>
      <p>n個のものからr個を<strong>順番を考えずに</strong>選ぶ方法の数。</p>
      <div class="example-box formula">
        <p>ₙCᵣ = n! / (r!(n−r)!)</p>
        <p>例：5人から3人を選ぶ → ₅C₃ = 10通り</p>
      </div>

      <h3>確率</h3>
      <div class="example-box formula">
        <p>確率 P(A) = A が起こる場合の数 / 全体の場合の数</p>
        <p>合同を2回投げて2回とも表 → 1/4 = 0.25</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「順番が関係ある？ない？」を必ず最初に判断しましょう。関係ある→順列(P)、関係ない→組合せ(C)です。</p>
      </div>
    `,
  },
  {
    slug: 'numbers-expressions',
    title: '数と式（展開・因数分解・不等式）',
    grade: 'high-1',
    summary: '高校レベルの展開・因数分解と、一次不等式の解き方を学ぼう。',
    keywords: ['展開', '因数分解', '不等式', '実数', '絶対値'],
    order: 4,
    content: `
      <h2>📝 高校の「数と式」</h2>
      <p>中学で学んだ展開・因数分解をさらに発展させます。</p>

      <h3>3乗の公式</h3>
      <div class="example-box formula">
        <p>(a + b)³ = a³ + 3a²b + 3ab² + b³</p>
        <p>(a − b)³ = a³ − 3a²b + 3ab² − b³</p>
        <p>a³ + b³ = (a + b)(a² − ab + b²)</p>
        <p>a³ − b³ = (a − b)(a² + ab + b²)</p>
      </div>

      <h3>一次不等式</h3>
      <div class="example-box">
        <p>3x − 2 > 7</p>
        <p>3x > 9</p>
        <p>x > 3</p>
        <p>⚠️ <strong>負の数でかけ算・わり算すると不等号の向きが逆転</strong>！</p>
        <p>−2x > 6 → x < −3</p>
      </div>

      <h3>絶対値を含む方程式・不等式</h3>
      <div class="example-box">
        <p>|x − 3| = 5 → x − 3 = ±5 → x = 8 または x = −2</p>
        <p>|x| < 3 → −3 < x < 3（距離が3未満）</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>不等式で最も多いミスは「負の数をかけたとき不等号を逆にし忘れる」こと。常に意識しましょう。また、「数直線で解を図示する」練習をすると理解が深まります。</p>
      </div>
    `,
  },
  {
    slug: 'sets-propositions',
    title: '集合と命題',
    grade: 'high-1',
    summary: '集合の記号、「ならば」の論理、対偶を使った証明を学ぼう。',
    keywords: ['集合', '命題', '対偶', '逆', '裏', '必要条件', '十分条件'],
    order: 5,
    content: `
      <h2>🔵 集合</h2>
      <p>ものの集まりを<strong>集合</strong>、その一つ一つを<strong>要素</strong>といいます。</p>

      <div class="example-box">
        <p>A = {1, 2, 3, 4, 5}、B = {2, 4, 6, 8}</p>
        <p><strong>A ∩ B</strong>（共通部分）= {2, 4}</p>
        <p><strong>A ∪ B</strong>（和集合）= {1, 2, 3, 4, 5, 6, 8}</p>
        <p><strong>Ā</strong>（補集合）= 全体集合のうちAに含まれない要素</p>
      </div>

      <h3>命題と条件</h3>
      <p>真（正しい）か偽（正しくない）かが定まる文を<strong>命題</strong>といいます。</p>
      <div class="example-box">
        <p>「p ⇒ q」（pならばq）が命題。</p>
        <p><strong>逆</strong>：q ⇒ p　<strong>裏</strong>：¬p ⇒ ¬q　<strong>対偶</strong>：¬q ⇒ ¬p</p>
        <p>⭐ <strong>もとの命題と対偶の真偽は一致する</strong>（超重要！）</p>
      </div>

      <h3>必要条件と十分条件</h3>
      <div class="example-box">
        <p>「p ⇒ q」が真のとき</p>
        <p>pは qの<strong>十分条件</strong>（pがあればqは十分）</p>
        <p>qは pの<strong>必要条件</strong>（qがなければpもない）</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>直接証明が難しいときは<strong>対偶を証明</strong>する方法が有効です。「nが偶数でないならばn²は偶数でない」→ 対偶「n²が偶数ならばnは偶数」で証明！</p>
      </div>
    `,
  },
  {
    slug: 'data-analysis',
    title: 'データの分析',
    grade: 'high-1',
    summary: '分散・標準偏差・相関係数でデータの特徴をつかもう。',
    keywords: ['分散', '標準偏差', '散布図', '相関係数', 'データの分析'],
    order: 6,
    content: `
      <h2>📊 データの分析</h2>
      <p>中学で学んだ代表値に加えて、<strong>散らばり</strong>と<strong>相関</strong>を数値で表す方法を学びます。</p>

      <h3>分散と標準偏差</h3>
      <div class="example-box formula">
        <p><strong>偏差</strong> = 各データ − 平均値</p>
        <p><strong>分散</strong> = 偏差の2乗の平均 = (1/n)Σ(xᵢ − x̄)²</p>
        <p><strong>標準偏差</strong> = √分散</p>
      </div>
      <p>標準偏差が大きいほど、データの<strong>散らばりが大きい</strong>。</p>

      <h3>散布図と相関係数</h3>
      <p>2つのデータの関係を調べるとき、<strong>散布図</strong>（各データを点で打つ）を作ります。</p>
      <div class="example-box">
        <p><strong>正の相関</strong>：一方が増えると他方も増える（右上がり）</p>
        <p><strong>負の相関</strong>：一方が増えると他方は減る（右下がり）</p>
        <p><strong>相関なし</strong>：ばらばらで傾向がない</p>
      </div>

      <div class="example-box formula">
        <p><strong>相関係数 r</strong>（−1 ≦ r ≦ 1）</p>
        <p>r ≈ 1 → 強い正の相関、r ≈ −1 → 強い負の相関、r ≈ 0 → 相関なし</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>相関があっても「因果関係」があるとは限りません。アイスの売り上げと水難事故は相関しますが、原因は「気温」。これを<strong>疑似相関</strong>といいます。</p>
      </div>
    `,
  },
  {
    slug: 'figure-properties',
    title: '図形の性質（数学A）',
    grade: 'high-1',
    summary: '三角形の五心、円の性質、方べきの定理を学ぼう。',
    keywords: ['五心', '重心', '外心', '内心', '方べきの定理', 'チェバ', 'メネラウス'],
    order: 7,
    content: `
      <h2>📐 三角形の五心</h2>
      <p>三角形には5つの重要な「心（中心）」があります。</p>

      <div class="example-box">
        <p><strong>重心 G</strong>：3本の中線の交点。各中線を2:1に内分。</p>
        <p><strong>外心 O</strong>：3辺の垂直二等分線の交点。外接円の中心。</p>
        <p><strong>内心 I</strong>：3つの角の二等分線の交点。内接円の中心。</p>
        <p><strong>垂心 H</strong>：3本の垂線の交点。</p>
        <p><strong>傍心</strong>：1つの内角と2つの外角の二等分線の交点。</p>
      </div>

      <h3>チェバの定理・メネラウスの定理</h3>
      <div class="example-box formula">
        <p><strong>チェバの定理</strong>：三角形ABCの頂点からの線分が1点で交わるとき</p>
        <p>(AF/FB)·(BD/DC)·(CE/EA) = 1</p>
        <p><strong>メネラウスの定理</strong>：直線が三角形の辺（またはその延長）と交わるとき</p>
        <p>(AF/FB)·(BD/DC)·(CE/EA) = 1</p>
      </div>

      <h3>方べきの定理</h3>
      <div class="example-box">
        <p>円と2本の直線（弦や接線）に関して</p>
        <p><strong>PA · PB = PC · PD</strong></p>
        <p>接線の場合：<strong>PT² = PA · PB</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>五心は「何の交点か」をしっかり覚えましょう。外心は「3辺から等距離」、内心は「3辺に接する円の中心」とイメージすると理解しやすいです。</p>
      </div>
    `,
  },

  // ────────── 高校2年（数Ⅱ・B）──────────
  {
    slug: 'differentiation-intro',
    title: '微分法',
    grade: 'high-2',
    summary: '微分は「変化の速さ」を求める道具。接線の傾きを求めよう。',
    keywords: ['微分', '導関数', '接線', '極値'],
    order: 1,
    content: `
      <h2>📉 微分とは？</h2>
      <p>微分とは、関数の<strong>瞬間的な変化の割合（接線の傾き）</strong>を求める計算です。</p>

      <h3>基本公式</h3>
      <div class="example-box formula">
        <p>f(x) = xⁿ のとき f'(x) = nxⁿ⁻¹</p>
        <p>例：f(x) = x³ → f'(x) = 3x²</p>
        <p>例：f(x) = 5x² → f'(x) = 10x</p>
      </div>

      <h3>接線の方程式</h3>
      <p>点(a, f(a))における接線：y − f(a) = f'(a)(x − a)</p>

      <h3>極値（グラフの山と谷）</h3>
      <div class="example-box">
        <p>f'(x) = 0 となる点の前後で符号が変わるとき、そこが極大または極小です。</p>
        <p>f'(x) が + → − に変わる → 極大</p>
        <p>f'(x) が − → + に変わる → 極小</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>微分は「速さの速さ」のようなもの。位置の微分が速度、速度の微分が加速度。身近な物理現象と結びつけて理解しましょう。</p>
      </div>
    `,
  },
  {
    slug: 'integration-intro',
    title: '積分法',
    grade: 'high-2',
    summary: '積分は微分の逆演算。面積を求めるのに使おう。',
    keywords: ['積分', '不定積分', '定積分', '面積'],
    order: 2,
    content: `
      <h2>📊 積分とは？</h2>
      <p>積分は<strong>微分の逆</strong>です。微分してf'(x)になった「もとの関数」を見つける操作です。</p>

      <h3>不定積分</h3>
      <div class="example-box formula">
        <p>∫ xⁿ dx = xⁿ⁺¹/(n+1) + C  (n ≠ −1)</p>
        <p>例：∫ x² dx = x³/3 + C</p>
        <p>Cは積分定数。微分してなくなった定数を忘れずに！</p>
      </div>

      <h3>定積分と面積</h3>
      <div class="example-box formula">
        <p>∫ₐᵇ f(x)dx = F(b) − F(a)</p>
        <p>放物線 y = x² と x軸の間の面積（x=0からx=2）：</p>
        <p>∫₀² x² dx = [x³/3]₀² = 8/3 − 0 = <strong>8/3</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>微分と積分はセット！「微分して元に戻す（確かめ算）」ができれば積分の答えが正しいかすぐ検証できます。</p>
      </div>
    `,
  },
  {
    slug: 'sequences-series',
    title: '数列（等差・等比数列）',
    grade: 'high-2',
    summary: '等差数列と等比数列の一般項・和の公式をマスターしよう。',
    keywords: ['数列', '等差数列', '等比数列', '一般項', '和'],
    order: 3,
    content: `
      <h2>📋 数列とは？</h2>
      <p>ある規則にしたがって並んだ数の列のことです。</p>

      <h3>等差数列</h3>
      <p>となり同士の差（公差 d）が一定の数列。</p>
      <div class="example-box formula">
        <p>一般項：aₙ = a₁ + (n−1)d</p>
        <p>和：Sₙ = n(a₁ + aₙ)/2</p>
        <p>例：2, 5, 8, 11, 14, … (a₁=2, d=3)</p>
        <p>第10項 = 2 + 9×3 = 29</p>
      </div>

      <h3>等比数列</h3>
      <p>となり同士の比（公比 r）が一定の数列。</p>
      <div class="example-box formula">
        <p>一般項：aₙ = a₁ · rⁿ⁻¹</p>
        <p>和：Sₙ = a₁(1 − rⁿ)/(1 − r)  (r ≠ 1)</p>
        <p>例：3, 6, 12, 24, … (a₁=3, r=2)</p>
        <p>第5項 = 3 × 2⁴ = 48</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「次の項との差が一定→等差」「次の項との比が一定→等比」。まず差を取ってみて、一定でなければ比を調べましょう。</p>
      </div>
    `,
  },
  {
    slug: 'trigonometric-functions',
    title: '三角関数',
    grade: 'high-2',
    summary: '弧度法、三角関数のグラフ、加法定理をマスターしよう。',
    keywords: ['三角関数', 'ラジアン', '弧度法', '加法定理', '周期'],
    order: 4,
    content: `
      <h2>🌀 弧度法（ラジアン）</h2>
      <p>高校では角度を<strong>ラジアン（rad）</strong>で表します。半径rの円で弧の長さがrになる角度が1ラジアン。</p>
      <div class="example-box formula">
        <p>180° = π rad、90° = π/2 rad、60° = π/3 rad、360° = 2π rad</p>
      </div>

      <h3>三角関数のグラフ</h3>
      <p>sin, cos, tan を角度を自由に拡張した関数として扱います。</p>
      <div class="example-box">
        <p><strong>y = sin x</strong>：周期2π、振幅1の波形</p>
        <p><strong>y = cos x</strong>：sinをπ/2左にずらした形</p>
        <p><strong>y = tan x</strong>：周期π、漸近線あり</p>
      </div>

      <h3>加法定理</h3>
      <div class="example-box formula">
        <p>sin(α ± β) = sinα cosβ ± cosα sinβ</p>
        <p>cos(α ± β) = cosα cosβ ∓ sinα sinβ</p>
        <p>tan(α ± β) = (tanα ± tanβ)/(1 ∓ tanα tanβ)</p>
      </div>

      <h3>2倍角の公式</h3>
      <div class="example-box formula">
        <p>sin 2α = 2 sinα cosα</p>
        <p>cos 2α = cos²α − sin²α = 2cos²α − 1 = 1 − 2sin²α</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>加法定理はすべての三角関数の公式の源です。ここから2倍角・半角・合成公式が全て導けます。まず加法定理を完璧に覚えましょう！</p>
      </div>
    `,
  },
  {
    slug: 'exponential-logarithmic',
    title: '指数関数と対数関数',
    grade: 'high-2',
    summary: '指数の拡張、対数の定義、グラフの特徴を学ぼう。',
    keywords: ['指数', '対数', 'log', '常用対数', '指数関数', '対数関数'],
    order: 5,
    content: `
      <h2>📈 指数の拡張</h2>
      <p>中学までの「整数乗」を<strong>有理数・実数</strong>に拡張します。</p>

      <div class="example-box formula">
        <p>a⁰ = 1　（aは0でない任意の数）</p>
        <p>a⁻ⁿ = 1/aⁿ</p>
        <p>a^(1/n) = ⁿ√a　（n乗根）</p>
        <p>例：8^(1/3) = ³√8 = 2</p>
      </div>

      <h3>対数とは？</h3>
      <p>「aを何乗したらbになるか」を表す数が<strong>対数</strong>です。</p>
      <div class="example-box formula">
        <p>aˣ = b ⟺ x = log_a b</p>
        <p>例：2³ = 8 ⟺ log₂ 8 = 3</p>
        <p>10² = 100 ⟺ log₁₀ 100 = 2</p>
      </div>

      <h3>対数の性質</h3>
      <div class="example-box formula">
        <p>log_a MN = log_a M + log_a N</p>
        <p>log_a (M/N) = log_a M − log_a N</p>
        <p>log_a Mᵏ = k log_a M</p>
      </div>

      <h3>常用対数</h3>
      <p>底が10の対数を<strong>常用対数</strong>（log₁₀）といい、桁数の問題に活用します。</p>
      <div class="example-box">
        <p>2¹⁰ = 1024 は何桁？ → log₁₀ 1024 ≈ 3.01 → <strong>4桁</strong></p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「対数 = 指数の逆」と理解すれば怖くありません。log₂ 8 は「2を何乗したら8？」→ 3。かけ算を足し算に変換できるのが対数の最大のメリットです。</p>
      </div>
    `,
  },
  {
    slug: 'figures-equations',
    title: '図形と方程式',
    grade: 'high-2',
    summary: '座標平面上で直線と円を方程式で扱おう。',
    keywords: ['直線の方程式', '円の方程式', '点と直線の距離', '軌跡', '領域'],
    order: 6,
    content: `
      <h2>📐 座標と図形</h2>
      <p>図形を式（方程式）で表し、代数的に扱う分野です。</p>

      <h3>直線の方程式</h3>
      <div class="example-box formula">
        <p>傾きmで点(x₁, y₁)を通る直線：<strong>y − y₁ = m(x − x₁)</strong></p>
        <p>2点(x₁, y₁), (x₂, y₂)を通る直線：傾き m = (y₂−y₁)/(x₂−x₁)</p>
      </div>

      <h3>点と直線の距離</h3>
      <div class="example-box formula">
        <p>点(x₀, y₀)と直線 ax + by + c = 0 の距離：</p>
        <p><strong>d = |ax₀ + by₀ + c| / √(a² + b²)</strong></p>
      </div>

      <h3>円の方程式</h3>
      <div class="example-box formula">
        <p>中心(a, b)、半径rの円：<strong>(x − a)² + (y − b)² = r²</strong></p>
        <p>例：中心(2, −1)、半径3 → (x−2)² + (y+1)² = 9</p>
      </div>

      <h3>不等式の表す領域</h3>
      <p>不等式を満たす点の集合が<strong>領域</strong>。直線や円で区切られた部分を塗りつぶします。</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>「点と直線の距離」の公式は、円と直線の位置関係を調べるときに大活躍します。中心から直線までの距離と半径の大小で、交点の数がわかります。</p>
      </div>
    `,
  },
  {
    slug: 'vectors',
    title: 'ベクトル',
    grade: 'high-2',
    summary: '大きさと向きを持つ量「ベクトル」。成分表示と内積を学ぼう。',
    keywords: ['ベクトル', '内積', '成分', '位置ベクトル', '平面ベクトル'],
    order: 7,
    content: `
      <h2>➡️ ベクトルとは？</h2>
      <p>ベクトルは<strong>大きさと向き</strong>を持つ量です。矢印で表します。</p>

      <h3>ベクトルの演算</h3>
      <div class="example-box">
        <p>→a = (3, 2)、→b = (1, 4) のとき</p>
        <p><strong>和</strong>：→a + →b = (4, 6)</p>
        <p><strong>差</strong>：→a − →b = (2, −2)</p>
        <p><strong>実数倍</strong>：2→a = (6, 4)</p>
      </div>

      <h3>内積</h3>
      <div class="example-box formula">
        <p><strong>→a · →b = |→a||→b| cos θ</strong></p>
        <p>成分では：→a · →b = a₁b₁ + a₂b₂</p>
        <p>例：(3,2)·(1,4) = 3×1 + 2×4 = 11</p>
      </div>

      <h3>ベクトルの垂直条件</h3>
      <div class="example-box">
        <p>→a ⊥ →b ⟺ <strong>→a · →b = 0</strong></p>
      </div>

      <h3>位置ベクトルと内分点</h3>
      <div class="example-box formula">
        <p>点A(→a)と点B(→b)をm:nに内分する点P：</p>
        <p><strong>→p = (n→a + m→b) / (m + n)</strong></p>
        <p>中点はm=n=1の特別な場合：→p = (→a + →b)/2</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>ベクトルは物理でも大活躍します（力、速度はすべてベクトル）。内積 = 0 ⟺ 垂直 は非常に便利な道具なので、しっかりマスターしましょう。</p>
      </div>
    `,
  },

  // ────────── 高校3年（数Ⅲ・C）──────────
  {
    slug: 'limits',
    title: '極限',
    grade: 'high-3',
    summary: '数列・関数の極限の考え方と計算方法を学ぼう。',
    keywords: ['極限', 'リミット', '収束', '発散', '不定形'],
    order: 1,
    content: `
      <h2>♾️ 極限とは？</h2>
      <p>値が限りなくある値に近づくことを<strong>極限（きょくげん）</strong>といいます。</p>

      <h3>数列の極限</h3>
      <div class="example-box formula">
        <p>lim (n→∞) 1/n = 0</p>
        <p>lim (n→∞) (2n+1)/(3n−1) = 2/3（最高次の係数の比）</p>
      </div>

      <h3>関数の極限</h3>
      <div class="example-box formula">
        <p>lim (x→0) sin x / x = 1  ← 超重要公式！</p>
        <p>lim (x→∞) (1 + 1/x)ˣ = e ≈ 2.71828…</p>
      </div>

      <h3>不定形の処理</h3>
      <p>0/0 や ∞/∞ の形は、因数分解・有理化・ロピタルの定理で解消します。</p>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>極限は大学数学の入口です。「nを大きくしたらどうなる？」「xを近づけたらどうなる？」と常にイメージしましょう。</p>
      </div>
    `,
  },
  {
    slug: 'advanced-differentiation',
    title: '種々の微分法',
    grade: 'high-3',
    summary: '合成関数・三角関数・指数対数の微分を学ぼう。',
    keywords: ['合成関数', '三角関数の微分', '対数微分', '連鎖律'],
    order: 2,
    content: `
      <h2>📐 数Ⅲの微分</h2>
      <p>数Ⅱでは多項式だけでしたが、ここからは様々な関数を微分します。</p>

      <h3>基本公式</h3>
      <div class="example-box formula">
        <p>(sin x)' = cos x</p>
        <p>(cos x)' = −sin x</p>
        <p>(eˣ)' = eˣ</p>
        <p>(ln x)' = 1/x</p>
      </div>

      <h3>合成関数の微分（連鎖律）</h3>
      <div class="example-box formula">
        <p>{f(g(x))}' = f'(g(x)) · g'(x)</p>
        <p>例：(sin 3x)' = cos 3x · 3 = 3cos 3x</p>
      </div>

      <h3>積の微分・商の微分</h3>
      <div class="example-box formula">
        <p>(fg)' = f'g + fg'</p>
        <p>(f/g)' = (f'g − fg') / g²</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>合成関数の微分は「外側を微分 × 内側を微分」と覚えましょう。数Ⅲで最もよく使うテクニックです。</p>
      </div>
    `,
  },
  {
    slug: 'complex-numbers',
    title: '複素数平面',
    grade: 'high-3',
    summary: '虚数iと複素数平面の世界を探検しよう。',
    keywords: ['複素数', '虚数', 'i', '複素数平面', 'ド・モアブル'],
    order: 3,
    content: `
      <h2>💡 虚数単位 i</h2>
      <p>i² = −1 となる数を<strong>虚数単位</strong>といいます。実数では表せない「新しい数」です。</p>

      <h3>複素数</h3>
      <div class="example-box">
        <p>z = a + bi（aは実部、bは虚部）</p>
        <p>例：z = 3 + 2i</p>
      </div>

      <h3>複素数平面（ガウス平面）</h3>
      <p>横軸を実軸、縦軸を虚軸として複素数を点で表します。</p>
      <div class="example-box">
        <p>z = 3 + 2i → 点(3, 2)</p>
        <p>|z| = √(3² + 2²) = √13（原点からの距離＝絶対値）</p>
      </div>

      <h3>極形式とド・モアブルの定理</h3>
      <div class="example-box formula">
        <p>z = r(cosθ + i sinθ)</p>
        <p>zⁿ = rⁿ(cos nθ + i sin nθ) ← ド・モアブルの定理</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>複素数は電気工学や量子力学で実際に使われています。「虚数なんて現実に存在するの？」→ はい、交流回路の計算に不可欠です！</p>
      </div>
    `,
  },
  {
    slug: 'integration-advanced',
    title: '積分法（数学Ⅲ）',
    grade: 'high-3',
    summary: '置換積分・部分積分・体積・曲線の長さを学ぶ、数IIIの積分法。',
    keywords: ['置換積分', '部分積分', '体積', '回転体', '曲線の長さ'],
    order: 4,
    content: `
      <h2>📊 数Ⅲの積分法</h2>
      <p>数Ⅱの積分を大幅に拡張し、さまざまな関数の積分と応用を学びます。</p>

      <h3>置換積分法</h3>
      <div class="example-box formula">
        <p>∫ f(g(x))·g'(x) dx = ∫ f(t) dt　（t = g(x) と置換）</p>
        <p>例：∫ 2x·cos(x²) dx → t = x² と置くと → sin(x²) + C</p>
      </div>

      <h3>部分積分法</h3>
      <div class="example-box formula">
        <p>∫ f(x)g'(x) dx = f(x)g(x) − ∫ f'(x)g(x) dx</p>
        <p>例：∫ x·eˣ dx = x·eˣ − ∫ eˣ dx = x·eˣ − eˣ + C = (x−1)eˣ + C</p>
      </div>

      <h3>回転体の体積</h3>
      <div class="example-box formula">
        <p>y = f(x) をx軸のまわりに回転：<strong>V = π∫ₐᵇ {f(x)}² dx</strong></p>
        <p>例：y = x（0≦x≦1）を回転 → V = π∫₀¹ x² dx = π/3</p>
      </div>

      <h3>曲線の長さ</h3>
      <div class="example-box formula">
        <p>L = ∫ₐᵇ √(1 + {f'(x)}²) dx</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>置換積分は「合成関数の微分の逆」、部分積分は「積の微分の逆」。微分との双対関係を常に意識すると理解が深まります。</p>
      </div>
    `,
  },
  {
    slug: 'conic-sections',
    title: '二次曲線',
    grade: 'high-3',
    summary: '放物線・楕円・双曲線の方程式と幾何学的性質を学ぼう。',
    keywords: ['放物線', '楕円', '双曲線', '焦点', '二次曲線', '離心率'],
    order: 5,
    content: `
      <h2>🔭 二次曲線とは？</h2>
      <p>円錐を平面で切ったときにできる曲線群です。<strong>放物線・楕円・双曲線</strong>の3種類があります。</p>

      <h3>放物線</h3>
      <div class="example-box formula">
        <p><strong>y² = 4px</strong>（焦点(p, 0)、準線 x = −p）</p>
        <p>焦点までの距離 = 準線までの距離</p>
      </div>

      <h3>楕円</h3>
      <div class="example-box formula">
        <p><strong>x²/a² + y²/b² = 1</strong>（a > b > 0）</p>
        <p>2つの焦点 F₁, F₂ からの距離の和が一定（= 2a）</p>
        <p>焦点：(±c, 0)　ただしc² = a² − b²</p>
      </div>

      <h3>双曲線</h3>
      <div class="example-box formula">
        <p><strong>x²/a² − y²/b² = 1</strong></p>
        <p>2つの焦点からの距離の差が一定（= 2a）</p>
        <p>漸近線：y = ±(b/a)x</p>
      </div>

      <h3>媒介変数表示と極座標</h3>
      <div class="example-box">
        <p>楕円の媒介変数表示：x = a cos t, y = b sin t</p>
        <p>極座標：二次曲線は r = ed/(1 − e cos θ) で統一的に表せる</p>
      </div>

      <div class="teacher-tip">
        <p>👩‍🏫 <strong>先生のポイント：</strong>楕円は惑星の軌道（ケプラーの法則）、放物線は投射体の軌道、双曲線はGPS測位に使われています。二次曲線は自然界に溢れているのです！</p>
      </div>
    `,
  },
];
