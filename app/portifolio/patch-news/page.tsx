import Image from "next/image";
import Link from "next/link";

export default async function PatchNewsPage() {
  return (
    <div className='max-w-3xl m-auto flex flex-col items-center'>
      <h2 className="text-3xl text-center font-bold">
        {"Patch News"}
      </h2>
      <Image
        className='aspect-square object-cover'
        src="/logo-patch-news.png"
        width={300}
        height={300}
        alt='patch-news'
      />
      <p>{"Patch News - O Portal de Atualizações Essenciais"}</p>
      <p>
        {"Bem-vindo ao Patch News, um site desenvolvido pela Fênix Reborn Design e Tecnologia para trazer informações e atualizações relevantes de forma prática e organizada. Nosso objetivo é fornecer conteúdo atualizado sobre as novidades do mundo da tecnologia, lançamentos de software, dicas de desenvolvimento e tendências digitais."}
      </p>
      <p>{"Principais Características:"}</p>
      <ul className="list-decimal list-inside">
        <li>{"Interface Intuitiva: Navegue com facilidade em um design moderno e funcional."}</li>
        <li>{"Conteúdo Atualizado: Notícias frescas e relevantes, especialmente para desenvolvedores e entusiastas de tecnologia."}</li>
        <li>{"Foco em Inovação: Destaques sobre as últimas tendências e avanços no setor tecnológico."}</li>
      </ul>
      <p>
        {"A Fênix Reborn Design e Tecnologia é especializada em criar experiências digitais transformadoras, focada em desenvolvimento web, design e soluções inovadoras. O Patch News é mais um exemplo de nossa missão de entregar qualidade e praticidade aos nossos usuários."}
      </p>
      <div className="flex justify-center gap-8">
        <Link href="https://github.com/nicolassantos22/PatchNews"
          className="mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
        >
          {"Visualizar no GitHub"}
        </Link>
        <Link href="https://nicolassantos22.github.io/PatchNews/"
          className="mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
        >
          {"Visualizar o Site"}
        </Link>
      </div>
    </div>
  )
} 