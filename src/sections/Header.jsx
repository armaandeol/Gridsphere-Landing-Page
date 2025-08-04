import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Menu from "../logos/menu";

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 ">
            <div className="px-4 py-2">
                <div className="Container">
                    <div className="flex items-center justify-between">
                        <NavLink to="/">
                            <img 
                                src="/assets/sketch1727512163153(3).png" 
                                alt="Logo" 
                                className="w-auto h-12 rounded-lg " 
                            />
                        </NavLink>
                        <div className="relative md:hidden">
                            <button
                                className="flex items-center justify-center w-8 h-5"
                                onClick={() => setMenuOpen(!menuOpen)}
                                style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
                                aria-label="Open menu"
                            >
                                <Menu className="w-8 h-5" />
                            </button>
                            {/* Mobile Dropdown List (only visible when menuOpen is true) */}
                            {menuOpen && (
                                <div className="absolute right-0 z-50 w-40 mt-2 bg-white rounded-lg shadow-lg">
                                    <NavLink to="/" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Home</NavLink>
                                    <NavLink to="/about" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>About Us</NavLink>
                                    <NavLink to="/products" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Products</NavLink>
                                    <NavLink to="/solutions" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Solution</NavLink>
                                    <NavLink to="/contact" className="block px-4 py-2 hover:bg-gray-100" onClick={() => setMenuOpen(false)}>Contact Us</NavLink>
                                </div>
                            )}
                        </div>
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