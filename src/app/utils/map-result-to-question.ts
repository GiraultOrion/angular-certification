import { Question, ResultResponse } from "@models";
import { shuffle } from "./shuffle-array";

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
                answers: shuffle([...result.incorrect_answers, result.correct_answer])
            }
        }
    )
}