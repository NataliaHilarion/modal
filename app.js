// listen for click events on modal-btn and close-btn
// when user clicks modal-btn add .open-modal to modal-overlay
// when user clicks close-btn remove .open-modal from modal-overlay

const $closeBtn = document.querySelector(".close-btn");
const $modalOverlay = document.querySelector(".modal-overlay");
const $modalBtn = document.querySelector(".modal-btn");

$modalBtn.addEventListener("click", function(){
  return $modalOverlay.classList.add('open-modal')
})

$closeBtn.addEventListener("click", function(){
  return $modalOverlay.classList.remove('open-modal')
})