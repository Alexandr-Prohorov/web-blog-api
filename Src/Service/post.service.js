const db = require("../../db");

class PostService {
    async createPost(post) {
        const {user_id, title, description} = post
        const newPost = await db.query('INSERT INTO posts (user_id, title, description) values ($1, $2, $3) RETURNING *',
            [user_id, title, description]
        )
        return newPost;
    }
    async getPosts() {
        const posts = await db.query('SELECT * FROM posts')
        return posts.rows;
    }
    async getOnePost(req) {
        const id = req.params.id
        const post = await db.query('SELECT * FROM posts where id = $1', [id])
        return post;
    }
    async updatePost(req, res) {
        const {id, user_id, title, description} = req.body
        const post = await db.query(
            'UPDATE posts set user_id = $1, title = $2, description = $3 where id = $4 RETURNING * ',
            [id, user_id, title, description]
        )
        return post;
    }
    async deletePost(req, res) {
        const id = req.params.id
        const post = await db.query('DELETE FROM posts where id = $1', [id])
        return post;
    }
}



module.exports = new PostService();