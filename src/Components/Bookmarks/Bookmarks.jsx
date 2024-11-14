import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3 mt-4">
            <div className='bg-blue-200 p-4 rounded-xl'>
                <h2 className='text-3xl'>Span time to read:{readingTime} min</h2>
            </div>
            <div className="bg-gray-300">
                <h2 className='text-3xl p-4 m-4'>Bookmarked Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map(bookmark => <Bookmark
                        key={bookmark.id}
                        bookmark ={bookmark}
                    ></Bookmark> )
                }
            </div>
            
        </div>
    );
};

Bookmarks.proptypes = {
    bookmarks: PropTypes.array
}

export default Bookmarks;