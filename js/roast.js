var currentImageIndex = 1; // Starts with the first image

function changeImage(direction) {
  var pic = document.getElementById('pic');

  // Updates the image index based on the direction
  currentImageIndex += direction;

  // Checks the index
  if (currentImageIndex < 1) {
    currentImageIndex = 4; 
  } else if (currentImageIndex > 4) {
    currentImageIndex = 1;
  }

  // Updates the image source with new index
  pic.src = 'Images/roast' + currentImageIndex + '.png';
}