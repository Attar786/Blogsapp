import { Route, Routes } from 'react-router-dom'
import './App.css'
// import Header from './header'
// import Post from './post'
import Layout from './layout'
import Indexpage from './Pages/IndexPage';
import LoginPage from './Pages/loginpage';
import RegisterPage from './Pages/Registerpage';

function App() {


  return (
  <Routes>
  <Route path='/' element={<Layout/>}>
  <Route index element = {<Indexpage/>}
  />
  <Route path={'/login'} element={<LoginPage/>}/>
  <Route path={'/Register'} element={<RegisterPage/>}
  /> 
  </Route>
  </Routes>
  );
}
export default App
