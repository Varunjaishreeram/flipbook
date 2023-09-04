
// // Function to show the warning popup
// function showWarningPopup() {
//   var warningPopup = document.getElementById('warningPopup');
//   warningPopup.style.display = 'block';
// }

// // Function to hide the warning popup
// function hideWarningPopup() {
//   var warningPopup = document.getElementById('warningPopup');
//   warningPopup.style.display = 'none';
// }

// // Function to check if the screen is in landscape mode
// function checkLandscape() {
//   if (window.innerWidth < 700) {
//     if (window.innerHeight > window.innerWidth) {
//       // Show the warning popup
//       showWarningPopup();
//     } else {
//       // Hide the warning popup
//       hideWarningPopup();
//     }
//   } else {
//     // Hide the warning popup for larger screens
//     hideWarningPopup();
//   }
// }



// Initialize the flipbook when the DOM is ready
$(document).ready(function () {
  const $flipbook = $("#flipbook");

  // Check landscape mode on page load
  // checkLandscape();

  // // Check landscape mode on window resize
  // window.addEventListener('resize', checkLandscape);

  // Initialize the flipbook
  $flipbook.turn({
    width: 600,
    height: 340,
    autoCenter: true,
    elevation: 400
  });

  // Function to go to the next page
  function nextPage() {
    const currentPage = $flipbook.turn("page");
    if (currentPage < $flipbook.turn("pages")) {
      $flipbook.turn("next");
    }
  }

  // Function to go to the previous page
  function prevPage() {
    const currentPage = $flipbook.turn("page");
    if (currentPage > 1) {
      $flipbook.turn("previous");
    }
  }

  // Bind the click events to the buttons
  $("#nextButton").click(nextPage);
  $("#prevButton").click(prevPage);

  // Automatically turn the page every 4000 milliseconds (4 seconds)
  setInterval(function () {
    nextPage();
  }, 6000);
});
