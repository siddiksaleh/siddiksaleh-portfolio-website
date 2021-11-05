
// modals for all images
const images = document.getElementsByTagName("img");
for(let i=0; i < images.length; i++){
  images[i].addEventListener("click", toggleModal);
}
function toggleModal() {
  let modal = document.createElement("div");
  let caption = document.createElement("p");
  modal.id = "modal";
  let img = event.srcElement.cloneNode();
  let text = document.createTextNode(img.alt);
  modal.appendChild(img);
  caption.appendChild(text);
  modal.appendChild(caption);
  document.body.appendChild(modal);
  modal.addEventListener("click", () => {
    document.body.removeChild(modal);
  });
}
