const Category = require("../models/category");

const existsCategoryForId = async(id) => {
    const existsCategory = await Category.findByPk(id);

    if(!existsCategory) {
        throw new Error(`El id no existe ${ id }`);
    }
}

module.exports = {
    existsCategoryForId
}