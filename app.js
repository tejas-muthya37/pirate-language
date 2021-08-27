document.querySelector("#btn-translate").addEventListener("click", function () {
  var url =
    "https://api.funtranslations.com/translate/pirate.json" +
    "?text=" +
    document.querySelector("#input-text").value;
  fetch(url)
    .then((response) => response.json())
    .then(
      (json) =>
        (document.querySelector("#output-text").innerText =
          json.contents.translated)
    )
    .catch((error) => console.log("Error!", error));
});
