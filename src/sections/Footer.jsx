import { Link } from 'react-router-dom'
import logo from '../assets/logo.png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container px-4 mx-auto">
                <Link to="/">
                    <img src={logo} className='relative inline-flex w-12 h-12 rounded' alt="logo" />
                </Link>
                <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
                    <Link to="/about" className="transition-colors hover:text-white">About</Link>
                    <Link to="/features" className="transition-colors hover:text-white">Features</Link>
                    <a href="#" className="transition-colors hover:text-white">Customers</a>
                    <a href="#" className="transition-colors hover:text-white">Pricing</a>
                    <a href="#" className="transition-colors hover:text-white">Help</a>
                    <a href="#" className="transition-colors hover:text-white">Careers</a>
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