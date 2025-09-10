import React from 'react';
import { Mail, Phone, MapPin, Clock, User } from 'lucide-react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden pt-24 md:pt-28 lg:pt-32">
      
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 w-64 h-64 bg-slate-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-blue-700 bg-clip-text text-transparent">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Get in touch with us for appointments, consultations, or any dental care inquiries
          </p>
          <div className="h-1 w-24 mx-auto mt-6 bg-gradient-to-r from-slate-400 to-blue-500 rounded-full"></div>
        </div>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          
          {/* Contact Details */}
          <div className="space-y-8">
            
            {/* Email Section */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-2">Email</h3>
                  <a 
                    href="mailto:lavaangdental@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
                  >
                    lavaangdental@gmail.com
                  </a>
                  <p className="text-gray-600 text-sm mt-1">Send us your questions anytime</p>
                </div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-slate-100 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-2">Phone</h3>
                  <div className="space-y-1">
                    <a 
                      href="tel:+918168176616"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
                    >
                      +91 8168176616
                    </a>
                    <a 
                      href="tel:+919996968459"
                      className="block text-blue-600 hover:text-blue-700 font-medium text-lg transition-colors duration-200"
                    >
                      +91 99969-68459
                    </a>
                  </div>
                  <p className="text-gray-600 text-sm mt-2">Call for appointments and emergency care</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-2">Business Hours</h3>
                  <div className="space-y-1 text-gray-700">
                    <p className="font-medium">Monday - Saturday</p>
                    <p className="text-blue-600">9:00 AM - 8:00 PM</p>
                    <p className="font-medium">Sunday</p>
                    <p className="text-slate-600">10:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div className="space-y-8">
            
            {/* Location 1 - Yamunanagar */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-red-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-2">Yamunanagar Clinic</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-3">
                    Shop No. 1, Jain Nagar<br />
                    Yamunanagar, Haryana
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-lg transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Location 2 - Chandigarh */}
            <div className="bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-slate-700 mb-2">Chandigarh Clinic</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-3">
                    Sector 27 B<br />
                    Chandigarh
                  </p>
                  <button className="text-blue-600 hover:text-blue-700 font-medium text-sm border border-blue-200 hover:border-blue-300 px-4 py-2 rounded-lg transition-colors duration-200">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Doctor Info Card */}
            <div className="bg-gradient-to-br from-slate-300 to-blue-300 p-1 rounded-2xl">
              <div className="bg-white rounded-xl p-6 md:p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-gradient-to-br from-slate-400 to-blue-400 p-3 rounded-full">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-700">Dr. Sambhav Jain</h3>
                    <p className="text-gray-600">B.D.S, M.D.S</p>
                  </div>
                </div>
                <p className="text-gray-700">
                  Conservative Dentistry & Endodontics Specialist
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Available for consultations at both locations
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-lg border border-gray-100">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-700 mb-4">
            Ready to Schedule Your Appointment?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Contact us today to book your consultation or learn more about our dental services. 
            We're here to help you achieve your best smile.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+918168176616"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Call Now
            </a>
            <a 
              href="mailto:lavaangdental@gmail.com"
              className="bg-slate-600 hover:bg-slate-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 shadow-lg"
            >
              Send Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;