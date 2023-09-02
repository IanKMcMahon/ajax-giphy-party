const $gifArea = $("#gif-area");
const $searchInput = $("#search");

async function submitHandler() {
  const res = await axios.get("api.giphy.com/v1/gifs/search");
}
