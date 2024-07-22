import { Medicamento } from "../types";
import Card from "./Card";

type Props = {
  items: Fuzzysort.KeyResults<Medicamento>;
};

function CardDisplay({ items }: Props) {
  return (
    <>
      {items.map((item, i) => {
        return <Card key={i} medicamento={item.obj} />;
      })}
    </>
  );
}

export default CardDisplay;
