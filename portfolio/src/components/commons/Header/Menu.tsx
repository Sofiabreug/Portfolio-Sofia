import { MenuCloseIcon } from '@/components/icons/MenuCloseIcon';
import Image from 'next/image';
import Link from 'next/link';
import { FaUser, FaEnvelope, FaHome } from 'react-icons/fa';

interface MenuProps {
  isVisible: boolean;
  onClose: () => void;
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div
      className={`${isVisible ? 'flex' : 'hidden'}
        fixed inset-0 w-full h-full bg-black bg-opacity-60 backdrop-blur-lg md:hidden
        justify-end transition-all duration-500 ease-in-out z-50
      `}
      onClick={onClose}
    >
      <div
        className={`w-[85%] max-w-md bg-gradient-to-b from-[#1e1b6b] to-[#4b0076] h-full shadow-xl py-6 px-6
          transform transition-all duration-500 ease-out
          ${isVisible ? 'translate-x-0' : 'translate-x-full'}
          flex flex-col border-l border-purple-400/20
          relative
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header do menu */}
        <div className="flex justify-between items-center mb-10">
          <Link href="/" className="group">
            <Image 
              src="/favicon.ico" 
              width={60} 
              height={60} 
              alt="Logo"
              className="transition-transform duration-300 group-hover:scale-110 group-active:scale-95"
            />
          </Link>
          
          <button 
            onClick={onClose}
            className="p-2 rounded-full bg-purple-900/30 hover:bg-purple-400/20 transition-all duration-300
            border border-purple-400/20 hover:border-purple-400/40"
          >
            <MenuCloseIcon className="fill-white w-8 h-8 hover:rotate-90 transition-transform" />
          </button>
        </div>

        {/* Itens do menu */}
        <nav className="flex flex-col gap-6 flex-1">
          <Link 
            href="/" 
            onClick={onClose}
            className="group flex items-center gap-4 p-4 rounded-xl
            bg-purple-900/10 hover:bg-purple-400/20
            border border-transparent hover:border-purple-400/30
            transition-all duration-300"
          >
            <div className="p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition">
              <FaHome className="text-2xl text-purple-400" />
            </div>
            <span className="text-xl font-medium text-white/90">Início</span>
          </Link>

          <Link 
            href="/" 
            onClick={onClose}
            className="group flex items-center gap-4 p-4 rounded-xl
            bg-purple-900/10 hover:bg-purple-400/20
            border border-transparent hover:border-purple-400/30
            transition-all duration-300"
          >
            <div className="p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition">
              <FaUser className="text-2xl text-purple-400" />
            </div>
            <span className="text-xl font-medium text-white/90">Sobre mim</span>
          </Link>
          
          <Link 
            href="/contatos" 
            onClick={onClose}
            className="group flex items-center gap-4 p-4 rounded-xl
            bg-purple-900/10 hover:bg-purple-400/20
            border border-transparent hover:border-purple-400/30
            transition-all duration-300"
          >
            <div className="p-3 bg-purple-400/10 rounded-lg group-hover:bg-purple-400/20 transition">
              <FaEnvelope className="text-2xl text-purple-400" />
            </div>
            <span className="text-xl font-medium text-white/90">Contato</span>
          </Link>
        </nav>

        {/* Footer do menu */}
        <div className="mt-8 pt-6 border-t border-purple-400/10">
          <p className="text-center text-white/60 text-sm">
            © {new Date().getFullYear()} Sofia Abreu
          </p>
        </div>
      </div>
    </div>
  );
};