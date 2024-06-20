import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [{ path: "cart", element: <Cart /> }],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
