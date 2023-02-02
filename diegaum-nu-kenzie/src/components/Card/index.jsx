import "./style.css"


const Card = ({ transacao, listaTransacao, setlistaTransacao }) => {
  let colorType

  const deletar = (descricao, type, value) => {
    const filtertransacao = listaTransacao.filter(
      (item) =>
        item.descricao !== descricao ||
        item.type !== type ||
        item.value !== value
    )
    setlistaTransacao([...filtertransacao])
  }

  return (
    <>
      <li className={`infos--card ${colorType}`}>
        <div className="div--type-title">
          <h3 className="title--transaction title-3">
            {transacao.descricao}
          </h3>
          <span className="span--typeTransaction body">{transacao.type}</span>
        </div>
        <div className="div--button-value">
          <span className="span--valuedescricao body">
            {transacao.value}
          </span>
          <button
            onClick={() =>
              deletar(
                transacao.descricao,
                transacao.type,
                transacao.value
              )
            }
            className="botao_deletar"
          >
            {"🗑️"}
            
          </button>
        </div>
      </li>
    </>
  )
}

export default Card
