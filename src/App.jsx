import IndexPage from "./pages/IndexPage";
import LoginPage from "./pages/LoginPage";
import PasswordReset from "./pages/PasswordReset";
import PasswordResetOtp from "./pages/PasswordResetOtp";
import RegisterPage from "./pages/RegisterPage";
import { BrowserRouter,Routes,Route } from "react-router";
import SetPasswordPage from "./pages/SetPasswordPage";
import DashboardIndexPage from "./pages/DashBoard/IndexPage";
import ProfilePage from "./pages/DashBoard/ProfilePage";
import CustomerPage from "./pages/DashBoard/CustomerPage";


import DashBoardLayout from "./layouts/DashBoardLayout";
import LogoutPage from './pages/LogoutPage';
function App() {
 return(
 <BrowserRouter>
 <Routes>
    <Route path="/" element={<IndexPage/>}/>
    <Route path="/login" element={<LoginPage/>}/>
    <Route path="/register" element={<RegisterPage/>}/>
    <Route path="/reset-password" element={<PasswordReset/>}/>
    <Route path="/reset-password-otp" element={<PasswordResetOtp/>}/>
    <Route path="/set-new-password" element={<SetPasswordPage/>}/>
    <Route path="/set-new-password" element={<SetPasswordPage/>}/>
    <Route path="/logout" element={<LogoutPage/>}/>


    <Route path="/dashboard/" element={<DashBoardLayout/>}>

        <Route path="index/" element={<DashboardIndexPage/>}/>
        <Route path="profile/" element={<ProfilePage/>}/>
        <Route path="customer/" element={<CustomerPage/>}/>
    </Route>
  <Route path="*" element={<h1>Not Found!</h1>}/>
 </Routes>
 </BrowserRouter>
 );
   
};

export default App;
