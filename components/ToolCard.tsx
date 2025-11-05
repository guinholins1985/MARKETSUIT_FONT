import React from 'react';
import type { MarketingTool } from '../types';

interface ToolCardProps {
  tool: MarketingTool;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  const { title, description, icon: Icon } = tool;

  return (
    // The main container. The hover effect is now applied directly to the card body.
    <div className="group relative">
      
      {/* Main card body with background, border, and a simple zoom effect on hover */}
      <div className="relative rounded-2xl p-6 bg-slate-800/70 backdrop-blur-sm border border-slate-700 shadow-lg transition-all duration-300 ease-out group-hover:border-indigo-500/80 group-hover:shadow-2xl group-hover:shadow-indigo-500/30 group-hover:scale-105">
        
        {/* Aurora/Glow Background Effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-900/30 via-slate-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        {/* Shine/Glare Effect that animates on hover */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden rounded-2xl pointer-events-none">
            <div className="absolute top-0 left-[-150%] w-[100%] h-full bg-[linear-gradient(110deg,transparent_20%,rgba(255,255,255,0.1)_50%,transparent_80%)] transition-all duration-1000 ease-in-out group-hover:left-[150%]"></div>
        </div>
        
        {/* Content without 3D translation */}
        <div className="relative z-10">
            <div className="bg-slate-700/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4 border border-slate-600 transition-all duration-300 ease-out group-hover:bg-indigo-600/50 group-hover:border-indigo-500">
                <Icon className="w-6 h-6 text-indigo-400 transition-colors duration-300 ease-out group-hover:text-white" />
            </div>
            <h3 className="text-lg font-bold text-slate-100 mb-2">{title}</h3>
            <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;