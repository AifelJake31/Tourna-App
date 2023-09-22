import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"
import './App.css'

//pages
import DoubleEliminationSixteen from "./pages/doubleEliminationSixteen.jsx";
import DoubleEliminationThirthyTwo from "./pages/doubleEliminationThirtyTwo.jsx";
import DoubleElimination from "./pages/doubleElimination.jsx";
function App() {


  return (
    <>
      <Router>
        <Routes>
         <Route path="/" element={<DoubleElimination />} />
         <Route path="/aa" element={<DoubleEliminationSixteen />} />
         <Route path="/bb" element={<DoubleEliminationThirthyTwo />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
