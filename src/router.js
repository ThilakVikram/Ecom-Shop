import {BrowserRouter, Route, Routes} from "react-router";
import Login from "./pages/Login";
import HomePageClient from "./pages/HomePageClient";
import HomePageSeller from "./pages/HomePageSeller";
import AddNewProduct from "./pages/AddNewProduct";

export default function Router(){
    return <BrowserRouter>
        <Routes>
            <Route index path="/Login" element={<Login/>}></Route>
            <Route path="/Client">
                <Route index path="HomePage" element={<HomePageClient/>}></Route>
            </Route>
            <Route path="/Seller">
                <Route path="HomePage" element={<HomePageSeller/>}></Route>
                <Route path="AddProduct" element={<AddNewProduct/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}