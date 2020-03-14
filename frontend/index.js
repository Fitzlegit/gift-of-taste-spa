// hamburger menu
// Select all the elements that use a specified distinguisher.
const menuTriggers = document.querySelectorAll("[data-menu-toggle]");

// for each element, add a listener for the 'click' event.
Array.prototype.forEach.apply(menuTriggers, [
  function(trigger) {
    trigger.addEventListener('click', function(e) {
      e.preventDefault() // prevent default link behavior

      // Toggle the sidebar when a click is detected.
      toggleSidebar(); // this function will be defined later
    });
  }
]);
