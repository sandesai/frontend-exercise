import App from "./components/App";
import "normalize.css";
import "styles/index.css";
import {Router} from 'vanilla-router';

// Get the root element and create a new App componenet
const rootElement = document.getElementById("root");
new App(rootElement);

