import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

const appEl = document.querySelector("#app");
const root = createRoot(appEl)

root.render(
<React.StrictMode>
<App />
</React.StrictMode>
)

import App from "./App";