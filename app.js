const $gifArea = $("#gif-area");
const $searchInput = $("#search");

$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "av67hUKOvNyVSL2l5zZGnvFJopo52tIv",
    },
  });
  addGif(response.data);
});

$("#remove").on("click", function () {
  $gifArea.empty();
});
