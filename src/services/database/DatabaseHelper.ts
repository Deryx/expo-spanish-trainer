import SQLite from 'react-native-sqlite-storage';

class DatabaseHelper {
    db: SQLite.SQLiteDatabase | null;

    constructor() {
        this.db = null;
    }

    async openDatabase() {
        try {
            this.db = await SQLite.openDatabase({
               name: 'spanish.db',
               location: 'default',
               createFromLocation: '~spanish.db' 
            })
        } catch (error) {
            throw error;
        }
    }
    
    async closeDatabase() {
        if (this.db) {
            try {
                await this.db.close();
                console.log('Database closed');
                this.db = null;
            } catch (error) {
                console.error('Error closing database:', error);
            }
        }
    }
    
      // Get database instance
    getDatabase() {
        return this.db;
    }
}

export default new DatabaseHelper();