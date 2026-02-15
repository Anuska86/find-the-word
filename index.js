window.addEventListener("DOMContentLoaded", () => {
  const inputQ = document.querySelector("#word-search");

  const textContainer = document.querySelector("#test-text");

  const resetBtn = document.querySelector(".reset-button");
  const displayTestBtn = document.querySelector(".test-text-button");

  const originalHTLM = textContainer.innerHTML; //Original text version

  displayTestBtn.addEventListener("click", () => {
    textContainer.classList.toggle("show");

    if (textContainer.classList.contains("show")) {
      displayTestBtn.textContent = "Hide text";
    } else {
      displayTestBtn.textContent = "Display a test text";
    }
  });

  //Search logical
  inputQ.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let wordSearch = inputQ.value.trim();

      if (wordSearch !== "") {
        const regExp = new RegExp(wordSearch, "gi");

        textContainer.innerHTML = originalHTLM.replace(
          regExp,
          "<span class='word-search-span'>$&</span>",
        );
      } else {
        textContainer.innerHTML = originalHTLM;
      }
    }
  });

  //Reset button

  resetBtn.addEventListener("click", () => {
    inputQ.value = "";
    textContainer.innerHTML = originalHTLM;
    console.log("App reseted!");
  });
});
