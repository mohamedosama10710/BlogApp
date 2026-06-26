import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx';
import Servises from './pages/Servises.jsx';
import Contact from './pages/Contact.jsx';
import Blogs from './pages/Blogs.jsx';
import About from './pages/About.jsx';
import SiglePage from './pages/SiglePage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {path: "/", element: <Home />},
     { path: "/Blogs", element: <Blogs /> },
     { path: "/Servises", element: <Servises/> },
     { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      {
        path: "/blog/:id", element: <SiglePage />, 
        loader:({params})=> fetch(`http://localhost:5000/blogs/${params.id}`)
      },
     
      
    ]
  
  }]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
