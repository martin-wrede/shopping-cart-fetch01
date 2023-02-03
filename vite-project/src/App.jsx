import { Routes, Route } from "react-router-dom"
import Header from "./Header"
import Photos from "./Photos"
import Cart from "./Cart"
import './App.css'

function App() {
  return(
    <div className="App">
    
      <Header/>
      <Routes>
     
        <Route path="photos" element={ <Photos/> } />
        <Route path="cart" element={ <Cart/> } />
      </Routes>
    </div>
  )
}

export default App
