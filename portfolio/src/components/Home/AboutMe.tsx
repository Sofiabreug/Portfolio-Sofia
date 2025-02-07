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
  SiFirebase
} from 'react-icons/si';
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
  nextjs: ReactElement;
  vuejs: ReactElement;
  angular: ReactElement;
  svelte: ReactElement;
  mongodb: ReactElement;
  postgresql: ReactElement;
  mysql: ReactElement;
  git: ReactElement;
  github: ReactElement;
  tailwindcss: ReactElement;
  java: ReactElement;
  docker: ReactElement;
  express: ReactElement;
  nestjs: ReactElement;
  graphql: ReactElement;
  firebase: ReactElement;
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
  firebase: <SiFirebase />
};

interface AboutMeProps {
  aboutMe: TAboutMe;
}

export const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const { title, description, contact, pfp, techs } = aboutMe;

  return (
    <main className="flex flex-col justify-center items-center px-2 py-12">
      <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 w-full">
        {/* Texto e Tecnologias */}
        <div className="flex flex-col items-center xl:items-start gap-8 w-full xl:w-1/2">
          <div className="text-white flex flex-col items-center xl:items-start gap-4">
            <h1 className="text-4xl sm:text-6xl xl:leading-[5rem] animate-fade-in">
              {title.default}
              <strong className="font-bold typing-animation">sou&nbsp;{title.bold}</strong>
            </h1>
            <h2 className={`${roboto.className} text-lg sm:text-xl text-center xl:text-left animate-fade-in delay-100`}>
              {description}
            </h2>
            <Link
              href={contact.link}
              className="mt-6 px-6 py-3 bg-purple-600 text-white text-lg rounded-lg transition-all hover:bg-purple-700 animate-fade-in delay-200"
            >
              {contact.label}
            </Link>
          </div>

          {/* Grid de Tecnologias */}
          <ul className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 w-full">
            {techs.map(({ tech, bgcolor, color }, index) => (
              <li
                key={tech + index}
                style={{ backgroundColor: bgcolor, color: color }}
                className="flex items-center justify-center p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow animate-fade-in"
              >
                {techIcons[tech.toLowerCase() as keyof TechIcons] && (
                  <span className="text-2xl mr-2">
                    {techIcons[tech.toLowerCase() as keyof TechIcons]}
                  </span>
                )}
                <span className="truncate">{tech}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Foto de Perfil */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 xl:w-96 xl:h-96 animate-fade-in delay-300">
          <Image
            src={pfp.image.url}
            alt={pfp.image.alt || 'Foto de Perfil'}
            unoptimized
            fill
            className="rounded-full object-cover shadow-2xl ring-4 ring-purple-500 hover:ring-purple-600 transition-all"
          />
        </div>
      </div>
    </main>
  );
};