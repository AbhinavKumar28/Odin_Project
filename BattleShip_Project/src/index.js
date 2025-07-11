import DOMController from "./dom.js";
import "./styles.css";

// Optionally auto-start or wait for DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
    DOMController.startGame(); // Or let user click to start
});
