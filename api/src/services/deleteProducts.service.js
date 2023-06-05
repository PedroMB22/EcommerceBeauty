const {Product} = require('../database/db.js');
let deleteService = {};

deleteService.deleteProductsAsync = async (id) => {
    let product;
    try {
        product = await Product.destroy({
            where: {
                id: id
            }
        });
    } catch (err) {
        console.log(err);
    }
    return product;
}

module.exports = deleteService;

