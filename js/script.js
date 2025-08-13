document.addEventListener('DOMContentLoaded', function() {
    // Dropdown Menu Toggle
    var dropdownToggle = document.getElementById('itinerary-toggle');
    if (dropdownToggle) {
        dropdownToggle.addEventListener('click', function(event) {
            event.preventDefault();
            var dropdownContent = this.nextElementSibling;
            dropdownContent.classList.toggle('show');
        });
    }

    // Close the dropdown or modal if the user clicks outside of it
    window.addEventListener('click', function(event) {
        // Dropdown closing logic
        if (!event.target.closest('.dropdown')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }

        // Lightbox modal closing logic
        var modal = document.getElementById('lightbox-modal');
        if (event.target == modal) {
            modal.style.display = "none";
        }
    });

    // Lightbox Modal
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
});
