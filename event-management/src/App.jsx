
import { AppLayout } from './components/Layout/AppLayout.jsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './pages/Home.jsx';
import { About } from './pages/About.jsx';
import { Contact } from './pages/Contact.jsx';
import { Event } from './pages/Event.jsx';
import { ErrorPage } from './pages/ErrorPage.jsx';
import { Login } from './pages/Login.jsx';
import { Registration } from './pages/Registration.jsx';
import { DashBoard } from './pages/DashBoard/DashBoard.jsx';
import { EventDetails } from './pages/EventDetails.jsx';
import { Gallery } from './pages/Gallery.jsx';

import './App.css';
// import { AllEvents } from './pages/DashBoard/AllEvents.jsx';
// import { Analytics } from './pages/DashBoard/Analytics.jsx';
import { ManageEventManager } from './pages/DashBoard/ManageEventManager.jsx';
import { DashboardHome } from './pages/DashBoard/DashboardHome.jsx';
import { RegistrationConfirmation } from './pages/RegistrationConfirmation.jsx';
import {EventProvider} from './context/EventContext.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children:
      [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        },
        {
          path: "event",
          element: <Event />
        },
        {
          path: "login",
          element: <Login />
        },
        {
          path: "registration",
          element: <Registration />
        },
        {
          path: "registration-confirmation",
          element: <RegistrationConfirmation />
        },
        {
          path: "event-details",
          element: <EventDetails />
        },
        {
          path: "gallery",
          element: <Gallery />
        },

        {
          path: "dashboard",
          element: <DashBoard />,
          children: [
            {
              path: "",
              element: <DashboardHome />
            },
            // {
            //   path: "allevents",
            //   element: <AllEvents />
            // },
            // {
            //   path: "analytics",
            //   element: <Analytics />
            // },

            {
              path: "manageeventmanager",
              element: <ManageEventManager />
            }
          ]

        },
      ]
  },


])
const App = () => {
  return <EventProvider><RouterProvider router={router} /> </EventProvider>;
}

export default App;