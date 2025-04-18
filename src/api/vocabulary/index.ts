import { apiGet, apiPost, apiDelete } from '../client';
import type { VocabularyItem, QuizParams } from '../../types';

/**
 * Fetch vocabulary by category
 */
export const fetchVocabulary = async (
  category?: string
): Promise<VocabularyItem[]> => {
  const endpoint = category ? `/vocabulary?category=${category}` : '/vocabulary';
  return apiGet(endpoint);
};

/**
 * Create flashcard
 */
export const createFlashcard = async (
  item: Omit<VocabularyItem, 'id'>
): Promise<VocabularyItem> => {
  return apiPost('/vocabulary', item);
};

/**
 * Start vocabulary quiz
 */
export const startQuiz = async (
  params: QuizParams
): Promise<QuizSessionResponse> => {
  return apiPost('/vocabulary/quiz', params);
};

/**
 * Delete vocabulary item
 */
export const deleteVocabularyItem = async (id: string): Promise<void> => {
  return apiDelete(`/vocabulary/${id}`);
};

// Export all vocabulary-related API calls
export const vocabularyApi = {
  fetchVocabulary,
  createFlashcard,
  startQuiz,
  deleteVocabularyItem,
};