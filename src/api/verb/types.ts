import { ApiResponse, ApiError } from '../../api/types';


export type Verb = {
  id: number;
  infinitive: string;
  translation: string;
  pronunciation: string;
};

export type Conjugation = {
    id: number;
    verb: string;
    tense: string;
    yo: string;
    tu: string;
    el: string;
    nosotros: string;
    vosotros: string;
    ellos: string;
};

export type VerbParams = {
    id: number;
}

// Conjugation parameters
export type ConjugationParams = {
    verb: number;
    tense: number;
};

// Conjugation result
export type ConjugationResult = {
  tense: string;
  pronoun: string;
  yo: string;
  tu: string;
  el: string;
  nosotros: string;
  vosotros: string;
  ellos: string;
};

export type ConjugationQuestion = {
    question: string;
    userAnswers: {
        verb: string;
        tense: string;
        yo: string;
        tu: string;
        el: string;
        nosotros: string;
        vosotros: string;
        ellos: string;
    };
    correctAnswers: {
        verb: string;
        tense: string;
        yo: string;
        tu: string;
        el: string;
        nosotros: string;
        vosotros: string;
        ellos: string;
    };
}

export type ConjugationSession = {
  id: string;
  questions: ConjugationQuestion[];
  score?: number;
  completed: boolean;
}

// API response types
export type VerbsResponse = ApiResponse<Verb[]>;
export type VerbResponse = ApiResponse<Verb>;
export type ConjugationResponse = ApiResponse<ConjugationResult>;

// Error types
export type VerbError = ApiError & {
  errorType?: 'conjugation_error' | 'verb_not_found';
};