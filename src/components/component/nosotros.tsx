import Image from "next/image"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SobreNosotros() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <Image
            alt="Equipo de la empresa"
            className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
            height={550}
            src="/placeholder.svg"
            width={550}
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Sobre Nosotros
              </h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Desde 2010, nos dedicamos a proporcionar soluciones innovadoras y de alta calidad. 
                Nuestro equipo de profesionales apasionados se esfuerza por mantenerse a la vanguardia de la industria.
              </p>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-2xl font-bold">¿Por qué elegirnos?</h3>
              <ul className="space-y-2 text-gray-500 dark:text-gray-400">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Experiencia comprobada con más de una década en el mercado
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Soluciones personalizadas adaptadas a tus necesidades específicas
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Atención al cliente 24/7, sin importar tu ubicación
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-5 w-5 text-green-500" />
                  Tecnología de vanguardia para resultados óptimos
                </li>
              </ul>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-2xl font-bold">Qué ofrecemos</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">Nuestro Servicio</h4>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Atención personalizada</li>
                    <li>Soporte técnico especializado</li>
                    <li>Actualizaciones regulares</li>
                    <li>Flexibilidad en planes</li>
                  </ul>
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold mb-2">La Competencia</h4>
                  <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                    <li>Servicio estandarizado</li>
                    <li>Soporte limitado</li>
                    <li>Actualizaciones ocasionales</li>
                    <li>Planes rígidos</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="space-y-2 pt-4">
              <h3 className="text-xl font-bold">La distancia no es excusa</h3>
              <p className="text-gray-500 dark:text-gray-400">
                Gracias a nuestra plataforma en línea y nuestro equipo distribuido globalmente, 
                podemos ofrecer nuestros servicios en cualquier parte del mundo. 
                La calidad y la atención personalizada están a solo un clic de distancia.
              </p>
            </div>

            <div className="flex gap-4 pt-4">
              <Button asChild>
                <Link href="/servicios">Nuestros Servicios</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contacto">Contáctanos</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}