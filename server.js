const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const db = require("./dbConnect");
const cors = require("cors");
const schema = require("./schema/schema");
const app = express();
app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

db();

app.listen(5000, () => console.log("Listening on port 5000"));
