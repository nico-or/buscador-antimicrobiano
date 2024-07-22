import { Medicamento } from "../types";

export async function medicamentosLoader(): Promise<Medicamento[]> {
  let output: Medicamento[] = [];
  await fetch("./data.json")
    .then((response) => response.json())
    .then((data) => (output = data));
  return output;
}
