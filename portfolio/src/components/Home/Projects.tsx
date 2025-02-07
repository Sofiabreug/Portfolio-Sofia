import { Project } from '@/types/Home';
import Image from 'next/image';
import Link from 'next/link';


interface ProjectsProps {
  projects: Project[];
}

import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact,
  FaGitAlt,
  FaPython
} from 'react-icons/fa';
import {
  SiTypescript,
  SiOracle,
  SiNextdotjs,
  SiTailwindcss,
  SiGithub,
  SiDocker,
  SiPostgresql,
  SiNodedotjs,
  SiMongodb,
  SiJest,
  
  SiFirebase,
  SiGraphql
} from 'react-icons/si';

const techConfig = {
  typescript: {
    color: '#FFFFFF',
    bgcolor: '#2F74C0',
    icon: SiTypescript,
  },
  javascript: {
    color: '#000000',
    bgcolor: '#EFD81D',
    icon: FaJs,
  },
  nodejs: {
    color: '#FFFFFF',
    bgcolor: '#68A063',
    icon: SiNodedotjs,
  },
  python: {
    color: '#FFFFFF',
    bgcolor: '#306998',
    icon: FaPython,
  },
  html: {
    color: '#FFFFFF',
    bgcolor: '#E44D26',
    icon: FaHtml5,
  },
  css: {
    color: '#FFFFFF',
    bgcolor: '#2965F1',
    icon: FaCss3Alt,
  },
  oracle: {
    color: '#FFFFFF',
    bgcolor: '#F80000',
    icon: SiOracle,
  },
  react: {
    color: '#61DAFB',
    bgcolor: '#20232A',
    icon: FaReact,
  },
  nextjs: {
    color: '#FFFFFF',
    bgcolor: '#000000',
    icon: SiNextdotjs,
  },
  tailwindcss: {
    color: '#06B6D4',
    bgcolor: '#0F172A',
    icon: SiTailwindcss,
  },
  git: {
    color: '#F05032',
    bgcolor: '#F0F0F0',
    icon: FaGitAlt,
  },
  github: {
    color: '#FFFFFF',
    bgcolor: '#181717',
    icon: SiGithub,
  },
  docker: {
    color: '#2496ED',
    bgcolor: '#0DB7ED',
    icon: SiDocker,
  },
  postgresql: {
    color: '#FFFFFF',
    bgcolor: '#336791',
    icon: SiPostgresql,
  },
  mongodb: {
    color: '#47A248',
    bgcolor: '#001E2B',
    icon: SiMongodb,
  },
  jest: {
    color: '#C21325',
    bgcolor: '#FFFFFF',
    icon: SiJest,
  },

  firebase: {
    color: '#FFCA28',
    bgcolor: '#1E1E1E',
    icon: SiFirebase,
  },
  graphql: {
    color: '#E10098',
    bgcolor: '#171E26',
    icon: SiGraphql,
  }
};

export const Projects = ({ projects }: ProjectsProps) => {
  return (
    <article className="space-y-16 flex flex-col items-center xl:items-start text-center xl:text-left text-white">
      <h2 className="text-3xl md:text-4xl font-bold tracking-wide text-white">Projetos Recentes</h2>

      <ul className="grid gap-12 sm:grid-cols-2 xl:grid-cols-3 justify-center">
        {projects.map(({ slug, name, image, technologies }, index) => (
          <li
            key={slug}
            className="group relative bg-gray-800 rounded-2xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 ease-in-out"
          >
            <div className="relative overflow-hidden">
              <Image
                src={image.url}
                alt={image.alt || `Imagem do projeto ${name}`}
                width={600}
                height={400}
                quality={90}
                className="object-cover h-60 w-full group-hover:scale-110 transition-transform duration-300"
                priority={index < 3}
              />

              <Link 
                href={`/projects/${slug}`} 
                className="absolute inset-0 bg-black/50 text-white text-lg font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-lg"
                aria-label={`Ver detalhes do projeto ${name}`}
              >
                Ler Mais
              </Link>
            </div>

            <div className="p-6 space-y-4 bg-black/80 backdrop-blur-sm">
              <h3 className="text-xl font-semibold text-white truncate" title={name}>
                {name}
              </h3>

              <div className="flex gap-3 justify-center xl:justify-start text-2xl text-gray-300">
                {technologies.map((tech) => {
                  const techLower = tech.toLowerCase();
                  const techInfo = techConfig[techLower as keyof typeof techConfig];
                  
                  if (!techInfo) return null;

                  const Icon = techInfo.icon;

                  return (
                    <div 
                      key={tech}
                      className="p-2 rounded-full flex items-center justify-center"
                      style={{
                        backgroundColor: techInfo.bgcolor,
                      }}
                      aria-label={tech}
                    >
                      <Icon 
                        style={{ color: techInfo.color }} 
                        className="text-2xl" 
                        title={tech}
                      />
                    </div>
                  )
                })}
              </div>

              <Link
                href={`/projects/${slug}`}
                className="mt-4 px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-full text-lg font-semibold shadow-lg hover:from-indigo-600 hover:to-purple-500 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center"
              >
                Ver Detalhes
              </Link>
            </div>

            <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white text-lg font-bold absolute top-4 left-4 shadow-lg z-10">
              {index + 1}
            </div>
          </li>
        ))}
      </ul>
    </article>
  );
};