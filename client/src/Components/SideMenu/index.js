import { Menu } from "antd";
import {DashboardFilled,ProfileFilled,BankFilled,PictureFilled,EditFilled,IdcardFilled} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function SideMenu() {
    const navigate = useNavigate();
    return (
    <div className="SideMenu">
        <Menu
        onClick={(item)=>{
        navigate(item.key);
        }}
        items={[
            {
                label:"Dashboard",
                icon:<DashboardFilled/>,
                key:'/'
            },
            {
                label:"Profile",
                icon:<ProfileFilled />,
                key:'/profile'
            },
            {
                label:"Land Gallery",
                icon:<PictureFilled />,
                key:'/landgallery'
            },
            {
                label:"Owned Land",
                icon:<BankFilled />,
                key:'/ownedland'
            },
            {
                label:"Add Land",
                icon:<EditFilled />,
                key:'/addland'
            },
            {
                label:"Land Transaction Status",
                icon:<IdcardFilled />,
                key:'/landtransactionstatus'
            },
        ]}></Menu>
    </div>
    );
}
export default SideMenu;