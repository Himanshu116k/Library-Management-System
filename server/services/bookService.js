import BookModel  from "../models/bookModel.js";

const BookService = {
    addBook: async (data) => {
        return await BookModel.addBook(data);
    },

    updateQuantity: async (id, price, quantity, title) => {
  return await BookModel.updateQuantity(price, quantity, title, id);
},


    deleteBook: async (id) => {
        return await BookModel.deleteBook(id);
    },

    listBooks: async () => {
        return await BookModel.getBooks();
    },
    buyBook:async(data)=>{
        return await BookModel.buyBook(data);
    },
    returnBooks:async(data)=>{
        return await BookModel.returnBooks(data);
    }

};
export default BookService;
