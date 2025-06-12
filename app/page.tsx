"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"


// Agregar después de los imports
import { Menu, X, ArrowRight, Star, Coffee, Wheat, Leaf, Bean , Flower, Archive, Map, MapPin, Phone, Clock10, Navigation, HandHelping, HandHeart, HandHelpingIcon, Handshake, Heart, Sun} from "lucide-react"

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
            <div className="relative h-16 w-16 overflow-hidden rounded-full bg-green-100">
              <Image
                src="/Logo.png?height=40&width=40"
                alt="Logo"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <span className="text-xl font-bold text-green-800" style={{ color: '#0c9c4d' }}>COASPEHO R.L.</span>
          </div>
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8">
               {/* Nuevo botón Inicio */}
            <li>
              <Link 
              href="#" 
              className="text-sm font-medium text-green-800 hover:text-green-600 transition"
              onClick={(e) => {
              e.preventDefault();
              window.scrollTo({top: 0, behavior: 'smooth'});
            }}>
                Inicio
              </Link>
            </li>
              <li>
                <Link href="#jamaica" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Jamaica
                </Link>
              </li>
              <li>
                <Link href="#miel" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Miel de abeja
                </Link>
              </li>
              <li>
                <Link href="#granos" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Granos Básicos
                </Link>
              </li>
              <li>
                <Link href="#jamaica" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                  Proceso
                </Link>
              </li>
              <li>
                <Link
                  href="#visitanos"
                  className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition shadow-sm"
                >
                  Visítanos
                </Link>
              </li>
            </ul>
          </nav>
          <button className="block md:hidden text-green-800" onClick={() => setIsMenuOpen(true)}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

        {/* Mobile Menu */}
{isMenuOpen && (
  <div className="fixed inset-0 z-50 bg-white overflow-y-auto">
    <div className="container mx-auto px-4 py-6 min-h-full flex flex-col">
      {/* Encabezado del menú */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative h-16 w-16 overflow-hidden rounded-full bg-green-100">
            <Image
              src="/logo.png?height=40&width=40"
              alt="Logo"
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold text-green-800">COASPEHO R.L</span>
        </div>
        <button 
          className="text-green-800" 
          onClick={() => setIsMenuOpen(false)}
          aria-label="Cerrar menú"
        >
          <X className="h-6 w-6" />
        </button>
      </div>
      
      {/* Contenido del menú con scroll */}
      <nav className="mt-10 flex-1">
        <ul className="flex flex-col gap-6 pb-8">
          <li>
            <Link
              href="#"
              className="text-lg font-medium text-green-800"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({top: 0, behavior: 'smooth'});
                setIsMenuOpen(false);
              }}
            >
              Inicio
            </Link>
          </li>
          <li>
            <Link
              href="#jamaica"
              className="text-lg font-medium text-green-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Jamaica
            </Link>
          </li>
          <li>
            <Link
              href="#miel"
              className="text-lg font-medium text-green-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Miel de abejas
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
              href="#jamaica"
              className="text-lg font-medium text-green-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Proceso
            </Link>
          </li>
          <li className="mt-4">
            <Link
              href="#visitanos"
              className="inline-block rounded-full bg-green-700 px-6 py-3 text-base font-medium text-white hover:bg-green-600 transition shadow-sm"
              onClick={() => setIsMenuOpen(false)}
            >
              Visítanos
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)}

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
                  Productos Agrícolas de <span className="text-green-600" style={{ color: '#faa530' }}>Estelí</span>
                </h1>
                <p className="text-lg text-gray-600 mb-8 max-w-lg">
                  Destacan por su calidad, frescura y compromiso con prácticas sostenibles, esta región nicaragüense es reconocida por la producción de rosa de jamaica, granos básicos y miel de abeja.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#categorias"
                    className="group rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-500 shadow-sm"
                  >
                    Explorar Productos
                    <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Images - Modern Grid Layout */}
              <div className="lg:col-span-7 relative">
                <div className="grid grid-cols-6 grid-rows-5 gap-3 h-[400px]">
                  {/* Main Image - Jamaica */}
                  <div className="col-span-4 row-span-5 rounded-2xl overflow-hidden shadow-lg relative">
                    <Image
                      src="/jamaica-principal.jpg?height=600&width=400"
                      alt="Rosa de Jamaica"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-green-800">
                      Rubro
                    </div>
                  </div>

                  {/* Top Right Image - Miel */}
                  <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/miel-principal.jpg?height=200&width=200"
                      alt="Miel artesanal de Estelí"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Bottom Right Image - Granos Basicos */}
                  <div className="col-span-2 row-span-3 rounded-xl overflow-hidden shadow-md">
                    <Image
                      src="/granosbasicos.webp?height=300&width=200"
                      alt="Maíz, frijol, sorgo de Estelí"
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

      {/* Mision Vision */}
      
      {/* Mission & Vision Section */}
