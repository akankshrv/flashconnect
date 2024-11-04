import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "./components/ui/toaster";
import ChatProvider from "./context/ChatProvider";

createRoot(document.getElementById("root")).render(
  <ChatProvider>
    <BrowserRouter>
      <Provider>
        <App />
        <Toaster />
      </Provider>
    </BrowserRouter>
  </ChatProvider>
);
