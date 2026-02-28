/** 学年レベル */
export type GradeLevel =
  | 'elementary-1' | 'elementary-2' | 'elementary-3'
  | 'elementary-4' | 'elementary-5' | 'elementary-6'
  | 'junior-1' | 'junior-2' | 'junior-3'
  | 'high-1' | 'high-2' | 'high-3';

export type SchoolStage = 'elementary' | 'junior' | 'high';

export interface GradeInfo {
  key: GradeLevel;
  stage: SchoolStage;
  label: string;        // e.g. "小学1年"
  shortLabel: string;   // e.g. "1年"
  color: string;
  icon: string;
}

/** 教科課程の単元 */
export interface MathTopic {
  slug: string;
  title: string;
  grade: GradeLevel;
  summary: string;
  content: string;      // HTML
  keywords: string[];
  order: number;
}

/** 数学用語 */
export interface MathTerm {
  slug: string;
  term: string;
  reading: string;      // ふりがな
  definition: string;
  example?: string;
  relatedTerms?: string[];
  category: string;     // 数と計算, 図形, etc.
}

/** 数学者 */
export interface Mathematician {
  slug: string;
  name: string;
  nameJa: string;
  born: string;
  died: string;
  nationality: string;
  portrait: string;     // emoji placeholder
  summary: string;
  biography: string;    // HTML
  achievements: string[];
  episodes: string[];   // 有名なエピソード
  famousQuote?: string;
}
