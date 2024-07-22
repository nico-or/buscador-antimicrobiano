import { useEffect, useState } from "react";
import { Medicamento } from "./types";
import fuzzysort from "fuzzysort";
import CardDisplay from "./components/CardDisplay";

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
      <header>
        <h1>Antimicrobianos</h1>
      </header>
      <main>
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
      </main>
      <footer>
        <div>&copy; 2024 Nicolas Órdenes</div>
      </footer>
    </>
  );
}

export default App;
