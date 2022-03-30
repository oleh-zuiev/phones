function generateAboutPhonePage() {
    console.log('coming soon...');
}
const bigImg= document.querySelector('.big-img');
const thumbsListEl = document.querySelector('.js-thumbs-list');
thumbsListEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('thumb-img')){
        return;
    }
    if (e.target.classList.contains('thumb-img')){
        console.log(e.target.src);
        bigImg.src = e.target.src;
    }
});