import { NavLink } from 'react-router-dom';
import Menu from "../logos/menu";
import logoImage from "../assets/sketch1727512163153(3).png"; // Adjust the path to your actual image

export const Header = () => {
    return (
        <header className="sticky top-0 z-50 ">
            <div className="px-4 py-2">
                <div className="Container">
                    <div className="flex items-center justify-between">
                        <NavLink to="/">
                            {/* Replace with your imported image */}
                            <img 
                                src={logoImage} 
                                alt="Logo" 
                                className="w-auto h-12 rounded-lg " 
                            />
                        </NavLink>
                        <Menu className="w-8 h-5 md:hidden" />
                        <nav className="items-center hidden gap-6 text-2xl md:flex text-black/60 parastoo-hero">
                            <NavLink 
                                to="/" 
                                className={({ isActive }) => 
                                    `transition-colors hover:text-black ${isActive ? "text-black font-bold" : ""}`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink 
                                to="/about" 
                                className={({ isActive }) => 
                                    `transition-colors hover:text-black ${isActive ? "text-black font-bold" : ""}`
                                }
                            >
                                About Us
                            </NavLink>
                            <NavLink 
                                to="/products" 
                                className={({ isActive }) => 
                                    `transition-colors hover:text-black ${isActive ? "text-black font-bold" : ""}`
                                }
                            >
                                Products
                            </NavLink>
                            <NavLink 
                                to="/solutions" 
                                className={({ isActive }) => 
                                    `transition-colors hover:text-black ${isActive ? "text-black font-bold" : ""}`
                                }
                            >
                                Solution
                            </NavLink>
                            <NavLink 
                                to="/contact" 
                                className={({ isActive }) => 
                                    `inline-flex items-center justify-center px-4 py-2 font-medium tracking-tight transition-colors rounded-lg hover:bg-gray-800 ${isActive ? "bg-gray-800 text-white" : "bg-black text-white"}`
                                }
                            >
                                Contact Us
                            </NavLink>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}