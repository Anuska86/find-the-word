window.addEventListener("DOMContentLoaded", () => {
  const inputQ = document.querySelector("#word-search");
  const textQ = document.querySelector("#text");

  const originalText = textQ.innerText;

  inputQ.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let wordSearch = inputQ.value.trim();

      if (wordSearch !== "") {
        const regExp = new RegExp(wordSearch, "gi");

        textQ.innerHTML = originalText.replace(
          regExp,
          "<span class='word-search-span'>$&</span>",
        );
      } else {
        textQ.innerHTML = originalText;
      }
    }
  });
});
