const pool = require('../database');

const getItems = async (req, res) => {
  try {
    const items = await pool.query('SELECT * FROM custom_items');
    res.status(200).json(result.rows);
} catch (err) {
    res.status(500).json({ error: error.message });
}
};

export const getItemById = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
        const result = await pool.query('SELECT * FROM custom_items WHERE id = $1', [id]);

        if (result.rows.length) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: "CustomItem not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createItem = async (req, res) => {
    const { category, title, description, start_date, end_date, icon } = req.body;

    try {
        const result = await pool.query(
            'INSERT INTO custom_items (category, title, description, start_date, end_date, icon, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW()) RETURNING *',
            [category, title, description, start_date, end_date, icon]
        );
        res.status(201).json(result.rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateItem = async (req, res) => {
    const id = parseInt(req.params.id, 10);
    const { category, title, description, start_date, end_date, icon } = req.body;

    try {
        const result = await pool.query(
            'UPDATE custom_items SET category = $1, title = $2, description = $3, start_date = $4, end_date = $5, icon = $6, updated_at = NOW() WHERE id = $7 RETURNING *',
            [category, title, description, start_date, end_date, icon, id]
        );

        if (result.rows.length) {
            res.status(200).json(result.rows[0]);
        } else {
            res.status(404).json({ message: "CustomItem not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
const deleteItem = async (req, res) => {
    const id = parseInt(req.params.id, 10);

    try {
        const result = await pool.query('DELETE FROM custom_items WHERE id = $1 RETURNING *', [id]);

        if (result.rows.length) {
            res.status(200).json({ message: "CustomItem deleted successfully" });
        } else {
            res.status(404).json({ message: "CustomItem not found" });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};