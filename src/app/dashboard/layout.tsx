// src/app/dashboard/layout.tsx
export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <section style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar del dashboard */}
      <aside style={{ width: "220px", background: "#f4f4f4", padding: "1rem" }}>
        <h2>Menú del Dashboard</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li><a href="/dashboard">Inicio</a></li>
          <li><a href="/dashboard/reportes">Reportes</a></li>
          <li><a href="/dashboard/configuracion">Configuración</a></li>
        </ul>
      </aside>

      {/* Contenido dinámico */}
      <div style={{ flex: 1, padding: "2rem" }}>
        {children}

        {/* Disclaimer específico del dashboard */}
        <footer style={{ marginTop: "2rem", fontSize: "0.9rem", color: "#555", textAlign: "center" }}>
          <p>
            Todo el contenido en este dashboard es <strong>ficticio</strong> y creado únicamente para
            <strong> práctica personal</strong>. No tiene fines comerciales ni legales.
          </p>
        </footer>
      </div>
    </section>
  );
}