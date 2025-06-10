import DatabaseOperations from "./database/DatabaseOperations";

export type CategoryItem = {
    id: number;
    category: string;
}

type VocabularyItem = {
    id: number;
    word: string;
    translation: string;
    pronunciation: string;
    category: number;
    gender?: string;
    image?: string;
}

class VocabularyService {
    async getAllCategories() {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM categories ORDER by category ASC`
        );

        return result.rows.raw() as CategoryItem[];
    }

    async getAllWords() {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM vocabulary ORDER BY word ASC`
        );

        return result.rows.raw() as VocabularyItem[];
    }
    
    async getCategoryWords(categoryId: number) {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM vocabulary WHERE category = ? ORDER BY word ASC`,
            [categoryId]
        );

        return result.rows.raw() as CategoryItem[];
    }
};


export default new VocabularyService();