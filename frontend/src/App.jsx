import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello from home</h1>
        <Link to="about">About Us</Link>
      </div>
    ),
  },
{
    path: "/about", 
    element: (
      <div>
        <h1>Hello from About</h1> 
        <Link to="/">Home</Link>
      </div>
    ),
  },
]);

function App(){
  <RouterProvider router={router} />
}

export default App 