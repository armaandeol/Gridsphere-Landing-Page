import { Link } from 'react-router-dom'
import Menu from "../logos/menu"

export const Header = () => {
    return (
        <header className="sticky top-0 backdrop-blur-sm z-10">
            <div className="py-2 px-4">
                <div className="Container">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img src="https://i0.wp.com/www.carddsgn.com/wp-content/uploads/2021/06/2-August-Bioscience-logo.jpg?w=1080&ssl=1" alt="Logo" className="h-20 w-auto bg-transparent mix-blend-multiply rounded-lg" />
                        </Link>
                        <Menu className="h-5 w-8 md:hidden" />
                        <nav className="hidden md:flex gap-6 text-black/60 items-center parastoo-hero text-2xl">
                            <Link to="/" className="hover:text-black transition-colors">Home</Link>
                            <Link to="/about" className="hover:text-black transition-colors">About Us</Link>
                            <Link to="/features" className="hover:text-black transition-colors">Features</Link>
                            <a href="#" className="hover:text-black transition-colors">Contacts</a>
                            <a href="#" className="hover:text-black transition-colors">Help</a>
                            <Link to="/contact" className="bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight hover:bg-gray-800 transition-colors">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}