<section id="mision-vision" className="py-24 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="mb-16 text-center">
      <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
        Nuestra Esencia
      </span>
      <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Misión y Visión</h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600">
        Los pilares fundamentales que guían nuestro trabajo diario en Agropecuaria de Servicios Las Perlas Del Horno R.L.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
      {/* Mission Card */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-64 w-full overflow-hidden bg-green-100">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-16 w-16 text-green-700"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        </div>
        <div className="p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Nuestra Misión</h3>
          <p className="text-gray-600">
          Somos una cooperativa de base Agropecuaria de mujeres campesinas, bridando oportunidades para el desarrollo y empoderamiento de nuestras asociadas, sus familias y la comunidad. Con espacios de participación activa comprometidas con los intereses de las mujeres para liderar cargos vitales para el proceso cooperativo lideradas por mujeres, promoviendo la economía local, popular solidaria, agroecológica. Desde la diversificación de rubros para la generación de ingresos económicos, y la defensa de sus derechos.
          </p>
        </div>
      </div>

      {/* Vision Card */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:shadow-xl">
        <div className="relative h-64 w-full overflow-hidden bg-green-50">
          <div className="absolute inset-0 flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="h-16 w-16 text-green-700"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon>
            </svg>
          </div>
        </div>
        <div className="p-8">
          <h3 className="mb-4 text-2xl font-bold text-gray-900">Nuestra Visión</h3>
          <p className="text-gray-600">
          Ser una organización capaz de promover el talento humano para el empoderamiento de las mujeres, contribuyendo a las respuestas de las demandas campesinas de inclusión cooperativa líder que apueste por el desarrollo integral de las mujeres campesinas, mediante la autonomía económica, legitimando los procesos cooperativos. Contribuyendo al desarrollo de la comunidad. Las familias y los sujetos asociados para promover la defensa de sus derechos.
          </p>
        </div>
      </div>
    </div>

    {/* Values */}
    <div className="mt-16">
      <h3 className="mb-8 text-center text-3xl font-bold text-gray-900">Nuestros Valores</h3>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Value 1 */}
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
            <Leaf className="h-8 w-8" />
          </div>
          <h4 className="mb-2 text-lg font-bold text-gray-900">Sostenibilidad</h4>
          <p className="text-gray-600">
            Compromiso con prácticas agrícolas que preservan los recursos naturales para futuras generaciones.
          </p>
        </div>

        {/* Value 2 */}
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
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
              className="h-8 w-8"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <h4 className="mb-2 text-lg font-bold text-gray-900">Trabajo en Equipo</h4>
          <p className="text-gray-600">
            Valoramos la colaboración y el esfuerzo colectivo para alcanzar objetivos comunes.
          </p>
        </div>

        {/* Value 3 */}
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
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
              className="h-8 w-8"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <h4 className="mb-2 text-lg font-bold text-gray-900">Calidad</h4>
          <p className="text-gray-600">
            Excelencia en cada etapa de nuestro proceso productivo para ofrecer lo mejor a nuestros clientes.
          </p>
        </div>

        {/* Value 4 */}
        <div className="rounded-xl bg-white p-6 text-center shadow-md">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
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
              className="h-8 w-8"
            >
              <path d="M12 2v4"></path>
              <path d="m16.24 7.76 2.83-2.83"></path>
              <path d="M18 12h4"></path>
              <path d="m16.24 16.24 2.83 2.83"></path>
              <path d="M12 18v4"></path>
              <path d="m7.76 16.24-2.83 2.83"></path>
              <path d="M6 12H2"></path>
              <path d="m7.76 7.76-2.83-2.83"></path>
            </svg>
          </div>
          <h4 className="mb-2 text-lg font-bold text-gray-900">Innovación</h4>
          <p className="text-gray-600">
            Adopción de tecnologías y métodos modernos para mejorar continuamente nuestros procesos.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>


{/* 
        Featured Products
        <section id="productos" className="py-24 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
                Productos Destacados
              </span>
              <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestra Selección Premium</h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam! Repellendus ut nemo officia molestiae magnam sint!
              </p>
            </div> */}

            {/* <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"> */}
              {/* Featured Product 1 */}
              {/* <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/wireframe.png?height=600&width=800"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Lorem Ipsum</h3>
                  <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam! Repellendus ut nemo officia molestiae magnam sint!
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
              </div> */}

              {/* Featured Product 2 */}
              {/* <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/wireframe.png?height=600&width=800"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Lorem Ipsum</h3>
                  <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam! Repellendus ut nemo officia molestiae magnam sint!
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
              </div> */}

              {/* Featured Product 3 */}
              {/* <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition-all hover:shadow-xl">
                <div className="relative h-80 w-full overflow-hidden">
                  <Image
                    src="/wireframe.png?height=600&width=800"
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
                  <h3 className="mb-3 text-xl font-bold text-gray-900">Lorem Ipsum</h3>
                  <p className="mb-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam! Repellendus ut nemo officia molestiae magnam sint!
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
        </section> */}

        {/* Categories Section */}
        <section id="categorias" className="py-24">
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
              <Link href="#jamaica" className="group">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/jamaica.jpg?height=800&width=600"
                    alt="Jamaica"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Flower className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Jamaica</h3>
                    <p className="mb-4 text-gray-200">6 Mujeres productoras de jamaica venta a nivel nacional</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Category 2 */}
              <Link href="#miel" className="group">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/miel.jpg?height=800&width=600"
                    alt="Miel artesanal"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Archive className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Miel de abeja</h3>
                    <p className="mb-4 text-gray-200">3 Mujeres Apicultoras Venta a nivel nacional.</p>
                    <span className="inline-flex items-center text-sm font-medium text-white">
                      Explorar
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>

              {/* Category 3 */}
              <Link href="#granos" className="group">
                <div className="relative h-96 w-full overflow-hidden rounded-2xl">
                  <Image
                    src="/granosbasicos.webp?height=800&width=600"
                    alt="Maiz, frijol, sorgo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-8">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <Bean className="h-8 w-8" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-white">Granos Básicos</h3>
                    <p className="mb-4 text-gray-200">33 Mujeres Producen granos básicos.</p>
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

        {/* Jamaica Section - Rediseñada */}
