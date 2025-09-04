"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Menu,
  X,
  MessageCircle,
  Star,
  MapPin,
  Award,
  Users,
  Clock,
  Phone,
} from "lucide-react";

const WHATSAPP_PHONE = "+51946195292";

export default function DeisyWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE}?text=Hola%20Deisy%2C%20estoy%20interesado%20en%20sus%20manzanas`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl sm:text-2xl font-bold text-[#D64545]">
              Deyssi
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8">
              {[
                "Inicio",
                "Nosotros",
                "Variedades",
                "Calidad",
                "Galería",
                "Testimonios",
                "Contacto",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace("í", "i"))
                  }
                  className="text-gray-700 hover:text-[#D64545] transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 -mr-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 border-t pt-4 bg-white rounded-b-lg shadow-lg">
              {[
                "Inicio",
                "Nosotros",
                "Variedades",
                "Calidad",
                "Galería",
                "Testimonios",
                "Contacto",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() =>
                    scrollToSection(item.toLowerCase().replace("í", "i"))
                  }
                  className="block w-full text-left py-3 px-2 text-gray-700 hover:text-[#D64545] hover:bg-gray-50 transition-colors duration-300 rounded"
                >
                  {item}
                </button>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="inicio"
        className="pt-16 sm:pt-20 min-h-screen flex items-center bg-gradient-to-br from-green-50 to-red-50"
      >
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div
              className={`space-y-4 sm:space-y-6 text-center md:text-left ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                <span className="text-[#D64545]">Deisy</span> — Manzanas premium
                de <span className="text-[#2E8B57]">Yauyos</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                Manzanas de altura, sabor incomparable. Suministro confiable
                para mercados y negocios.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
                <Button
                  size="lg"
                  className="bg-[#D64545] hover:bg-[#B63A3A] text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg hover-lift w-full sm:w-auto"
                  onClick={() => window.open(whatsappUrl, "_blank")}
                >
                  <MessageCircle className="mr-2" size={20} />
                  Cotiza por WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[#2E8B57] text-[#2E8B57] hover:bg-[#2E8B57] hover:text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent w-full sm:w-auto"
                  onClick={() => scrollToSection("variedades")}
                >
                  Ver Variedades
                </Button>
              </div>
            </div>
            <div
              className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} delay-300 mt-8 md:mt-0`}
            >
              <img
                src="/manzanas-rojas-frescas-en-paisaje-andino-de-yauyos.png"
                alt="Manzanas premium de Yauyos en paisaje andino"
                className="w-full h-auto rounded-2xl shadow-2xl animate-float"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestra Historia
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Somos una empresa familiar dedicada a la distribución de manzanas
              premium desde el corazón de Yauyos
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <Card className="hover-lift">
              <CardHeader className="text-center pb-4">
                <Users className="mx-auto mb-4 text-[#D64545]" size={40} />
                <CardTitle className="text-[#2E8B57] text-lg">
                  Familia
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                  Tres generaciones dedicadas al cultivo y distribución de
                  manzanas, manteniendo tradiciones familiares y valores de
                  calidad.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader className="text-center pb-4">
                <MapPin className="mx-auto mb-4 text-[#D64545]" size={40} />
                <CardTitle className="text-[#2E8B57] text-lg">Origen</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                  Nuestras manzanas provienen directamente de los valles de
                  Yauyos, donde el clima y la altitud crean condiciones
                  perfectas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift sm:col-span-2 lg:col-span-1">
              <CardHeader className="text-center pb-4">
                <Award className="mx-auto mb-4 text-[#D64545]" size={40} />
                <CardTitle className="text-[#2E8B57] text-lg">
                  Calidad
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600 text-center text-sm sm:text-base leading-relaxed">
                  Cada manzana es seleccionada cuidadosamente, garantizando
                  frescura, sabor y la mejor presentación para nuestros
                  clientes.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Varieties Section */}
      <section id="variedades" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Nuestras Variedades
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Ofrecemos las mejores variedades de manzanas, cada una con
              características únicas y sabores excepcionales
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "Manzana Delicia",
                description:
                  "Manzana roja, dulce y jugosa, excelente capacidad de conservación.",
                presentation: "Cajas de 18-20 kg",
                image: "Manazanas Delicia",
                imagePath: "./apple-fuji.jpg",
              },
              {
                name: "Manzana Santa Rosa",
                description:
                  "Manza verde, dulce y crujiente, con presentación impecable.",
                presentation: "Cajas de 18-20 kg",
                image: "Manazanas Santa Rosa",
                imagePath: "./apple-gala.jpg",
              },
              {
                name: "Manzana Winter",
                description:
                  "Variedad suave y aromática, perfecta para el consumo diario.",
                presentation: "Cajas de 18-20 kg",
                image: "Manzanas winter",
                imagePath: "./apple-redDelicious.jpg",
              },
              {
                name: "Granny Smith",
                description:
                  "Ácida y refrescante, perfecta para repostería y consumo fresco.",
                presentation: "Cajas de 18-20 kg",
                image: "manzanas Granny Smith verdes",
                imagePath: "./apple-granny.jpeg",
              },
              {
                name: "Palta",
                description:
                  "Cremosa y nutritiva  Versátil en la cocina, desde ensaladas hasta preparaciones gourmet.",
                presentation: "Según termporada",
                image: "Paltas",
                imagePath: "./palta.jpg",
              },
              {
                name: "Chirimoya",
                description:
                  "Fruta tropical de pulpa blanca y jugosa, con un dulzor natural que la convierte en una de las más apreciadas del Perú.",
                presentation: "Según termporada",
                image: "Chirimoyas",
                imagePath: "./chirimoya.jpg",
              },
            ].map((variety, index) => (
              <Card key={variety.name} className="hover-lift">
                <div className="relative">
                  <img
                    src={
                      variety.imagePath ||
                      `/abstract-geometric-shapes.png?height=160&width=240&query=${variety.image}`
                    }
                    alt={`Manzanas ${variety.name} de Yauyos`}
                    className="w-full h-40 sm:h-48 object-cover rounded-t-lg"
                    loading="lazy"
                  />
                  <Badge className="absolute top-3 right-3 bg-[#D64545] text-white text-xs">
                    Premium
                  </Badge>
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-[#2E8B57] text-lg">
                    {variety.name}
                  </CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {variety.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-xs sm:text-sm text-gray-500 mb-4">
                    <strong>Presentación:</strong> {variety.presentation}
                  </p>
                  <Button
                    className="w-full bg-[#D64545] hover:bg-[#B63A3A] text-white text-sm py-2"
                    onClick={() => window.open(whatsappUrl, "_blank")}
                  >
                    <MessageCircle className="mr-2" size={16} />
                    Cotizar por WhatsApp
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section id="calidad" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 text-center md:text-left">
                Calidad y Origen
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin
                    className="text-[#2E8B57] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                      Origen Yauyos
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Nuestras manzanas crecen en los valles de Yauyos, a más de
                      3,000 metros de altitud, donde las condiciones climáticas
                      únicas desarrollan sabores excepcionales.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Award
                    className="text-[#D64545] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                      Selección Rigurosa
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Cada manzana pasa por un proceso de selección manual,
                      garantizando que solo las frutas de primera calidad
                      lleguen a nuestros clientes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Star
                    className="text-[#2E8B57] mt-1 flex-shrink-0"
                    size={24}
                  />
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg mb-2">
                      Certificación de Calidad
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                      Cumplimos con estrictos controles de calidad y
                      trazabilidad, asegurando frescura desde el campo hasta su
                      mesa.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <img
                src="/campos-de-manzanas-en-yauyos-con-monta-as-andinas-.png"
                alt="Campos de manzanas en Yauyos, Perú"
                className="w-full h-auto rounded-2xl shadow-xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Galería
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              Conoce nuestro proceso desde el campo hasta la entrega
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {[
              {
                image: "manzanas rojas frescas recién cosechadas",
                alt: "Manzanas frescas recién cosechadas",
                imagePath: "./apples.jpg",
              },
              {
                image: "campos de manzanos en Yauyos con paisaje andino",
                alt: "Campos de manzanos en Yauyos",
                imagePath: "./apples1.jpg",
              },
              {
                image: "proceso de selección y empaque de manzanas",
                alt: "Proceso de selección y empaque",
                imagePath: "./apples2.jpg",
              },
              {
                image: "cajas de manzanas listas para distribución",
                alt: "Cajas listas para distribución",
                imagePath: "./apples3.jpg",
              },
              {
                image: "trabajadores cosechando manzanas en Yauyos",
                alt: "Cosecha de manzanas",
                imagePath: "./apples4.jpg",
              },
              {
                image: "manzanas de diferentes variedades organizadas",
                alt: "Variedades de manzanas",
                imagePath: "./apples5.jpg",
              },
            ].map((item, index) => (
              <div key={index} className="hover-lift">
                <img
                  src={
                    item.imagePath ||
                    `/abstract-geometric-shapes.png?height=250&width=350&query=${item.image}`
                  }
                  alt={item.alt}
                  className="w-full h-48 sm:h-64 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonios" className="py-16 sm:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros clientes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600">
              La confianza de nuestros clientes es nuestro mayor logro
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                name: "María González",
                business: "Mercado de Frutas",
                text: "Las manzanas de Deisy son las mejores que he vendido. Mis clientes siempre regresan por más. La calidad es excepcional y la atención personalizada.",
                rating: 5,
              },
              {
                name: "Carlos Mendoza",
                business: "Jugueria 'Deli'",
                text: "Trabajamos con Deisy desde hace 3 años. Su puntualidad en las entregas y la frescura de sus productos nos han ayudado a fidelizar clientes.",
                rating: 5,
              },
              {
                name: "Ana Rodríguez",
                business: "Distribuidora Norte",
                text: "La variedad y calidad de las manzanas de Yauyos que ofrece Deisy es incomparable. Recomiendo sus productos sin dudarlo.",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card
                key={index}
                className="hover-lift sm:col-span-2 lg:col-span-1 last:sm:col-span-1"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="text-yellow-400 fill-current"
                        size={16}
                      />
                    ))}
                  </div>
                  <CardTitle className="text-[#2E8B57] text-base">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-[#D64545] text-sm">
                    {testimonial.business}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-gray-600 italic text-sm sm:text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-4">
              Resolvemos tus dudas sobre nuestros productos y servicios
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion
              type="single"
              collapsible
              className="space-y-3 sm:space-y-4"
            >
              <AccordionItem
                value="item-1"
                className="bg-white rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4">
                  ¿Cuál es el pedido mínimo?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed">
                  Nuestro pedido mínimo es de 10 cajas (180-200 kg
                  aproximadamente). Esto nos permite mantener precios
                  competitivos y garantizar la frescura del producto.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-2"
                className="bg-white rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4">
                  ¿Hacen envíos a todo el pais?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed">
                  Sí, realizamos entregas en todo el Perú. Para pedidos al
                  interior del país, coordinar previamente por WhatsApp.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-3"
                className="bg-white rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4">
                  ¿Cuánto tiempo tardan las entregas?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed">
                  Las entregas en Lima se realizan entre 48-72 horas después de
                  confirmar el pedido. Coordinamos horarios flexibles para mayor
                  comodidad.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-4"
                className="bg-white rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4">
                  ¿Qué formas de pago aceptan?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed">
                  Aceptamos efectivo contra entrega, transferencias bancarias y
                  Yape/Plin. Para clientes frecuentes ofrecemos facilidades de
                  pago.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-5"
                className="bg-white rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4">
                  ¿Garantizan la frescura del producto?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed">
                  Absolutamente. Nuestras manzanas llegan directamente desde
                  Yauyos con máximo 5 días de cosechadas. Si no está satisfecho
                  con la calidad, lo reponemos sin costo.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem
                value="item-6"
                className="bg-white rounded-lg px-4 sm:px-6"
              >
                <AccordionTrigger className="text-left text-sm sm:text-base py-4">
                  ¿Tienen disponibilidad todo el año?
                </AccordionTrigger>
                <AccordionContent className="text-sm sm:text-base leading-relaxed">
                  Sí, mantenemos stock de nuestras principales variedades
                  durante todo el año. La temporada alta es de marzo a agosto,
                  cuando la calidad es excepcional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-16 sm:py-20 bg-[#2E8B57] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            ¡Contáctanos Ahora!
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto px-4">
            Estamos listos para atenderte. Solo manejamos pedidos por WhatsApp
            para brindarte una atención más rápida y personalizada.
          </p>

          <div className="bg-white/10 rounded-2xl p-6 sm:p-8 max-w-sm mx-auto mb-8">
            <MessageCircle className="mx-auto mb-4 text-white" size={40} />
            <h3 className="text-xl sm:text-2xl font-bold mb-4">
              WhatsApp Exclusivo
            </h3>
            <p className="mb-6 text-sm sm:text-base">
              Nuestro único canal de atención para cotizaciones, pedidos y
              consultas.
            </p>
            <Button
              size="lg"
              className="bg-white text-[#2E8B57] hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto"
              onClick={() => window.open(whatsappUrl, "_blank")}
            >
              <MessageCircle className="mr-2" size={20} />
              Escribir por WhatsApp
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 text-sm">
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>Lun - Sáb: 7:00 AM - 6:00 PM</span>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={16} />
              <span>Solo WhatsApp</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="sm:col-span-2 lg:col-span-1">
              <h3 className="text-xl sm:text-2xl font-bold text-[#D64545] mb-4">
                Deisy
              </h3>
              <p className="text-gray-300 mb-4 text-sm sm:text-base leading-relaxed">
                Distribuidora de manzanas premium de Yauyos. Calidad, frescura y
                tradición familiar desde el corazón del Perú.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-base">Contacto</h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p>📱 Solo atendemos por WhatsApp</p>
                <p>🕒 Lun - Sáb: 7:00 AM - 6:00 PM</p>
                <p>📍 Origen: Yauyos, Perú</p>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-base">
                Nuestros Productos
              </h4>
              <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                <p>• Manzanas Fuji</p>
                <p>• Manzanas Gala</p>
                <p>• Manzanas Red Delicious</p>
                <p>• Variedades Criollas</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">
              &copy; 2025 Deisy apples - Distribuidora de Frutas. Todos los
              derechos reservados.
            </p>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed px-4">
              Aviso de Privacidad: Sus datos personales son tratados conforme a
              la Ley de Protección de Datos Personales del Perú.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-3 sm:p-4 shadow-2xl animate-float"
          onClick={() => window.open(whatsappUrl, "_blank")}
          aria-label="Contactar por WhatsApp"
        >
          <MessageCircle size={20} className="sm:hidden" />
          <MessageCircle size={24} className="hidden sm:block" />
        </Button>
      </div>
    </div>
  );
}
