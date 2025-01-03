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
    <header
      className={`${roboto.className} text-sm flex py-3 px-5 justify-between items-center sticky top-0 z-20`}
    >
      <Link href="/">
        <Image src="/favicon.ico" width={55} height={55} alt="" />
      </Link>
      <button className="p-1 md:hidden" onClick={openMenu}>
        <MenuIcon className="fill-white w-10 h-10" />
      </button>
      <nav className="hidden md:flex items-center gap-10 text-lg mr-8">
  <Link
    href="/"
    className="hover:text-purple-400 transition-all duration-300 ease-in-out hover:underline"
  >
    Sobre mim
  </Link>
  {/* <Link href="/portfolio" className="hover:text-purple-400 transition-all duration-300 ease-in-out hover:underline">
    Portfolio
  </Link> */}
  <Link
    href="/contatos"
    className="hover:text-purple-400 transition-all duration-300 ease-in-out hover:underline"
  >
    Entre em contato
  </Link>
</nav>

      <Menu isVisible={isMenuOpen} onClose={closeMenu} />
    </header>
  );
};
