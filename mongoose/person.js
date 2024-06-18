const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopApp')
.then(() => {
  console.log("Deu bom! Conectado ao banco de dados!");
})
.catch(err => {
  console.log("Deu ruim! Erro ao conectar ao banco de dados!");
  console.log(err);
});

const personSchema = new mongoose.Schema({
  first: String,
  last: String
});

personSchema.virtual('fullName').get(function() {
  return `${this.first} ${this.last}`;
})
.set(function(v) {
  this.first = v.substr(0, v.indexOf(' '));
  this.last = v.substr(v.indexOf(' ') + 1);
});

personSchema.pre('save', async function() {
  this.first = 'YO';
  this.last = 'MAMA';
  console.log("About to save!");
});

personSchema.post('save', async function() {
  console.log("Just saved!");
});

personSchema.post('find', async function() {
  console.log("Just found something!");
});

const Person = mongoose.model('Person', personSchema);

const makePerson = async () => {
  const person = new Person({
    first: 'Harry',
    last: 'Potter'
  });
  await person.save();
  console.log(person);
}

makePerson();

const findPerson = async () => {  
  const people = await Person.find({name: 'Harry Potter'});
  console.log(people);
}

findPerson();