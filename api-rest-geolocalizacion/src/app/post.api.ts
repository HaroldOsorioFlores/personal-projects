export async function fetchDataMap(
  ci1: string,
  ci2: string,
  cd1: string,
  cd2: string
) {
  const data = await fetch(
    `http://dev.virtualearth.net/REST/V1/Routes/Driving?o=json&ra=excludeItinerary&wp.0=${ci1},${ci2}&wp.1=${cd1},${cd2}&avoid=minimizeTolls&key=${process.env.KEY_BING_MAPS}`
  );
  const result = data.json();
  return result;
}

export async function fetchDataMapInicio(ci1: string, ci2: string) {
  const data = await fetch(
    `http://dev.virtualearth.net/REST/v1/Locations/${ci1},${ci2}?key=${process.env.KEY_BING_MAPS}`
  );
  const result = data.json();
  return result;
}

export async function fetchDataMapDestino(cd1: string, cd2: string) {
  const data = await fetch(
    `http://dev.virtualearth.net/REST/v1/Locations/${cd1},${cd2}?key=${process.env.KEY_BING_MAPS}`
  );
  const result = data.json();
  return result;
}
