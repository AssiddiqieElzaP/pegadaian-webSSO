import './App.css';
import HeadNav from './component/HeadNav';

import NavbaR from './component/navbar'
import SideBar from './component/sidebar';
function App() {
  return (
    <>
  <NavbaR/>
  <div className='d-flex'>
    <SideBar/>
    <HeadNav/> 
  </div>
    </>
  );
}

export default App;
