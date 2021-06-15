const { Router } = require('express');
const { check } = require('express-validator');

const { 
    listCategories, 
    listCategory, 
    createCategory, 
    updateCategory, 
    removeCategory 
} = require('../controllers/category');
const { validateFields } = require('../middlewares/validate-fields');

const router = Router();

router.get('/', listCategories);

router.get('/:id', listCategory);

router.post(
    '/',
    [
        check('name_category', 'Name is required').not().isEmpty(),
        validateFields        
    ],
    createCategory
);

router.put(
    '/:id',
    [
        check('name_category', 'Name is required').not().isEmpty(),
        validateFields
    ],
    updateCategory
);

router.delete('/:id', removeCategory);

module.exports = router;