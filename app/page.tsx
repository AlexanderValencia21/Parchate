import EventsSection from "@/components/EventsSection";
import ActionSection from "@/components/ActionSection";
import { Parisienne } from "next/font/google";
import ScrollIndicator from "@/components/ScrollIndicator";
const parisienne = Parisienne({
  weight: "400",
  subsets: ["latin"],
});
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Home() {
  return (
    <>
      {/* Primera sección (pantalla completa) */}
      <main className="flex items-center justify-between text-white px-20 md:bg-[url('/frame=2.png')] bg-cover bg-center bg-[url('/frame3_mobile.png')] !important bg-black w-full h-screen">
        <div className="w-full max-w-6xl flex flex-col items-center text-center px-6 md:flex-row md:justify-between md:text-left md:px-0">
          {/* Frase izquierda */}
          <div className="md:text-left mt-[-50px] md:mt-0">
            <h1
              className={`${montserrat.className} text-4xl md:text-6xl font-light mb-6 md:mb-0`}
            >
              En la vida, hay que
              <br></br>
              <span
                className={`${parisienne.className} text-6xl md:text-8xl underline decoration-1 underline-offset-10 block`}
              >
                Parcharse
              </span>
            </h1>
          </div>

          {/* Frase derecha */}
          <div className="max-w-md mt-6 md:mt-0 md:text-right">
            <p
              className={`${montserrat.className} text-base md:text-lg font-extralight`}
            >
              Somos <span className="font-bold">Parchate</span>, y curamos
              eventos para que tu vida y la de tus seres amados, sean un parche.
            </p>
          </div>
        </div>
        <ScrollIndicator />
      </main> 
      {/*secciones para la pagina de incio*/}
      <section className="w-full">
        <EventsSection />
      </section>
      <section className="w-full">
        <ActionSection />
      </section>
    </>
  );
}
