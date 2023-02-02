import "./style.css"
import logo from "../Imagens/icon/nukenzie.svg"
import { InfoBotoes } from "../Botoes"

const Cabecalho = () => {
  return (
    <header className="cabecalho_central">
      <img src={logo} alt="" />
      {/* Voltar para pagina home */}
      <InfoBotoes AcaodeChamada={() => window.location.reload(true)} text={"Inicio"} />
    </header>
  )
}

export default Cabecalho
