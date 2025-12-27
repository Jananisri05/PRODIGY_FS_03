const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const product = require('./models/products');
const Review=require('.models/review')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://User:aso09876@cluster.jiqtsol.mongodb.net/ecom",
)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB error:", err));

app.get('/getProduct', (req, res) =>
{
  product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).json(err));
});

app.listen(3001, () =>
{
  console.log("Server running on http://localhost:3001");
});
