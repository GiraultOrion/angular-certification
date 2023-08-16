import { Question, ResultResponse } from "@models";

export function mapResultToQuestion(resultResponse: ResultResponse): Array<Question> {
    return resultResponse.results.map(
        (result, index) => {
            return {
                id: index + 1,
                category: result.category,
                correctAnswer: result.correct_answer,
                difficulty: result.difficulty,
                question: result.question,
                type: result.type,
                answers: [...result.incorrect_answers, result.correct_answer]
            }
        }
    )
}