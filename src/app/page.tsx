// src/app/page.tsx

export default function HomePage() {
  return (
    <main>
      {/* Índice */}
      <nav>
        <h2>Índice</h2>
        <ul>
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#objetivo">Objetivo del proyecto</a></li>
          <li><a href="#tema">Tema del blog</a></li>
        </ul>
      </nav>

      {/* Contenido */}
      <section id="inicio">
        <h1>Bienvenidos al inicio de mi proyecto</h1>
      </section>

      <section id="objetivo">
        <p>
          El objetivo de este proyecto es practicar el manejo y creación de aplicaciones
        </p>
      </section>

      <section id="tema">
        <p>
          Dicho blog será sobre cómics
        </p>
      </section>
    </main>
  );
}
