import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaArrowLeft,
} from 'react-icons/fa';
import { SiTypescript, SiOracle, SiNextdotjs, SiTailwindcss, SiGithub } from 'react-icons/si';

interface ProjectDetails {
  slug: string;
  name: string;
  description: string;
  videoUrl: string;
  technologies: string[];
}

interface ProjectPageProps {
  project: ProjectDetails;
}

// Mapeamento completo de ícones
const techIcons: { [key: string]: JSX.Element } = {
  html: <FaHtml5 className="text-orange-500" />,
  css: <FaCss3Alt className="text-blue-500" />,
  javascript: <FaJs className="text-yellow-400" />,
  typescript: <SiTypescript className="text-blue-600" />,
  react: <FaReact className="text-cyan-400" />,
  node: <FaNode className="text-green-500" />,
  python: <FaPython className="text-blue-400" />,
  oracle: <SiOracle className="text-red-500" />,
  nextjs: <SiNextdotjs className="text-white" />,
  tailwind: <SiTailwindcss className="text-cyan-500" />,
  github: <SiGithub className="text-gray-300" />,
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  return (
    <>
      <Head>
        <title>{project.name} | Sofia</title>
      </Head>
      <main className="p-4 md:p-8 min-h-screen bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12">
            
            {/* Seção do Vídeo */}
            <div className="mt-20 md:w-[40%] lg:w-[55%] flex-shrink-0">
              <div className="aspect-video bg-gray-800 rounded-xl shadow-xl overflow-hidden">
                <iframe
                  src={project.videoUrl}
                  className="w-full h-full"
                  allowFullScreen
                  title={`Vídeo demonstrativo do projeto ${project.name}`}
                />
              </div>
            </div>

            {/* Conteúdo Principal */}
            <div className="mt-20 md:flex-1 md:pl-8 lg:pl-12">
              <div className="space-y-10">
                
                {/* Título */}
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {project.name}
                </h1>

                {/* Tecnologias */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-300">Tecnologias Utilizadas</h3>
                  <div className="flex flex-wrap gap-3">
                    {project.technologies.map((tech) => {
                      const techKey = tech.toLowerCase();
                      return (
                        <div 
                          key={tech}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
                        >
                          <span className="text-xl">
                            {techIcons[techKey] || <FaReact className="text-cyan-400" />}
                          </span>
                          <span className="text-gray-300 text-sm font-medium">{tech}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Descrição */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-300">Detalhes do Projeto</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Botão de Voltar */}
                <div className="border-t border-gray-800 pt-8">
                  <Link 
                    href="/" 
                    className="inline-flex items-center gap-2 px-6 py-3 text-white bg-gray-800 hover:bg-gray-700 rounded-lg text-lg font-semibold transition-all duration-300"
                  >
                    <FaArrowLeft className="text-purple-400" />
                    Voltar para Projetos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/Sofiabreug/1b6552812af749f062ec78152c4a2b05/raw/5cc5423267ece483d8f0972a4c74a02f35593ca3/projects.json"
  );
  const projects: ProjectDetails[] = await res.json();

  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));

  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!;

  const res = await fetch(
    "https://gist.githubusercontent.com/Sofiabreug/1b6552812af749f062ec78152c4a2b05/raw/5cc5423267ece483d8f0972a4c74a02f35593ca3/projects.json"
  );
  const projects: ProjectDetails[] = await res.json();

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { notFound: true };
  }

  return {
    props: { project },
    revalidate: 60 * 60 * 24,
  };
};

export default ProjectPage;