import Portifolio from "./ui/portifolio"
import AboutUs from "./ui/aboutUs"
import FormsAgendamento from "./ui/formsAgendamento"

export default function Home() {
  return (
    <div className="mx-auto max-w-2xl">
      <h2 className="max-w-2xl text-center">
        Navegue pelo nosso portfólio e veja como a Fênix Reborn dá vida às ideias, criando soluções digitais que impressionam e conquistam.
      </h2>
      <Portifolio />
      <h2 className="max-w-2xl text-center">
        Conheça a Fênix Reborn e o time que torna a transformação digital uma realidade para o seu negócio.
      </h2>
      <AboutUs />
      <h2 className="max-w-2xl text-center">
        Dê vida ao seu negócio com nossa ajuda especializada.
      </h2>
      <FormsAgendamento />
    </div>
  )
}