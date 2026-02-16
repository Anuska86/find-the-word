window.addEventListener("DOMContentLoaded", () => {
  //DOM Elements
  const inputQ = document.querySelector("#word-search");

  const textContainer = document.querySelector(".text-container");
  const userTextContainer = document.querySelector(".user-text-container");

  const testTextEl = document.querySelector("#test-text");
  const userTextArea = document.querySelector("#user-text-area");

  const resetBtn = document.querySelector(".reset-button");
  const displayTestBtn = document.querySelector(".test-text-button");
  const displayTextareaBtn = document.querySelector(".user-text-button");
  const saveTextBtn = document.querySelector(".save-text-button");

  const errorMsg = document.querySelector("#error-message");

  //App State

  const masterTestText = testTextEl.innerHTML; //Permanent copy of the test text

  let originalHTML = masterTestText;

  //TOGGLE LOGIC

  //Test-text button

  displayTestBtn.addEventListener("click", () => {
    userTextContainer.classList.remove("show");
    displayTextareaBtn.textContent = "Add here your text";

    if (!textContainer.classList.contains("show")) {
      originalHTML = masterTestText;
      testTextEl.innerHTML = originalHTML;
    }

    textContainer.classList.toggle("show");
    displayTestBtn.textContent = textContainer.classList.contains("show")
      ? "Hide text"
      : "Display a test text";
  });

  //Textarea button

  displayTextareaBtn.addEventListener("click", () => {
    textContainer.classList.remove("show");
    displayTestBtn.textContent = "Display a test text";

    userTextContainer.classList.toggle("show");
    displayTextareaBtn.textContent = userTextContainer.classList.contains(
      "show",
    )
      ? "Hide the text container"
      : "Add here your text";
  });

  //CORE FUNCIONALITY

  //Save the user's text

  saveTextBtn.addEventListener("click", () => {
    const newContent = userTextArea.value.trim();

    if (newContent !== "") {
      originalHTML = `<p>${newContent}</p>`;
      testTextEl.innerHTML = originalHTML;

      textContainer.classList.add("show");
      displayTestBtn.textContent = "Hide text";

      userTextContainer.classList.remove("show");
      displayTextareaBtn.textContent = "Add here your text";

      console.log("New text loaded into the tablet!");
    }

    //Search logic

    inputQ.addEventListener("keydown", (event) => {
      errorMsg.style.display = "none";

      if (event.key === "Enter") {
        let wordSearch = inputQ.value.trim();

        if (wordSearch === "") {
          errorMsg.textContent = "Please enter a word to search.";
          errorMsg.style.display = "block";
          errorMsg.style.color = "#d63031";
          return;
        }

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

          if (regExp.test(originalHTML)) {
            testTextEl.innerHTML = originalHTML.replace(
              regExp,
              "<span class='word-search-span'>$&</span>",
            );
          } else {
            errorMsg.textContent = "Word not found!";
            errorMsg.style.color = "red";
            errorMsg.style.display = "block";
            testTextEl.innerHTML = originalHTML;
            inputQ.value = "";
            inputQ.focus();
          }
        }
      }
    });
  });

  //Reset button

  resetBtn.addEventListener("click", () => {
    inputQ.value = "";
    testTextEl.innerHTML = originalHTML;
    errorMsg.style.display = "none";
  });
});
