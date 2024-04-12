"use server";

export default async function RucAction(prevState: any, formData: FormData) {
  const ruc = formData.get("consultaRuc");

  const headers = new Headers();

  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${process.env.API_TOKEN}`);

  const request = new Request(
    `https://api.apis.net.pe/v2/sunat/ruc?numero=${ruc}`,
    {
      method: "GET",
      headers: headers,
    }
  );

  const getDataRuc = await fetch(request);

  const jsonData = await getDataRuc.json();

  console.log({ jsonData });

  return { data: { jsonData } };
}
