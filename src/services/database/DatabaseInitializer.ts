import DatabaseHelper from './DatabaseHelper';

class DatabaseInitializer {
  async initializeDatabase() {
    try {
      const db = await DatabaseHelper.openDatabase();
      await this.createTables(db);
      console.log('Database initialized successfully');
    } catch (error) {
      console.error('Database initialization failed:', error);
    }
  }

  async createTables(db: any) {
        const createCategoriesTable = `
            CREATE TABLE IF NOT EXISTS categories (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category TEXT
            );
        `;
    
        const createVocabularyTable = `
            CREATE TABLE IF NOT EXISTS vocabulary (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                category INTEGER,
                word TEXT,
                translation TEXT,
                pronunciation TEXT,
                gender? TEXT,
                image? TEXT
            );
        `;
    
        const createTensesTable = `
            CREATE TABLE IF NOT EXISTS tenses (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                tense TEXT
            );
        `;
    
        const createVerbsTable = `
            CREATE TABLE IF NOT EXISTS verbs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                infinitive TEXT,
                translation TEXT,
                pronunciation TEXT
            );
        `;
    
        const createConjugationsTable = `
            CREATE TABLE IF NOT EXISTS conjugations (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                verb INTEGER,
                tense INTEGER,
                yo TEXT,
                tu TEXT,
                el TEXT,
                nosotros TEXT,
                vosotros TEXT,
                ellos TEXT
            );
        `;   
        
        await db.executeQuery(createCategoriesTable);
        await db.executeQuery(createVocabularyTable);
        await db.executeQuery(createTensesTable);
        await db.executeQuery(createVerbsTable);
        await db.executeQuery(createConjugationsTable);
    }
}

export default new DatabaseInitializer();