import Titulo from "../../components/Titulo"
import P from "../../components/Paragrafo"
import Avatar  from "../../components/Avatar"

import { BotaoTema, Descricao, SidebarContainer } from "./styled"

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Franco Massaccesi</Titulo>
      <P tipo="secundario" fontSize={16}>francomasa</P>
      <Descricao tipo="principal" fontSize={12}>Engenheiro front-end</Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
