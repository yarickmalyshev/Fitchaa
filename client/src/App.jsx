import Admin from "./pages/Admin"
import Home from './pages/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';



function App() {

  return (
    <div className="wrapper">
      <div className="content">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="*" element={<h1>404. Page not found</h1>} />
          </Routes>
        </Router>
      </div>
    </div>
  )
}

export default App
