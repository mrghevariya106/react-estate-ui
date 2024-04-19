import { Outlet } from 'react-router-dom'
import './layout.scss'
import Navbar from '../../components/navBar/Navbar'

function Layout () {
  return (
    <div className='layout'>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout;
