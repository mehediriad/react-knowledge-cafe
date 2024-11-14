import { useState } from "react"
import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Header from "./Components/Header/Header"

function App() {
  const [bookmarks,setBookmarks] = useState([])
  const [readingTime,setReadingTime] = useState(0);


  const handleBookmarks = (blog) =>{
    const newBookmarks = [...bookmarks,blog]
    setBookmarks(newBookmarks)
  }

  const handleMarkRead = (time) =>{
    setReadingTime(readingTime + time)
  }
  return (
    <>
     <Header></Header>
     <div className="md:flex md:max-w-6xl mx-auto my-6">
      <Blogs handleBookmarks = {handleBookmarks} handleMarkRead={handleMarkRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime = {readingTime}></Bookmarks>
     </div>
    </>
  )
}

export default App
