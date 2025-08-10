import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/Routes";
import "./style.css";
import { AppContextProvider } from "./context/App.Context";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppContextProvider>
      <Toaster
        toastOptions={{
          style: {
            fontWeight: 600,
            color: "black",
            padding: "5px 10px",
          },
        }}
      />
      <RouterProvider router={routes} />
    </AppContextProvider>
  </StrictMode>
);
