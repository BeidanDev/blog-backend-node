const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { listPosts, listPost, createPost, updatePost, removePost } = require('../controllers/post');
const { validateFields } = require('../middlewares/validate-fields');
const { existsCategoryForId } = require('../helpers/db-validators');

const router = Router();

router.get('/', listPosts);

router.get('/:id', listPost);

router.post(
    '/',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty(),
        check('image', 'Image is required').not().isEmpty(),
        check('create_date', 'Date is required').custom(isDate),
        check('id_category').custom(existsCategoryForId),
        validateFields
    ],
    createPost
);

router.put(
    '/:id',
    [
        check('title', 'Title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty(),
        check('image', 'Image is required').not().isEmpty(),
        check('create_date', 'Date is required').custom(isDate),
        check('id_category').custom(existsCategoryForId),
        validateFields
    ],
    updatePost
);

router.delete('/:id', removePost);

module.exports = router;