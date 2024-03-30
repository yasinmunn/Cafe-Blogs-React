
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({bookmarks}) => {
  return (
    <div className="md:w-1/3 bg-black">
            <h2 className="text-2xl text-center   text-white">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
  )
}

export default Bookmarks;

Bookmarks.propTypes = {
    bookmarks: PropTypes.array
}