<section id="jamaica" className="py-20 bg-gradient-to-b from-amber-50 to-white">
  <div className="container mx-auto px-4" >
    <div className="mb-16 text-center">
      <span className="inline-block rounded-full bg-amber-200 px-6 py-2 text-sm font-bold uppercase tracking-wider text-amber-900 mb-4 shadow-sm" >
      Flor de Jamaica 100% Orgánica
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
      Rosa de <span className="text-amber-700" style={{ color: '#8E1616' }}>Jamaica</span>
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
      Cultivamos las variedades Reina Salvadoreña y Criolla en condiciones agroecológicas, con deshidratado natural que preserva sus propiedades y sabor intenso.
      </p>
    </div>

    {/* Proceso de Cultivo */}
    <div className="mb-16 bg-white rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
      Nuestro Proceso Agroecológico
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <Heart className="w-8 h-8 text-amber-700" />
          </div>
          <h4 className="font-bold text-lg mb-2">Cultivo Natural</h4>
          <p className="text-gray-600">Sin pesticidas químicos, usando abonos orgánicos y rotación de cultivos para mantener la tierra fértil.</p>
        </div>
        <div className="text-center">
          <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <HandHelping className="w-8 h-8 text-amber-700" />
          </div>
          <h4 className="font-bold text-lg mb-2">Cosecha Manual</h4>
          <p className="text-gray-600">Seleccionamos las flores en su punto óptimo de maduración, una a una, garantizando la máxima calidad.</p>
        </div>
        <div className="text-center">
          <div className="bg-amber-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
            <Sun className="w-8 h-8 text-amber-700" />
          </div>
          <h4 className="font-bold text-lg mb-2">Deshidratado Natural</h4>
          <p className="text-gray-600">Secado a baja temperatura para conservar nutrientes, color y aroma, manteniendo todas sus propiedades.</p>
        </div>
      </div>
    </div>

    {/* Productos */}
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Producto 1 - Proceso de Cultivo */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl border border-amber-100">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src="/jamaica-principal.jpg" 
            alt="Proceso de cultivo de Jamaica"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 rounded-full bg-amber-600 px-4 py-1 text-xs font-bold text-white shadow-md">
            Tradicional
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Nuestro Proceso de Cultivo</h3>
          
          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Selección de semillas:</span> Usamos variedades autóctonas (Reina Salvadoreña y Criolla), adaptadas al clima local.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Siembra sostenible:</span> Sin químicos, con abonos orgánicos y rotación de cultivos para cuidar el suelo.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Cosecha manual:</span> Las flores se recolectan en su punto óptimo, respetando su ciclo natural.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Producto 2 - Proceso de Deshidratado */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl border border-amber-100">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src="/jamaica-proceso2.jpg" 
            alt="Proceso de deshidratado de Jamaica"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 rounded-full bg-blue-600 px-4 py-1 text-xs font-bold text-white shadow-md">
            Procesando
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Deshidratado Natural</h3>
          
          <div className="space-y-4">
            {/* Paso 1 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Lavado cuidadoso:</span> Las flores se limpian con agua pura para mantener su pureza.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Secado al sol:</span> Se colocan en camas de secado bajo condiciones controladas, preservando su color, aroma y nutrientes.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Selección rigurosa:</span> Solo las mejores flores pasan al empaque, garantizando calidad superior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Producto 3 */}
      <div className="group overflow-hidden rounded-2xl bg-white shadow-xl transition-all hover:-translate-y-2 hover:shadow-2xl border border-amber-100">
        <div className="relative h-64 w-full overflow-hidden">
          <Image
            src="/jamaica.jpg"
            alt="Mezcla Especial"
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4 rounded-full bg-purple-600 px-4 py-1 text-xs font-bold text-white shadow-md">
            Cosechado
          </div>
        </div>
        <div className="p-6">
          <h3 className="mb-4 text-xl font-bold text-gray-900">Jamaica Premium</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">100% orgánica y natural:</span> Libre de pesticidas y aditivos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Propiedades intactas:</span> Rica en vitamina C, antioxidantes y de sabor intenso.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-0.5">
                <div className="h-6 w-6 rounded-full bg-amber-100 flex items-center justify-center">
                  <svg className="w-4 h-4 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-gray-600">
                  <span className="font-semibold text-gray-800">Versátil:</span> Ideal para infusiones, aguas frescas, mermeladas y uso medicinal.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Miel Section - Rediseñada */}
