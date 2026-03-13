// src/routes.jsx
import { createBrowserRouter } from "react-router-dom";
import Root from "./root";
import App from "./App"; // <--- Importa App
import ProductsPage from "./pages/ProductsPage";
import CongeladosPage from "./pages/CongeladosPages.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <App />, // <--- CAMBIA Homepage por App
      },
      {
        path: "productos",
        element: <ProductsPage />,
      },
      {
        path: "congelados",
        element: <CongeladosPage />,
      },
    ],
  },
]);
