window.addEventListener("DOMContentLoaded", () => {
  const inputQ = document.querySelector("#word-search");
  const textQ = document.querySelector("#test-text");

  const textContainer = document.querySelector(".text-container");

  const resetBtn = document.querySelector(".reset-button");
  const displayTestBtn = document.querySelector(".test-text-button");

  const originalText = textQ.innerText;

  displayTestBtn.addEventListener("click", () => {
    textContainer.classList.toggle("show");

    if (textContainer.classList.contains("show")) {
      displayTestBtn.textContent = "Hide text";
    } else {
      displayTestBtn.textContent = "Display a test text";
    }

    displayTestBtn.textContainer = "Text Displayed!";
    displayTestBtn.disabled = true;
  });

  //Search logical
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

  //Reset button

  resetBtn.addEventListener("click", () => {
    inputQ.value = "";
    textQ.innerHTML = originalText;
    console.log("App reseted!");
  });
});
