import { ApiResponse, ApiError } from '../types';


export type Verb = {
  id: string;
  infinitive: string;
  translation: string;
  pronunciation: string;
};

export type Conjugation = {
    id: string;
    verb: string;
    tense: string;
    yo: string;
    tu: string;
    el: string;
    nosotros: string;
    vosotros: string;
    ellos: string;
};

// Conjugation parameters
export type ConjugationParams = {
  tense: 
    | 'present' 
    | 'past' 
    | 'future' 
    | 'conditional';
  mood?: 'indicative' | 'subjunctive' | 'imperative';
  pronoun?: 'yo' | 'tú' | 'él' | 'nosotros' | 'vosotros' | 'ellos';
};

// Conjugation result
export type ConjugationResult = {
  conjugatedForm: string;
  tense: string;
  pronoun: string;
};

// API response types
export type VerbsResponse = ApiResponse<Verb[]>;
export type VerbResponse = ApiResponse<Verb>;
export type ConjugationResponse = ApiResponse<ConjugationResult>;

// Error types
export type VerbError = ApiError & {
  errorType?: 'conjugation_error' | 'verb_not_found';
};