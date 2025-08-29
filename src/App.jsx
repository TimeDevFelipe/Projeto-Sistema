import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from "./components/Nav"
import Footer from "./components/Footer"
import Error from "./routes/Error"
import Home from "./routes/Home"
import Cliente from "./routes/Cliente"

function App() {

  return (
    <BrowserRouter>
    <Nav/>
    <main>
      <Routes>
        <Route path="*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/cliente" element={<Cliente/>}/>

      </Routes>
    </main>
    <Footer/>
    </BrowserRouter>
  )
}

export default App