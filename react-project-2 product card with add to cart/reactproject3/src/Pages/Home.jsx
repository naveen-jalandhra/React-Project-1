import React from "react";
import { Link } from "react-router";

export const HomePage = () => {
  return (
    <div className="min-h-screen w-full bg-zinc-950 text-white selection:bg-white selection:text-black overflow-x-hidden">
      <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center px-4 pt-28 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/20 via-zinc-950 to-zinc-950 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center gap-6">
          <p className="font-inter text-zinc-400 uppercase tracking-[0.2em] text-xs md:text-sm font-semibold">
            Welcome to the Future of Commerce
          </p>

          <h1 className="font-poppins text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-500">
            DISCOVER <br /> THE EXTRAORDINARY
          </h1>

          <p className="font-inter text-base md:text-lg text-zinc-400 max-w-2xl mt-2 font-light leading-relaxed">
            Curated collections of premium tech, minimalist fashion, and luxury
            lifestyle products. Designed for those who never settle.
          </p>

          <div className="mt-8">
            <Link
              to="/products"
              className="group relative inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-950 font-poppins font-bold text-base md:text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
            >
              <span className="relative z-10 uppercase tracking-wider">
                Explore All Products
              </span>
              <div className="absolute inset-0 bg-zinc-200 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 md:px-8 pb-24 max-w-7xl mx-auto w-full">
        <div className="flex items-end justify-between mb-10">
          <h2 className="font-poppins text-3xl md:text-4xl font-bold tracking-tight">
            Premium Collections
          </h2>
          <Link
            to="/products"
            className="font-inter text-sm text-zinc-400 hover:text-white transition-colors border-b border-zinc-700 hover:border-white pb-1 hidden md:block"
          >
            View All Categories
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[280px]">
          <div className="md:col-span-2 md:row-span-2 relative rounded-[1.5rem] overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=2000"
              alt="Premium Audio"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-poppins text-2xl font-bold text-white mb-1">
                High-End Audio
              </h3>
              <p className="font-inter text-sm text-zinc-300">
                Experience sound like never before.
              </p>
            </div>
          </div>

          <div className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=800"
              alt="Luxury Watches"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="font-poppins text-lg font-bold text-white">
                Luxury Timepieces
              </h3>
            </div>
          </div>

          <div className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800"
              alt="Minimalist Decor"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="font-poppins text-lg font-bold text-white">
                Modern Decor
              </h3>
            </div>
          </div>

          <div className="relative rounded-[1.5rem] overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&q=80&w=800"
              alt="Fragrances"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="font-poppins text-lg font-bold text-white">
                Signature Scents
              </h3>
            </div>
          </div>

          <div className="md:col-span-2 relative rounded-[1.5rem] overflow-hidden group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200"
              alt="Fashion"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
            <div className="absolute bottom-1/2 translate-y-1/2 left-8">
              <h3 className="font-poppins text-2xl md:text-3xl font-bold text-white mb-1">
                Apparel Collection
              </h3>
              <p className="font-inter text-sm text-zinc-300">
                Style meets comfort.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 text-center border-t border-zinc-900 bg-zinc-950 w-full">
        <h2 className="font-poppins text-4xl md:text-5xl font-black mb-8 text-white">
          READY TO UPGRADE?
        </h2>
        <Link
          to="/products"
          className="inline-block px-10 py-4 border-2 border-white text-white font-poppins font-bold text-lg rounded-full hover:bg-white hover:text-black transition-colors duration-300"
        >
          GO TO PRODUCT PAGE
        </Link>
      </section>
    </div>
  );
};
