import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import reportWebVitals from "./reportWebVitals";

import "@ant-design/v5-patch-for-react-19";

import "@/shared/styles/fonts.scss";
import "@/shared/styles/theme.scss";
import "@/shared/styles/main.scss";

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
