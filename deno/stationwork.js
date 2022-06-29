import { fetchPOST } from "https://js.sabae.cc/fetchPOST.js";
import { CSV } from "https://js.sabae.cc/CSV.js";

const url = "https://www.stationwork.jp/booth-desk-franchise/base-search/list-of-bases/index.php?type=";
//const param = { type: 1, base_list_sort: 0 };
const param = {};
const data = await fetchPOST(url, param);
//console.log(data);

await Deno.writeTextFile("../workbox-stationwork.json", JSON.stringify(data.bases, null, 2));
await Deno.writeTextFile("../workbox-stationwork.csv", CSV.stringify(data.bases));
