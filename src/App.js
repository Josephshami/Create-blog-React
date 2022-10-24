import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom"
import "./componants/App.css"
import CreatePost from './componants/CreatePost';
import ShowPost from "./componants/ShowPost"
function App() {
  const [add, setAdd] = useState([])
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          
        <NavLink to="/"><li>Home</li> </NavLink>
        <NavLink to="/create"><li>Create a post</li></NavLink>
        <NavLink to="/show" ><li>Show Current Post</li></NavLink> 
         
        </ul>

        <Routes>
          <Route path="/" element={<h1> Welcome to our Blog website</h1>}></Route>
          <Route path="/create" element={<CreatePost setAdd={setAdd}/>} ></Route>
          <Route path="/show"element={<ShowPost add={add}/>}> </Route> 
        </Routes>



      </div>
    </BrowserRouter>

  )

}

export default App