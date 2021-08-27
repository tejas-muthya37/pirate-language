const inputText = document.querySelector("#input-text");
const outputText = document.querySelector("#output-text");

document.querySelector("#btn-translate").addEventListener("click", function () {
  fetch(
    "https://api.funtranslations.com/translate/pirate.json?text=" +
      inputText.value
  )
    .then((response) => response.json())
    .then(
      (json) =>
        (document.querySelector("#output-text").innerText =
          json.contents.translated)
    )
    .catch((error) => console.log("Error!", error));
});
