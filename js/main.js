const mainContainerEl = document.querySelector('.js-maincontainer');
let inputEl;
let orderEl;
let listContainerEl;
let filteredPhones = [];
let sortedPhones = [];
let phonesCopy;
let timeout = null;
let userSeeking = false;//don't know for sure if I need it
phonesCopy =[...phones] ;
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
    const sign ='#'
    listContainerEl.innerHTML = '';
    for (const item of phonesCopy) {
        let phoneItem = document.createElement('div');
        phoneItem.classList.add('phone-item');
        phoneItem.innerHTML =  `<div class="phone-prev">
            <a href=${sign+item.age}><img src="${item.imageUrl}" alt="${item.id}" /></a>
                                 </div>
          <div class="phone-info _column">
             <div class="phone-title"><a href=${sign+item.age}>${item.name}</a></div>
             <div class="phone-description">
              ${item.snippet}
             </div>
          </div>`
        listContainerEl.append(phoneItem);
    }
    phonesCopy = [...phones];
}
// ==========================================
function sortPhones() {

    if (userSeeking) {
        phonesCopy = filteredPhones;
        }
        if (orderEl.value === 'alphabetical') {
            // console.log('abc');
        phonesCopy = phonesCopy.sort(function (a, b) {
        if (a.name > b.name) {
         return 1;
        }
        if (a.name < b.name) {
         return -1;
         }
        return 0;
        });
        // console.log(phonesCopy);        
        return phonesCopy;          
        }
        if(orderEl.value==='newest'){
            phonesCopy = phonesCopy.sort(function (a, b) {
                // console.log('123');
            return a.age - b.age;
            })
            // console.log(phonesCopy);
        return phonesCopy;  
        }
        // console.log(phonesCopy);
        // return phonesCopy;
}
    // ------------------
function searchPhonesInfo() {
    //можно ще зробити через клас 'hide'
    userSeeking = true;
    filteredPhones = [];
    const inputValue = inputEl.value.toLowerCase().trim();
    // console.log(inputEl.value);
    // console.log(typeof (inputEl.value));
    // console.log(phonesCopy);
    for (const item of phonesCopy) {
        if (item.name.toLowerCase().includes(inputValue)) {
            filteredPhones.push(item);
        }
    }
    phonesCopy = filteredPhones;
    generateList();
    console.log('filteredPhones:',filteredPhones);
} 
function generateHomePage() {
    createInput();
    listContainerEl = document.createElement('section');
    mainContainerEl.append(listContainerEl);
    generateList();
    inputEl = document.querySelector('#search');
    orderEl = document.querySelector('#order');
    inputEl.addEventListener('input', function () {
        clearTimeout(timeout);
        timeout = setTimeout(function () {
            console.log('Value:', inputEl.value);
            searchPhonesInfo();            
        }, 1000);
        // think or ask if here needed timer or smth else instead of 'blur'
    });
    orderEl.addEventListener('change', function () {
        console.log('rendering sorted list');
        sortPhones();
        generateList();
    });
    // let allPhones = document.querySelectorAll('.phone-item');
    // const trueAllphones = Array.from(allPhones);
    // console.log(trueAllphones);
}   
// ===========================================
generateHomePage();
    


// ==========================================================

window.addEventListener('hashchange', function () {
    // console.log(location.hash);
    // generateAboutPageContainer(location.hash);
    if (location.hash) {
        console.log('hash is present');
        generateAboutPageContainer(location.hash);

    }
    else {
        console.log('no hash');
        if ( mainContainerEl.hasChildNodes() ) {
        mainContainerEl.removeChild( mainContainerEl.childNodes[0] );
        }
        // if (mainContainerEl.hasChildNodes()) {
        //   console.dir(mainContainerEl.childNodes);  
        // }
        generateHomePage();

    }

});
