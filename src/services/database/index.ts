import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
    { name: 'spanish.db', location: 'default' },
    () => console.log('Database connected'),
    (error) => console.log('Database error', error)
);

const initializeDatabase = () => {
    db.transaction((tx) => {
        // Categories table
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS categories (
                id INTER PRIMARY KEY AUTOINCREMENT,
                category TEXT NOT NULL
            )`
        );

        // Vocabulary table
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS vocabulary (
                id INTER PRIMARY KEY AUTOINCREMENT,
                category NUMBER NOT NULL,
                word TEXT NOT NULL,
                translation TEXT NOT NULL,
                pronunciation TEXT NOT NULL,
                gender TEXT,
                image TEXT
            )`
        );

        // Tense table
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS tenses (
                id INTER PRIMARY KEY AUTOINCREMENT,
                tense TEXT NOT NULL
            )`
        );

        // Verbs table
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS verbs (
                id INTER PRIMARY KEY AUTOINCREMENT,
                infinitive TEXT,
                translation TEXT,
                pronunciation TEXT
            )`
        );

        // Conjugations table
        tx.executeSql(
            `CREATE TABLE IF NOT EXISTS conjugations (
                id INTER PRIMARY KEY AUTOINCREMENT,
                verb NUMBER NOT NULL,
                tense NUMBER NOT NULL,
                yo TEXT NOT NULL,
                tu TEXT NOT NULL,
                el TEXT NOT NULL,
                nosotros TEXT NOT NULL,
                vosotros TEXT NOT NULL,
                ellos TEXT NOT NULL
            )`
        );
    });
};

export const Database = {
    db,
    initializeDatabase,
    executeQuery: ( query: string, params: any[] = []) => {
        return new Promise((resolve, reject) => {
            db.transaction((tx) => {
                tx.executeSql(
                    query,
                    params,
                    (_, result) => resolve(result),
                    (_, error) => reject(error)
                )
            })
        })
    }
}