const env = require('dotenv/config');
const  express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./Schema/schema');
const cors = require('cors');
const mongoose = require('mongoose');


const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req,res)=>{
  res.send("UP and running with grphql crash course!!");
})
app.use("/graphql", graphqlHTTP({
  schema,
  graphiql: true
}));



  //  Mongoose Connectivity
mongoose.connect(
  "mongodb+srv://ankita123:ankita123@cluster0.fvda2.mongodb.net/BookRoomGraphql?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false , useCreateIndex: true},
  (err) => {
    if (err) return console.log(err.message);
    console.log("Database Connected!");
    app.listen(8000, () => {
      console.log("Server listening to the port 8000");
    });
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));


