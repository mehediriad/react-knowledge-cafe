import { FaBookmark } from "react-icons/fa";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const Blog = ({blog,handleBookmarks,handleMarkRead}) => {
    const {title,cover,author,author_img,posted_date,reading_time,hashtags} = blog;
    return (
        <div className="border-b-2 mb-6 p-4">
            <img className= "w-full" src={cover} alt="" />
            <div className="flex justify-between my-4">
                <div className="flex">
                    <div>
                        <img className="w-14" src={author_img} alt="" />
                    </div>
                    <div className="mx-4">
                        <h4 className="text-2xl">{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    
                    <p>{reading_time} min read <button onClick={()=>handleBookmarks(blog)}><FaBookmark /></button></p>
                    
                </div>
            </div>
            <h2 className="text-4xl">{title}</h2>
            <p>{hashtags.map((hash,idx)=> <a key={idx} href="#"> #{hash} </a> )}</p>
            <button onClick={()=>handleMarkRead(reading_time)} className="my-4 flex items-center"> Mark As Read <IoMdCheckmarkCircleOutline /> </button>
        </div>
    );
};


export default Blog;