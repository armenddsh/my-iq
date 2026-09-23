export type QuestionCategory = "logic" | "pattern" | "verbal-spatial";

export interface Question {
  id: number;
  text: string;
  options: readonly string[];
  correctAnswerIndex: number;
  category: QuestionCategory;
  explanation: string;
}
