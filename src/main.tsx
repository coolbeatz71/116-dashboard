import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

import "@ant-design/v5-patch-for-react-19";

const root = document.getElementById("root");

if (root) {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

reportWebVitals();
