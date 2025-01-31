import {createRoot} from "react-dom/client";
import HomePage from "./app/HomePage";
import "./styles.css";


let root = createRoot(document.getElementById("root"));

root.render(<HomePage/>);