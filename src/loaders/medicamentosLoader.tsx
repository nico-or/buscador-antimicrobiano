import { Medicamento, Referencia } from "../types";

export async function medicamentosLoader(): Promise<Medicamento[]> {
  let output: Medicamento[] = [];
  await fetch("./medicamentos.json")
    .then((response) => response.json())
    .then((data) => (output = data));
  return output;
}

export async function referenciasLoader(): Promise<Referencia[]> {
  let output: Referencia[] = [];
  await fetch("./referencias.json")
    .then((response) => response.json())
    .then((data) => (output = data));
  return output;
}
