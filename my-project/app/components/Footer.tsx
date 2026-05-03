import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaLeaf } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-forest-900 text-earth-100 py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand & Intro */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <FaLeaf className="text-3xl text-forest-500" />
              <span className="font-bold text-2xl tracking-tight text-white">
                Lumina<span className="text-forest-500">Estates</span>
              </span>
            </Link>
            <p className="text-earth-200 text-sm leading-relaxed">
              Discover your dream home with Lumina Estates. We offer premium properties that blend modern luxury with sustainable, nature-inspired living.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-500 hover:text-white transition-colors">
                <FaFacebookF className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-500 hover:text-white transition-colors">
                <FaTwitter className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-500 hover:text-white transition-colors">
                <FaInstagram className="text-sm" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-forest-800 flex items-center justify-center hover:bg-forest-500 hover:text-white transition-colors">
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-earth-200">
              <li><Link href="/" className="hover:text-forest-500 transition-colors">Home</Link></li>
              <li><Link href="#properties" className="hover:text-forest-500 transition-colors">Properties</Link></li>
              <li><Link href="#about" className="hover:text-forest-500 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-forest-500 transition-colors">Contact</Link></li>
              <li><Link href="#" className="hover:text-forest-500 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Services</h4>
            <ul className="space-y-2 text-earth-200">
              <li><Link href="#" className="hover:text-forest-500 transition-colors">Property Sales</Link></li>
              <li><Link href="#" className="hover:text-forest-500 transition-colors">Property Management</Link></li>
              <li><Link href="#" className="hover:text-forest-500 transition-colors">Real Estate Consulting</Link></li>
              <li><Link href="#" className="hover:text-forest-500 transition-colors">Virtual Tours</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-lg">Contact Us</h4>
            <ul className="space-y-3 text-earth-200 text-sm">
              <li className="flex items-start">
                <span className="font-semibold text-white mr-2 min-w-[60px]">Address:</span>
                123 Evergreen Terrace, Suite 400<br />Seattle, WA 98101
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-white mr-2 min-w-[60px]">Phone:</span>
                <a href="tel:+18005550199" className="hover:text-forest-500 transition-colors">+1 (800) 555-0199</a>
              </li>
              <li className="flex items-center">
                <span className="font-semibold text-white mr-2 min-w-[60px]">Email:</span>
                <a href="mailto:info@luminaestates.com" className="hover:text-forest-500 transition-colors">info@luminaestates.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-800 mt-12 pt-8 text-center text-earth-200 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {new Date().getFullYear()} Lumina Estates. All rights reserved.</p>
          <p>Designed with <span className="text-forest-500">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
