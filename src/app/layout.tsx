import "./globals.css";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <nav className="flex gap-4 bg-black text-white p-4">
          <Link href="/">Inicio</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>

        <main className="p-6">{children}</main>
      </body>
    </html>
  );
}