<section id="miel" className="py-20 bg-gradient-to-b from-yellow-50 to-white">
  <div className="container mx-auto px-4">
    <div className="mb-16 text-center">
      <span className="inline-block rounded-full bg-yellow-200 px-6 py-2 text-sm font-bold uppercase tracking-wider text-yellow-900 mb-4 shadow-sm">
        Miel Pura de Abejas Felices
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
        Miel <span className="text-yellow-600">de abejas</span>
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
        Cosechada con buenas prácticas apícolas, garantizando calidad superior libre de contaminantes físicos, químicos y microbiológicos.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-10 mb-16">
      {/* Proceso de producción */}
      <div className="lg:w-1/2 bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        Nuestro Proceso Apícola
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="bg-yellow-100 rounded-full p-3 mr-4 flex-shrink-0">
              <Flower className="w-6 h-6 text-yellow-700" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Flora Diversa</h4>
              <p className="text-gray-600">Nuestras abejas polinizan en bosques nativos con más de 50 especies florales, dando a la miel un perfil único.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-yellow-100 rounded-full p-3 mr-4 flex-shrink-0">
              <Handshake className="w-6 h-6 text-yellow-700" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Buenas Prácticas</h4>
              <p className="text-gray-600">Extracción en frío con materiales inoxidables, filtrado natural y envasado en condiciones de máxima higiene.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-yellow-100 rounded-full p-3 mr-4 flex-shrink-0">
              <HandHeart className="w-6 h-6 text-yellow-700" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-1">Control de Calidad</h4>
              <p className="text-gray-600">Análisis periódicos para garantizar pureza, ausencia de antibióticos y conservación de enzimas naturales.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Imagen destacada */}
