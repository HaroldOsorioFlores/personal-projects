"use client"

import { useFormState } from "react-dom";

import DniAction from "@/actions/dni.action";
import RucAction from "@/actions/ruc.action";

const initialState = {
  data: { jsonData: {} }
}

export default function Home() {
  const [stateRuc, formActionRuc] = useFormState(RucAction, initialState)
  const [stateDni, formActionDni] = useFormState(DniAction, initialState)

  console.log({ stateDni })

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="border-2 p-4 rounded-md w-full max-w-2xl flex flex-col gap-8">
        <form action={formActionRuc}>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="flex gap-5">
                <label htmlFor="consultaRuc">Consulta RUC</label>
                <input type="text" placeholder="RUC" id="consultaRuc" className="border-b-2 border-gray-900 outline-none" name="consultaRuc" />
              </div>
              <button className="py-2 px-4 bg-blue-600 text-white rounded-md" type="submit">Buscar</button>
            </div>
            <div className="flex gap-5 items-center">
              <label htmlFor="respuesta_ruc">RPTA</label>
              <input type="text" placeholder="Respuesta" id="respuesta_ruc" className="w-full border-b-2 border-gray-900 outline-none" defaultValue={stateRuc.data.jsonData.razonSocial} />
            </div>
          </div>
        </form>
        <hr className="my-5" />
        <form action={formActionDni} >
          <div className="flex flex-col gap-5">
            <div className="flex gap-5 items-center">
              <div className="flex gap-5">
                <label htmlFor="consultaDni">Consulta DNI</label>
                <input type="text" placeholder="DNI" id="consultaDni" className="border-b-2 border-gray-900 outline-none" name="consultaDni" />
              </div>
              <button className="py-2 px-4 bg-blue-600 text-white rounded-md" type="submit">Buscar</button>
            </div>
            <div className="flex gap-5 items-center">
              <label htmlFor="respuesta_dni">RPTA</label>
              <input type="text" placeholder="Respuesta" id="respuesta_dni" className="w-full border-b-2 border-gray-900 outline-none" defaultValue={stateDni.data.jsonData.nombres} />
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}
