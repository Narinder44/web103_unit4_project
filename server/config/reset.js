import { pool } from './database.js';
import "./dotenv.js"
import { mockData } from '../data/mockData.js';

const seedCustomItemsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS custom_items;
        CREATE TABLE IF NOT EXISTS custom_items (
            id SERIAL PRIMARY KEY,
            category TEXT,
            title TEXT NOT NULL,
            description TEXT,
            start_date DATE,
            end_date DATE,
            icon TEXT,
            created_at DATE,
            updated_at DATE,
            is_public BOOLEAN DEFAULT TRUE
        )
    `;
    try {
        await pool.query(createTableQuery);
        console.log('🎉 custom_items table created successfully');
    } catch (err) {
        console.error('⚠️ error creating custom_items table', err);
    }

    mockData.forEach((item) => {
        const insertQuery = {
            text: `INSERT INTO custom_items (id, category, title, description, start_date, end_date, icon, created_at, updated_at, is_public)
                         VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            values: [
                item.id,
                item.category,
                item.title,
                item.description,
                item.start_date,
                item.end_date,
                item.icon,
                item.created_at,
                item.updated_at,
                item.is_public
            ],
        };

        pool.query(insertQuery, (err) => {
            if (err) {
                console.error('⚠️ error inserting item', err);
                return;
            }
            console.log(`✅ ${item.title} added successfully`);
        });
    });
};
seedCustomItemsTable();

