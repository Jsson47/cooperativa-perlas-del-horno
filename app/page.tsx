"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
// Agregar después de los imports
import { Menu, X, ArrowRight, Star, Coffee, Wheat, Leaf } from "lucide-react"

// Agregar este estilo personalizado para el clip-path
const styles = {
  clipPathHero: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
  },
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTab, setActiveTab] = useState("todos")
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
              <Image
                src="/coop.png?height=40&width=40"
                alt="Logo"
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-green-800">Cooperativa Mujeres en Desarrollo</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
              <li>
                <Link href="#cafe" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Café
                </Link>
              </li>
              <li>
                <Link href="#granos" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Granos Básicos
                </Link>
              </li>
              <li>
                <Link href="#hortalizas" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Hortalizas
                </Link>
              </li>
              <li>
                <Link href="#proceso" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Proceso
                </Link>
              </li>
              <li>
                <Link
                  href="#certificaciones"
                  className="text-sm font-medium text-green-800 hover:text-green-600 transition"
                >
                  Certificaciones
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition shadow-sm"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </nav>
          <button className="block md:hidden text-green-800" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 bg-white">
            <div className="container mx-auto px-4 py-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
                    <Image
                      src="/placeholder.svg?height=40&width=40"
                      alt="Logo"
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  </div>
                  <span className="text-xl font-bold text-green-800">Estelí Agrícola</span>
                </div>
                <button className="text-green-800" onClick={() => setIsMenuOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <nav className="mt-10">
                <ul className="flex flex-col gap-6">
                  <li>
                    <Link
                      href="#cafe"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Café
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#granos"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Granos Básicos
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#hortalizas"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Hortalizas
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#proceso"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Proceso
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#certificaciones"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Certificaciones
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="#contacto"
                      className="inline-block rounded-full bg-green-700 px-6 py-3 text-base font-medium text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* Hero Section - Modern Compact Design */}
        <section className="relative py-16 overflow-hidden bg-white border-b border-gray-100">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50" style={styles.clipPathHero}></div>
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl"></div>

          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Content */}
              <div className="lg:col-span-5 relative z-10">
                <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-6">
                  Productos de Nicaragua
                </span>
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                  Productos Agrícolas de <span className="text-green-600">Estelí</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Descubre la excelencia agrícola del norte de Nicaragua: café de altura, granos básicos tradicionales y
                  hortalizas frescas.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#productos"
                    className="group rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-500 shadow-sm"
                  >
                    Explorar Productos
                    <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link
                    href="#contacto"
                    className="rounded-full border-2 border-green-600 px-6 py-3 font-medium text-green-600 transition-all hover:bg-green-50"
                  >
                    Contactar
                  </Link>
                </div>
              </div>

              {/* Right Images - Modern Grid Layout */}
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-6 grid-rows-5 gap-3 h-[400px]">
                  {/* Main Image - Coffee */}
                  <div className="col-span-4 row-span-5 rounded-2xl overflow-hidden shadow-lg relative">
                    <Image
                      src="/cafe.jpg?height=600&width=400"
                      alt="Café de Estelí"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-green-800">
                      Café Premium
                    </div>
                  </div>

                  {/* Top Right Image - Grains */}
                  <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/hortalizas.jpg?height=200&width=200"
                      alt="Granos de Estelí"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Right Image - Vegetables */}
                  <div className="col-span-2 row-span-3 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/granos.jpg?height=300&width=200"
                      alt="Hortalizas de Estelí"
                      width={200}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Stats Bar */}
                <div className="mt-6 bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
                  <div className="text-center px-4 border-r border-gray-200">
                    <p className="text-2xl font-bold text-green-600">25+</p>
                    <p className="text-xs text-gray-600">Años de experiencia</p>
                  </div>
                  <div className="text-center px-4 border-r border-gray-200">
                    <p className="text-2xl font-bold text-green-600">100%</p>
                    <p className="text-xs text-gray-600">Productos naturales</p>
                  </div>
                  <div className="text-center px-4">
                    <p className="text-2xl font-bold text-green-600">500+</p>
                    <p className="text-xs text-gray-600">Clientes satisfechos</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="productos" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
                Productos Destacados
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestra Selección Premium</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Descubre nuestros productos más exclusivos, cultivados con técnicas tradicionales y sostenibles en las
                tierras fértiles de Estelí.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {/* Featured Product 1 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/cafe-oro.jpeg?height=600&width=800"
                    alt="Café Oro Premium"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Destacado
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-xs text-gray-500">(128 reseñas)</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Café de Oro Premium</h3>
                  <p className="mb-4 text-gray-600">
                    Nuestro café de especialidad cultivado a más de 1,400 metros sobre el nivel del mar, con notas de
                    chocolate, caramelo y frutas cítricas.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">$18.99 / lb</span>
                    <Link
                      href="#cafe"
                      className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              {/* Featured Product 2 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/frijoles.jpg?height=600&width=800"
                    alt="Frijoles Orgánicos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Orgánico
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 text-gray-300" />
                    <span className="ml-2 text-xs text-gray-500">(94 reseñas)</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Frijoles Rojos Orgánicos</h3>
                  <p className="mb-4 text-gray-600">
                    Frijoles rojos cultivados sin químicos, con certificación orgánica. Sabor auténtico y textura
                    perfecta para platos tradicionales.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">$4.99 / lb</span>
                    <Link
                      href="#granos"
                      className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>

              {/* Featured Product 3 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/tomates.jpg?height=600&width=800"
                    alt="Tomates Cherry Orgánicos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Nuevo
                  </div>
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="ml-2 text-xs text-gray-500">(76 reseñas)</span>
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Tomates Cherry Orgánicos</h3>
                  <p className="mb-4 text-gray-600">
                    Tomates cherry cultivados en invernaderos ecológicos. Dulces, jugosos y perfectos para ensaladas
                    gourmet.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">$3.49 / lb</span>
                    <Link
                      href="#hortalizas"
                      className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 transition hover:bg-green-100"
                    >
                      Ver Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
                Categorías
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestras Categorías de Productos</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Estelí ofrece una diversidad de productos agrícolas de alta calidad, cultivados con técnicas
                tradicionales y sostenibles.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Category 1 */}
              <Link href="#cafe" className="group">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/cafeejemplo.jpg?height=800&width=600"
                    alt="Café"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Coffee className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Café</h3>
                    <p className="mb-4 text-gray-200">Café de altura con sabores únicos y aromas intensos.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Category 2 */}
              <Link href="#granos" className="group">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/granosbasicosejemplo.jpg?height=800&width=600"
                    alt="Granos Básicos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Wheat className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Granos Básicos</h3>
                    <p className="mb-4 text-gray-200">Frijoles, maíz y arroz de la mejor calidad.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Category 3 */}
              <Link href="#hortalizas" className="group">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/hortalizasejemplo.jpg?height=800&width=600"
                    alt="Hortalizas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Leaf className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Hortalizas</h3>
                    <p className="mb-4 text-gray-200">Hortalizas frescas y orgánicas de los valles de Estelí.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* Coffee Section */}
        <section id="cafe" className="py-24 bg-[#f8f5f1]">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
                Café de Altura
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Café de Estelí</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Nuestro café es cultivado en altitudes superiores a los 1,200 metros sobre el nivel del mar, lo que le
                confiere características únicas de sabor y aroma.
              </p>
            </div>

            {/* Coffee Tabs */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-2 mb-8">
                <button
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeTab === "todos" ? "bg-amber-800 text-white" : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                  }`}
                  onClick={() => setActiveTab("todos")}
                >
                  Todos
                </button>
                <button
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeTab === "arabica"
                      ? "bg-amber-800 text-white"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                  }`}
                  onClick={() => setActiveTab("arabica")}
                >
                  Arábica
                </button>
                <button
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeTab === "organico"
                      ? "bg-amber-800 text-white"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                  }`}
                  onClick={() => setActiveTab("organico")}
                >
                  Orgánico
                </button>
                <button
                  className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                    activeTab === "especial"
                      ? "bg-amber-800 text-white"
                      : "bg-amber-100 text-amber-800 hover:bg-amber-200"
                  }`}
                  onClick={() => setActiveTab("especial")}
                >
                  Especial
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {/* Coffee Product 1 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/cafetipo1.jpg?height=400&width=600"
                    alt="Café Arábica"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                    Arábica
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Café Arábica Miraflor</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Café de altura con notas de chocolate, caramelo y frutas cítricas. Cultivado bajo sombra en las
                    montañas de Miraflor.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">$12.99 / lb</span>
                    <button className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>

              {/* Coffee Product 2 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/cafetipo2.jpg?height=400&width=600"
                    alt="Café Orgánico"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                    Orgánico
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Café Orgánico Certificado</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Cultivado sin químicos, con certificación orgánica. Sabor equilibrado con notas de nueces y
                    caramelo.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">$14.99 / lb</span>
                    <button className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>

              {/* Coffee Product 3 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/cafetipo3.jpg?height=400&width=600"
                    alt="Café Honey"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                    Especial
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Café Honey</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Procesado con el método honey, que conserva parte del mucílago. Sabor dulce con notas de frutas
                    tropicales.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">$16.99 / lb</span>
                    <button className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>

              {/* Coffee Product 4 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/cafetipo4.jpg?height=400&width=600"
                    alt="Café Bourbon"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-3 py-1 text-xs font-semibold text-white">
                    Premium
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Café Bourbon Rojo</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Variedad Bourbon cultivada a 1,500 metros. Sabor complejo con notas de chocolate negro, cereza y un
                    toque de especias.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-amber-700">$18.99 / lb</span>
                    <button className="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-700 transition hover:bg-amber-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="#"
                className="inline-flex items-center rounded-full border border-amber-700 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
              >
                Ver Todos los Cafés
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

    {/* Basic Grains Section */}
        <section id="granos" className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-800 mb-4">
                Tradición Agrícola
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Granos Básicos</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Los granos básicos de Estelí son cultivados por pequeños productores que mantienen vivas las tradiciones
                agrícolas de la región, utilizando técnicas sostenibles y respetuosas con el medio ambiente.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Imágenes pequeñas alineadas a la derecha */}
              <div className="space-y-8 ml-auto">
                {/* Grain Product 1 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/frijoles.jpg?height=200&width=200" alt="Frijol Rojo" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Frijol Rojo</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Frijol rojo tradicional nicaragüense, con excelente sabor y textura. Ideal para gallo pinto y otros platos típicos.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-yellow-700">$2.99 / lb</span>
                      <button className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-medium text-yellow-700 transition hover:bg-yellow-100">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grain Product 2 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/maiz.jpg?height=200&width=200" alt="Maíz Criollo" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Maíz Criollo</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Maíz de variedades locales, perfecto para tortillas, tamales y otros platillos tradicionales.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-yellow-700">$1.99 / lb</span>
                      <button className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-medium text-yellow-700 transition hover:bg-yellow-100">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grain Product 3 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/arroz.jpg?height=200&width=200" alt="Arroz de Secano" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Arroz de Secano</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Arroz cultivado con técnicas tradicionales, con excelente rendimiento y sabor característico.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-yellow-700">$2.49 / lb</span>
                      <button className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-medium text-yellow-700 transition hover:bg-yellow-100">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grain Product 4 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/sorgo.jpg?height=200&width=200" alt="Sorgo" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Sorgo</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Cereal resistente a la sequía, utilizado para alimentación animal y elaboración de productos tradicionales.
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold text-yellow-700">$1.79 / lb</span>
                      <button className="rounded-full bg-yellow-50 px-3 py-1.5 text-xs font-medium text-yellow-700 transition hover:bg-yellow-100">
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contenedor de imágenes grandes */}
              <div className="space-y-8">
                {/* Imagen grande 1 */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/granosmaiz.jpg"
                    alt="Granos Básicos"
                    width={800}
                    height={600}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>

                {/* Imagen grande 2 (Debajo de la primera) */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/granosfrijoles.jpg"
                    alt="Granos Básicos Adicional"
                    width={800}
                    height={600}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* Vegetables Section */}
        <section id="hortalizas" className="py-24 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
                Frescura y Calidad
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Hortalizas</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Las hortalizas de Estelí son conocidas por su frescura y calidad. Cultivadas en los fértiles valles de
                la región, ofrecen sabores auténticos y nutritivos.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Vegetable Product 1 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/tomates-pony.jpg?height=400&width=600"
                    alt="Tomates Orgánicos"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Orgánico
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Tomates Orgánicos</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Tomates cultivados sin químicos, con sabor intenso y dulce. Ideales para ensaladas y salsas.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">$1.99 / lb</span>
                    <button className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 transition hover:bg-green-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>

              {/* Vegetable Product 2 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/cebollasvar.jpg?height=400&width=600"
                    alt="Cebollas"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Fresco
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Cebollas</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Cebollas dulces y aromáticas, cultivadas en los valles de Estelí. Perfectas para todo tipo de
                    platillos.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">$1.49 / lb</span>
                    <button className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 transition hover:bg-green-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>

              {/* Vegetable Product 3 */}
              <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image
                    src="/chiltoma.jpg?height=400&width=600"
                    alt="Chiltomas (Pimientos)"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-green-600 px-3 py-1 text-xs font-semibold text-white">
                    Local
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="mb-2 text-lg font-bold text-gray-900">Chiltomas (Pimientos)</h3>
                  <div className="flex items-center gap-1 mb-3">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <Star className="h-4 w-4 text-gray-300" />
                  </div>
                  <p className="mb-4 text-sm text-gray-600">
                    Pimientos dulces tradicionales de Nicaragua, con excelente sabor y color. Ideales para sofritos y
                    rellenos.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-green-700">$1.79 / lb</span>
                    <button className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-medium text-green-700 transition hover:bg-green-100">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Vegetable Collection 1 */}
              <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Hortalizas de Hoja Verde</h3>
                <p className="mb-6 text-gray-600">
                  Nuestra colección de hortalizas de hoja verde incluye lechuga, espinaca, col y más, todas cultivadas
                  con técnicas sostenibles.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/berenjena.jpg?height=300&width=300" alt="Lechuga" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/apio.jpg?height=300&width=300" alt="Espinaca" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/repollo.jpg?height=300&width=300" alt="Col" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/chile2.jpg?height=300&width=300" alt="Acelga" fill className="object-cover" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-green-700">
                    Ver Colección Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Vegetable Collection 2 */}
              <div className="overflow-hidden rounded-2xl bg-white p-6 shadow-md">
                <h3 className="mb-4 text-xl font-bold text-gray-900">Tubérculos y Raíces</h3>
                <p className="mb-6 text-gray-600">
                  Nuestra selección de tubérculos incluye papas, zanahorias, remolachas y más, todos cultivados en los
                  fértiles suelos de Estelí.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/rabano.jpg?height=300&width=300" alt="Papas" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/yuca.jpg?height=300&width=300" alt="Zanahorias" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/zanahoria.jpg?height=300&width=300" alt="Remolachas" fill className="object-cover" />
                  </div>
                  <div className="relative h-32 overflow-hidden rounded-lg">
                    <Image src="/papa.jpg?height=300&width=300" alt="Yuca" fill className="object-cover" />
                  </div>
                </div>
                <div className="mt-6">
                  <Link href="#" className="inline-flex items-center text-sm font-medium text-green-700">
                    Ver Colección Completa
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

     {/* Video representativo */}
    <section className="flex justify-center mt-20">
      <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
        style={{
          backgroundImage: "url('/papa.jpg')", // Imagen de fondo
          backgroundSize: "cover", 
          backgroundPosition: "center",
          height: "400px" // Ajuste de altura
        }}
      >
        <video 
          src="/vid-diosas.mp4" 
          controls 
          poster="/diosas.png"
          className="w-full h-full rounded-2xl object-cover"
        ></video>
      </div>
    </section>

        {/* Certifications */}
        <section id="certificaciones" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-purple-800 mb-4">
                Garantía de Calidad
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestras Certificaciones</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Nuestros productos cuentan con certificaciones que garantizan su calidad, sostenibilidad y
                responsabilidad social.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Certification 1 */}
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-6 h-16 w-16">
                  <Image
                    src="/organico.jpg?height=100&width=100"
                    alt="Certificación Orgánica"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Certificación Orgánica</h3>
                <p className="text-gray-600">
                  Nuestros productos orgánicos están certificados por organismos internacionales que garantizan que han
                  sido cultivados sin el uso de pesticidas ni fertilizantes químicos.
                </p>
              </div>

              {/* Certification 2 */}
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-6 h-16 w-16">
                  <Image src="/comercio.jpg?height=100&width=100" alt="Comercio Justo" width={64} height={64} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Comercio Justo</h3>
                <p className="text-gray-600">
                  Trabajamos bajo los principios del comercio justo, asegurando precios justos para nuestros
                  agricultores y condiciones laborales dignas.
                </p>
              </div>

              {/* Certification 3 */}
              <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-6 h-16 w-16">
                  <Image src="/rainforest.jpg?height=100&width=100" alt="Rainforest Alliance" width={64} height={64} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Rainforest Alliance</h3>
                <p className="text-gray-600">
                  Nuestro café cuenta con la certificación Rainforest Alliance, que promueve la conservación de la
                  biodiversidad y los medios de vida sostenibles.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white mb-4">
                Testimonios
              </span>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Lo Que Dicen Nuestros Clientes</h2>
              <p className="mx-auto max-w-3xl text-lg text-green-100">
                Descubre por qué nuestros productos son apreciados por clientes de todo el mundo.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" width={56} height={56} />
                  </div>
                  <div>
                    <h4 className="font-semibold">María González</h4>
                    <p className="text-sm text-green-200">Dueña de Cafetería, Madrid</p>
                  </div>
                </div>
                <p className="mb-4 text-green-100">
                  "El café de Estelí ha transformado mi negocio. Mis clientes notan la diferencia y siempre preguntan de
                  dónde viene este café tan especial. La calidad y consistencia son excepcionales."
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" width={56} height={56} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Carlos Martínez</h4>
                    <p className="text-sm text-green-200">Chef, Restaurante Raíces</p>
                  </div>
                </div>
                <p className="mb-4 text-green-100">
                  "Las hortalizas de Estelí son incomparables en frescura y sabor. Han elevado la calidad de mis platos
                  y mis clientes lo notan. Además, me encanta apoyar a productores que trabajan de manera sostenible."
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                </div>
              </div>

              <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                    <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" width={56} height={56} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Ana Rodríguez</h4>
                    <p className="text-sm text-green-200">Importadora, Sabores del Mundo</p>
                  </div>
                </div>
                <p className="mb-4 text-green-100">
                  "Llevo años importando granos básicos de Estelí y la calidad siempre es consistente. Mis clientes en
                  Europa aprecian el sabor auténtico y la historia detrás de cada producto."
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <Star className="h-5 w-5 text-green-300" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-24">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
                Contáctanos
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">¿Interesado en Nuestros Productos?</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Ponte en contacto con nosotros para más información o para realizar un pedido. Estamos aquí para
                ayudarte.
              </p>
            </div>

            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div className="rounded-2xl bg-white p-8 shadow-lg">
                  <h3 className="mb-6 text-2xl font-bold text-gray-900">Envíanos un Mensaje</h3>
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                          Nombre
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                          Correo Electrónico
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                          placeholder="Tu correo electrónico"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                        Asunto
                      </label>
                      <input
                        type="text"
                        id="subject"
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                        placeholder="Asunto del mensaje"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                        Mensaje
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none focus:ring-2 focus:ring-green-200"
                        placeholder="Tu mensaje"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-lg bg-green-700 px-5 py-3 font-medium text-white transition hover:bg-green-600"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                </div>

                <div>
                  <div className="rounded-2xl bg-white p-8 shadow-lg">
                    <h3 className="mb-6 text-2xl font-bold text-gray-900">Información de Contacto</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Dirección</h4>
                          <p className="text-gray-600">Km 152 Carretera Panamericana, Estelí, Nicaragua</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                          <p className="text-gray-600">+505 2713 5492</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Correo Electrónico</h4>
                          <p className="text-gray-600">info@esteliagrícola.com</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="h-6 w-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </div>
                        <div>
                          <h4 className="text-lg font-medium text-gray-900">Horario de Atención</h4>
                          <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                          <p className="text-gray-600">Sábados: 8:00 AM - 12:00 PM</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <h4 className="mb-4 text-lg font-medium text-gray-900">Síguenos en Redes Sociales</h4>
                      <div className="flex gap-4">
                        <a
                          href="#"
                          className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-200"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-5 w-5"
                          >
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
                  <Image
                    src="/coop.png?height=40&width=40"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-white">Estelí Agrícola</span>
              </div>
              <p className="mb-6 text-gray-400">
                Ofreciendo los mejores productos agrícolas de Estelí, Nicaragua, al mundo entero. Calidad, tradición y
                sostenibilidad en cada producto.
              </p>
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Estelí Agrícola. Todos los derechos reservados.
              </p>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">Productos</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#cafe" className="text-gray-400 transition hover:text-white">
                    Café
                  </Link>
                </li>
                <li>
                  <Link href="#granos" className="text-gray-400 transition hover:text-white">
                    Granos Básicos
                  </Link>
                </li>
                <li>
                  <Link href="#hortalizas" className="text-gray-400 transition hover:text-white">
                    Hortalizas
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition hover:text-white">
                    Productos Orgánicos
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition hover:text-white">
                    Productos Especiales
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#proceso" className="text-gray-400 transition hover:text-white">
                    Nuestro Proceso
                  </Link>
                </li>
                <li>
                  <Link href="#certificaciones" className="text-gray-400 transition hover:text-white">
                    Certificaciones
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition hover:text-white">
                    Sobre Nosotros
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#contacto" className="text-gray-400 transition hover:text-white">
                    Contacto
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-6 text-lg font-semibold">Boletín Informativo</h3>
              <p className="mb-6 text-gray-400">
                Suscríbete para recibir noticias sobre nuestros productos, ofertas especiales y eventos.
              </p>
              <form className="space-y-4">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-green-700 px-4 py-3 font-medium text-white transition hover:bg-green-600"
                >
                  Suscribirse
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 border-t border-gray-800 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <p className="text-sm text-gray-400">Diseñado y desarrollado con ❤️ para los agricultores de Estelí</p>
              <div className="flex gap-6">
                <Link href="#" className="text-sm text-gray-400 transition hover:text-white">
                  Términos y Condiciones
                </Link>
                <Link href="#" className="text-sm text-gray-400 transition hover:text-white">
                  Política de Privacidad
                </Link>
                <Link href="#" className="text-sm text-gray-400 transition hover:text-white">
                  Cookies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

