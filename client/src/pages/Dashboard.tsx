import React from "react";
import Books from "../components/Books";
import Navigation from "../components/Navigation";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import AddAuthor from "./AddAuthor";
import AddBook from "./AddBook";
import Authors from "../components/Authors";
interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Books} />
        <Route exact path="/addAuthor" component={AddAuthor} />
        <Route exact path="/addBook" component={AddBook} />
        <Route exact path="/authors" component={Authors} />
      </Switch>
    </Router>
  );
};
export default Dashboard;
