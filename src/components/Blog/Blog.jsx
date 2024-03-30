import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({ blog, handleAddToBookmark }) => {

    const { title, cover, reading_time, author, author_img, posted_date, hashtags } = blog;


    return (
        <div className='space-y-4 mb-14'>
            <img className='w-full' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between items-center'>
                <div className='flex gap-4'>
                    <img className='w-14 rounded-full' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex gap-3 justify-between items-center'>
                    <span> {reading_time} min read</span>
                    <button
                        onClick={() => handleAddToBookmark (blog)}
                        className='text-2xl'><CiBookmark></CiBookmark> 
                        </button>
                </div>
            </div>
            <h2 className="text-4xl ">{title}</h2>
            <p>
                {
                    hashtags.map((hash, idx) => <span><a href="http://">#{hash}</a></span>)
                }
            </p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;