import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

import "@/shared/styles/theme.scss";
import "@/shared/styles/main.scss";

import "@ant-design/v5-patch-for-react-19";

const root = document.getElementById("root");

if (root) {
    createRoot(root).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
}

// Start web vitals monitoring
reportWebVitals();
