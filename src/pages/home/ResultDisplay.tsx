import { Link } from "react-router-dom";
import { Medicamento } from "../../types";
import Result from "./Result";
import { CSSProperties } from "react";

type Props = {
  items: Fuzzysort.KeyResults<Medicamento>;
};

const style: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
};

function ResultDisplay({ items }: Props) {
  return (
    <div style={style}>
      {items.map((item) => {
        const medicamento = item.obj;
        return (
          <Link to={`medicamentos/${medicamento.slug}`} key={medicamento.id}>
            <Result item={medicamento} />
          </Link>
        );
      })}
    </div>
  );
}

export default ResultDisplay;
