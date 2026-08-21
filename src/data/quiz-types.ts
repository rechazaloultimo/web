// src/data/quiz-types.ts
export interface Question {
  text: string;
  options: string[];
  correct: number;
}

export interface QuizMeta {
  id: string;
  category?: string;
  title: string;
  description: string;
  questions: Question[];
}

