import React, { useEffect } from 'react';
const HomePage = () => {
  useEffect(() => {
    console.log("Analytics: Home Page Mounted");
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-24 text-center animate-in fade-in duration-700">
      {/* Subtle Background Glow */}
      <div className="absolute -top-24 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 bg-blue-500/10 blur-[120px]" />

      <div className="max-w-3xl space-y-6">
        {/* Modern Tagline */}
        <span className="inline-block rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-blue-400 ring-1 ring-inset ring-blue-500/20">
          New: Smart Price Analysis
        </span>

        {/* High-Impact Heading */}
        <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-7xl">
          Price <span className="bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent">Checker</span>
        </h1>

        {/* Refined Description */}
        <p className="mx-auto max-w-xl text-lg leading-relaxed text-slate-400">
          Set your items and unlock real-time market insights. Discover the true 
          value of your assets with our proprietary pricing engine.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
