import { Medicamento } from "../types";

type Props = {
  medicamento: Medicamento;
};

function Card({ medicamento }: Props) {
  return (
    <details>
      <summary
        role="button"
        className="secondary"
        style={{
          padding: "1rem",
        }}
      >
        <b>{medicamento.nombre}</b>
      </summary>
      <article>
        <table>
          <TableRow
            titulo="Reconstitucion"
            subtitulo=""
            contenido={medicamento.reconstitucion}
          />
          <TableRow
            titulo="Dilucion "
            subtitulo="(concentración máxima)"
            contenido={medicamento.dilucion}
          />
          <TableRow
            titulo="Velocidad de administración"
            subtitulo="tiempo de infusión"
            contenido={medicamento.velocidad}
          />
          <TableRow
            titulo="Estabilidad"
            subtitulo="(físico-química)"
            contenido={medicamento.estabilidad}
          />
          <TableRow titulo="pH" subtitulo="" contenido={medicamento.ph} />
          <TableRow
            titulo="Osmolaridad"
            subtitulo=""
            contenido={medicamento.osmolaridad}
          />
          <TableRow
            titulo="Riesgo"
            subtitulo="daño local"
            contenido={medicamento.riesgo}
          />
        </table>
      </article>
    </details>
  );
}

function TableRow({
  titulo,
  subtitulo,
  contenido,
}: {
  titulo: string;
  subtitulo: string | undefined;
  contenido: string;
}) {
  return (
    <tr>
      <th scope="row">
        <hgroup>
          <b>{titulo}</b>
          <p>{subtitulo}</p>
        </hgroup>
      </th>
      <td>{contenido}</td>
    </tr>
  );
}

export default Card;
