import "./style.css";
import { PrimeiroBotao } from "../Botoes";
import { useState } from "react";

const Form = ({ listaTransacao, setlistaTransacao }) => {
  const [descricao, setdescricao] = useState("");
  const [entry, setEntry] = useState("Entrada");
  const [value, setValue] = useState(0);

  const informacao = () => {
    if (value < 1) {
      return undefined;
    }

    if (entry === "Despesa") {
      const valueNeg = parseFloat(value * -1);

      const list = { descricao: descricao, type: entry, value: valueNeg };
      setlistaTransacao([...listaTransacao, list]);

      setdescricao("");
      setEntry("Entrada");
      setValue(0);
    } else {
      setlistaTransacao([
        ...listaTransacao,
        { descricao: descricao, type: entry, value: parseFloat(value) },
      ]);
      setdescricao("");
      setEntry("Entrada");
      setValue(0);
    }
  };

  return (
    <form
      onSubmit={(event) => informacao(event.preventDefault())}
      className="form--descricao"
    >
      <span className="titulo">Descrição</span>
      <input
        onChange={(event) => setdescricao(event.target.value)}
        className="input--value"
        type="text"
        placeholder="Digite aqui sua descrição"
        value={descricao}
        required
      />
      <p className="body">Ex: Compra de roupas</p>
      <div className="div--valuesTypes">
        <label className="title-4">
          Valor
          <input
            onChange={(event) => setValue(event.target.value)}
            className="input--descricaoValue"
            type="number"
            placeholder="R$: 0,00"
            value={value}
            required
          />
        </label>
        <label className="title-4">
          Tipo de valor
          <select
            onChange={(event) => setEntry(event.target.value)}
            className="select--entryExit"
            name=""
            id=""
            value={entry}
          >
            <option value="Entrada">Entrada</option>
            <option value="Despesa">Despesa</option>
          </select>
        </label>
      </div>
      <PrimeiroBotao text={"Inserir Valor"} />
    </form>
  );
};

export default Form;
