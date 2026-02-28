export type CalculatorCategory =
  | 'daily'
  | 'math'
  | 'engineering'
  | 'chemistry'
  | 'health'
  | 'accounting'
  | 'tax';

export interface CategoryInfo {
  key: CalculatorCategory;
  label: string;
  description: string;
  icon: string;
  color: string;
  gradient: string;
}

export interface CalculatorInfo {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: CalculatorCategory;
  keywords: string[];
}
