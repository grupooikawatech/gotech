import Portifolio from "./components/portifolio"
import AboutUs from "./components/aboutUs"
import FormsAgendamento from "./components/formsAgendamento"

export default function Page() {
  return (
    <div>
      <h1>Fenix Reborn</h1>
      <h2>
        Navegue pelo nosso portfólio e veja como a Fênix Reborn dá vida às ideias, criando soluções digitais que impressionam e conquistam.
      </h2>
      <Portifolio />
      <h2>
        Conheça a Fênix Reborn e o time que torna a transformação digital uma realidade para o seu negócio.
      </h2>
      <AboutUs />
      <h2>
      Dê vida ao seu negócio com nossa ajuda especializada.
      </h2>
      <FormsAgendamento />
    </div>
  )
}