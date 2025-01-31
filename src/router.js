import {BrowserRouter, Route, Routes} from "react-router";
import Login from "./pages/Login";
import HomePageClient from "./pages/HomePageClient";

export default function Router(){
    return <BrowserRouter>
        <Routes>
            <Route index path="/Login" element={<Login/>}></Route>
            <Route path="/Client">
                <Route index path="HomePage" element={<HomePageClient/>}></Route>
            </Route>
            <Route path="/Seller">
                <Route path="HomePage" element={<HomePageClient/>}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
}