

// LIGHTBOX
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");

document.querySelectorAll(".project-card img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.classList.add("show");
    lightboxImg.src = img.src;
  });
});

closeBtn.onclick = () => lightbox.classList.remove("show");
lightbox.onclick = e => {
  if (e.target !== lightboxImg) lightbox.classList.remove("show");
};
