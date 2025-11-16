import  BookService  from "../services/bookService.js";

const BookController = {
    addBook: async (req, res) => {
        try {
            const { title, author, quantity, price } = req.body;
            console.log(req.body);

            const result = await BookService.addBook({
                title,
                author,
                quantity,
                price,
            });

            res.json({ success: true, id: result.insertId });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },

    updateQuantity: async (req, res) => {
        try {
            const { id } = req.params;
            const { quantity } = req.body;

            await BookService.updateQuantity(id, quantity);

            res.json({ success: true, message: "Quantity updated" });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },

    deleteBook: async (req, res) => {
        try {
            const { id } = req.params;

            await BookService.deleteBook(id);

            res.json({ success: true, message: "Book deleted" });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },

    getBooks: async (req, res) => {
        try {
            const books = await BookService.listBooks();
            res.json({ success: true, books });
        } catch (err) {
            res.status(500).json({ error: "Server error" });
            console.log(err);
        }
    },
};

export default BookController;
