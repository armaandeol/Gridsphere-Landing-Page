import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container mx-auto px-4">
                <Link to="/">
                    <img src={logo} className='w-12 h-12 inline-flex relative rounded' alt="logo" />
                </Link>
                <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
                    <Link to="/about" className="hover:text-white transition-colors">About</Link>
                    <Link to="/features" className="hover:text-white transition-colors">Features</Link>
                    <a href="#" className="hover:text-white transition-colors">Customers</a>
                    <a href="#" className="hover:text-white transition-colors">Pricing</a>
                    <a href="#" className="hover:text-white transition-colors">Help</a>
                    <a href="#" className="hover:text-white transition-colors">Careers</a>
                </nav>
                <div className='flex justify-center gap-6 mt-6'>
                    <a href="#"><img src={facebook} alt="Facebook" className='w-6 h-6' /></a>
                    <a href="#"><img src={twitter} alt="Twitter" className='w-6 h-6' /></a>
                    <a href="#"><img src={instagram} alt="Instagram" className='w-6 h-6' /></a>
                    <a href="#"><img src={linkedin} alt="LinkedIn" className='w-6 h-6' /></a>
                </div>
                <p className='mt-6'>&copy; 2025 Gridsphere, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}