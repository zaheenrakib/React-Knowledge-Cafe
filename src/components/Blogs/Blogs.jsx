import PropTypes from 'prop-types';
import { useEffect } from "react";
import { useState } from "react";
import Blog from '../Blog/Blog';


const Blogs = ({handleAddToBookmark ,handleMarkRead}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs {blogs.length}</h1>
            {
                blogs.map(blog => <Blog
                    key={blog.key}
                    blog={blog}
                    handleAddToBookmark={handleAddToBookmark}
                    handleMarkRead={handleMarkRead}
                    ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes ={
    Blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkRead: PropTypes.func.isRequired
}

export default Blogs;