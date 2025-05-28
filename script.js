document.addEventListener("DOMContentLoaded", () => {
  // === Carousel functionality ===
  const images = document.querySelectorAll(".carousel-image");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle("active", i === index);
    });
  }

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  });

  // Auto-play every 5 seconds
  setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }, 5000);

  // === Comment form functionality ===
  const commentForm = document.getElementById("comment-form");
  const commentsList = document.getElementById("comments-list");

  commentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const nameInput = document.getElementById("name");
    const commentInput = document.getElementById("comment");

    const name = nameInput.value.trim();
    const comment = commentInput.value.trim();

    if (name && comment) {
      // Create new comment element
      const newComment = document.createElement("div");
      newComment.classList.add("comment");
      newComment.innerHTML = `<p><strong>${escapeHTML(name)}:</strong> ${escapeHTML(comment)}</p>`;

      // Insert new comment at the top
      commentsList.insertBefore(newComment, commentsList.firstChild);

      // Clear the form
      nameInput.value = "";
      commentInput.value = "";
    }
  });

  // Escape HTML to prevent code injection
  function escapeHTML(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }
});
