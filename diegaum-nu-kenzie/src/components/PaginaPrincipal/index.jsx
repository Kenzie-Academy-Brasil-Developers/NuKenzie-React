import logoKenzie from "../Imagens/icon/nukenzie2.svg"
import { ReactComponent as Image } from "../Imagens/icon/image.svg"
import "./style.css"
import { PrimeiroBotao } from "../Botoes"

const Homepage = ({ renderizar }) => {
  return (
    
    <div className="homepage">
      <div className="texts--main">
        <img className="imgHomepage" src={logoKenzie} alt="" />
        <h1 className="title-1 textMain">
          Centralize o controle das suas finanças
        </h1>
        <p className="titulo infoMain">de forma rápida e segura</p>
        <PrimeiroBotao renderizarChamada={renderizar} text={"Iniciar"} />
      </div>
      <Image className="ellipse" />
    </div>
  )
}

export default Homepage
