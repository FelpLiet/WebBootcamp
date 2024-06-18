const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
  console.log("Deu bom! Conectado ao banco de dados!");
})
.catch(err => {
  console.log("Deu ruim! Erro ao conectar ao banco de dados!");
  console.log(err);
});

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 20
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price must be positive!']
  },
  onSale: {
    type: Boolean,
    default: false
  },
  categories: [String],
  qty: {
    online: {
      type: Number,
      default: 0
    },
    inStore: {
      type: Number,
      default: 0
    }
  },
  size:{
    type: String,
    enum: ['S', 'M', 'L']
  }
  
});

productSchema.methods.toggleOnSale = function() {
  this.onSale = !this.onSale;
  return this.save();
}

productSchema.methods.addCategory = function(newCategory) {
  this.categories.push(newCategory);
  return this.save();
}

productSchema.statics.fireSale = function() {
  return this.updateMany({}, {onSale: true, price: 0});
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
  const foundPruduct = await Product.findOne({name: 'Mountain Bike'});
  console.log(foundPruduct);
  await foundPruduct.toggleOnSale();
  console.log(foundPruduct);
  await foundPruduct.addCategory('Outdoors');
  console.log(foundPruduct);
}

Product.fireSale().then(res => console.log(res));

// findProduct();

// const bike = new Product({ name: 'Mountain Bike', price: 123, categories: ['Cycling', 'Outdoor'], size: 'S'});

// bike.save()
// .then(data => {
//   console.log("It worked!");
//   console.log(data);
// })
// .catch(err => {
//   console.log("Oh no! Error!");
//   console.log(err);
// });