<div className="lg:w-1/2 relative rounded-2xl overflow-hidden shadow-lg h-96">
  <Image
    src="/miel.jpg"
    alt="Abejas produciendo miel"
    fill
    className="object-cover"
  />
  {/* Capa de gradiente oscuro sin blur */}
  <div className="absolute inset-0 flex flex-col justify-end">
    <div className="h-1/3 w-full bg-gradient-to-t from-black/100 to-transparent">
      <div className="text-white p-10">
        <h3 className="text-2xl font-bold mb-1">Apicultura Responsable</h3>
        <p>Respetamos los ciclos naturales y el bienestar de nuestras abejas.</p>
      </div>
    </div>
  </div>
</div>
</div>
</div>

    {/* Productos de Miel - Proceso Agroecológico */}
<section className="py-16 bg-gradient-to-b from-amber-50 to-amber-100">
  <div className="container mx-auto px-4">
    <div className="text-center mb-12">
      <span className="inline-block bg-amber-200 text-amber-800 text-sm font-semibold px-4 py-1 rounded-full mb-3">
        Producción Sustentable
      </span>
      <h2 className="text-4xl font-bold text-amber-900 mb-4">
        Nuestra Miel: <span className="text-amber-600">Del Panal a tu mesa</span>
      </h2>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Miel Multifloral */}
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 hover:border-amber-300">
        <div className="relative h-60 overflow-hidden">
          <Image 
            src="/miel-1.jpg" 
            alt="Miel Multifloral" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
            <div>
             {/*  <span className="text-amber-300 text-xs font-medium tracking-wider">PRIMAVERA</span>  */}
              <h3 className="text-white text-xl font-bold mt-1">Multifloral Silvestre</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Origen Diverso</h4>
              <p className="text-gray-600 text-sm mt-1">
                Abejas libres polinizando +20 especies florales en bosques nativos, sin exposición a químicos.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Extracción Artesanal</h4>
              <p className="text-gray-600 text-sm mt-1">
                Desoperculado manual y filtrado en frío para preservar polen, propóleos y enzimas naturales.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Perfil Sensorial</h4>
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-medium text-amber-800">Color ámbar claro</span>, aroma floral complejo con notas cítricas. Cristalización suave en 3-6 meses.
              </p>
            </div>
          </div>
          

        </div>
      </div>
      
      {/* Miel de Bosque */}
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 hover:border-amber-300">
        <div className="relative h-60 overflow-hidden">
          <Image 
            src="/miel-2.jpg" 
            alt="Miel de Bosque" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
            <div>
              <h3 className="text-white text-xl font-bold mt-1">Miel de Roble</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Ecosistema Único</h4>
              <p className="text-gray-600 text-sm mt-1">
                Colmenas en árboles centenarios recolectando mielada de roble y flores de sotobosque.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Maduración Lenta</h4>
              <p className="text-gray-600 text-sm mt-1">
                6 meses de maduración natural en panales, con control de humedad y temperatura constante.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Características</h4>
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-medium text-amber-800">Color ébano</span>, sabor maltado con toques a caramelo. Alta en hierro y potasio.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Miel Cremosa */}
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-amber-200 hover:border-amber-300">
        <div className="relative h-60 overflow-hidden">
          <Image 
            src="/miel-3.jpg" 
            alt="Miel Cremosa" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
            <div>
              <h3 className="text-white text-xl font-bold mt-1">Cremosa Natural</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Flores Tardías</h4>
              <p className="text-gray-600 text-sm mt-1">
                Cosecha otoñal de tréboles y flores silvestres con alto contenido en glucosa natural.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Cristalización</h4>
              <p className="text-gray-600 text-sm mt-1">
                Batido controlado cada 12 horas durante 15 días para lograr textura de seda.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-amber-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-amber-900">Propiedades</h4>
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-medium text-amber-800">Untable perfecto</span>, no gotea, endulza 25% más. Ideal para repostería.
              </p>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Miel Orgánica */}
      <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border-2 border-green-200 hover:border-green-300 relative">
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg flex items-center">
            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
            </svg>
            CERTIFICADA
          </span>
        </div>
        
        <div className="relative h-60 overflow-hidden">
          <Image 
            src="/miel-jarra.jpg" 
            alt="Miel Orgánica" 
            fill 
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
            <div>
              <span className="text-yellow-300 text-xs font-medium tracking-wider">Cosechada</span>
              <h3 className="text-white text-xl font-bold mt-1">Orgánica Pura</h3>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-green-900">Zona Protegida</h4>
              <p className="text-gray-600 text-sm mt-1">
                Radio de 5km sin cultivos convencionales. Trazabilidad desde la colmena.
              </p>
            </div>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-green-900">Proceso Certificado</h4>
              <p className="text-gray-600 text-sm mt-1">
                Área de extracción exclusiva, análisis mensuales y envasado en vidrio oscuro.
              </p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="flex-shrink-0 mt-1">
              <div className="w-4 h-4 bg-green-600 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h4 className="font-bold text-green-900">Garantía de Calidad</h4>
              <p className="text-gray-600 text-sm mt-1">
                <span className="font-medium text-green-800">Libre de residuos</span>, certificación USDA Organic y UE.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  
