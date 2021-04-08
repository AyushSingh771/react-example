import React, { Component } from "react";
import axios from "axios";

class HttpCall extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    console.log(this.props);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        const posts = response.data;
        const updatedPosts = posts.map((post) => {
          return {
            ...post,
            author: "Max",
          };
        });
        this.setState({ posts: updatedPosts });
        // console.log( response );
      })
      .catch((error) => {
        console.log(error);
        // this.setState({error: true});
      });
  }

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error) {
      posts = this.state.posts.map((post) => {
        return (
          <article className="Post">
            <h1>{post.title}</h1>
            <div className="Info">
              <div className="Author">{post.author}</div>
            </div>
          </article>
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default HttpCall;
