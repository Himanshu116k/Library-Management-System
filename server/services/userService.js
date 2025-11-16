const UserModel = require("../models/userModel");

const UserService = {
    getUsers: async () => {
        return await UserModel.getAll();
    },

    createUser: async (userData) => {
        return await UserModel.create(userData);
    }
};

module.exports = UserService;
