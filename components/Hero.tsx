
import React from 'react';

interface HeroProps {
  onNavigate: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-6 text-center">
        <div className="bg-indigo-500 text-white text-xs font-bold px-4 py-1 rounded-full inline-block mb-4">
          NOVO
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter mb-4">
          A <span className="gradient-text">Suíte de Marketing</span> Definitiva
        </h1>
        <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300 mb-8">
          Potencialize seus anúncios com um arsenal de ferramentas de IA. Crie mockups 3D, otimize seus lucros, gere conteúdo de alta conversão e muito mais.
        </p>
        <div className="flex justify-center items-center gap-4">
            <button 
                onClick={onNavigate} 
                className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-indigo-600/30 transition-all duration-300 transform hover:scale-105"
            >
                Explorar Ferramentas
            </button>
            <a 
                href="#"
                className="bg-slate-700/50 hover:bg-slate-700 text-slate-100 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
            >
                Ver Preços
            </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
