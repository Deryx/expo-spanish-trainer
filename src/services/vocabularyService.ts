import { Database } from './database';

type CategoryItem = {
    id: number;
    category: string;
}

type VocabularyItem = {
    id: number;
    word: string;
    translation: string;
    pronunciation: string;
    category: number;
    gender: string;
    image?: string;
}

export const Category = {
    async getAllCategories() {
        const result: any = await Database.executeQuery(
            `SELECT * FROM categories ORDER by category ASC`
        );

        return result.rows.raw() as CategoryItem[];
    }
}

export const Vocabulary = {
    async getAllWords() {
        const result: any = await Database.executeQuery(
            `SELECT * FROM vocabulary ORDER BY word ASC`
        );

        return result.rows.raw() as VocabularyItem[];
    }
}

export const CategoryWords = {
    async getCategoryWords(categoryId: number) {
        const result: any = await Database.executeQuery(
            `SELECT * FROM vocabulary WHERE category = ${categoryId} ORDER BY word ASC`
        );

        return result.rows.raw() as VocabularyItem[];
    }
}