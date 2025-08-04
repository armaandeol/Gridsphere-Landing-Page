import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
            <div className="container px-4 mx-auto">
                <Link to="/">
              <div className="flex items-center justify-center w-full h-full">
  <img 
    src="/assets/logo(5).png" 
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
                    <a href="https://www.facebook.com/profile.php?id=61577994149104"><img src="/assets/facebook.svg" alt="Facebook" className='w-6 h-6' /></a>
                    <a href="https://x.com/GridSphere444"><img src="/assets/twitter.svg" alt="Twitter" className='w-6 h-6' /></a>
                    <a href="#"><img src="/assets/instagram.svg" alt="Instagram" className='w-6 h-6' /></a>
                    <a href="https://www.linkedin.com/company/grid-sphere
"><img src="/assets/linkedin.svg" alt="LinkedIn" className='w-6 h-6' /></a>
                </div>
                <p className='mt-6'>&copy; 2025 Gridsphere, Inc. All rights reserved.</p>
            </div>
        </footer>
    );
}