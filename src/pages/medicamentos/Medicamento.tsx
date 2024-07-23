import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { Medicamento as MedType } from "../../types";
import Section from "./Section";

function Medicamento() {
  const data = useLoaderData() as MedType[];

  const { id } = useParams<{ id: string }>();
  const index = Number(id);

  const navigate = useNavigate();
  if (isNaN(index)) navigate("/");

  const medicamento = data[index];

  return (
    <div>
      <h1>{medicamento.nombre}</h1>
      <Section titulo="Reconstitucion" subtitulo="">
        {medicamento.reconstitucion}
      </Section>

      <Section titulo="Dilucion " subtitulo="(concentración máxima)">
        {medicamento.dilucion}
      </Section>
      <Section
        titulo="Velocidad de administración"
        subtitulo="tiempo de infusión"
      >
        {medicamento.velocidad}
      </Section>
      <Section titulo="Estabilidad" subtitulo="(físico-química)">
        {medicamento.estabilidad}
      </Section>
      <Section titulo="pH" subtitulo="">
        {medicamento.ph}
      </Section>
      <Section titulo="Osmolaridad" subtitulo="">
        {medicamento.osmolaridad}
      </Section>
      <Section titulo="Riesgo de daño local" subtitulo="">
        {medicamento.riesgo}
      </Section>
    </div>
  );
}

export default Medicamento;
