import { Riesgo } from "../../types";
import { AlertTriangle, AlertOctagon, CheckCircle } from "react-feather";

type Props = {
  riesgo: Riesgo;
};

function RiesgoMessage({ riesgo }: Props) {
  return (
    <>
      {riesgo == "Bajo" && <RiesgoBajo />}
      {riesgo == "Moderado" && <RiesgoModerado />}
      {riesgo == "Alto" && <RieslgoAlto />}
      {!["Bajo", "Moderado", "Alto"].includes(riesgo) && <p>{riesgo}</p>}
    </>
  );
}

const style: React.CSSProperties = {
  padding: "0px 1rem",
};

function RiesgoBajo() {
  return (
    <>
      <p>
        {"Riesgo Bajo"}
        <span style={style}>
          <CheckCircle color="green" />
        </span>
      </p>
      <p>
        Considerar la utilización de <b>catéter venoso periférico corto</b> o un{" "}
        <b>catéter periférico con sistema integrado (NEXIVA)</b>.
      </p>
      <p>Además evaluar el tiempo de duración del tratamiento.</p>
    </>
  );
}

function RiesgoModerado() {
  return (
    <>
      <p>
        {"Riesgo Moderado"}
        <span style={style}>
          <AlertTriangle color="yellow" />
        </span>
      </p>
      <p>
        Considerar la utilización de <b>Catéter Midline largo o corto</b>.
      </p>
      <p>Además evaluar la cantidad de días que estará con el tratamiento.</p>
    </>
  );
}

function RieslgoAlto() {
  return (
    <>
      <p>
        {"Riesgo Alto"}
        <span style={style}>
          <AlertOctagon color="red" />
        </span>
      </p>
      <p>
        Considerar la utilización de un <b>catéter Midline largo</b>.
      </p>
    </>
  );
}

export default RiesgoMessage;
