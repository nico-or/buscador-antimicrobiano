import { useLoaderData } from "react-router-dom";
import { Referencia } from "../../types";

function Referencias() {
  const referencias = useLoaderData() as Referencia[];

  return (
    <ol>
      {referencias.map((referencia) => {
        return <Item key={referencia.id} referencia={referencia} />;
      })}
    </ol>
  );
}

function Item({ referencia }: { referencia: Referencia }) {
  return (
    <>
      <li>{referencia.nombre}</li>
    </>
  );
}

export default Referencias;
