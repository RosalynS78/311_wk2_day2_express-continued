const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const res = require("express/lib/response");

const port = process.env.PORT || 4001;

const contactRoutes = require("./routes/contacts");
const vehicleRoutes = require("./routes/vehicles");
const commentRoutes = require("./routes/comments");
const productRoutes = require("./routes/products");

// Express.static
app.use(express.static("public"));

// Body-parser
app.use(bodyParser.json());

app.use(contactRoutes)
app.use(vehicleRoutes)
app.use(commentRoutes)
app.use(productRoutes)


app.listen(port, () => {
  console.log(`Web server is listening on port ${port}!`);
});
