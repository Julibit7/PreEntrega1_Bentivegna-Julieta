import './NavBar.css'
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className="NavBar" >
            <Link to='/'>
                <h3>Kokiri Shop</h3>
            </Link>
            <div className='Categories'>
                <NavLink to={`/category/consolas`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>consolas</NavLink>
                <NavLink to={`/category/videojuegos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>videojuegos</NavLink>
                <NavLink to={`/category/merchandising`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>merchandising</NavLink>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar