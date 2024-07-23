import { Link, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  console.error(error);
  return (
    <main>
      <h1>404</h1>
      <p>La direccion solicitada no existe.</p>
      <Link to="/">Volver al inicio.</Link>
    </main>
  );
}

export default Error;
