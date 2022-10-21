const db = require("../db");
const User = require("../Models/User")

class UserService {
    async createUser(user) {
        const {name, surname} = user
        // const newUser = await db.query('INSERT INTO persons (name, surname) values ($1, $2) RETURNING *',
        //     [name, surname]
        // )
        const newUser = await User.create({ name: name, surname: surname })
        console.log(newUser.toJSON())
        console.log(JSON.stringify(newUser, null, 2))
        return newUser;
    }
    async getUsers() {
        const users = await new User.findAll()
        return users.rows;
    }
    async getOneUser(req) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM persons where id = $1', [id])
        return user;
    }
    async updateUser(req) {
        const {id, name, surname} = req.body
        const user = await db.query('UPDATE persons set name = $1, surname = $2 where id = $3 RETURNING * ',
            [name, surname, id]
        )
        return user;
    }
    async deleteUser(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM persons where id = $1', [id])
        return user;
    }
}



module.exports = new UserService();