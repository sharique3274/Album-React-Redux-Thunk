import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import AlbumLists from "./components/albumDetails/AlbumLists";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header branding="Sharique'S ALBUM" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={AlbumLists} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
