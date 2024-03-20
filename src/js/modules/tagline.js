function tagline() {
  const btnClose = document.querySelector(".tagline__close");
  const tagline = document.querySelector(".tagline");

  btnClose.addEventListener("click", () => {
    tagline.remove();
  });
}

export default tagline;
