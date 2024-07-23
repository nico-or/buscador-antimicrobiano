import { useLoaderData, useParams } from "react-router-dom";
import { Medicamento as MedType, Riesgo } from "../../types";
import Section from "./Section";
import RiesgoMessage from "./RiesgoMessage";

function Medicamento() {
  const data = useLoaderData() as MedType[];
  const { slug } = useParams<{ slug: string }>();
  const medicamento = data.find((item) => item["slug"] == slug) as MedType;

  if (medicamento === undefined) throw new Error("Medicamento no registrado.");

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
        <RiesgoMessage riesgo={medicamento.riesgo as Riesgo} />
      </Section>
    </div>
  );
}

export default Medicamento;
