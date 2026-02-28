import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'category/:category', loadComponent: () => import('./pages/category/category.component').then(m => m.CategoryComponent) },
  // 生活
  { path: 'calc/age', loadComponent: () => import('./calculators/age/age.component').then(m => m.AgeCalcComponent) },
  { path: 'calc/discount', loadComponent: () => import('./calculators/discount/discount.component').then(m => m.DiscountCalcComponent) },
  { path: 'calc/tip', loadComponent: () => import('./calculators/tip/tip.component').then(m => m.TipCalcComponent) },
  { path: 'calc/unit-converter', loadComponent: () => import('./calculators/unit-converter/unit-converter.component').then(m => m.UnitConverterCalcComponent) },
  { path: 'calc/date-diff', loadComponent: () => import('./calculators/date-diff/date-diff.component').then(m => m.DateDiffCalcComponent) },
  // 数学
  { path: 'calc/percentage', loadComponent: () => import('./calculators/percentage/percentage.component').then(m => m.PercentageCalcComponent) },
  { path: 'calc/quadratic', loadComponent: () => import('./calculators/quadratic/quadratic.component').then(m => m.QuadraticCalcComponent) },
  { path: 'calc/triangle', loadComponent: () => import('./calculators/triangle/triangle.component').then(m => m.TriangleCalcComponent) },
  { path: 'calc/circle', loadComponent: () => import('./calculators/circle/circle.component').then(m => m.CircleCalcComponent) },
  // 工学
  { path: 'calc/ohms-law', loadComponent: () => import('./calculators/ohms-law/ohms-law.component').then(m => m.OhmsLawCalcComponent) },
  { path: 'calc/power', loadComponent: () => import('./calculators/power/power.component').then(m => m.PowerCalcComponent) },
  { path: 'calc/velocity', loadComponent: () => import('./calculators/velocity/velocity.component').then(m => m.VelocityCalcComponent) },
  // 化学
  { path: 'calc/mol', loadComponent: () => import('./calculators/mol/mol.component').then(m => m.MolCalcComponent) },
  { path: 'calc/dilution', loadComponent: () => import('./calculators/dilution/dilution.component').then(m => m.DilutionCalcComponent) },
  { path: 'calc/ph', loadComponent: () => import('./calculators/ph/ph.component').then(m => m.PhCalcComponent) },
  // 健康
  { path: 'calc/bmi', loadComponent: () => import('./calculators/bmi/bmi.component').then(m => m.BmiCalcComponent) },
  { path: 'calc/calorie', loadComponent: () => import('./calculators/calorie/calorie.component').then(m => m.CalorieCalcComponent) },
  { path: 'calc/body-fat', loadComponent: () => import('./calculators/body-fat/body-fat.component').then(m => m.BodyFatCalcComponent) },
  // 会計
  { path: 'calc/compound-interest', loadComponent: () => import('./calculators/compound-interest/compound-interest.component').then(m => m.CompoundInterestCalcComponent) },
  { path: 'calc/loan', loadComponent: () => import('./calculators/loan/loan.component').then(m => m.LoanCalcComponent) },
  { path: 'calc/depreciation', loadComponent: () => import('./calculators/depreciation/depreciation.component').then(m => m.DepreciationCalcComponent) },
  // 税金
  { path: 'calc/consumption-tax', loadComponent: () => import('./calculators/consumption-tax/consumption-tax.component').then(m => m.ConsumptionTaxCalcComponent) },
  { path: 'calc/income-tax', loadComponent: () => import('./calculators/income-tax/income-tax.component').then(m => m.IncomeTaxCalcComponent) },
  { path: 'calc/salary', loadComponent: () => import('./calculators/salary/salary.component').then(m => m.SalaryCalcComponent) },
  { path: '**', redirectTo: '' },
];
