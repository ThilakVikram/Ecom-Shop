import {Provider, useDispatch, useSelector} from "react-redux";
import { login,logout } from "../store/HomePage/slicer";
import store from "../store/HomePage/store";
function UserLog(){
    let isUserLogged = useSelector((state)=>state.userLog.status);
    let dispatch = useDispatch();
    return <div className="w-full bg-violet-300" onClick={(e)=>{
        if(isUserLogged) dispatch(logout());
        else dispatch(login()); 
        console.log("state changed",isUserLogged);
    }}>You Have Successfully {isUserLogged?"Logged In":"Logged Out"}</div>
}

export default function HomePage(){
    return <Provider store={store}>
        <UserLog/>
    </Provider>
}