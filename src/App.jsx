import Navbar from './components/navBar/Navbar'
import HomePage from './routes/homePage/homePage'
import Layout from './routes/layout/layout'
import ListPage from './routes/listPage/listPage'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import SinglePage from './routes/singlePage/singlePage'
import LoginPage from './routes/loginPage/loginPage'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '/',
          element: <HomePage />
        },
        {
          path: '/list',
          element: <ListPage />
        },
        {
          path: '/login',
          element: <LoginPage />
        },
        {
          path: '/:id',
          element: <SinglePage />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
