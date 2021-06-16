const { response, request } = require('express');

const Post = require('../models/post');

const listPosts = async(req = request, res = response) => {
    try {
        const posts = await Post.findAll({
            order: [
                ['id', 'DESC']
            ]
        });

        res.json({
            ok: true,
            msg: 'getPosts',
            posts
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to programmer'
        });
    }
}

const listPost = async(req = request, res = response) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id);

        if(!post) {
            return res.status(404).json({
                ok: false,
                msg: `There is no post with the id ${ id }`
            });
        }

        res.json({
            ok: true,
            msg: 'getPost',
            post
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to programmer'
        });
    }
}

const createPost = async(req = request, res = response) => {
    const { body } = req;

    try {
        // Cut image
        const cutImage = body.image.split('.');
        const extension = cutImage[cutImage.length - 1];

        // Validate extension
        const validExtensions = ['png', 'jpg'];

        if(!validExtensions.includes(extension)) {
            return res.status(400).json({
                msg: `La extension ${ extension } no es permitida, son validas las siguientes entensiones: ${ validExtensions }`
            });
        }

        const postSave = await Post.create(body);

        res.json({
            ok: true,
            msg: 'postPost',
            post: postSave
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to programmer'
        });
    }
}

const updatePost = async(req = request, res = response) => {
    const { id } = req.params;
    const { body } = req;

    try {
        const post = await Post.findByPk(id);

        if(!post) {
            return res.status(404).json({
                ok: false,
                msg: `There is no post with the id ${ id }`
            });
        }

        await post.update(body);

        res.json({
            ok: true,
            msg: 'putPost',
            post
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to programmer'
        });
    }
}

const removePost = async(req = request, res = response) => {
    const { id } = req.params;

    try {
        const post = await Post.findByPk(id);

        if(!post) {
            return res.status(404).json({
                ok: false,
                msg: `There is no post with the id ${ id }`
            });
        }

        await post.destroy();

        res.json({
            ok: true,
            msg: 'deletePost',
            post
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Talk to programmer'
        });
    }
}

module.exports = {
    listPosts,
    listPost,
    createPost,
    updatePost,
    removePost
}