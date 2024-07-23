import Referencias from "./Referencias";

function Informacion() {
  return (
    <>
      <section>
        <h2>Información</h2>
        <p>
          Esta información ha sido recopilada para facilitar la reconstitución,
          dilución, administración y estabilidad de los antimicrobianos más
          utilizados, según literatura consultada.
        </p>
        <p>
          Los autores han realizado un esfuerzo para asegurar la información,
          sin embargo, el contenido puede estar sujeto a modificación según cada
          proveedor.
        </p>
        <p>
          <small>
            Elaborado: EU Juan Mora Castillo, QF Pamela Muñoz Vargas, QF
            Valentina Córdoba.
          </small>
        </p>
      </section>
      <section>
        <h2>Referencias</h2>
        <Referencias />
      </section>
    </>
  );
}

export default Informacion;
