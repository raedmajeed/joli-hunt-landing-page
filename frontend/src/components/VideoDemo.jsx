import React from 'react';
import { Users } from 'lucide-react';

const VideoDemo = () => {
  return (
    <section className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #D4A017 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Trust Badge */}
        <div className="flex justify-center mb-8 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-[#D4A017] bg-opacity-10 px-6 py-3 rounded-full">
            <Users className="w-5 h-5 text-[#D4A017]" />
            <span className="font-bold text-[#D4A017]">Join 1,000+ job seekers organizing their search</span>
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mb-12 animate-fade-in-up delay-100">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#1C1C1C] mb-4">
            See JoliHunt in <span className="text-[#D4A017]">Action</span>
          </h2>
          <p className="text-lg md:text-xl text-[#6B6B6B] max-w-2xl mx-auto">
            Watch how easy it is to track your applications, schedule interviews, and land offers.
          </p>
        </div>

        {/* Image Container */}
        <div className="relative animate-fade-in-up delay-200">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <img
              src="https://ik.imagekit.io/ftuyddcfm/2ee08047-3136-4d8f-8398-a39ce9cdd781.png?updatedAt=1777393114172"
              alt="JoliHunt Dashboard Preview"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#D4A017] opacity-10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4A017] opacity-10 rounded-full blur-3xl animate-pulse delay-700"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemo;
