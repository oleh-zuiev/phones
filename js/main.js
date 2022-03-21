const mainContainerEl = document.querySelector('.js-maincontainer');
// =====================================================================
function createInput() {
    let input= document.createElement('section');
    input.innerHTML = `<p>Search:</p>
        <input type="text" id="search" />
        <div class="_flex">
          <p>Sort by:</p>
          <select name="order" id="order">
            <option value="alphabetical">alphabetical</option>
            <option value="newest">newest</option>
          </select>
        </div>`;
    // --------------
    // const inputEl = document.querySelector('#search');
    // const orderEl = document.querySelector('#order');
    // inputEl.addEventListener('change', function () {
    //     searchPhonesInfo();
    // });
    // orderEl.addEventListener('change', function () {
    //     sortPhones();
    // });

    mainContainerEl.append(input);
}
// =================================================================
// function searchPhonesInfo() {
//     console.log(inputEl.value);
// }
// =================================================================
// function sortPhones() {
//     console.log(orderEl.value);
// }
// =================================================================
function generateList() {
    let phonesList = document.createElement('section');
    for (const item of phones) {
        let phoneItem = document.createElement('div');
        phoneItem.classList.add('phone-item');
        phoneItem.innerHTML =  `<div class="phone-prev">
            <img src="${item.imageUrl}" alt="${item.id}" />
                                 </div>
          <div class="phone-info _column">
             <div class="phone-title">${item.name}</div>
             <div class="phone-description">
              ${item.snippet}
             </div>
          </div>`
        phonesList.append(phoneItem);
    }
    
    mainContainerEl.append(phonesList);
}
// ===========================================
window.addEventListener('load', function () {
    createInput();
    const inputEl = document.querySelector('#search');
    const orderEl = document.querySelector('#order');
    function searchPhonesInfo() {
    console.log(inputEl.value);
    }
    function sortPhones() {
        if (orderEl.value === 'alphabetical') {
            console.log('ABC');  
        }else{}
    }
    inputEl.addEventListener('input', function () {
        searchPhonesInfo();
    });
    orderEl.addEventListener('change', function () {
        sortPhones();
    });
    generateList();
});