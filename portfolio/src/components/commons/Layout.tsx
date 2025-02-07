import { ReactNode } from 'react';
import { JetBrains_Mono } from 'next/font/google';
import { Header } from './Header';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

interface LayoutProps {
  children: ReactNode;
}

const jetbrains_mono = JetBrains_Mono({
  subsets: ['latin'],
  weight: '400',
});

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div
      className={`flex flex-col min-h-screen ${jetbrains_mono.className}`}
    >
      <Header />
      <main className="flex-grow  bg-gradient-to-r from-[#1e1b6b] via-[#4b0076] to-[#1e1b6b] animate-gradient">{children}</main>
      <Footer />
    </div>
  );
};


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-8">
      <p className="text-sm">
        © {new Date().getFullYear()} Sofia | Todos os direitos reservados.
      </p>
      <div className="flex justify-center gap-4 mt-2">
       
        <a
          href="https://github.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-all duration-300 text-2xl"
        >
          <FaGithub />
        </a>

      
        <a
          href="https://linkedin.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-purple-400 transition-all duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>

       
        <a
          href="mailto:seuemail@exemplo.com"
          className="hover:text-purple-400 transition-all duration-300 text-2xl"
        >
          <FaEnvelope />
        </a>
      </div>
    </footer>
  );
};
