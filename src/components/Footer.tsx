
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-slate-800 mt-20">
      <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
        <p>&copy; {new Date().getFullYear()} Market Suite. Todos os direitos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Termos</a>
          <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          <a href="#" className="hover:text-white transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
