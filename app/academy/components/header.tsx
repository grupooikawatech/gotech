'use client'

import Link from "next/link"

export default function AcademyHeader() {
  return (<div
    className=" flex flex-col max-w-5xl m-auto rounded-xl
     bg-white p-4 shadow-lg outline
      outline-black/5 dark:bg-slate-800 
      dark:shadow-none dark:-outline-offset-1
       dark:outline-white/10"
  >
    <h1 className="text-3xl font-bold text-center">
      {"Bem-vindo à Fênix Reborn Academy! 🔥"}
    </h1>
    <p className="text-center font-light text-gray-600">
      {"Transforme o seu futuro com nossos cursos de alta qualidade!"}
    </p>

    <ul className="list-none list-inside">
      <li>
        <span className="text-2xl font-bold">
          {"🎓 Descontos e bônus imperdíveis:"}
        </span>

        <ul className="list-none list-inside pl-8">
          <li className="text-justify">
            <span className="font-bold">{"Graduação: "}</span>
            {"Ganhe um bônus de R$50,00 ao se inscrever pelo nosso Vestibular Online (válido apenas para os cursos da UNINTER)! Temos também ofertas exclusivas de outras instituições parceiras!"}
          </li>

          <li>
            <span className="font-bold">
              {"Pós-Graduação, Extensão e Aperfeiçoamento: "}
            </span>
            {"Descontos especiais em todos os nossos cursos EAD."}
          </li>

          <li>
            <span className="font-bold">{"Graduação: "}</span>
            <strong>{"Cursos Livres Profissionalizantes: "}</strong>
            {"Invista em sua carreira com condições exclusivas!"}
          </li>
        </ul>
      </li>
      <li>
        <span className="text-2xl font-bold">
          {"💡 Seja parte de uma comunidade inovadora!"}
        </span>
        <p className="pl-8">
          {"Conecte-se com alunos e profissionais que compartilham os mesmos objetivos. Acesse nossa comunidade exclusiva e explore oportunidades de aprendizado, networking e crescimento."}
        </p>
      </li>
      <li>
        <span className="text-2xl font-bold">
          {"📲 Não perca tempo!"}
        </span>
        <p className="pl-8">
          {"Clique no link ao final da página e venha fazer parte da revolução no ensino com a Fênix Reborn Academy! 🚀"}
        </p>
      </li>
    </ul>
    <Link
      href={"#searchbar"}
      className=" mt-4 mx-auto rounded-full bg-green-700 hover:bg-green-600 text-white font-bold p-4 shadow-lg dark:shadow-none"
    >
      {"Inscreva-se agora"}
    </Link>
  </div >
  )
}