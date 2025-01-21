document.addEventListener("DOMContentLoaded", () => {
    const videoLinks = document.querySelectorAll(".video-link");
    const modal = document.getElementById("video-modal");
    const closeModal = modal.querySelector(".close");
    const vimeoPlayer = document.getElementById("vimeo-player");
  
    // Event listener for video links
    videoLinks.forEach(link => {
      link.addEventListener("click", event => {
        event.preventDefault(); // Prevent default hyperlink behavior
        const vimeoId = link.getAttribute("data-vimeo-id");
        const vimeoURL = `https://player.vimeo.com/video/${vimeoId}`;
        vimeoPlayer.src = `${vimeoURL}?autoplay=1`;
        modal.style.display = "flex";
  
        // Update URL to #Projects without navigation
        history.replaceState(null, null, "#Projects");
      });
    });
  
    // Function to close the modal
    const closeVideoModal = (event) => {
      event.preventDefault(); // Prevent default hash navigation
      modal.style.display = "none";
      vimeoPlayer.src = ""; // Stop the video
  
      // Ensure the URL remains at #Projects
      history.replaceState(null, null, "#Projects");
    };
  
    // Close modal on close button click
    closeModal.addEventListener("click", closeVideoModal);
  
    // Close modal when clicking outside the modal content
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeVideoModal(event);
      }
    });
  });
  