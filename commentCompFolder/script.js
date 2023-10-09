// Add eventListener of ‘input’ on div#inputs to track
//  the inputs being made to children feilds.

// 2. In the call back of the above eventListener,
//  utilise the event object to get the target Element.
// Make use of the methods like isNan(value),
// Element.focus(), Element.nextElementSibling
//  and Element.previousElementSibling on the target Element.

// 4. Add eventListener of ‘keyup’ to keep track of Backspace or Delete key being pressed.

// 5. Use isNan(value) to check if the input being made is a valid number or not.

let inputContainer = document.querySelector("#inputs");
inputContainer.addEventListener("input", (e) => {
  const target = e.target;
  let val = target.value;

  if (isNaN(val)) {
    target.value = "";
    return;
  }

  if (val != "") {
    val = parseInt(val);
    const next = target.nextElementSibling;
    if (next && val) {
    console.log(typeof val)
      next.focus();
    }
  }
  if (val !== "number") {
    return;
  }
  console.log(typeof val);
});

inputContainer.addEventListener("keyup", (e) => {
  const target = e.target;
  const key = e.key.toLowerCase();
  if (key == "backspace" || key == "delete") {
    target.value = "";
    const prev = target.previousElementSibling;
    if (prev) {
      prev.focus();
    }
    return;
  }
});
