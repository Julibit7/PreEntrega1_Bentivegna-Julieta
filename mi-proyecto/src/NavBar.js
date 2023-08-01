import CartWidget from "./CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>Kokiri Tienda</h3>
            <div>
                <button>Consolas</button>
                <button>Videojuegos</button>
                <button>Merchandising</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar