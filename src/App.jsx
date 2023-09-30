import Dashboard from "./Pages/Dashboard/Dashboard"
import Support from "./Pages/Support/Support"
import Transaction from "./Pages/Transaction/Transaction"
import "@fontsource/ubuntu";
import "@fontsource/ubuntu/400.css";
import "@fontsource/ubuntu/500.css";
import "@fontsource/ubuntu/700.css";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard/>,
    },{
      path: "/transactions",
      element: <Transaction/>,
    },
    {
      path: "/support",
      element: <Support/>,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
     
    </>
  )
}

export default App