
import React from 'react';
import ToolCard from './ToolCard';
import { TOOLS } from '../constants';

const ToolGrid: React.FC = () => {
  return (
    <section id="tools" className="py-16 sm:py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Ferramentas Essenciais para <span className="gradient-text">Anúncios Perfeitos</span></h2>
            <p className="max-w-2xl mx-auto mt-4 text-slate-400">
                Cada ferramenta foi desenhada para resolver um desafio específico do marketing digital, tudo em um só lugar.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {TOOLS.map((tool, index) => (
            <ToolCard key={index} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolGrid;
