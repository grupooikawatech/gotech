import { fetchCourses } from "@/lib/db";
import Image from "next/image";
import Link from "next/link";

export default async function VendaCertaPage() {
  return (
    <div className='max-w-3xl m-auto flex flex-col items-center'>
      <h2 className="text-3xl text-center font-bold">
        {"Venda Certa"}
      </h2>
      <Image
        className='aspect-square object-cover'
        src="/venda-certa.png"
        width={300}
        height={300}
        alt='venda-certa'
      />
      <p>
        {"Aqui na Venda Certa, nossa missão é oferecer a você os melhores smartphones e acessórios do mercado, com preços acessíveis e atendimento de qualidade. Fundada com o objetivo de simplificar a experiência de compra de celulares, nossa loja se destaca pelo compromisso com a satisfação dos clientes."}
      </p>
      <p>
        {"Trabalhamos com uma seleção criteriosa das marcas mais renomadas, garantindo produtos de alta tecnologia, desempenho e durabilidade. Além disso, nossa equipe está sempre pronta para te ajudar a encontrar o modelo ideal que atenda às suas necessidades e ao seu estilo de vida."}
      </p>
      <p>
        {"Na Venda Certa, você encontra não só os últimos lançamentos, mas também opções econômicas, todas com garantia e suporte técnico especializado. Aqui, a confiança vem em primeiro lugar. Seja para um novo smartphone ou para acessórios indispensáveis, a Venda Certa é o lugar onde tecnologia e confiança se encontram"}
      </p>
      <p>
        {"Esse site se trata de um TCC que foi realizado na época em que dois dos membros estudavam no Senac de Marília e decidiram realizar um site de e-commerce de uma loja virtual para tecnologias atuais que não são reconhecidas."}
      </p>
      <div className="flex justify-center gap-8">
        <Link href="https://github.com/fenixreborntecnologia/vendacerta"
          className="mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
        >
          {"Visualizar no GitHub"}
        </Link>
        <Link href="https://fenixreborntecnologia.github.io/vendacerta/"
          className="mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
        >
          {"Visualizar o Site"}
        </Link>
      </div>
    </div>
  )
} 