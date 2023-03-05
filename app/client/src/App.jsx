import Home from './pages/Home';
import Dash from './pages/Dash'
import Register from './components/Register'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import OnBoarding from './pages/OnBoarding';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home/>}></Route>
        <Route path={"/home"} element={<Home/>}></Route>
        <Route path={"/register"} element={<Register/>}></Route>
        <Route path={"/dashboard"} element={<Dash/>}></Route>
        <Route path={"/onboarding"} element={<OnBoarding/>}></Route>
      </Routes>

    </BrowserRouter>
  )
}

export default App
