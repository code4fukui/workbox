const url = "https://telecube.jp/wp-json/acf/v3/posts?categories=2&posts_per_page=1000000000";
const data = await (await fetch(url)).json();
//console.log(data);
await Deno.writeTextFile("../workbox-telecube.json", JSON.stringify(data, null, 2));
