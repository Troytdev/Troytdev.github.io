document.addEventListener("DOMContentLoaded", () => {
  const videoLinks = document.querySelectorAll(".video-link");
  const modal = document.getElementById("video-modal");
  const closeModal = modal.querySelector(".modal-close");
  const vimeoPlayer = document.getElementById("vimeo-player");

  // Event listener for video links
  videoLinks.forEach(link => {
    link.addEventListener("click", event => {
      event.preventDefault(); // Prevent default hyperlink behavior
      const vimeoId = link.getAttribute("data-vimeo-id");
      const vimeoURL = `https://player.vimeo.com/video/${vimeoId}`;
      vimeoPlayer.src = `${vimeoURL}?autoplay=1`;
      modal.style.display = "flex";
    });
  });

  // Close modal
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    vimeoPlayer.src = ""; // Stop the video
    window.location.hash = " "; // Return to the "Projects" tab
  });

  // Close modal when clicking outside content
  modal.addEventListener("click", event => {
    if (event.target === modal) {
      modal.style.display = "none";
      vimeoPlayer.src = ""; // Stop the video
      window.location.hash = " "; // Return to the "Projects" tab
    }
  });
});
