import { NavLink } from 'react-router-dom';
import Menu from "../logos/menu";

export const Header = () => {
    return (
        <header className="sticky top-0 z-10 backdrop-blur-sm">
            <div className="px-4 py-2">
                <div className="Container">
                    <div className="flex items-center justify-between">
                        <NavLink to="/">
                            <img src="https://i0.wp.com/www.carddsgn.com/wp-content/uploads/2021/06/2-August-Bioscience-logo.jpg?w=1080&ssl=1" alt="Logo" className="w-auto h-20 bg-transparent rounded-lg mix-blend-multiply" />
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
                                to="/features" 
                                className={({ isActive }) => 
                                    `transition-colors hover:text-black ${isActive ? "text-black font-bold" : ""}`
                                }
                            >
                                Features
                            </NavLink>
                            <NavLink 
                                to="/a" 
                                className={({ isActive }) => 
                                    `transition-colors hover:text-black ${isActive ? "text-black font-bold" : ""}`
                                }
                            >
                                Solution
                            </NavLink>
                            <a href="#" className="transition-colors hover:text-black">Help</a>
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