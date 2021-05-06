const mongoose = require('mongoose');

// Import of the model Recipe from './models/Recipe.model.js'
const Recipe = require('./models/Recipe.model');
// Import of the data from './data.json'
const data = require('./data');


const MONGODB_URI = 'mongodb://localhost:27017/recipe-app';

// Connection to the database "recipe-app"
mongoose
  .connect(MONGODB_URI, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .then(self => {
    console.log(`Connected to the database: "${self.connection.name}"`);
    // Before adding any recipes to the database, let's remove all existing ones
   /* return Recipe.deleteMany()*/
  })
  .then(() => {
    // Run your code here, after you have insured that the connection was made
  })
  .catch(error => {
    console.error('Error connecting to the database', error);
  });

  //Iteracion 2?
  //Models comentar una vez agregado
/*Recipe.create(data, (error, newCat) => {
     if(error){
         console.log(error)
     }
     console.log(newCat)
 })*/
 
 //Iteracion 3.1
 /*
 Recipe.insertMany(data).then((value) => {
  console.log(value);
  mongoose.connection.close()
}).catch(err => {
  console.log(err);

 
});
Iteracion 3.2
     Recipe.insertMany(data)
      .then((data) => {
        data.forEach((data) => {
          console.log(`Recipe name is: ${data.title}`);
        });
      })
      .catch((error) => {
        console.error(error);
      });
*/
      //Iteration 4
      Recipe.findOneAndUpdate(
        { title: "Rigatoni alla Genovese" },
        { $set: { duration: 100 } },
        { new: true }
      )
        .then((recipe) => console.log("Success!"))
        .catch((error) => console.error(error));

    //Iteration 5
    Recipe.deleteOne({ title: "Carrot Cake" })
      .then((recipe) => console.log("Success"))
      .catch((error) => console.error(error));
//Iteration 6
mongoose.connection
.close()
.then(() => {
  console.log(`Disonnected from the database`);
})
.catch((error) => {
  console.error("Error disconnecting from the database");
});