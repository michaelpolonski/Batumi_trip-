document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById('lightbox-modal');

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var modalImg = document.getElementById("lightbox-image");
    var captionText = document.getElementById("caption");

    // Get all images with class="gallery-thumbnail"
    var images = document.getElementsByClassName('gallery-thumbnail');

    // Loop through all images and add click event
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = function(){
            modal.style.display = "block";
            // Use the same src for the modal, but replace width/height for higher quality
            var highResSrc = this.src.replace(/width=[0-9]+&height=[0-9]+/, 'width=1200&height=900');
            modalImg.src = highResSrc;
            captionText.innerHTML = this.alt;
        }
    }

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    if (span) {
        span.onclick = function() {
            modal.style.display = "none";
        }
    }

    // When the user clicks anywhere outside of the modal content, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
