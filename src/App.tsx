import './App.css'
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import Contact from './pages/Contact';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';
import { Element } from 'react-scroll';

function RootLayout() {
  return (
    <>
      <Header />
      <div className='w-auto h-full px-36 pt-7'>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: (
          <>
            <Element name="Home">
              <Home />
            </Element>
            <Element name="About">
              <About />
            </Element>
            <Element name="Skills">
              <Skill />
            </Element>
            <Element name="Projects">
              <Project />
            </Element>
            <Element name="Contactme">
              <Contact />
            </Element>
          </>
        )
      }
    ]
  }
]);

function App() {

  return (
    <RouterProvider router={router} />
  );
}

export default App
