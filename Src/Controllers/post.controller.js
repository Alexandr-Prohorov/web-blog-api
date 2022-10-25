const db = require('../../db')
const PostService = require("../Service/post.service");

class PostController {
    async createPost(req, res) {
        try {
            const post = await PostService.createPost(req.body)
            res.json(post.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getPosts(req, res) {
        try {
            const posts = await PostService.getPosts(req)
            res.json(posts)
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async getOnePost(req, res) {
        try {
            const post = await PostService.getOnePost(req, res)
            res.json(post.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async updatePost(req, res) {
        try {
            const post = await PostService.updatePost(req, res);
            res.json(post.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
    async deletePost(req, res) {
        try {
            const post = await PostService.deletePost(req, res)
            res.json(post.rows[0])
        } catch (e) {
            res.status(500).json(e)
        }
    }
}

module.exports = new PostController();