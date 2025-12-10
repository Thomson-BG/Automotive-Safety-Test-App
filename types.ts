export enum AppMode {
  MENU = 'MENU',
  QUIZ = 'QUIZ',
  DIAGNOSTIC = 'DIAGNOSTIC',
  PROFILE = 'PROFILE'
}

export enum Topic {
  ENGINE = 'Engine Performance',
  BRAKES = 'Brakes & Hydraulics',
  ELECTRICAL = 'Electrical Systems',
  SUSPENSION = 'Suspension & Steering',
  HVAC = 'Heating & Air Conditioning',
  TRANSMISSION = 'Transmission & Drivetrain'
}

export interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface DiagnosticScenario {
  id: string;
  vehicle: string;
  complaint: string;
  details: string;
  correctDiagnosis: string;
  options: string[];
  explanation: string;
}

export interface UserStats {
  xp: number;
  level: number;
  rank: string;
  streak: number;
}