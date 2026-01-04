// types.ts

/**
 * Represents the different screens/views in the application.
 */
export enum AppScreen {
  HOME = 'home',
  CATEGORIES = 'categories',
  QUIZ = 'quiz',
  RESULTS = 'results',
}

/**
 * Represents a single quiz question.
 */
export interface QuizQuestion {
  question: string;
  options: string[]; // Array of 4 options
  answer: string; // The correct option text
}

/**
 * Represents a quiz category, containing its ID, name, emoji, and a list of questions.
 */
export interface QuizCategory {
  id: string;
  name: string;
  emoji: string;
  questions: QuizQuestion[];
}

/**
 * Represents the high score stored in local storage for a specific category.
 */
export interface HighScore {
  score: number;
  date: string; // Date string for when the score was achieved
}
