import Dashbord from "./Admin/Dashbord";
import AuthProvider from "./AuthProvider";
import Login from "./Logins Pages/Login";
import SigneUp from "./Logins Pages/SigneUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ListeProduct from "./User/ListeProduct";
import PrivateRouter from "./PrivateRouter";
import SinglePage from "./User/SinglePage";
import PaymentValidation from "./User/Validation";
import Admine from "./Admin/Admine";
import Update from "./Admin/Update";
import ListeAnonce from "./Admin/ListeAnonce";
import ReservationConfirmation from "./User/AfterVlaidation";


export default function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/signup" element={<SigneUp/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route exact path="/" element={<ListeProduct/>}/>
          <Route exact path="/ProductPage/:id" element={<SinglePage/>}/>
          <Route path="/PaymentValidation" element={<PaymentValidation/>}/>
          <Route path="/Dashboard/Update/:id" element={<Update/>}/>
          <Route path="/Dashboard/ListLocation" element={<ListeAnonce/>}/>
          <Route path="/User/AfterValidation" element={<ReservationConfirmation/>}/>
          <Route element={<PrivateRouter/>}>
             <Route path="/Dashboard" element={<Admine/>}/>
          </Route>
      </Routes>
    </BrowserRouter> 
    </AuthProvider>
    </>
  );
}
