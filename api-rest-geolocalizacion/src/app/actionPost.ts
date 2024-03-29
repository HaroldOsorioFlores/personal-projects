"use server";
import {fetchDataMap,fetchDataMapDestino,fetchDataMapInicio,} from "./post.api";

export async function postData(prevState: any, formData: FormData) {
  const rawFormData = {
    CI1: formData.get("CI1") as string,
    CI2: formData.get("CI2") as string,
    CD1: formData.get("CD1") as string,
    CD2: formData.get("CD2") as string,
  };

  const respuestaInicio = await fetchDataMapInicio(
    rawFormData.CI1,
    rawFormData.CI2
  );
  const respuestaDestino = await fetchDataMapDestino(
    rawFormData.CD1,
    rawFormData.CD2
  );

  const respuestaGeneral = await fetchDataMap(
    rawFormData.CI1,
    rawFormData.CI2,
    rawFormData.CD1,
    rawFormData.CD2
  );

  const respuestaInicioDireccion =
    respuestaInicio.resourceSets[0].resources[0].name;
  const respuestaDestinoDireccion =
    respuestaDestino.resourceSets[0].resources[0].name;
  const respuestaGeneralKm =
    respuestaGeneral.resourceSets[0].resources[0].travelDistance;
  const respuestaGeneralT =
    Number(respuestaGeneral.resourceSets[0].resources[0].travelDuration) / 60;

  return {
    data: {
      respuestaGeneralKm: respuestaGeneralKm,
      respuestaGeneralT: String(respuestaGeneralT),
      respuestaInicio: respuestaInicioDireccion,
      respuestaDestino: respuestaDestinoDireccion,
    },
  };
}
