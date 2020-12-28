const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const db = require("./dbConnect");
const schema = require("./schema/schema");
const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

db();

app.listen(5000, () => console.log("Listening on port 5000"));
