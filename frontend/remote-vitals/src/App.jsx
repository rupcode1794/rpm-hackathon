import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import MainLayout from './Layouts/MainLayout'
import Features from './components/Features'
import Dashboard from './pages/Dashboard'
import PatientContextProvider from './context/PatientContext'

function App() { 

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout/>}>
            <Route index element= {<Features/>}/>
            <Route path='/home' element= {<Home/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/dashboard' element={<Dashboard/>}/> 
        </Route>
    )
  )
  return (
  <PatientContextProvider>
      <RouterProvider router = {router}/>
  </PatientContextProvider>


  )

}

export default App