</section>

{/* Granos Básicos Section - Rediseñada */}
<section id="granos" className="py-20 bg-gradient-to-b from-green-50 to-white">
  <div className="container mx-auto px-4">
    <div className="mb-16 text-center">
      <span className="inline-block rounded-full bg-green-200 px-6 py-2 text-sm font-bold uppercase tracking-wider text-green-900 mb-4 shadow-sm">
        Soberanía Alimentaria
      </span>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
        Granos <span className="text-green-700">Básicos</span>
      </h2>
      <p className="mx-auto max-w-3xl text-lg text-gray-600 leading-relaxed">
        Rescatamos semillas criollas de maíz, frijol y sorgo mediante prácticas agroecológicas que respetan la tierra y sus ciclos naturales.
      </p>
    </div>

    {/* Proceso de Cultivo */}
    <div className="mb-16">
      <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center flex items-center justify-center">
      <Wheat className="w-8 h-8 mr-2 text-green-600" />
      Cultivo Agroecológico
      </h3>
  </div>

    {/* Productos de Granos */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* Maíz */}
      <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96">
        <Image
          src="/maiz-1.jpg"
          alt="Maíz Criollo"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Maíz Criollo</h3>
          <p className="text-white/90 mb-4">Variedades nativas de colores, alto valor nutricional.</p>
        </div>
      </div>
      
      {/* Frijol */}
      <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96">
        <Image
          src="/frijol-1.jpg"
          alt="Frijol Nativo"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Frijol Nativo</h3>
          <p className="text-white/90 mb-4">Diversidad de formas, colores y sabores ancestrales.</p>
        </div>
      </div>
      
      {/* Sorgo */}
      <div className="group relative overflow-hidden rounded-2xl shadow-xl h-96">
        <Image
          src="/sorgo-1.jpg"
          alt="Sorgo Criollo"
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-8">
          <h3 className="text-2xl font-bold text-white mb-2">Sorgo Criollo</h3>
          <p className="text-white/90 mb-4">Alternativa nutritiva y resistente al cambio climático.</p>
        </div>
      </div>
    </div>

    {/* Colecciones de Granos Básicos */}
