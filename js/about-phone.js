// const mainContainerEl = document.querySelector('.js-maincontainer');
let aboutPhoneEl;
let thumbsListEl;
let inxOfChosenPhone
let thumbsArr;
function generateAboutPageContainer(phoneAgeLikeId) {
    let phoneIdWithoutHash = phoneAgeLikeId.slice(1);
    console.log(phoneIdWithoutHash);
    inxOfChosenPhone = Number(phoneIdWithoutHash);
    thumbsArr = phones[inxOfChosenPhone].images;
    mainContainerEl.innerHTML = '';
    aboutPhoneEl = document.createElement('section');
    generateAboutPage();
    mainContainerEl.append(aboutPhoneEl);
    const bigImg = document.querySelector('.big-img');
    thumbsListEl = document.querySelector('.js-thumbs-list');
    generateThumbs();
    thumbsListEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('thumb-img')){
        return;
    }
    if (e.target.classList.contains('thumb-img')){
        console.log(e.target.src);
        bigImg.src = e.target.src;
    }
});
}
// ========================================
function generateAboutPage() {
aboutPhoneEl.innerHTML=` <section class="overview _flex">
        <div class="big-img-container">
          <img class="big-img" src=${phones[inxOfChosenPhone].imageUrl} alt="#" />
        </div>
        <div class="thumbnails-container">
          <h1 class="title">${phones[inxOfChosenPhone].name}</h1>
          <div class="separator"></div>
          <p class="general-info">
            ${phones[inxOfChosenPhone].snippet}
          </p>
          <ul class="thumbs-list _flex js-thumbs-list"></ul>
        </div>
      </section>
      <section class="specs">       
      </section>`    
}
function generateThumbs() {
    for (const item of thumbsArr) {
        let thumbLi = document.createElement('li');
        thumbLi.classList.add('thumb');
        thumbLi.innerHTML = `<img class="thumb-img"src=${item} alt="phone"/>`;
        thumbsListEl.append(thumbLi);
        
    }

    console.log('thumbs');
}
// ========================================
// const bigImg= document.querySelector('.big-img');
// const thumbsListEl = document.querySelector('.js-thumbs-list');
// thumbsListEl.addEventListener('click', function (e) {
//     if (!e.target.classList.contains('thumb-img')){
//         return;
//     }
//     if (e.target.classList.contains('thumb-img')){
//         console.log(e.target.src);
//         bigImg.src = e.target.src;
//     }
// });
// generateAboutPageContainer();