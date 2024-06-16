import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import PhotosProvider from "./contexts/PhotosContext.jsx";
import FavoritesProvider from "./contexts/FavoritesContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PhotosProvider>
      <FavoritesProvider>
          <App />
      </FavoritesProvider>
      </PhotosProvider>
    </BrowserRouter>
  </React.StrictMode>
);
