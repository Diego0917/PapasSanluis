import { createBrowserRouter } from "react-router";
import Root from "./root";
import Homepage from "./pages/Homepage";
import ProductsPage from "./pages/ProductsPage";
import CongeladosPages from "./pages/CongeladosPages";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Homepage },
      { path: "productos", Component: ProductsPage },
      { path: "congelados", Component: CongeladosPages },
    ],
  },
]);
