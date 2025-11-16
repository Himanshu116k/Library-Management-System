const db = require("../config/db");

const UserModel = {
    getAll: async () => {
        const [rows] = await db.query("SELECT * FROM users");
        return rows;
    },

    create: async (data) => {
        const [result] = await db.query(
            "INSERT INTO users (name, email) VALUES (?, ?)",
            [data.name, data.email]
        );
        return result;
    }
}

module.exports = UserModel;
