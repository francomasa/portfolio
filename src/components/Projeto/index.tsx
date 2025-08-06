import Titulo from "../Titulo"
import P from "../Paragrafo"

import { Card, LinkBatao } from "./styled"


const Projeto = () => (
  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <P tipo="secundario">Lista de tarefas feitas com VueJS</P>
    <LinkBatao>Visualizar</LinkBatao>
  </Card>
)

export default Projeto
