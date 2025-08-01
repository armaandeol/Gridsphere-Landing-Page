import { Link } from 'react-router-dom'
import logo from '../assets/logo(5).png';
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import linkedin from '../assets/linkedin.svg';

export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container px-4 mx-auto">
                <Link to="/">
              <div className="flex items-center justify-center w-full h-full">
  <img 
    src={logo} 
    alt="Logo" 
    className="h-12 rounded-lg invert brightness-0" 
  />
</div>
  
                </Link>
                <nav className='flex flex-col gap-6 mt-6 md:flex-row md:justify-center'>
                    <Link to="/about" className="transition-colors hover:text-white">About</Link>
                    <Link to="/products" className="transition-colors hover:text-white">Products</Link>
                    <Link to="/solutions" className="transition-colors hover:text-white">Solutions</Link>
                    <Link to="/contact" className="transition-colors hover:text-white">Contact</Link>
                </nav>
                <div className='flex justify-center gap-6 mt-6'>
                    <a href="https://www.facebook.com/profile.php?id=61577994149104"><img src={facebook} alt="Facebook" className='w-6 h-6' /></a>
                    <a href="https://x.com/GridSphere444"><img src={twitter} alt="Twitter" className='w-6 h-6' /></a>
                    <a href="#"><img src={instagram} alt="Instagram" className='w-6 h-6' /></a>
                    <a href="https://www.linkedin.com/company/grid-sphere
"><img src={linkedin} alt="LinkedIn" className='w-6 h-6' /></a>
                </div>
                <p className='mt-6'>&copy; 2025 Gridsphere, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}