import React from 'react';
import './App.css';

import Login from './login'
import Dashboard from './pages/Pendaftaran/dashboard';
import SidebarMenu from './component/sidebar/sidebar';

function App() {
  return (
    <>
    <SidebarMenu/>
    <Dashboard/>
    {/* <Login/> */}
    </>
  );
}

export default App;
