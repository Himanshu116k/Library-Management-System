import BookModel  from "../models/bookModel.js";

const BookService = {
    addBook: async (data) => {
        return await BookModel.addBook(data);
    },

    updateQuantity: async (id, quantity) => {
        return await BookModel.updateQuantity(id, quantity);
    },

    deleteBook: async (id) => {
        return await BookModel.deleteBook(id);
    },

    listBooks: async () => {
        return await BookModel.getBooks();
    }
};
export default BookService;
