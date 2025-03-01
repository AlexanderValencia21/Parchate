import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Parisienne } from "next/font/google";
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
const ExploraHeader = () => {
  return (
    <div className="bg-transparent pt-40 p-10 md:p-40 text-center">
      <h1 className={`${montserrat.className} text-4xl md:text-6xl font-normal text-[#2E294E]`}>
        Encuentra tu{" "}
        <span className={`${parisienne.className} text-6xl md:text-8xl text-[#2E294E]`}>Parche</span>
      </h1>
      <h2 className={`${montserrat.className} p-4 md:p-10 text-lg md:text-2xl font-normal text-[#2E294E] mt-2`}>
        Explora nuestra selección de actividades de esta semana
      </h2>
      
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:items-center md:justify-between w-full max-w-4xl mx-auto p-6">
        
        {/* Barra de búsqueda */}
        <div className="flex items-center border-3 border-[#2E294E] rounded-full px-4 py-2 w-full max-w-lg">
          <input
            type="text"
            placeholder="Busca aquí..."
            className="flex-1 outline-none bg-transparent text-[#2E294E] placeholder:text-[#2E294E]"
          />
          <FontAwesomeIcon icon={faSearch} className="text-[#2E294E]" />
        </div>

        {/* Paginación */}
        <div className="flex items-center justify-center border-3 border-[#2E294E] rounded-full px-4 py-2">
          <button className="px-2 text-[#2E294E]">{`<`}</button>
          <button className="px-4 bg-[#2E294E] text-white rounded-full mx-1">1</button>
          <button className="px-2 text-[#2E294E]">2</button>
          <button className="px-2 text-[#2E294E]">3</button>
          <button className="px-2 text-[#2E294E]">{`>`}</button>
        </div>

      </div>
    </div>
  );
};


export default ExploraHeader;
