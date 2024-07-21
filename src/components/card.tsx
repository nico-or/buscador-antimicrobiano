import { Medicamento } from "../types";

type Props = {
  medicamento: Medicamento;
};

function Card({ medicamento }: Props) {
  return (
    <details>
      <summary>{medicamento.nombre}</summary>
      <article>
        <table>
          <TableRow
            titulo={"Reconstitucion"}
            contenido={medicamento.reconstitucion}
          />
          <TableRow titulo={"dilucion"} contenido={medicamento.dilucion} />
          <TableRow titulo={"velocidad"} contenido={medicamento.velocidad} />
          <TableRow
            titulo={"estabilidad"}
            contenido={medicamento.estabilidad}
          />
          <TableRow titulo={"ph"} contenido={medicamento.ph} />
          <TableRow
            titulo={"osmolaridad"}
            contenido={medicamento.osmolaridad}
          />
          <TableRow titulo={"riesgo"} contenido={medicamento.riesgo} />
        </table>
      </article>
    </details>
  );
}

function TableRow({
  titulo,
  contenido,
}: {
  titulo: string;
  contenido: string;
}) {
  return (
    <tr>
      <th scope={"row"}>{titulo}</th>
      <td>{contenido}</td>
    </tr>
  );
}

export default Card;
