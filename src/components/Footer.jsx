import React from 'react';
import { Mail, Phone, MapPin, Clock, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      
      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Clinic Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-slate-300 bg-clip-text text-transparent mb-2">
                Lavaang Dental
              </h3>
              <p className="text-slate-400 text-sm">A Multispeciality Dental Clinic</p>
            </div>
            <p className="text-gray-300 text-base leading-relaxed mb-4">
              Led by Dr. Sambhav Jain, our clinic is built on trust, comfort, and excellence. 
              We provide modern, pain-free dentistry to make every visit feel like self-care.
            </p>
            <div className="bg-slate-700/50 p-4 rounded-lg">
              <p className="text-blue-300 font-medium mb-2">Dr. Sambhav Jain</p>
              <p className="text-slate-400 text-sm">B.D.S, M.D.S</p>
              <p className="text-slate-400 text-sm">Conservative Dentistry & Endodontics</p>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-300">Contact Info</h4>
            <div className="space-y-4">
              
              {/* Email */}
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:lavaangdental@gmail.com" 
                    className="text-gray-300 hover:text-blue-300 transition-colors duration-200"
                  >
                    lavaangdental@gmail.com
                  </a>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="space-y-1">
                  <a 
                    href="tel:+918168176616" 
                    className="block text-gray-300 hover:text-blue-300 transition-colors duration-200"
                  >
                    +91 8168176616
                  </a>
                  <a 
                    href="tel:+919996968459" 
                    className="block text-gray-300 hover:text-blue-300 transition-colors duration-200"
                  >
                    +91 99969-68459
                  </a>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">Mon-Sat: 9:00 AM - 8:00 PM</p>
                  <p className="text-gray-300 text-sm">Sun: 10:00 AM - 6:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Locations */}
          <div>
            <h4 className="text-xl font-semibold mb-6 text-blue-300">Our Locations</h4>
            <div className="space-y-6">
              
              {/* Yamunanagar */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm mb-1">Yamunanagar</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Shop No. 1, Jain Nagar<br />
                    Yamunanagar, Haryana
                  </p>
                </div>
              </div>
              
              {/* Chandigarh */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium text-sm mb-1">Chandigarh</p>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Sector 27 B<br />
                    Chandigarh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Services Section */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <h4 className="text-xl font-semibold mb-6 text-center text-blue-300">Our Services</h4>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              'General Dentistry',
              'Root Canal Treatment', 
              'Dental Implants',
              'Teeth Whitening',
              'Orthodontics',
              'Oral Surgery',
              'Preventive Care',
              'Emergency Care',
              'Cosmetic Dentistry',
              'Endodontics',
              'Periodontics',
              'Pediatric Dentistry'
            ].map((service, index) => (
              <div key={index} className="text-center">
                <span className="text-slate-400 text-sm hover:text-blue-300 transition-colors duration-200 cursor-pointer">
                  {service}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-slate-700 bg-slate-900/50">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-slate-400 text-sm">
                © 2024 Lavaang Dental. All rights reserved.
              </p>
            </div>
            
            {/* Made with love */}
            <div className="flex items-center space-x-2 text-slate-400 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for healthy smiles</span>
            </div>
            
            {/* Quick Links */}
            <div className="flex space-x-6 text-sm">
              <a href="#about" className="text-slate-400 hover:text-blue-300 transition-colors duration-200">
                About Us
              </a>
              <a href="#contact" className="text-slate-400 hover:text-blue-300 transition-colors duration-200">
                Contact
              </a>
              <span className="text-slate-500">Privacy Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;