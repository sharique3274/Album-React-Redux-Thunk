import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/AboutUs";
import AddImage from "./components/albumDetails/AddImage";
import NotFound from "./components/pages/NotFound";
import AlbumLists from "./components/albumDetails/AlbumLists";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import EditAlbumImage from "./components/albumDetails/EditAlbumImage";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Header heading="Sharique'S ALBUM" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={AlbumLists} />
                <Route exact path="/album/add" component={AddImage} />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/album/edit/:id"
                  component={EditAlbumImage}
                />
                <Route component={NotFound} />
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
