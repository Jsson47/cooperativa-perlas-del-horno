"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"


// Agregar después de los imports
import { Menu, X, ArrowRight, Star, Coffee, Wheat, Leaf, Bean , Flower, Archive, Map, MapPin, Phone, Clock10, Navigation, HandHelping, HandHeart, HandHelpingIcon, Handshake} from "lucide-react"

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
                  className="text-sm font-medium text-green-800 hover:text-green-600 transition"
                >
                  Visítanos
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition shadow-sm" >
                  Contacto
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
  <div className="fixed inset-0 z-50 bg-white overflow-y-auto"> {/* Agregado overflow-y-auto */}
    <div className="container mx-auto px-4 py-6 min-h-full flex flex-col"> {/* Agregado flex container */}
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
      <nav className="mt-10 flex-1"> {/* Agregado flex-1 para ocupar espacio restante */}
        <ul className="flex flex-col gap-6 pb-8"> {/* Agregado pb-8 para padding bottom */}
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
          <li>
            <Link
              href="#visitanos"
              className="text-lg font-medium text-green-800"
              onClick={() => setIsMenuOpen(false)}
            >
              Visítanos
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam! Repellendus ut nemo officia molestiae magnam sint!
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    href="#categorias"
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
                      Test
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
            <Bean className="w-8 h-8 text-amber-700" />
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
            <Bean className="w-8 h-8 text-amber-700" />
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
        {/* Capa de desenfoque */}
  {/* Efecto de blur e inner shadow (solo en parte inferior) */}
  <div className="absolute inset-0 flex flex-col justify-end">
    <div className="h-1/5 w-full 
        backdrop-blur-sm 
        [box-shadow:inset_0_0_8px_rgba(0,0,0,0.6)]
        border-t border-white/10">
      
      {/* Gradiente original */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-3">
        <div className="text-white relative z-10">
          <h3 className="text-2xl font-bold mb-2">Apicultura Responsable</h3>
          <p>Respetamos los ciclos naturales y el bienestar de nuestras abejas.</p>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>

    {/* Productos de Miel - Proceso Agroecológico */}
<section className="py-12 bg-amber-50">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center text-amber-800 mb-8">Nuestra Miel: Cosechada con Conciencia</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Miel Multifloral */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-200">
        <div className="relative h-48">
          <Image 
            src="/miel-1.jpg" 
            alt="Miel Multifloral" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16 flex items-end p-3">
            <span className="text-white font-semibold">Cosecha Primaveral</span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">1. Inicio</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Abejas libres polinizando flores silvestres en bosques nativos, sin exposición a pesticidas.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">2. Proceso</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Extracción en frío y filtrado natural para preservar enzimas y antioxidantes.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">3. Producto</h3>
          </div>
          <p className="text-gray-600 text-sm">
            <span className="font-medium text-amber-800">Color ámbar claro</span>, aroma floral complejo y cristalización suave. Ideal para infusiones.
          </p>
        </div>
      </div>
      
      {/* Miel de Bosque */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-200">
        <div className="relative h-48">
          <Image 
            src="/miel-2.jpg" 
            alt="Miel de Bosque" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16 flex items-end p-3">
            <span className="text-white font-semibold">Bosques Nativos</span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">1. Inicio</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Colmenas en árboles nativos, recolectando néctar de flores silvestres y mielada de roble.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">2. Proceso</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Maduración lenta en panales, filtrado con mallas de acero inoxidable.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">3. Producto</h3>
          </div>
          <p className="text-gray-600 text-sm">
            <span className="font-medium text-amber-800">Color oscuro intenso</span>, sabor maltado y alto contenido en minerales. Perfecta para aliños.
          </p>
        </div>
      </div>
      
      {/* Miel Cremosa */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-200">
        <div className="relative h-48">
          <Image 
            src="/miel-3.jpg" 
            alt="Miel Cremosa" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16 flex items-end p-3">
            <span className="text-white font-semibold">Textura Sedosa</span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">1. Inicio</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Cosecha otoñal de flores tardías con alto contenido en glucosa.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">2. Proceso</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Cristalización controlada mediante batido artesanal para lograr untabilidad perfecta.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">3. Producto</h3>
          </div>
          <p className="text-gray-600 text-sm">
            <span className="font-medium text-amber-800">Textura de terciopelo</span>, no gotea y endulza 25% más que la miel líquida. Ideal para pan.
          </p>
        </div>
      </div>
      
      {/* Miel Orgánica Certificada */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-amber-200 relative">
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-green-600 text-white text-xs px-3 py-1 rounded-full shadow-md">Certificada</span>
        </div>
        
        <div className="relative h-48">
          <Image 
            src="/miel-jarra.jpg" 
            alt="Miel Orgánica" 
            fill 
            className="object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-16 flex items-end p-3">
            <span className="text-white font-semibold">100% Orgánica</span>
          </div>
        </div>
        
        <div className="p-5">
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-400 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">1. Inicio</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Zona protegida de 5km sin cultivos convencionales. Trazabilidad total.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-500 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">2. Proceso</h3>
          </div>
          <p className="text-gray-600 text-sm mb-4">
            Extracción en área certificada, análisis microbiológico y envasado en vidrio oscuro.
          </p>
          
          <div className="flex items-center mb-3">
            <div className="w-3 h-3 bg-amber-600 rounded-full mr-2"></div>
            <h3 className="font-bold text-lg text-amber-900">3. Producto</h3>
          </div>
          <p className="text-gray-600 text-sm">
            <span className="font-medium text-amber-800">Perfil premium</span>, libre de metales pesados y antibióticos. Certificación USDA Organic.
          </p>
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
          backgroundImage: "url('/wireframe.png')", // Imagen de fondo
          backgroundSize: "cover", 
          backgroundPosition: "center",
          height: "400px" // Ajuste de altura
        }}
      >
        <video 
          src="/video-wireframe.mp4" 
          controls 
          poster="/fotograma-video.jpg"
          className="w-full h-full rounded-2xl object-cover"
        ></video>
      </div>
    </section>

        {/* Espacio entre video y testimonios */}
    <div className="py-10"></div>

        {/* Testimonials */}
        <section className="py-24 bg-green-800 text-white">
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white mb-4">
                Testimonios
              </span>
              <h2 className="mb-6 text-4xl font-bold md:text-5xl">Lo Que Dicen Nuestros Clientes</h2>
              <p className="mx-auto max-w-3xl text-lg text-green-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, ipsam! Repellendus ut nemo officia molestiae magnam sint!
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
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni saepe exercitationem accusantium alias corporis dolorem nostrum odit distinctio, perferendis voluptatibus rerum nobis officia sint architecto repellat voluptates! Exercitationem, recusandae illo?."
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
                  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam, eveniet amet accusamus enim iure omnis odit, maiores atque ad assumenda commodi numquam quidem corrupti quo unde, dolor doloribus optio modi."
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
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, eveniet amet accusamus enim iure omnis odit, maiores atque ad assumenda commodi numquam quidem corrupti quo unde, dolor doloribus optio modi."
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
                          <p className="text-gray-600">+505 0000 0000</p>
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
              <h3 className="mb-6 text-lg font-semibold">Enlaces Rápidos</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="#proceso" className="text-gray-400 transition hover:text-white">
                    Nuestro Proceso
                  </Link>
                </li>
                <li>
                  <Link href="#visitanos" className="text-gray-400 transition hover:text-white">
                    Visítanos
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

