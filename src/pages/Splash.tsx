import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Splash = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
            WAY <span className="text-primary">GAMING</span>
          </h1>
          <p className="text-gray-400 text-lg">Seleciona uma das nossas plataformas</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Way Option */}
          <Link 
            to="/wg" 
            className="group relative overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-br from-black to-primary/10 p-8 md:p-12 transition-all duration-500 hover:border-primary hover:shadow-[0_0_60px_-10px] hover:shadow-primary/50"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="w-20 h-20 bg-primary/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                <img 
                  src="waylogo.png" 
                  alt="Way Gaming Logo"
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                WAY <span className="text-primary">GAMING ORG</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Conheça a nossa organização de esports, nossas equipas, jogadores e conquistas.
              </p>
              <div className="flex items-center gap-2 text-primary font-semibold">
                <span>Explorar</span>
                <svg className="w-5 h-5 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </Link>

          {/* WG Colosseum Option */}
          <div 
            className="group relative overflow-hidden rounded-2xl border border-violet-500/20 bg-gradient-to-br from-black to-violet-900/10 p-8 md:p-12 cursor-not-allowed opacity-70"
          >
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] z-20 flex items-center justify-center">
              <div className="text-center">
                <div className="inline-block px-6 py-3 bg-violet-500/20 border border-violet-500/40 rounded-full">
                  <span className="text-xl md:text-2xl font-display font-bold text-violet-400">EM BREVE...</span>
                </div>
              </div>
            </div>
            <div className="relative z-10">
              <div className="w-20 h-20 bg-violet-500/20 rounded-xl flex items-center justify-center mb-6">
                <span className="text-4xl font-display font-bold text-violet-400">W</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
                WAY GAMING <span className="text-violet-400">COLOSSEUM</span>
              </h2>
              <p className="text-gray-400 mb-6">
                A liga portuguesa de League of Legends. Competição, glória e a batalha pelo título.
              </p>
              <div className="flex items-center gap-2 text-violet-400/50 font-semibold">
                <span>Entrar na Arena</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Splash;
