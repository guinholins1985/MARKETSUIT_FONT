
import React from 'react';
import { TOOLS } from '../constants';
import ToolCard from './ToolCard';

const ExploreTools: React.FC = () => {
  return (
    <section id="tools" className="py-20 sm:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-4">
              Nossas <span className="gradient-text">Ferramentas Poderosas</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-300">
                Cada ferramenta foi desenhada para resolver um desafio específico do marketing digital, tudo em um só lugar. Explore e transforme sua estratégia.
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

export default ExploreTools;
