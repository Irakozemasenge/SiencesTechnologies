import React from "react";
import HelloBlog from "../../../components/Visitor/Blog/HelloBlog";
import BlogList from "../../../components/Visitor/Blog/BlogList";

const Blog = () => (
  <main className="min-h-screen bg-gray-50">
    <HelloBlog />
    <BlogList />
  </main>
);

export default Blog;
