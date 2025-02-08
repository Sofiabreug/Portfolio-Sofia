import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { Menu } from './Menu';
import { useCallback, useState } from 'react';
import { MenuIcon } from '@/components/icons/MenuIcon';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '500',
});

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <div
      className={`${roboto.className} text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-50 bg-gradient-to-r from-[#1e1b6b] via-[#4b0076] to-[#1e1b6b] animate-gradient`}
    >
      <Link href="/">
        <Image 
          src="/favicon.ico" 
          width={55} 
          height={55} 
          alt="Logo" 
          className="hover:scale-105 transition-transform"
        />
      </Link>
      
      <button 
        className="p-1 md:hidden hover:opacity-80 transition-opacity"
        onClick={openMenu}
        aria-label="Abrir menu"
      >
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      
      {/* Nav para desktop */}
      <nav className="hidden md:flex items-center gap-10 text-lg mr-8">
        <Link
          href="/"
          className="text-white hover:text-purple-400 transition-colors duration-300 hover:underline"
        >
          Sobre mim
        </Link>
        <Link
          href="/contatos"
          className="text-white hover:text-purple-400 transition-colors duration-300 hover:underline"
        >
          Entre em contato
        </Link>
      </nav>

      {/* Menu mobile */}
      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </div>
  );
};