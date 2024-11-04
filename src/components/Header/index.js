import { Link } from "react-router-dom"
import './style.css'

function Header() {
    return (
        <>
            <header>
                <div className="logo">
                    <h2>SiteApp</h2>

                </div>
                <div className="menu">
                    <Link to='/'>Home</Link>
                    <Link to='/sobre'>Sobre</Link>
                    <Link to='/contato'>Contato</Link>
                    <Link to='/exercicio'>Exercicios</Link>
                </div>
            </header>
        </>
    )
}

export default Header;