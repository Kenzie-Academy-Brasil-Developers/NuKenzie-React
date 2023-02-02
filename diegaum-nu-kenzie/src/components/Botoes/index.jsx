import "./style.css"


const PrimeiroBotao = ({ renderizarChamada, text }) => {
  return (
    <>
      <button onClick={renderizarChamada} className="texto_botao">
        {text}
      </button>
    </>
  )
}
const InfoBotoes = ({ text, AcaodeChamada }) => {
  return (  
    <>
      <button onClick={AcaodeChamada} className="botao_cinza-borda titulo">
        {text}
      </button>
    </>
  )
}
const ValorBotao = ({ text }) => {
  return (
    <>
      <button className="valor_botao titulo">{text}</button>
    </>
  )
}
export { PrimeiroBotao, InfoBotoes, ValorBotao }
