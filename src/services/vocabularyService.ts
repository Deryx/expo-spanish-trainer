import DatabaseOperations from "./database/DatabaseOperations";
import Category from "../types/Category";
import Vocabulary from "../types/Vocabulary";

class VocabularyService {
    async getAllCategories() {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM categories ORDER by category ASC`
        );

        return result.rows.raw() as Category[];
    }

    async getAllWords() {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM vocabulary ORDER BY word ASC`
        );

        return result.rows.raw() as Vocabulary[];
    }
    
    async getCategoryWords(categoryId: number): Promise<Vocabulary[]> {
        const result: any = await DatabaseOperations.executeQuery(
            `SELECT * FROM vocabulary WHERE category = ? ORDER BY word ASC`,
            [categoryId]
        );

        return result.rows.raw() as Vocabulary[];
    }
};


export default new VocabularyService();