import Image from "next/image";
import Link from "next/link";

export default async function ClinicaOikawaPage() {
  return (
    <div className='max-w-3xl m-auto flex flex-col items-center'>
      <h2 className="text-3xl text-center font-bold">
        {"Clinica Oikawa"}
      </h2>
      <Image
        className='aspect-square object-cover'
        src="/clinica_oikawa.webp"
        width={300}
        height={300}
        alt='clinica-oikawa'
      />
      <p>
        {"A Fênix Reborn Design e Tecnologia teve o prazer de desenvolver o site da Clínica Oikawa, uma instituição renomada na área de saúde, que buscava uma plataforma digital moderna e funcional para oferecer aos seus pacientes uma experiência online eficiente e acessível. Nosso objetivo foi criar um site que refletisse a excelência no atendimento da clínica, aliando design atraente e navegação intuitiva."}
      </p>
      <p>{"O projeto envolveu:"}</p>
      <ul className="list-decimal list-inside">
        <li>
          {"Criação de Layout Responsivo: O site foi desenvolvido com foco em responsividade, garantindo uma navegação perfeita em diversos dispositivos, desde desktop até smartphones, proporcionando uma experiência de usuário fluida e adaptável."}
        </li>
        <li>
          {"Design Personalizado e Funcional: Buscamos criar um design visualmente agradável, com cores suaves e elementos gráficos que transmitem confiança e acolhimento, características essenciais para uma clínica de saúde. A estrutura do site foi planejada para facilitar o acesso às informações mais procuradas pelos pacientes, como especialidades, horários de atendimento e contato."}
        </li>
        <li>
          {"Sistema de Agendamento Online: Implementamos uma ferramenta prática para que os pacientes possam agendar suas consultas diretamente pelo site, tornando o processo mais rápido e conveniente."}
        </li>
        <li>
          {"Otimização para SEO e Performance: O site foi otimizado para garantir uma boa performance e ranqueamento nos motores de busca, facilitando a localização da Clínica Oikawa na internet."}
        </li>
      </ul>
      <p>
        {"A Fênix Reborn Design e Tecnologia se orgulha de ter contribuído para a presença digital da Clínica Oikawa, proporcionando uma plataforma sólida, funcional e agradável para seus pacientes. Com este projeto, a clínica fortalece sua comunicação online e facilita o acesso a seus serviços, alinhando-se às necessidades do mundo digital contemporâneo."}
      </p>
      <div className="flex justify-center gap-8">
        <Link href="https://github.com/fenixreborntecnologia/clinicaoikawa"
          className="mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
        >
          {"Visualizar no GitHub"}
        </Link>
        <Link href="https://fenixreborntecnologia.github.io/clinicaoikawa/"
          className="mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
        >
          {"Visualizar o Site"}
        </Link>
      </div>
    </div>
  )
} 