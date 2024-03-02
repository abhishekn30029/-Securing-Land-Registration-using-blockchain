import { Route, Routes ,useLocation,useNavigate} from 'react-router-dom';
import './App.css';
import { Menu } from 'antd';
import { HomeFilled,ProfileFilled,DashboardFilled, EditFilled,PictureFilled ,BankFilled,InteractionFilled } from '@ant-design/icons';

function App() {
  const navigate=useNavigate();
  const location=useLocation();
  const currentPath=location.pathname;
  return (
    <div style={ {display:"flex",flexDirection:"row"}}>
    <Menu className='menu'
    onClick={({key})=>{
     navigate(key);
    }}
    selectedKeys={[currentPath]}
    items={[
      {label:"Home",key:"/",icon:<HomeFilled/>},
      {label:"Dashboard",key:"/Dashboard",icon:<DashboardFilled />},
      {label:"Profile",key:"/Profile",icon:<ProfileFilled/>},
      {label:"Land Gallery",key:"/Land Gallery",icon:<PictureFilled />},
      {label:"Owned Land",key:"/Owned Land",icon:<BankFilled />},
      {label:"New Added Land Status",key:"/new Added Land status",icon:<EditFilled />},
      {label:"Land Transer Status",key:"/Land Transer Status",icon:<InteractionFilled />},
    ]}>
       
    </Menu>
    <Content/>
  </div>
  );
}
function Content() {
  return (
  <div style={{fontSize:'30px'}}>
    <Routes>
    <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/Profile" element={<div>Profile</div>}></Route>
      <Route path="/dashboard" element={<div>Dashboard</div>}></Route>
      <Route path="/land Gallery" element={<div>Land Gallery</div>}></Route>
      <Route path="/owned Land" element={<div>Owned Land</div>}></Route>
      <Route path="/new Added Land Status" element={<div>New Added Land Status</div>}></Route>
      <Route path="/Land Transer Status" element={<div>Land Transer Status</div>}></Route>
    </Routes>
  </div>
  );
}
export default App;
