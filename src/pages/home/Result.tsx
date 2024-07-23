import { Medicamento } from "../../types";
import { CSSProperties } from "react";
import { ExternalLink } from "react-feather";

type Props = {
  item: Medicamento;
};

const style: CSSProperties = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  textAlign: "left",
};

function ResultDisplay({ item }: Props) {
  return (
    <div role="button" style={style}>
      <span>{item.nombre}</span>
      <span>
        <ExternalLink />
      </span>
    </div>
  );
}

export default ResultDisplay;
