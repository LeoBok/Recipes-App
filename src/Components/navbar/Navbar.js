import { Link } from 'react-router-dom'
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from 'react';
import sidebarData from './sidebarData'
import './navbar.css'

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <div className='navbar'>
            <h1>My Veggie Site</h1>

            <Link to='#' className='menu-bars'>
                <FaBars className='menu-icon' onClick={showSidebar} />
            </Link>

            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>

                        <Link to='#' className='menu-bars'>
                            <AiOutlineClose className='menu-icon close' />
                        </Link>

                    </li>

                    {
                        sidebarData.map((item, index) => {
                            return (
                                <li key={index} className='nav-text-cont'>
                                    <Link to={item.path} className={item.cName}>
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }

                </ul>
            </nav>
        </div>
    )
}

export default Navbar