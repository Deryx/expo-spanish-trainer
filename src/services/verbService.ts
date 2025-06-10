import DatabaseOperations from "./database/DatabaseOperations";

export type TenseItem = {
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

class VerbService {
    async getAllTenses() {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM tenses ORDER BY tense ASC`
        );

        return result.rows.raw() as TenseItem[];
    }

    async getAllVerbs() {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM verbs ORDER BY infinitive ASC`
        );

        return result.rows.raw() as VerbItem[];
    }

    async getConjugatedVerb(verbId: number, tenseId: number) {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM conjugations WHERE verb = ? AND tense = ? LIMIT 1`,
            [verbId, tenseId]
        );

        return result.rows.raw() as ConjugationItem[];
    }
}

export default new VerbService();