import noCard from "../Imagens/icon/nocard.svg";
import "./style.css";

import { InfoBotoes, PrimeiroBotao } from "../Botoes";
import Card from "../Card";

const List = ({ listaTransacao, setlistaTransacao }) => {
  const allValue = listaTransacao.length === 0;

  return (
    <div className="div--container">
      <div className="cards--buttons-list">
        <div className="cardList-text">
          <h4 className="title-3">Resumo Financeiro</h4>
        </div>

        <div>
          <div className="buttons--cardList">
            <PrimeiroBotao text={"Todos"} />
            <InfoBotoes text={"Entradas"} />
            <InfoBotoes text={"Despesas"} />
          </div>
        </div>
      </div>

      <ul className="list--infos">
        {allValue && (
          <>
            <span className="title-2 noContent">
              Você ainda não possui lançamento
            </span>
            <img src={noCard} alt="" />
          </>
        )}
        {listaTransacao.map((transacao, index) => (
          <Card
            transacao={transacao}
            listaTransacao={listaTransacao}
            setlistaTransacao={setlistaTransacao}
            key={index}
          />
        ))}
      </ul>
    </div>
  );
};

export default List;
