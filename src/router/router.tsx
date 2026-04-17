import Rootlayout from "../layout/RootLayout";
import Home from "../pages/Home";


import { createBrowserRouter } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Rootlayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "skill",
      //   element: <Skill />,
      // },
      // {
      //   path: "project",
      //   element: <Project />,
      // },
      // {
      //   path: "about",
      //   element: <About />,
      // },{
      //   path:"contact",
      //   element:<Contact/>
      // },
    ],
  },
]);
