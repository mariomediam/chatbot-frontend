
import bgSearch from "../../assets/background-search.svg";

export const InitSearch = ({ className } ) => {
  return (
    <div className={`${className}`}>
            <p className="m-0 p-0 text-sm">
            Por favor, ingrese sus criterios de búsqueda para comenzar
            </p>
            <div className="w-full flex justify-center">
              <img
                src={bgSearch}
                alt="Imagen no data"
                className="max-w-xs pt-0 mt-0 relative -top-[20px]"
              />
            </div>
          </div>
  )
}
