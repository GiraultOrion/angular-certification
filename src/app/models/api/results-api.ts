export interface Result {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: Array<string>;
  question: string;
  type: string;
}

export interface ResultResponse {
  response_code: string;
  results: Array<Result>;
}
