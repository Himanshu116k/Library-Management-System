const UserService = require("../services/userService");

const UserController = {

    getUsers: async (req, res) => {
        try {
            const users = await UserService.getUsers();
            res.json({ success: true, users });
        } catch (error) {
            res.status(500).json({ message: "Server Error", error });
        }
    },

    createUser: async (req, res) => {
        try {
            const result = await UserService.createUser(req.body);
            res.json({ success: true, insertId: result.insertId });
        } catch (error) {
            res.status(500).json({ message: "Server Error", error });
        }
    }

};

module.exports = UserController;
