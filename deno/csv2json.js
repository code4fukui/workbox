import { CSV } from "https://js.sabae.cc/CSV.js";

export const csv2json = async (csvfn) => {
  const data = CSV.toJSON(await CSV.fetch(csvfn));
  const jsonfn = csvfn.replace(/\.csv$/, ".json");
  await Deno.writeTextFile(jsonfn, JSON.stringify(data, null, 2));
};
