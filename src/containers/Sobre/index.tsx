import P from "../../components/Paragrafo"
import Titulo from "../../components/Titulo"
import { GighubSessao } from "./styled"

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <P>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla eligendi harum excepturi officia. Culpa blanditiis voluptate nobis debitis, ipsam vitae assumenda maxime delectus. Eum ipsam, quidem commodi blanditiis iste porro.
    </P>
    <GighubSessao>
      <img src="https://github-readme-stats.vercel.app/api?username=francomasa&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt="Git Score" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=francomasa&layout=compact&langs_count=7&theme=dracula" alt="Git languages" />
    </GighubSessao>
  </section>
)

export default Sobre
