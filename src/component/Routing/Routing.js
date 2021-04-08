import React from "react";
import {} from "react-router-dom";
// import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
// import Product from "../LifeCycle/Product";
// import Form from "../Form/Form";
// import HttpCall from "../HttpCall/HttpCall";
import Context from "../Context/CompA";
import UseEffect from "../UseEffect/UseEffect";
import Display from "../display";
import { Route, Link, Switch } from "react-router-dom";
const Routing = (props) => {
  return (
    <div className="Blog">
      <header>
        <nav>
          <ul>
            <li>
              <Link to="/display">Display</Link>
            </li>
            <li>
              <Link to="/context">Context</Link>
            </li>

            <li>
              <Link
                to={{
                  pathname: "/use-effect",
                  hash: "#submit",
                  search: "?quick-submit=true",
                }}
              >
                use-effect
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Switch>
        <Route path="/display" exact component={Display} />
        <Route path="/use-effect" component={UseEffect} />
        <Route path="/context" exact component={Context} />
      </Switch>
    </div>
  );
};

export default Routing;

// import React, { Component } from 'react';
// // import axios from 'axios';
// import { Route, Link, Switch } from 'react-router-dom';

// import './Blog.css';
// import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
// import FullPost from './FullPost/FullPost';

// class Blog extends Component {

// }

// export default Blog;
