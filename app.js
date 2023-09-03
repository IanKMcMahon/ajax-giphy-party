const $gifArea = $("#gif-area");
const $searchInput = $("#search");

$("form").on("submit", async function (evt) {
  evt.preventDefault();

  let searchTerm = $searchInput.val();
  $searchInput.val("");

  const response = await axios.get("http://api.giphy.com/v1/gifs/search", {
    params: {
      q: searchTerm,
      api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym",
    },
  });
  addGif(response.data);
});

/* remove gif */

$("#remove").on("click", function () {
  $gifArea.empty();
});
