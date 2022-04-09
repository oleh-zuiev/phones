// const mainContainerEl = document.querySelector('.js-maincontainer');
let aboutPhoneEl;
let thumbsListEl;
let inxOfChosenPhone;
let thumbsArr;
let mainImgEl;
let mainImgHigherEl;
let mainImgLowerEl;
function generateAboutPageContainer(phoneAgeLikeId) {
    let phoneIdWithoutHash = phoneAgeLikeId.slice(1);
    console.log(phoneIdWithoutHash);
    inxOfChosenPhone = Number(phoneIdWithoutHash);
    thumbsArr = phones[inxOfChosenPhone].images;
    mainContainerEl.innerHTML = '';
    aboutPhoneEl = document.createElement('section');
    generateAboutPage();
    mainContainerEl.append(aboutPhoneEl);
    mainImgEl = document.querySelector('.big-img');
    mainImgHigherEl = document.querySelector('.big-img-higher');
    mainImgLowerEl = document.querySelector('.big-img-lower');
    thumbsListEl = document.querySelector('.js-thumbs-list');
    generateThumbs();
    slider(mainImgEl,mainImgLowerEl,mainImgHigherEl);
}
// ========================================
function generateAboutPage() {
  console.log('inxGENabPage',inxOfChosenPhone);
  console.log('ageHere', phones[inxOfChosenPhone].age);
  console.log('originalPhones',phones);
aboutPhoneEl.innerHTML=` <section class="overview _flex">
        <div class="big-img-container">
          <img class="big-img" src=${phones[inxOfChosenPhone].imageUrl} alt="#" />
          <img class="big-img-lower" src=${phones[inxOfChosenPhone].imageUrl} alt="#" />
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
// const mainImgEl= document.querySelector('.big-img');
// const thumbsListEl = document.querySelector('.js-thumbs-list');
// thumbsListEl.addEventListener('click', function (e) {
//     if (!e.target.classList.contains('thumb-img')){
//         return;
//     }
//     if (e.target.classList.contains('thumb-img')){
//         console.log(e.target.src);
//         mainImgEl.src = e.target.src;
//     }
// });
// generateAboutPageContainer();
// =======================================
function slider(mainIm,lowIm) {
    thumbsListEl.addEventListener('click', function (e) {
    if (!e.target.classList.contains('thumb-img')){
        return;
    }
    if (e.target.classList.contains('thumb-img')){
        console.log(e.target.src);
        mainIm.src =lowIm.src;
      lowIm.src = e.target.src;
      
      mainIm.classList.add('animation-main-img');
      lowIm.classList.add('animation-low-img');
      setTimeout(function() {
      mainIm.classList.remove('animation-main-img');
      lowIm.classList.remove('animation-low-img');
      lowIm.style.top = '0px';
      mainIm.style.top = '-400px';         
      }, 1000);
    }
});
}