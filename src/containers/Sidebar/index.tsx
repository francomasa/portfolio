import Titulo from "../../components/Titulo"
import { Avatar } from "./styled"

const Sidebar = () => (
  <aside>
    <Avatar src="https://github.com/francomasa.png" alt="Avatar" />
    <Titulo fontSize={20}>Franco Massaccesi</Titulo>
  </aside>
)

export default Sidebar
