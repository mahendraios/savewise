import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export function Navbar() {
  return (
    <nav className="w-full max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between z-10 relative">
      <Link to="/" className="flex items-center gap-3 cursor-pointer group">
        <img src={logo} alt="Savewise Logo" className="w-8 h-8 object-contain rounded-xl" />
        <span className="text-white text-2xl font-bold tracking-tight">SaveWise</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
         <Link to="/" className="hover:text-white transition-colors duration-200">Home</Link>
         <a href="/#features" className="hover:text-white transition-colors duration-200">Features</a>
         {/* <a href="#customers" className="hover:text-white transition-colors duration-200">Customers</a> */}
         <a href="/#contact" className="hover:text-white transition-colors duration-200">Contact</a>
      </div>
      
      <div className="flex items-center gap-6 text-sm font-medium">
         <button onClick={()=>alert("Link will enable soon")} className="bg-white text-black px-5 py-2.5 rounded-full hover:bg-gray-100 hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Open App
         </button>
      </div>
    </nav>
  );
}
