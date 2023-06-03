require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const { Product } = require('./db.js');
console.log(process.env.DB_HOST); 

const newProducts = [
  { name: 'Lipstick', 
    image: 'https://res.cloudinary.com/dpl6aif4q/image/upload/v1685726557/evangeline-sarney-NnsqpLjiA94-unsplash_sohtvs.jpg', 
    id: 1, 
    price: 13.5, 
    stock: 10, 
    description: 'Red' },
  { name: 'Facial cream', 
  image: 'https://res.cloudinary.com/dpl6aif4q/image/upload/v1685726572/pmv-chamara-1kCDtHVl064-unsplash_onc2rx.jpg', 
  id: 2, 
  price: 20.9, 
  stock: 20, 
  description: 'chamara cream' },
  { name: 'Skin care', 
  image: 'https://res.cloudinary.com/dpl6aif4q/image/upload/v1685726572/neauthy-skincare-NwAPSDTmxmk-unsplash_kyfs1f.jpg', 
  id: 3, 
  price: 32.99, 
  stock: 30, 
  description: 'neauthy skincare' },
  ];

async function createProducts() {
  try {
    await Product.bulkCreate(newProducts);
    console.log('Productos creados exitosamente!');
  } catch (error) {
    console.error('Error al crear los productos:', error);
  }
}

createProducts();
