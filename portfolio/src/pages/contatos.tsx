import { CopyButton } from "@/components/commons/CopyButton";
import Head from "next/head";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"; // Importando os ícones

interface ContatosProps {
  contacts: {
    name: string;
    link: string;
    isMail?: boolean;
  }[];
}

const Contatos = ({ contacts }: ContatosProps) => {
  return (
    <>
      <Head>
        <title>Contatos | Sofia</title>
      </Head>
      
      <div className="mt-8 md:mt-24 space-y-6 md:space-y-16 px-4 md:px-32">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-300 bg-clip-text text-transparent animate-gradient">
          Contatos
        </h1>
        
        <ul className="space-y-4 md:space-y-8">
          {contacts.map(({ link, name, isMail }, idx) => (
            <li
              key={name + idx}
              className="flex flex-col md:flex-row md:items-center gap-3 p-3 md:p-4 bg-gray-800/50 rounded-xl shadow-lg hover:bg-gray-700/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                {isMail && <FaEnvelope className="text-blue-400 text-xl" />}
                {name === "GitHub" && <FaGithub className="text-gray-300 text-xl" />}
                {name === "LinkedIn" && <FaLinkedin className="text-blue-500 text-xl" />}
                <span className="text-lg md:text-xl text-white/90">{name}</span>
              </div>

              <div className="flex gap-2 items-center flex-wrap">
                <a
                  href={isMail ? `mailto:${link}` : link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg text-slate-300 underline truncate break-all hover:text-purple-300 transition-colors"
                >
                  {link}
                </a>
                {isMail && <CopyButton textToCopy={link}  />}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


const loadContacts = async () => {
  const res = await fetch(
    "https://gist.githubusercontent.com/Sofiabreug/8a5b709528a1ec36dffb753ed53c4cbc/raw/8fe32fc4204bb4531bf99fea6fa96b52229211f5/contact.json"
  );

  if (!res.ok) {
    console.error("Erro ao buscar os contatos:", res.status, res.statusText);
    throw new Error("Erro ao buscar os contatos");
  }

  const data = await res.json();
  return data;
};

 

export const getServerSideProps = async () => {
  const contacts = await loadContacts();

  return {
    props: {
      contacts,
    },
  };
};

export default Contatos;
