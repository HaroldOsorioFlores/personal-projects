"use client"
import { useFormState } from "react-dom";
import { postData } from "./actionPost";
const initialState = {
  data: {
    respuestaGeneralKm: "",
    respuestaGeneralT: "",
    respuestaInicio: "",
    respuestaDestino: "",
  },
}
export default function Home() {
  const [state, formAction] = useFormState(postData, initialState)
  const respuestaInicioDireccion = state.data.respuestaInicio
  const respuestaDestinoDireccion = state.data.respuestaDestino
  const respuestaKmDireccion = state.data.respuestaGeneralKm
  const respuestaTiempoDireccion = state.data.respuestaGeneralT
  return (
    <main className=" w-full h-screen flex flex-col items-center justify-center">
      <form action={formAction} className="max-w-3xl w-full flex flex-col gap-5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] border-[1px] border-gray-900 p-10 bg-zinc-200">
        <h1>Form</h1>
        <div className="flex flex-col gap-5">
          <div className="flex gap-3 justify-between w-full">
            <p className="block">Coordenadas Inicio</p>
            <div className="flex gap-4">
              <input type="text" placeholder="CI1" className="border-[1px] border-gray-900" name="CI1" />
              <input type="text" placeholder="CI2" className="border-[1px] border-gray-900" name="CI2" />
            </div>
          </div>
          <input type="text" placeholder="Resultado" className="border-[1px] border-gray-900 w-full bg-transparent" defaultValue={respuestaInicioDireccion ?? ""} />
        </div>
        <div className="flex flex-col gap-5 mt-20">
          <div className="flex gap-3 justify-between w-full">
            <p className="block">Coordenadas Destino</p>
            <div className="flex gap-4">
              <input type="text" placeholder="CD1" className="border-[1px] border-gray-900" name="CD1" />
              <input type="text" placeholder="CD2" className="border-[1px] border-gray-900" name="CD2" />
            </div>
          </div>
          <input type="text" placeholder="Resultado" className="border-[1px] border-gray-900 w-full bg-transparent" defaultValue={respuestaDestinoDireccion ?? ""} />
          <div className="flex gap-5 justify-between">
            <div className="flex gap-5">
              <label htmlFor="">Distancia Km</label>
              <input type="text" placeholder="Dist. Km" className="border-[1px] border-gray-900 max-w-36" defaultValue={respuestaKmDireccion ?? ""} />
            </div>
            <div className="flex gap-5">
              <label htmlFor="">Tiempo Est. Min.</label>
              <input type="text" placeholder="Rpta. Tiempo" className="border-[1px] border-gray-900 max-w-36" defaultValue={respuestaTiempoDireccion ?? ""} />
            </div>
          </div>
        </div>
        <button className="px-10 py-4 border-2 border-blue-700 mx-auto mt-10" type="submit">Consultar</button>
      </form>
    </main>
  );
}
