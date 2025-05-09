document.getElementById("changeTextBtn").addEventListener("click", function() {
  document.getElementById("description").textContent = "Text has been updated dynamically!";
  document.getElementById("title").style.color = "blue"; // Changes title color
});

document.getElementById("toggleElementBtn").addEventListener("click", function() {
  let element = document.getElementById("dynamicElement");
  if (element) {
      element.remove(); // Removes element if it exists
  } else {
      let newElement = document.createElement("p");
      newElement.id = "dynamicElement";
      newElement.textContent = "New element added!";
      document.body.appendChild(newElement); // Adds new element
  }
});