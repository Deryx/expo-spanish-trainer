import { ApiResponse, ApiError } from '../types';

export type VocabularyCategory = {
  id: string;
  category: string;
}

export type VocabularyItem = {
    id: string;
    word: string;
    translation: string;
    image?: string;
    category: VocabularyCategory;
    gender?: string;
    pronunciation: string;
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