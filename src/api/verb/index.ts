import { apiGet, apiPost, apiPut, apiDelete } from '../client';
import type { Verb, ConjugationParams, ConjugationResult } from '../../types';

/**
 * Fetch all verbs
 */
export const fetchVerbs = async (): Promise<Verb[]> => {
  return apiGet('/verbs');
};

/**
 * Get specific verb by ID
 */
export const fetchVerbById = async (id: string): Promise<Verb> => {
  return apiGet(`/verbs/${id}`);
};

/**
 * Conjugate a verb
 */
export const conjugateVerb = async (
  verbId: string,
  params: ConjugationParams
): Promise<ConjugationResult> => {
  return apiPost(`/verbs/${verbId}/conjugate`, params);
};

/**
 * Create a new verb
 */
export const createVerb = async (verbData: Omit<Verb, 'id'>): Promise<Verb> => {
  return apiPost('/verbs', verbData);
};

/**
 * Update a verb
 */
export const updateVerb = async (
  id: string,
  verbData: Partial<Verb>
): Promise<Verb> => {
  return apiPut(`/verbs/${id}`, verbData);
};

/**
 * Delete a verb
 */
export const deleteVerb = async (id: string): Promise<void> => {
  return apiDelete(`/verbs/${id}`);
};

// Export all verb-related API calls as a single object
export const verbApi = {
  fetchVerbs,
  fetchVerbById,
  conjugateVerb,
  createVerb,
  updateVerb,
  deleteVerb,
};