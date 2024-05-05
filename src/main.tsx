import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './routes/App'
import SBB from './routes/sbb'
import ErrorPage from './routes/error-page'
import TasksPage from './routes/tasks'
import HomeCtrlPage from './routes/home'
import './styles/index.css'

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  }, {
    path: "/sbb",
    element: <SBB />,
  }, {
    path: "/tasks",
    element: <TasksPage />,
  }, {
    path: "/home",
    element: <HomeCtrlPage />,
  }
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>

)
