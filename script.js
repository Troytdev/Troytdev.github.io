/*document.addEventListener("DOMContentLoaded", () => {
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
});*/
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("video-modal");
  const closeModal = modal.querySelector(".close");
  const vimeoPlayer = document.getElementById("vimeo-player");

  // Open modal
  document.querySelectorAll(".video-link").forEach(link => {
      link.addEventListener("click", (event) => {
          event.preventDefault();
          const vimeoId = link.getAttribute("data-vimeo-id");
          vimeoPlayer.src = `https://player.vimeo.com/video/${vimeoId}?autoplay=1`;
          modal.style.display = "flex";

          // Update URL to #[vimeo_id]
          history.pushState(null, null, `#${vimeoId}`);
      });
  });

  // Close modal function
  const closeModalFunction = (event) => {
      event.preventDefault(); // Prevent default behavior
      modal.style.display = "none";
      vimeoPlayer.src = ""; // Stop the video

      // Revert URL back to #Projects
      history.pushState(null, null, "#Projects");
  };

  // Close modal on button click
  closeModal.addEventListener("click", closeModalFunction);

  // Close modal when clicking outside the modal content
  modal.addEventListener("click", (event) => {
      if (event.target === modal) {
          closeModalFunction(event);
      }
  });

  // Handle browser back/forward button
  window.addEventListener("popstate", () => {
      if (!location.hash.startsWith("#")) {
          modal.style.display = "none";
          vimeoPlayer.src = ""; // Stop the video
      }
  });
});
