import { pool } from './database.js';

const createTables = async () => {
    try {
        const queryText =
            `CREATE TABLE IF NOT EXISTS custom_items (
                id SERIAL PRIMARY KEY,
                category TEXT,
                title TEXT NOT NULL,
                description TEXT,
                start_date DATE,
                end_date DATE,
                icon TEXT,
                created_at DATE DEFAULT CURRENT_TIMESTAMP,
                updated_at DATE DEFAULT CURRENT_TIMESTAMP,
                is_public BOOLEAN DEFAULT TRUE
            );`

        await pool.query(queryText);
        console.log("Custom Items table created successfully!");

    } catch (err) {
        console.error("Error creating tables: ", err);
    }
};

createTables();