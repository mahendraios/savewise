import { Globe } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";

export function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-[#030303] z-20 relative pt-20 pb-10 px-6 mt-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-12 gap-10 mb-16">
          
          {/* Brand Info */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
              {/* <div className="bg-indigo-600 p-1.5 rounded-lg flex items-center justify-center">
                 <Zap className="text-white w-4 h-4 fill-white" />
              </div> */}
              <img src={Logo} alt="SaveWise Logo" className="w-10 h-10 rounded-xl"  />
              <span className="text-white text-xl font-bold tracking-tight">SaveWise</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
             Unifying your finances and aligning your entire life around a single source of truth with Savewise.
            </p>
            {/* <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <GithubIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div> */}
          </div>

          {/* Links Group 1 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm">Features</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Integrations</a></li> */}
              {/* <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors text-sm">Pricing</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Changelog</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Docs</a></li> */}
            </ul>
          </div>

          {/* Links Group 2 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Careers</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Blog</a></li> */}
              <li><a href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Partners</a></li> */}
            </ul>
          </div>

          {/* Links Group 3 */}
          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</Link></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Cookie Policy</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Security</a></li> */}
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Savewise Platform, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-500 hover:text-gray-300 transition-colors cursor-pointer">
              <Globe className="w-4 h-4" />
              <span>English (US)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
