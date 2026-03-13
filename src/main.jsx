import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom"; // Importamos el proveedor
import { router } from "./routes.jsx"; // Importamos tu configuración de rutas
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* En lugar de <App />, usamos el Provider con tu configuración de rutas */}
    <RouterProvider router={router} />
  </StrictMode>,
);
