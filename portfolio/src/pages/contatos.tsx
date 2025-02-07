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
        <title className="bg-gradient-to-r from-[#1e1b6b] via-[#4b0076] to-[#1e1b6b] animate-gradient">Contatos | Sofia</title>
      </Head>
      <main>
        
      </main>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32">
        <h1 className="text-5xl md:text-7xl font-bold text-center text-white ">Contatos</h1>
        <ul className="space-y-6 md:space-y-8">
          {contacts.map(({ link, name, isMail }, idx) => (
            <li
              key={name + idx}
              className="flex items-center gap-4 p-4 bg-gray-800 rounded-xl shadow-lg hover:bg-gray-700 transition "
            >
             
              <span className="text-xl text-white">{name}</span>
              <div className="flex gap-3 items-center ">
           
                {isMail && (
                  <FaEnvelope className="text-blue-500" />
                )}
                {name === "GitHub" && (
                  <FaGithub className="text-gray-500" />
                )}
                {name === "LinkedIn" && (
                  <FaLinkedin className="text-blue-600" />
                )}
                <a
                  href={isMail ? `mailto:${link}` : link}
                  target="_blank"
                  className="text-sm md:text-lg text-slate-300 underline truncate "
                >
                  {link}
                </a>
                {isMail && <CopyButton textToCopy={link} />}
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
    "https://gist.githubusercontent.com/Sofiabreug/8a5b709528a1ec36dffb753ed53c4cbc/raw/8fe32fc4204bb4531bf99fea6fa96b52229211f5/contact.json",
    {
      headers: {
        Authorization: "Bearer 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",
      },
    }
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
