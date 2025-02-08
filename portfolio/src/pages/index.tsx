import { AboutMe } from '@/components/Home/AboutMe';
import { Projects } from '@/components/Home/Projects';
import { Project, AboutMe as TAboutMe } from '@/types/Home';
import { GetStaticProps } from 'next';
import Head from 'next/head';

interface HomeProps {
  home: {
    aboutMe: TAboutMe;
    projects: Project[];
  };
}

const Home = ({ home }: HomeProps) => {
  const { projects, aboutMe } = home;

  return (
    <>
      <Head>
        <title>Sobre mim | Sofia</title>
        <meta name="description" />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28 min-h-screen bg-gradient-to-r from-[#1e1b6b] via-[#4b0076] to-[#1e1b6b] animate-gradient">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/Sofiabreug/22cc52d7ec446c566d4733ff64cdbfa5/raw/ca661a553b079e866e532d8f499f38fbb1a48d20/home.json"
  );
  
  if (!res.ok) {
    throw new Error('Failed to fetch home data');
  }

  const home = await res.json();
  return home;
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const home = await loadHome();

  return {
    props: { home },
  };
};

export default Home;
