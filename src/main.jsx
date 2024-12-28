import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Layout from './Layout';
import Home from './Components/Home/Home';
import Team from './Components/Team/Team';
import Projects from "./Components/Projects/Projects";
import Services from './Components/Services/Services';
import AboutUs from './Components/AboutUs/AboutUs';
import ContactUs from './Components/ContactUs/ContactUs';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'team',
        element: <Team />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'services',
        element: <Services />
      },
      {
        path: 'about-us',
        element: <AboutUs />
      }
      ,
      {
        path: 'contact-us',
        element: <ContactUs />
      }
    ]
  }
])



createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router ={router} ></RouterProvider>
  </StrictMode>
)
