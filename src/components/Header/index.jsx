import "./Header.css"
import PhotoHeader from "../PhotoHeader";


const Header = ()=>{ 

    return (
        <div className="header">
            <nav className="navbar container">
            <a href="#" className="logo"><img src="./img/logo.png" alt="" /></a>
            <input type="checkbox" id="toggler" />
            <label htmlFor="toggler"><i className="ri-menu-line"></i></label>
            <div className="menu">
                <ul className="list">
                    <li><a href="#about">Sobre Mi</a></li>
                    <li><a href="#">Habilidades</a></li>
                    <li><a href="#">Proyectos</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>
            </div>
        </nav>
        <PhotoHeader/>
        </div>
    )

}

export default Header;