<div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
  {/* Colección Maíz */}
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
    Maíz Criollo
    </h3>
    <p className="text-gray-600 mb-6">
    Cultivado en milpa con técnicas ancestrales. Nuestro maíz preserva la diversidad genética y el sabor auténtico.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-lg text-amber-800 mb-2">Proceso y Cosecha:</h4>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Siembra en luna llena según tradición</span>
        </li>
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Cultivo asociado con frijol y calabaza</span>
        </li>
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Cosecha manual cuando la mazorca está en punto óptimo</span>
        </li>
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Secado natural al sol sobre petates</span>
        </li>
      </ul>
    </div>
    {/*end frijol */}
  </div>
  
  {/* Colección Frijol */}
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-red-100 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
    Frijol Nativo
    </h3>
    <p className="text-gray-600 mb-6">
    Diversidad de variedades cultivadas de forma sostenible, cada una con características nutricionales únicas.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-lg text-red-800 mb-2">Proceso y Cosecha:</h4>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <Bean className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Siembra asociada con el maíz para soporte natural</span>
        </li>
        <li className="flex items-start">
          <Bean className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Crecimiento sin químicos, con abonos verdes</span>
        </li>
        <li className="flex items-start">
          <Bean className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Cosecha cuando las vainas están secas y crujientes</span>
        </li>
        <li className="flex items-start">
          <Bean className="w-5 h-5 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Trillado manual para preservar la semilla</span>
        </li>
      </ul>
    </div>
  {/* end sorgo */}

  </div>
  
  {/* Colección Sorgo */}
  <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:shadow-xl transition-shadow">
    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
    Sorgo Criollo
    </h3>
    <p className="text-gray-600 mb-6">
    Cultivo resistente y versátil, ideal para zonas áridas. Base de alimentación tradicional y forraje.
    </p>
    
    <div className="mb-6">
      <h4 className="font-semibold text-lg text-green-800 mb-2">Proceso y Cosecha:</h4>
      <ul className="space-y-2 text-gray-600">
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Siembra directa después de las primeras lluvias</span>
        </li>
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Requiere poca agua y resiste sequías</span>
        </li>
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Cosecha cuando las panículas están secas</span>
        </li>
        <li className="flex items-start">
          <Wheat className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
          <span>Trillado y ventilado natural para limpieza</span>
        </li>
      </ul>
    </div>
  {/* end sorgo */}

  </div>
</div>

  </div>
</section>

     {/* Video representativo */}
    <section className="flex justify-center mt-20">
      <div 
        className="relative w-full max-w-4xl overflow-hidden rounded-2xl"
        style={{
          backgroundImage: "url('/fotograma-video.jpg')", // Imagen de fondo
          backgroundSize: "cover", 
          backgroundPosition: "center",
          height: "400px" // Ajuste de altura
        }}
      >
        <video 
          src="/AlcaldíadeEsteli-CooperativaDiosas.mp4" 
          controls 
          poster="/fotograma-video.jpg"
          className="w-full h-full rounded-2xl object-cover"
        ></video>
      </div>
    </section>
    
</main>


    {/* Mapa Section */}
