import { flat } from "./flat.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

export const json2csv = async (jsonfn) => {
  const data = JSON.parse(await Deno.readTextFile(jsonfn));
  const data2 = flat(data);
  const csvfn = jsonfn.replace(/\.json$/, ".csv");
  await Deno.writeTextFile(csvfn, CSV.stringify(data2));
};
