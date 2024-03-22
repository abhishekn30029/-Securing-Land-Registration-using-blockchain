import './App.css';
import AppHeader from './Components/AppHeader';
import SideMenu from './Components/SideMenu';
import PageContent from './Components/PageContent';
import AppFooter from './Components/AppFooter';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Pages/Login";
import Signup from "./Components/Pages/Signup"
import { useEffect } from 'react';
function App() {
  useEffect(() => {
    const currentUrl = window.location.href;

    // Check if the current URL is localhost:3000
    if (currentUrl === 'http://localhost:3000/') {
      window.location.replace('http://localhost:3000/login');
    }
    }, []);
  return (
    
    <div className="App">
      <AppHeader/>
      <Routes>
        <Route path="/Login" element={<Login/>}></Route>
        <Route path="/Signup" element={<Signup/>}></Route>
        <Route path="/*"element={<div className='SideMenuAndPageContent'>
          <SideMenu></SideMenu>
          <PageContent></PageContent>
        </div>}></Route>
      </Routes>
      <AppFooter/>
    </div>
  );
}

export default App;
