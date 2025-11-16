import db from "../db/db.js";

const BookModel = {
    addBook: async (data) => {
        const [result] = await db.query(
            "INSERT INTO books (title, author, quantity, price) VALUES (?, ?, ?, ?)",
            [data.title, data.author, data.quantity, data.price]
        );
        return result;
    },

    updateQuantity: async (id, quantity) => {
        const [result] = await db.query(
            "UPDATE books SET quantity = ? WHERE id = ?",
            [quantity, id]
        );
        return result;
    },

    deleteBook: async (id) => {
        const [result] = await db.query("DELETE FROM books WHERE id = ?", [id]);
        return result;
    },

    getBooks: async () => {
        const [rows] = await db.query("SELECT * FROM books");
        return rows;
    }
};

export default BookModel;
