import { Link } from "react-router-dom";
import { Twitter, Instagram, Youtube, MessageCircle } from "lucide-react";

export const WGFooter = () => {
  return (
    <footer className="bg-black border-t border-violet-500/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/wg-colosseum" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center">
                <span className="text-2xl font-display font-bold text-white">W</span>
              </div>
              <span className="text-2xl font-display font-bold text-white">
                WG <span className="text-violet-400">COLOSSEUM</span>
              </span>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              A principal liga portuguesa de League of Legends. Competição, glória e a batalha pelo título supremo.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500/30 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500/30 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500/30 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center text-violet-400 hover:bg-violet-500/30 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-4">LIGA</h4>
            <ul className="space-y-3">
              <li><Link to="/wg-colosseum/equipas" className="text-gray-400 hover:text-violet-400 transition-colors">Equipas</Link></li>
              <li><Link to="/wg-colosseum/classificacao" className="text-gray-400 hover:text-violet-400 transition-colors">Classificação</Link></li>
              <li><Link to="/wg-colosseum/calendario" className="text-gray-400 hover:text-violet-400 transition-colors">Calendário</Link></li>
              <li><Link to="/wg-colosseum/regras" className="text-gray-400 hover:text-violet-400 transition-colors">Regras</Link></li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h4 className="text-white font-display font-bold mb-4">MAIS</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Transmissões</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Inscrições</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Parceiros</a></li>
              <li><a href="#" className="text-gray-400 hover:text-violet-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-violet-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 WG Colosseum. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="#" className="hover:text-violet-400 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-violet-400 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
