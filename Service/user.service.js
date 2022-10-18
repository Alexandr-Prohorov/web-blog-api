const db = require("../db");

class UserService {
    async createUser(user) {
        const {name, surname} = user
        const newUser = await db.query('INSERT INTO persons (name, surname) values ($1, $2) RETURNING *',
            [name, surname]
        )
        return newUser;
    }
    async getUsers() {
        const users = await db.query('SELECT * FROM persons')
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
        res.json(user.rows[0])
        return user;
    }
}



module.exports = new UserService();