import React, { Component } from 'react';
import Post from './Post';

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      hasError: false
    };
  }

  // Fetches posts from the API and stores them in component state
  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        const posts = data.map(
          (item) => new Post(item.id, item.userId, item.title, item.body)
        );
        this.setState({ posts: posts });
      })
      .catch((error) => {
        console.error('Error fetching posts:', error);
      });
  }

  // Lifecycle hook: called once, right after the component is mounted to the DOM
  componentDidMount() {
    this.loadPosts();
  }

  // Lifecycle hook: catches JavaScript errors in this component's child tree
  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    alert('Something went wrong while rendering the Posts component: ' + error.toString());
    console.error('componentDidCatch:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <h2>Something went wrong while loading the posts.</h2>;
    }

    return (
      <div className="posts">
        <h1>Blog Posts</h1>
        {this.state.posts.length === 0 && <p>Loading posts...</p>}
        {this.state.posts.map((post) => (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Posts;
