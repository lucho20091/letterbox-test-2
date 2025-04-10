import './App.css'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Movie from './pages/Movie'
import Profiles from './pages/Profiles'
function App() {
  return (
    <div className="flex flex-col h-dvh">
      <Header />
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.SIGNUP} element={<SignUp />} />
        <Route path={ROUTES.MOVIE} element={<Movie />} />
        <Route path={ROUTES.PROFILES} element={<Profiles />} />
      </Routes>
    </div>
  )
}

export default App
