import { createBrowserRouter } from "react-router-dom";
// IMPORTANTE: Asegúrate de importar Root desde donde lo tengas creado
import Root from "./root";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import CongeladosPage from "./pages/CongeladosPages.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Aquí es donde te salía el error porque no lo encontraba
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "productos",
        element: <ProductsPage />,
      },
      { path: "congelados", element: <CongeladosPage /> },
    ],
  },
]);
