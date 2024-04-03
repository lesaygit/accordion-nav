/*
const btnlist = document.getElementsByClassName("acoordion-container_btn");

for (let i = 0; i < btnlist.length; i++) {
  const btn = btnlist[i];
  btn.addEventListener("click", () => {
    const panel = document.getElementsByClassName("panel");
    panel[i].classList.toggle("show");
    btn.classList.toggle("active");
  });
}
*/
const linksAccordion = document.getElementsByClassName(
  "acoordion-container_btn"
);
for (let i = 0; i < linksAccordion.length; i++) {
  linksAccordion[i].addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
