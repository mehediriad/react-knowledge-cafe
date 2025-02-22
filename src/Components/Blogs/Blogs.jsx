import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";


const Blogs = ({handleBookmarks,handleMarkRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch("blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog=><Blog
                    key={blog.key}
                    blog={blog}
                    handleBookmarks={handleBookmarks}
                    handleMarkRead={handleMarkRead}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;