const mongoose = require('mongoose');
const { Product } = require('./models/product');

// MongoDB connection string
const dbUrl = 'mongodb://localhost:27017/farmStand';

mongoose.connect(dbUrl)
  .then(() => {
    console.log('Database connection successful');
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });

const seedProducts = [
  { name: 'Apple', price: 0.99, category: 'Fruit' },
  { name: 'Milk', price: 2.99, category: 'Dairy' },
  { name: 'Bread', price: 3.49, category: 'Bakery' },
  { name: 'Carrot', price: 0.49, category: 'Vegetable' },
  { name: 'Salmon', price: 10.00, category: 'Seafood' },
  { name: 'Beef', price: 8.00, category: 'Meat'},
  { name: 'Eggplant', price: 1.00, category: 'Vegetable'},
  { name: 'Pork', price: 6.00, category: 'Meat'},
  { name: 'Banana', price: 0.50, category: 'Fruit'},
  { name: 'Orange', price: 0.75, category: 'Fruit'},
  { name: 'Lettuce', price: 1.50, category: 'Vegetable'},
  { name: 'Chicken', price: 5.00, category: 'Meat'},
  { name: 'Shrimp', price: 12.00, category: 'Seafood'},
  { name: 'Cheese', price: 4.00, category: 'Dairy'},
  { name: 'Yogurt', price: 3.00, category: 'Dairy'},
  { name: 'Cake', price: 20.00, category: 'Bakery'},
  { name: 'Cupcake', price: 5.00, category: 'Bakery'},
  { name: 'Pineapple', price: 2.00, category: 'Fruit'},
  { name: 'Blueberry', price: 3.00, category: 'Fruit'},
  { name: 'Tomato', price: 1.00, category: 'Vegetable'},
  { name: 'Cucumber', price: 1.50, category: 'Vegetable'},
  { name: 'Turkey', price: 7.00, category: 'Meat'},
  { name: 'Crab', price: 15.00, category: 'Seafood'},
  { name: 'Milkshake', price: 4.00, category: 'Dairy'},
  { name: 'Ice Cream', price: 6.00, category: 'Dairy'},
  { name: 'Donut', price: 2.00, category: 'Bakery'},
  { name: 'Bagel', price: 1.00, category: 'Bakery'},
  { name: 'Lemon', price: 0.75, category: 'Fruit'},
  { name: 'Grape', price: 1.25, category: 'Fruit'},
  { name: 'Broccoli', price: 1.50, category: 'Vegetable'},
  { name: 'Spinach', price: 2.00, category: 'Vegetable'},
  { name: 'Duck', price: 9.00, category: 'Meat'},
  { name: 'Lobster', price: 20.00, category: 'Seafood'},
  { name: 'Butter', price: 3.00, category: 'Dairy'},
  { name: 'Milk', price: 2.00, category: 'Dairy'},
  { name: 'Croissant', price: 2.50, category: 'Bakery'},
  { name: 'Pretzel', price: 1.50, category: 'Bakery'},
  { name: 'Watermelon', price: 5.00, category: 'Fruit'},
  { name: 'Pear', price: 1.00, category: 'Fruit'},
  { name: 'Potato', price: 0.75, category: 'Vegetable'},
  { name: 'Zucchini', price: 1.25, category: 'Vegetable'}
];

const seedDB = async () => {
  await Product.deleteMany({});
  await Product.insertMany(seedProducts);
  console.log('Database seeded!');
};

seedDB().then(() => {
  mongoose.connection.close();
});