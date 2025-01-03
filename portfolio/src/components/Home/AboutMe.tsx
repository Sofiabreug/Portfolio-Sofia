import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { AboutMe as TAboutMe } from '@/types/Home';
import { FaReact, FaNode, FaPython, FaCss3Alt, FaHtml5, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiOracle } from 'react-icons/si';
import { ReactElement } from 'react';
const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});
type TechIcons = {
  react: ReactElement;
  nodejs: ReactElement;
  python: ReactElement;
  css: ReactElement;
  html: ReactElement;
  typescript: ReactElement;
  javascript: ReactElement;
  oracle: ReactElement;
};

// Ícones para as tecnologias
const techIcons: TechIcons = {
  react: <FaReact />,
  nodejs: <FaNode />,
  python: <FaPython />,
  css: <FaCss3Alt />,
  html: <FaHtml5 />,
  typescript: <SiTypescript />,
  javascript: <FaJsSquare />,
  oracle: <SiOracle />,
};

interface AboutMeProps {
  aboutMe: TAboutMe;
}

export const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const { title, description, contact, pfp, techs } = aboutMe;

  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 px-16 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className=' flex-col items-center xl:items-start gap-4 w-full xl:w-124'>
        
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leading-[5rem]">
          {title.default} sou&nbsp;
          <strong className="font-bold">{title.bold}</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>{description}</h2>
          <Link
            href={contact.link}
            className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            {contact.label}
          </Link>
        </div>
        </div>

        <div className='items-center xl:items-start gap-4 w-full xl:w-[48rem]'>

        
        {/* Grid ajustada para 4 colunas e 2 linhas */}
        <ul className="grid grid-cols-3 sm:grid-cols-3 xl:grid-cols-4 gap-3 text-xl">
          {techs.map(({ tech, bgcolor, color }, index) => (
            <li
              key={tech + index}
              style={{ backgroundColor: bgcolor, color: color }}
              className="inline-flex p-3 rounded-md items-center justify-center gap-3 overflow-hidden"
            >
              {/* Ícone da tecnologia */}
              {techIcons[tech.toLowerCase() as keyof TechIcons] && (
                <span className="text-2xl">{techIcons[tech.toLowerCase() as keyof TechIcons]}</span>
              )}
              {/* Nome da tecnologia */}
              <span className="truncate">{tech}</span>
            </li>
          ))}
        </ul>
        </div>
        </div>
      
      <div className="relative">
        <Image
          src={pfp.image.url}
          alt={pfp.image.alt || 'Foto de Perfil de Sofia.'}
          unoptimized
          width={500}
          height={500}
          className="rounded-full shadow-lg hover:shadow-2xl ring-4 ring-black transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </div>
    </main>
  );
};