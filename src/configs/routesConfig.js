import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Test from "../pages/Test/Test";
const router = createBrowserRouter([
   {
     path: "/test",
     element: <Test/>,
   },
   {
     path: "/",
     element: <Home/>,
   },

 ]);

export default router