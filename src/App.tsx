import { useState } from "react";
import fuzzysort from "fuzzysort";
import CardDisplay from "./components/CardDisplay";
import { useLoaderData } from "react-router-dom";
import { Medicamento } from "./types";

function App() {
  const [query, setQuery] = useState("");
  const data = useLoaderData() as Medicamento[];

  const results = fuzzysort.go(query, data, {
    threshold: 0.5,
    all: false,
    key: "nombre",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <>
      <section>
        <input
          type="search"
          name="consulta"
          aria-label="consulta"
          placeholder="Nombre del medicamento."
          value={query}
          onChange={handleChange}
        />
      </section>
      <section>
        <CardDisplay items={results} />
      </section>
    </>
  );
}

export default App;
