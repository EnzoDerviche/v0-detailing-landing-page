import Image from "next/image"

const brands: { name: string; logo: string }[] = [
  { name: "Marca 1", logo: "/brands/menzerna.png" },
  { name: "Marca 2", logo: "/brands/gyeonlogo.png" },
  { name: "Marca 3", logo: "/brands/sonax2.png" },
  { name: "Marca 4", logo: "/brands/vonixx2.png" },
  { name: "Marca 5", logo: "/brands/toxic.png" },
  { name: "Marca 6", logo: "/brands/3d.png" },
]

export function Brands() {
  return (
    <section id="marcas" className="py-20 md:py-24 border-y border-border bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-primary font-medium tracking-widest uppercase mb-3 text-sm">
            Marcas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground mb-4 text-balance">
            Productos que utilizamos
          </h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Trabajamos con marcas líderes en detailing para garantizar el mejor resultado en cada
            servicio.
          </p>
        </div>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-10 items-center justify-items-center max-w-5xl mx-auto">
          {brands.map((brand) => (
            <li
              key={brand.name}
              className="w-full flex items-center justify-center px-4 py-6 rounded-lg bg-card/50 border border-border/60 hover:border-primary/30 transition-colors"
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                width={200}
                height={48}
                className="h-10 md:h-12 w-auto max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
