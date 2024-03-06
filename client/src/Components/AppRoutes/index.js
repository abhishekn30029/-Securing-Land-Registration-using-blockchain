import {  Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import Profile from "../Pages/Profile";
import LandGallery from "../Pages/LandGallery";
import OwnedLand from "../Pages/OwnedLand";
import NewAddedLandStatus from "../Pages/NewAddedLandStatus";
import LandTransactionStatus from "../Pages/LandTransactionStatus";

function AppRoutes(){
    return(
    <Routes>
        <Route path="/" element={<Dashboard/>}></Route>
        <Route path="/Profile" element={<Profile/>}></Route>
        <Route path="/LandGallery" element={<LandGallery/>}></Route>
        <Route path="/OwnedLand" element={<OwnedLand/>}></Route>
        <Route path="/NewAddedLandStatus" element={<NewAddedLandStatus/>}></Route>
        <Route path="/LandTransactionStatus" element={<LandTransactionStatus/>}></Route>
    </Routes>
    );
}
export default AppRoutes;