<section id="visitanos" className="py-16 bg-gray-50">
  <div className="container mx-auto px-4">
    <div className="mb-12 text-center">
      <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
      Ubicación
      </span>
      <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Visítanos en Estelí</h2>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 items-stretch">
      {/* Información de contacto - Izquierda */}
      <div className="lg:w-2/5 bg-white rounded-2xl p-8 shadow-lg border border-gray-200">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Navigation className="w-8 h-8 mr-2 text-green-600" />
        Nuestra Ubicación
        </h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
            <MapPin className="h-6 w-6" />
            </div>
            <div>
            <h4 className="text-lg font-medium text-gray-900 mb-1">Dirección</h4>
            <p className="text-gray-600">Km 152 Carretera Panamericana</p>
          <p className="text-gray-600">Estelí, Nicaragua</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-1">Teléfono</h4>
              <p className="text-gray-600">+505 0000 0000</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 flex-shrink-0">
              <Clock10 className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-1">Horario</h4>
              <p className="text-gray-600">Lunes a Viernes: 8AM - 5PM</p>
              <p className="text-gray-600">Sábados: 8AM - 12PM</p>
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-gray-200">
            <h4 className="text-lg font-medium text-gray-900 mb-3">¿Cómo llegar?</h4>
            <p className="text-gray-600 mb-4">
            Estamos ubicados en el kilómetro 152 de la Carretera Panamericana, a 10 minutos del centro de Estelí.
            </p>
          </div>
        </div>
      </div>

      {/* Mapa - Derecha */}
      <div className="lg:w-3/5 rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-[500px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.123456789012!2d-86.556965!3d13.347052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDIwJzQ5LjQiTiA4NsKwMzMnMjUuMSJX!5e0!3m2!1sen!2sni!4v1234567890123!5m2!1sen!2sni"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  </div>
</section>

      <footer className="bg-gray-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-6 flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
                  <Image
                    src="/Logo.png?height=40&width=40"
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
                  Rosa de Jamaica
                  </Link>
                </li>
                <li>
                  <Link href="#granos" className="text-gray-400 transition hover:text-white">
                  Miel de abejas
                  </Link>
                </li>
                <li>
                  <Link href="#granos" className="text-gray-400 transition hover:text-white">
                  Maíz
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition hover:text-white">
                  Frijol
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-gray-400 transition hover:text-white">
                  Sorgo
                  </Link>
                </li>
              </ul>
            </div>

            <div>
  <h3 className="mb-6 text-lg font-semibold">Síguenos</h3>
  <ul className="space-y-4">
    <li>
      <Link 
        href="https://www.instagram.com/coaspehor.l?igsh=dnRqbHRiZnEzdjNy" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-gray-400 transition hover:text-white"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
        </svg>
        Instagram
      </Link>
    </li>
    <li>
      <Link 
        href="https://www.facebook.com/profile.php?id=61576640737910" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-gray-400 transition hover:text-white"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
        Facebook
      </Link>
    </li>
    <li>
      <Link 
        href="https://www.tiktok.com/@coaspehor.l?is_from_webapp=1&sender_device=pc" 
        target="_blank" 
        rel="noopener noreferrer"
        className="flex items-center text-gray-400 transition hover:text-white"
      >
        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
        </svg>
        TikTok
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

          {/* Botón flotante de WhatsApp con tooltip */}
          <div className="fixed bottom-6 right-6 z-50">
            <div className="group relative">
              <div className="absolute -right-2 bottom-full mb-2 hidden w-max rounded-lg bg-gray-900 px-3 py-2 text-sm text-white group-hover:block">
            ¡Contáctanos por WhatsApp!
      <svg className="absolute left-0 top-full h-2 w-full text-gray-900" x="0px" y="0px" viewBox="0 0 255 255">
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
    <Link
      href="https://wa.me/50578841792" // Reemplaza con tu número
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-3 font-medium text-white shadow-lg transition-all hover:bg-green-600 hover:shadow-xl"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="currentColor" 
        className="h-6 w-6"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </Link>
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

