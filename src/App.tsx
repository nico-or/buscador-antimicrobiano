import { useEffect, useState } from "react";
import { Medicamento } from "./types";
import fuzzysort from "fuzzysort";
import Card from "./components/card";

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Medicamento[]>([]);

  useEffect(() => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      });
  }, []);

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
        <label htmlFor="consulta" hidden={true}>
          Consulta
        </label>

        <input
          type="search"
          name="consulta"
          placeholder="Nombre del medicamento."
          value={query}
          onChange={handleChange}
        />
      </section>
      <section>
        {results.map((result, i) => {
          return <Card key={i} medicamento={result.obj} />;
        })}
      </section>
    </>
  );
}

export default App;
