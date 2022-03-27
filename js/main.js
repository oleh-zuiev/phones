const mainContainerEl = document.querySelector('.js-maincontainer');
let inputEl;
let orderEl;
let listContainerEl;
let filteredPhones;
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
    listContainerEl.innerHTML = '';
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
        listContainerEl.append(phoneItem);
    }
    
}
// ==========================================
function sortPhones() {
        if (orderEl.value === 'alphabetical') {
            console.log('abc');
        phones = phones.sort(function (a, b) {
        if (a.name > b.name) {
         return 1;
        }
        if (a.name < b.name) {
         return -1;
         }
        return 0;
        });
        console.log(phones);        
        return phones;          
        }
        if(orderEl.value==='newest'){
            phones = phones.sort(function (a, b) {
                console.log('123');
            return a.age - b.age;
            })
            console.log(phones);
        return phones;  
        }
        // console.log(phones);
        // return phones;
}
    // ------------------
function searchPhonesInfo() {
    console.log(inputEl.value);
} 
function generateHomePage() {
    createInput();
    listContainerEl = document.createElement('section');
    mainContainerEl.append(listContainerEl);
    generateList();
    inputEl = document.querySelector('#search');
    orderEl = document.querySelector('#order');
    inputEl.addEventListener('input', function () {
        searchPhonesInfo();
    });
    orderEl.addEventListener('change', function () {
        console.log('rendering sorted list');
        sortPhones();
        generateList();
    });
}
// ===========================================
generateHomePage();
    


window.addEventListener('load', function () {
 console.log('ready');
});
