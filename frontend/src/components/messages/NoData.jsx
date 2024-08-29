
import imgNoData from "../../assets/no-data.svg";

export const NoData = ({ className } ) => {
  return (
    <div className={`${className}`}>
            <p className="m-0 p-0 text-sm">
              No se encontraron registros coincidentes
            </p>
            <div className="w-full flex justify-center">
              <img
                src={imgNoData}
                alt="Imagen no data"
                className="max-w-xs pt-0 mt-0 relative -top-[20px]"
              />
            </div>
          </div>
  )
}
