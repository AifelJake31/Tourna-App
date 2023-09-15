import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

//pages
import DoubleElimination from "./pages/doubleElimination.jsx"

function App() {


  return (
    <>
      <Router>
        <Routes>
         <Route path="/aa" element={<DoubleElimination />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
