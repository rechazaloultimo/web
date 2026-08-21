// src/data/quizzes.ts
export type { Question, QuizMeta } from "./quiz-types";
import type { QuizMeta } from "./quiz-types";
import { auriculoterapiaQuizzes } from "./quizzes-auriculoterapia";
import { diagnosticoQuizzes } from "./quizzes-diagnostico";
import { anatomiaQuizzes } from "./quizzes-anatomia";
import { meridianosnombresQuizzes } from "./quizzes-meridianosnombres";
import { meridianosanatomiaQuizzes } from "./quizzes-meridianosanatomia";
import { meridianosclinicaQuizzes } from "./quizzes-meridianosclinica";
import { masajesQuizzes } from "./quizzes-masajes.ts";

const withSourceId = (quizzes: QuizMeta[], source: string): QuizMeta[] =>
  quizzes.map((quiz) => ({
    ...quiz,
    id: `${source}-${quiz.id}`,
  }));

export const quizzes: QuizMeta[] = [
  ...withSourceId(auriculoterapiaQuizzes, "auriculoterapia"),
  ...withSourceId(diagnosticoQuizzes, "diagnostico"),
  ...withSourceId(anatomiaQuizzes, "anatomia"),
  ...withSourceId(masajesQuizzes, "tuina"),
  ...withSourceId(meridianosnombresQuizzes, "nombres"),
  ...withSourceId(meridianosanatomiaQuizzes, "anatomia-meridianos"),
  ...withSourceId(meridianosclinicaQuizzes, "clinica-meridianos"),
];
