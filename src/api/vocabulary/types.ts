import { ApiResponse, ApiError } from '../types';

export type VocabularyItem = {
  id: number;
  category: number;
  word: string;
  translation: string;
  pronunciation: string;
  imageUrl?: string;
};

export type QuizQuestion = {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
};

export type QuizSession = {
  id: string;
  questions: QuizQuestion[];
  score?: number;
  completed: boolean;
};

// API response types
export type VocabularyListResponse = ApiResponse<VocabularyItem[]>;
export type QuizSessionResponse = ApiResponse<QuizSession>;
export type QuizResultResponse = ApiResponse<{ score: number }>;

// Error types
export type VocabularyError = ApiError & {
  errorType?: 'invalid_category' | 'quiz_generation_failed';
};