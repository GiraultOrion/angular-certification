export interface Question {
  id: number;
  category: string;
  correctAnswer: string;
  difficulty: string;
  answers: Array<string>;
  question: string;
  type: string;
}
