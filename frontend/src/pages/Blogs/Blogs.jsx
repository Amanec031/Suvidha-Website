import React from "react";
import "./Blogs.css"
import BlogCard from "./BlogCard";
const Blogs = () => {
  return <div>
      <h1 className="h1-header">Read The Blogs</h1>
      <div className="App">
      <header className="App-header">
        
      </header>


      <BlogCard
        title="Sample Blog Post 1"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        link="https://example.com/post1"
      />
      <BlogCard
        title="Sample Blog Post 2"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="https://example.com/post2"
      />
            <BlogCard
        title="Sample Blog Post 2"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="https://example.com/post2"
      />
            <BlogCard
        title="Sample Blog Post 2"
        content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        link="https://example.com/post2"
      />
    </div>
 

  </div>;
};

export default Blogs;
