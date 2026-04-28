import React from 'react';

const CTABanner = () => {
  return (
    <section className="py-16 lg:py-20 bg-[#F4B400] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%, #1A1A1A),
                           linear-gradient(45deg, #1A1A1A 25%, transparent 25%, transparent 75%, #1A1A1A 75%, #1A1A1A)`,
          backgroundSize: '60px 60px',
          backgroundPosition: '0 0, 30px 30px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
          Ready to take control of your job search?
        </h2>
        <p className="text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Join thousands of job seekers who are organizing their applications and landing offers faster.
        </p>

        <div className="max-w-md mx-auto mb-8">
          <a 
            href="https://app.jolihunt.com/login" 
            className="inline-block bg-white text-[#F4B400] px-10 py-4 rounded-lg font-black text-xl hover:bg-[#FAFAF8] transition-all duration-200 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-105"
          >
            Get Started Free
          </a>
        </div>

        <p className="text-white/80 text-sm">
          No credit card required · Free forever plan available
        </p>
      </div>
    </section>
  );
};

export default CTABanner;

