import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes, useSearchParams } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Video from './Pages/Video/Video'

function App() {

  const [sidebar, setSidebar] = useState(true);
  return (
    <div>
      <NavBar setSidebar={setSidebar}/>
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>} />
        <Route path='/video/:categoryId/:videoId' element={<Video/>}/>

      </Routes>
    </div>
  )
}

export default App
