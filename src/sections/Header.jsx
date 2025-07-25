import { Link } from 'react-router-dom'
import Menu from "../logos/menu"
export const Header = () => {
    return (
        <header className="sticky top-0 z-10 backdrop-blur-sm">
            <div className="px-4 py-2">
                <div className="Container">
                    <div className="flex items-center justify-between">
                        <Link to="/">
                            <img src="https://i0.wp.com/www.carddsgn.com/wp-content/uploads/2021/06/2-August-Bioscience-logo.jpg?w=1080&ssl=1" alt="Logo" className="w-auto h-20 bg-transparent rounded-lg mix-blend-multiply" />
                        </Link>
                        <Menu className="w-8 h-5 md:hidden" />
                        <nav className="items-center hidden gap-6 text-2xl md:flex text-black/60 parastoo-hero">
                            <Link to="/" className="transition-colors hover:text-black">Home</Link>
                            <Link to="/about" className="transition-colors hover:text-black">About Us</Link>
                            <Link to="/features" className="transition-colors hover:text-black">Features</Link>
                           <Link to="/a" className="transition-colors hover:text-black">Solution</Link>
                            <a href="#" className="transition-colors hover:text-black">Help</a>
                            <Link to="/contact" className="inline-flex items-center justify-center px-4 py-2 font-medium tracking-tight text-white transition-colors bg-black rounded-lg hover:bg-gray-800">Contact Us</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}