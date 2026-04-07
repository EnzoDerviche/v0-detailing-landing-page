import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg font-semibold tracking-tight text-foreground">
              DEEN<span className="text-primary">GARAGE</span>
            </span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6">
            <Link
              href="#inicio"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Inicio
            </Link>
            <Link
              href="#servicios"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="#contacto"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Contacto
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Deen Garage. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
