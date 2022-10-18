const db = require('../db')
class PostController {
    async createPost(req, res) {
        const {user_id, title, description} = req.body
        const newPost = await db.query(
            'INSERT INTO posts (user_id, title, description) values ($1, $2, $3) RETURNING *' , [user_id, title, description]
        )
        res.json(newPost.rows[0])
    }
    async getPosts(req, res) {
        const users = await db.query('SELECT * FROM persons')
        console.log(users)
        res.json(users.rows)
    }
    async getOnePost(req, res) {
        const id = req.params.id
        const user = await db.query('SELECT * FROM persons where id = $1', [id])
        res.json(user.rows[0])
    }
    async updatePost(req, res) {
        const {id, name, surname} = req.body
        const user = await db.query('UPDATE persons set name = $1, surname = $2 where id = $3 RETURNING * ',
            [name, surname, id]
        )
        res.json(user.rows[0])
    }
    async deletePost(req, res) {
        const id = req.params.id
        const user = await db.query('DELETE FROM persons where id = $1', [id])
        res.json(user.rows[0])
    }
}

module.exports = new PostController();