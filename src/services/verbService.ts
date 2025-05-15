import { Database } from './database';

type TenseItem = {
    id: number;
    tense: string;
}

type VerbItem = {
    id: number;
    infinitive: string;
    translation: string;
    pronunciation: string;
}

type ConjugationItem = {
    id: number;
    verb: number;
    tense: number;
    yo: string;
    tu: string;
    el: string;
    nosotros: string;
    vosotros: string;
    ellos: string;
}

export const Tense = {
    async getAllTenses() {
        const result: any = await Database.executeQuery(
            `SELECT * FROM tenses ORDER by tense ASC`
        );

        return result.rows.raw() as TenseItem[];
    }
}

export const Verbs = {
    async getAllVerbs() {
        const result: any = await Database.executeQuery(
            `SELECT * FROM verbs ORDER by verb ASC`
        );

        return result.rows.raw() as VerbItem[];
    }
}

export const Conjugations = {
    async getTenseConjugations(tenseId: number) {
        const result: any = await Database.executeQuery(
            `SELECT * FROM conjugations WHERE tense = ${tenseId} Order by verb ASC`
        );

        return result.rows.raw() as ConjugationItem[];
    }
}