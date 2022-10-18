const db = require('../db')
const UserService = require('../Service/user.service')

class UserController {
    async createUser(req, res) {
        try {
            const user = await UserService.createUser(req.body)
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getUsers(req, res) {
        try {
            const users = await UserService.getUsers(req)
            res.json(users)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOneUser(req, res) {
        try {
            const user = await UserService.getOneUser(req, res)
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updateUser(req, res) {
        try {
            const user = await UserService.updateUser(req, res);
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deleteUser(req, res) {
        try {
            const id = req.params.id
            const user = await UserService.deleteUser(req, res)
            res.json(user.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new UserController();