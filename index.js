window.addEventListener("DOMContentLoaded", () => {
  const inputQ = document.querySelector("#word-search");

  const textContainer = document.querySelector(".text-container");

  const testTextEl = document.querySelector("#test-text");

  const resetBtn = document.querySelector(".reset-button");
  const displayTestBtn = document.querySelector(".test-text-button");

  const originalHTLM = testTextEl.innerHTML; //Original text version

  //Display test text button

  displayTestBtn.addEventListener("click", () => {
    textContainer.classList.toggle("show");

    if (textContainer.classList.contains("show")) {
      displayTestBtn.textContent = "Hide text";
    } else {
      displayTestBtn.textContent = "Display a test text";
    }
  });

  //Search logic

  inputQ.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      let wordSearch = inputQ.value.trim();

      if (wordSearch !== "") {
        const regExp = new RegExp(wordSearch, "gi");

        testTextEl.innerHTML = originalHTLM.replace(
          regExp,
          "<span class='word-search-span'>$&</span>",
        );
      } else {
        testTextEl.innerHTML = originalHTLM;
      }
    }
  });

  //Reset button

  resetBtn.addEventListener("click", () => {
    inputQ.value = "";
    testTextEl.innerHTML = originalHTLM;
    console.log("App reseted!");
  });
});
