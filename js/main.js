const mainContainerEl = document.querySelector('.js-maincontainer');
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
    mainContainerEl.append(input);
}

function generateList() {
    let phonesList = document.createElement('section');
    for (const item of phones) {
        let phoneItem = document.createElement('div');
        phoneItem.classList.add('phone-item');
        phoneItem.innerHTML =  `<div class="phone-prev">
            <img src="${item.imageUrl}" alt="${item.id}" />
                                 </div>
          <div class="phone-info">
             <div class="phone-title">${item.name}</div>
             <div class="phone-description">
              ${item.snippet}
             </div>
          </div>`
        phonesList.append(phoneItem);
    }
    
    mainContainerEl.append(phonesList);
}
window.addEventListener('load', function () {
    createInput();
    generateList();
});