import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-slate-50 to-blue-50 relative overflow-hidden md:pt-28 lg:pt-32">

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block p-2 rounded-2xl bg-gradient-to-r from-slate-200 to-blue-200 mb-6">
            <div className="bg-white rounded-xl px-8 py-6">
              <span className="text-lg md:text-xl text-slate-600 font-medium mb-2 block">Welcome to</span>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-slate-600 to-blue-700 bg-clip-text text-transparent">
                LAVAANG DENTAL
              </h1>
              <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-slate-400 to-blue-500 rounded-full"></div>
            </div>
          </div>
          <p className="text-lg md:text-xl font-medium text-slate-600">
            A Multispeciality Dental Clinic
          </p>
        </div>

        {/* Main Quote Section */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              
              {/* Quote marks */}
              <div className="text-4xl md:text-5xl text-slate-300 font-serif absolute top-4 left-6">"</div>
              <div className="text-4xl md:text-5xl text-blue-300 font-serif absolute bottom-4 right-6">"</div>
              
              <div className="relative px-8 py-4">
                <p className="text-base md:text-lg lg:text-xl leading-relaxed text-center">
                  <span className="text-blue-700 font-semibold">Led by Dr. Sambhav Jain</span>
                  <span className="text-gray-700">, our clinic is built on </span>
                  
                  <span className="px-2 py-1 bg-blue-100 text-blue-700 font-medium rounded-md">trust</span>
                  
                  <span className="text-gray-700">, </span>
                  
                  <span className="px-2 py-1 bg-slate-100 text-slate-700 font-medium rounded-md">comfort</span>
                  
                  <span className="text-gray-700">, and </span>
                  
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 font-medium rounded-md">excellence</span>
                  
                  <span className="text-gray-700">. With years of experience and a passion for </span>
                  
                  <span className="text-blue-600 font-medium">modern, pain-free dentistry</span>
                  
                  <span className="text-gray-700">, we're here to make every visit feel less like a dental appointment and more like </span>
                  
                  <span className="text-slate-600 font-medium">self-care</span>
                  <span className="text-gray-700">.</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Doctor Information */}
        <div className="text-center">
          <div className="inline-block">
            <div className="bg-gradient-to-br from-slate-300 to-blue-300 p-1 rounded-2xl">
              <div className="bg-white rounded-xl p-8 md:p-10">
                
                {/* Doctor avatar */}
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-6 bg-gradient-to-br from-slate-400 to-blue-400 rounded-full flex items-center justify-center">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-6 h-6 md:w-8 md:h-8 bg-gradient-to-br from-slate-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                  <span className="text-slate-700">Dr.</span>
                  <span className="text-blue-700 ml-2">Sambhav Jain</span>
                </h3>
                
                <div className="space-y-3">
                  <div className="flex justify-center items-center space-x-4">
                    <span className="px-3 py-1 bg-slate-500 text-white font-medium rounded-full text-sm md:text-base">
                      B.D.S
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="px-3 py-1 bg-blue-500 text-white font-medium rounded-full text-sm md:text-base">
                      M.D.S
                    </span>
                  </div>
                  
                  <div className="mt-4">
                    <p className="text-base md:text-lg font-medium text-gray-600">
                      <span className="text-slate-600">Conservative Dentistry</span>
                      <span className="mx-2">&</span>
                      <span className="text-blue-600">Endodontics</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;