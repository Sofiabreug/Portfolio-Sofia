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
        <meta
          name="description"
          
        />
      </Head>
      <div className="py-12 px-6 md:px-32 space-y-10 md:space-y-28">
        <AboutMe aboutMe={aboutMe} />
        <Projects projects={projects} />
      </div>
    </>
  );
};

const loadHome = async () => {
  const res = await fetch(
    'https://gist.githubusercontent.com/Sofiabreug/22cc52d7ec446c566d4733ff64cdbfa5/raw/7bb92bad5d7d85305d72536d08b01acb8f7e6524/home.json',
    {
      headers: {
        Authorization: 'Bearer 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',
      },
    }
  );
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
