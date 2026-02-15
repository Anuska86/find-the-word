window.addEventListener("DOMContentLoaded", () => {
  const inputQ = document.querySelector("#word-search");

  const textContainer = document.querySelector(".text-container");

  const testTextEl = document.querySelector("#test-text");

  const resetBtn = document.querySelector(".reset-button");
  const displayTestBtn = document.querySelector(".test-text-button");

  const errorMsg = document.querySelector("#error-message");

  const originalHTLM = testTextEl.innerHTML; //Original text version

  //Display test text button

  displayTestBtn.addEventListener("click", () => {
    textContainer.classList.toggle("show");
    displayTestBtn.textContent = textContainer.classList.contains("show")
      ? "Hide text"
      : "Display a test text";
  });

  //Search logic

  inputQ.addEventListener("keydown", (event) => {
    errorMsg.style.display = "none";

    if (event.key === "Enter") {
      let wordSearch = inputQ.value.trim();

      const isTextVisible = textContainer.classList.contains("show");

      if (!isTextVisible) {
        errorMsg.textContent = "⚠️ Please display the text first!";
        errorMsg.style.display = "block";
        errorMsg.style.color = "#e67e22";
        errorMsg.style.borderColor = "#e67e22";
        errorMsg.style.backgroundColor = "#fff5e6";

        inputQ.value = "";
        inputQ.focus();
        return;
      }

      if (wordSearch !== "") {
        const regExp = new RegExp(wordSearch, "gi");

        if (regExp.test(originalHTLM)) {
          testTextEl.innerHTML = originalHTLM.replace(
            regExp,
            "<span class='word-search-span'>$&</span>",
          );
        } else {
          errorMsg.textContent = "Word not found!";
          errorMsg.style.color = "red";
          errorMsg.style.display = "block";
          testTextEl.innerHTML = originalHTLM;
          inputQ.value = "";
          inputQ.focus();
        }
      }
    }
  });

  //Reset button

  resetBtn.addEventListener("click", () => {
    inputQ.value = "";
    testTextEl.innerHTML = originalHTLM;
    errorMsg.style.display = "none";
    console.log("App reseted!");
  });
});
