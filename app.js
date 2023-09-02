const $gifArea = $("#gif-area");
const $searchInput = $("#search");

async function submitHandler(apiKey, str) {
  const res = await axios.get(
    `api.giphy.com/v1/gifs/search", {params: {api_key:${apiKey}, q:${str}}`
  );
  console.log(res);
}
