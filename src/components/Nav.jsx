import { Link } from "react-router-dom";
import Logo from "../assets/images.jpg"

const Nav = () => {
    return (
        <header className="bg-gray-900 text-white p-4 shadow-md">
            <nav className="container mx-auto flex justify-between items-center">
                <img src={Logo} alt="logo" className="h-10 w-auto"/>
                <ul className="flex space-x-4">
                    <li className="list-none"><Link to="/" className="hover:text-gray-500 transition-all duration-150">Home</Link></li>
                    <li><Link to="/cliente" className="hover:text-gray-500 transition-all duration-150">Cliente</Link></li>
                </ul>
            </nav>
        </header>
    )   
}

export default Nav