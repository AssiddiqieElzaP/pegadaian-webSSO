import './App.css';


import NavbaR from './component/navbar'
import SideBar from './component/sidebar';
import AddRegist from './pages/regist-user-backup/addRegist';
function App() {
  return (
    <>
  <NavbaR/>
  <div className='d-flex'>
    <SideBar/>
    <AddRegist/>
  </div>
    </>
  );
}

export default App;
