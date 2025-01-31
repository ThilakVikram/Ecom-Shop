import {createRoot} from "react-dom/client";
import "./styles.css";
import Router from "./router";

let root = createRoot(document.getElementById("root") );

root.render(<Router/>);