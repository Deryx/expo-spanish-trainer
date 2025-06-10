import DatabaseHelper from './DatabaseHelper';

class DatabaseOperations {
  async executeQuery(query: string, params : (number | string)[] = []) {
    try {
      const db = DatabaseHelper.getDatabase();
      if (!db) {
        throw new Error('Database connection not established');
      }

      const [results] = await db.executeSql(query, params);
      return results;
    } catch (error) {
      console.error('Query execution error:', error);
      throw error;
    }
  }

  async executeTransaction(queries: { query: any; params?: never[] | undefined; }[]) {
    const db = DatabaseHelper.getDatabase();
    if (!db) {
      throw new Error('Database connection not established');
    }

    return new Promise<void>((resolve, reject) => {
      db.transaction(
        (tx) => {
          queries.forEach(({ query, params = [] }) => {
            tx.executeSql(query, params);
          });
        },
        (error) => {
          console.error('Transaction failed:', error);
          reject(error);
        },
        () => {
          console.log('Transaction completed successfully');
          resolve();
        }
      );
    });
  }
}

export default new DatabaseOperations();