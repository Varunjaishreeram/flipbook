document.getElementById("playButton").addEventListener("click",()=>{
  window.location="hello.html"
})


// Initialize the flipbook when the DOM is ready
$(document).ready(function () {
  const $flipbook = $("#flipbook");

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
  },7000);
});


