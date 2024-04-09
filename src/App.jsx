import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([])

  const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks
  }
  return (
    <>
      <Header></Header>
      <div className='md:flex mx-auto max-w-7xl'>
        <Blogs handleAddToBookmark={handleAddToBookmark}> </Blogs>
        <Bookmarks></Bookmarks>
      </div>
    </>
  )
}

export default App
