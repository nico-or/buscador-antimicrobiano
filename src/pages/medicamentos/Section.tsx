type Props = {
  titulo: string;
  subtitulo: string | undefined;
  children: any;
};

function Section({ titulo, subtitulo, children }: Props) {
  return (
    <article>
      <header>
        <hgroup>
          <h2>{titulo}</h2>
          <p>{subtitulo}</p>
        </hgroup>
      </header>
      {children}
      <footer></footer>
    </article>
  );
}

export default Section;
