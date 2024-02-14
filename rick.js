<script>
function ge(elementId) {
  return document.getElementById(elementId);
}

function qs(selector) {
  return document.querySelector(selector);
}

function qsa(selector) {
  return document.querySelectorAll(selector);
}

function ce(elementType) {
  return document.createElement(elementType);
}

// Shorthand aliases for common event listeners
function on(eventType, target, callback) {
  target.addEventListener(eventType, callback);
}

function click(target, callback) {
  on('click', target, callback);
}

function load(callback) {
  window.addEventListener('load', callback);
}

// Example usage:
// var myElement = ge('myElementId');
// var myButton = qs('.myButtonClass');
// var allParagraphs = qsa('p');
// var newDiv = ce('div');

// click(myButton, function() {
//   console.log('Button clicked!');
// });

// load(function() {
//   console.log('Page loaded!');
// });

</script>