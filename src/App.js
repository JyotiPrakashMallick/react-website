import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./css/App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NoMatch from "./pages/NoMatch";
import Layout from "./components/Layout";
import NavigationBar from "./components/NavigationBar";
import { Jumbotron } from "./components/Jumbotron";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Route>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route component={NoMatch} />
            </Switch>
          </Route>
        </Router>
      </Layout>
      <Footer />
    </>
  );
}

export default App;
