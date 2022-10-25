const User = require("../Models/User")
const GetAllUsers = require("../BusinnesLayer/GetAllUsers")

class UserController {
    async createUser(req, res) {
        try {
            const {name, surname} = req.body
            const newUser = await User.create({ name: name, surname: surname })
            res.json(newUser)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getUsers(req, res) {
        try {
            // const users = await User.findAll()
            // res.json(users)
            const users = await GetAllUsers.constructorUsers()
            const result = users.getResult();
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneUser(req, res) {
        try {
            const id = req.params.id
            const user = await User.findOne({ where: { id: id }})
            res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updateUser(req, res) {
        try {
            const {name, surname} = req.body
            const id = req.params.id
            await User.update({ name: name, surname: surname }, {where: {id: id}});
            const user = await User.findOne({ where: { id: id }})
            res.json(user)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteUser(req, res) {
        try {
            const user = await UserService.deleteUser(req, res)
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new UserController();