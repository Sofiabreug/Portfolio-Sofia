import Image from 'next/image';
import Link from 'next/link';
import { Roboto } from 'next/font/google';
import { AboutMe as TAboutMe } from '@/types/Home';
import { 
  FaReact, 
  FaNode, 
  FaPython, 
  FaCss3Alt, 
  FaHtml5, 
  FaJsSquare,
  FaJava,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiOracle,
  SiNextdotjs,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiGithub,
  SiTailwindcss,
  SiExpress,
  SiNestjs,
  SiGraphql,
  SiFirebase,
  SiCplusplus
} from 'react-icons/si';
import { ReactElement } from 'react';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

type TechIcons = {
  [key: string]: ReactElement;
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
  nextjs: <SiNextdotjs />, 
  vuejs: <SiVuedotjs />, 
  angular: <SiAngular />, 
  svelte: <SiSvelte />, 
  mongodb: <SiMongodb />, 
  postgresql: <SiPostgresql />, 
  mysql: <SiMysql />, 
  git: <SiGit />, 
  github: <SiGithub />, 
  tailwindcss: <SiTailwindcss />, 
  java: <FaJava />, 
  docker: <FaDocker />, 
  express: <SiExpress />, 
  nestjs: <SiNestjs />, 
  graphql: <SiGraphql />, 
  firebase: <SiFirebase />,  
  cplusplus: <SiCplusplus />
};

interface AboutMeProps {
  aboutMe: TAboutMe;
}

export const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const { title, description, contact, pfp, techs } = aboutMe;

  return (
    <main className="flex flex-col justify-center items-center px-2 py-8 md:py-12">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 w-full">
        {/* Foto */}
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 xl:w-96 xl:h-96 animate-fade-in order-1 md:order-2 -mt-8 md:mt-0 z-10">
          <Image
            src={pfp.image.url}
            alt={pfp.image.alt || 'Foto de Perfil'}
            unoptimized
            fill
            className="rounded-full object-cover shadow-2xl ring-4 ring-purple-500 hover:ring-purple-600 transition-all"
          />
        </div>

        {/* Texto */}
        <div className="flex flex-col items-center md:items-start gap-6 w-full md:w-1/2 order-2 md:order-1 px-4 mt-8 md:mt-0 z-20">
          <div className="text-white flex flex-col items-center md:items-start gap-4 md:bg-none md:backdrop-blur-none bg-gradient-to-r from-[#1e1b6b]/50 to-[#4b0076]/50 rounded-2xl p-6 backdrop-blur-sm md:rounded-none md:p-0">
            <div className="flex flex-col items-center md:items-start">
              <h1 className="text-3xl sm:text-4xl md:text-6xl md:leading-[5rem] animate-fade-in text-center md:text-left">
                {title.default}
                <strong className="font-bold typing-animation text-4xl sm:text-5xl md:text-6xl ml-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-300">
                  sou {title.bold}
                </strong>
              </h1>
            </div>

            <h2 className={`${roboto.className} text-base sm:text-lg md:text-xl text-center md:text-left animate-fade-in delay-100`}>
              {description}
            </h2>

            <Link
              href={contact.link}
              className="mt-4 md:mt-6 px-4 py-2 md:px-6 md:py-3 bg-purple-600 text-white text-base md:text-lg rounded-lg transition-all hover:bg-purple-700 animate-fade-in delay-200 w-fit"
            >
              {contact.label}
            </Link>
          </div>

          {/* Grid de Tecnologias */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-2 sm:gap-3 w-full">
            {techs.map(({ tech, bgcolor, color }, index) => (
              <li
                key={tech + index}
                style={{ backgroundColor: bgcolor, color: color }}
                className="flex items-center justify-center p-2 sm:p-3 rounded-md shadow-md hover:shadow-lg transition-shadow animate-fade-in text-sm sm:text-base"
              >
                {techIcons[tech.toLowerCase()] && (
                  <span className="text-xl sm:text-2xl mr-1 sm:mr-2">
                    {techIcons[tech.toLowerCase()]}
                  </span>
                )}
                <span className="truncate">{tech === 'cplusplus' ? 'C++' : tech}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
