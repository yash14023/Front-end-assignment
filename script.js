var draggedItem = null;
var messageElement = document.getElementById("message");

function handleDragStart(event) {
  // Add the 'dragging' class to the dragged item
  event.target.classList.add("dragging");
  draggedItem = event.target;
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  // Append the dragged item to the drop target (container2)
  event.target.appendChild(draggedItem);
  // Show a success message
  showMessage("Item dropped successfully!");
}

function showMessage(message) {
  // Update the text content of the message element
  messageElement.textContent = message;
}

function resetContainers() {
  // Reset the HTML content of container1 and container2
  var container1 = document.getElementById("container1");
  var container2 = document.getElementById("container2");
  container1.innerHTML = '<div class="item" draggable="true">Item 1</div><div class="item" draggable="true">Item 2</div><div class="item" draggable="true">Item 3</div>';
  container2.innerHTML = '';
  // Clear the success message
  showMessage("");
}

// Add event listeners to each draggable item
var items = document.getElementsByClassName("item");
for (var i = 0; i < items.length; i++) {
  items[i].addEventListener("dragstart", handleDragStart, false);
}

// Add event listeners to the drop target (container2)
var container2 = document.getElementById("container2");
container2.addEventListener("dragover", handleDragOver, false);
container2.addEventListener("drop", handleDrop, false);