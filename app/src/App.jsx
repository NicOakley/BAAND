import Home from './pages/Home';
import Dash from './pages/Dash'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/home"} element={<Home/>}></Route>
        <Route path={"/register"} element={<Register/>}></Route>
        <Route path={"/dashboard"} element={<Dash/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
