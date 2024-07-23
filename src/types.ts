export type Medicamento = {
  nombre: string;
  reconstitucion: string;
  dilucion: string;
  velocidad: string;
  estabilidad: string;
  ph: string;
  osmolaridad: string;
  riesgo: string;
  id: number;
  slug: string;
};

export type Riesgo = "Bajo" | "Moderado" | "Alto";
