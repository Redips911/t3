//Рейтинг
const ratingItemsList = document.querySelectorAll('.rating__item');
const ratingItemsArray = Array.prototype.slice.call(ratingItemsList);

ratingItemsArray.forEach(item =>
  item.addEventListener('click', ()=>
    item.parentNode.dataset.totalValue = item.dataset.itemValue
  )
);
//Прогрессбар
function updateProgressBar(progressBar, value) {
  progressBar.querySelector(".progress__fill").style.width = `${value}%`;
  progressBar.querySelector(".progress__text").textContent = `${value}%`;
}
const pBar = document.querySelector(".progress");
updateProgressBar(pBar, 20)

