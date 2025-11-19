import db from "../db/db.js";

const BookModel = {
    addBook: async (data) => {
        const [result] = await db.query(
  "INSERT INTO books (title, author, quantity, price, category, cover) VALUES (?, ?, ?, ?, ?, ?)",
  [data.title, data.author, data.quantity, data.price, data.category, data.cover]
);
        return result;
    },

    updateQuantity: async (price, quantity, title, id) => {
  console.log(`UPDATE books SET price = ${price}, quantity = ${quantity}, title = ${title} WHERE id = ${id}`);

  try {
    const [result] = await db.query(
      "UPDATE books SET price = ?, quantity = ?, title = ? WHERE id = ?",
      [price, quantity, title, id]
    );
    return result;
  } catch (error) {
    return error;
  }
},

    deleteBook: async (id) => {
        const [result] = await db.query("DELETE FROM books WHERE id = ?", [id]);
        return result;
    },

    getBooks: async () => {
        const [rows] = await db.query("SELECT * FROM books");
        return rows;
    },
    buyBook:async(data)=>{
        const [result]=await db.query(
            "INSERT INTO purchases (user_name,user_email,book_id,quantity,Category,payment,purchase_date,book_price) VALUES (?,?,?,?,?,?,?,?)",
            [data.user_name,data.user_email,data.book_id,data.quantity,data.Category,data.payment,data.purchase_date,data.book_price]
        );
        return result;
    },
    returnBooks:async(data)=>{
       const [result] = await db.query(
  "INSERT INTO returnBooks (user_name, user_email, book_id, book_price, quantity, return_date) VALUES (?, ?, ?, ?, ?, ?)",
  [
    data.user_name,
    data.user_email,
    data.book_id,
    data.book_price,
    data.quantity,
    data.return_date
  ]
);
        return result;
    }
};

export default BookModel;
