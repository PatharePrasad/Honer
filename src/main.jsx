import React from "react";
import { createRoot } from "react-dom/client";

const appEl = document.querySelector("#app");
const root = createRoot(appEl)

root.render(<App />)

import App from "./App";