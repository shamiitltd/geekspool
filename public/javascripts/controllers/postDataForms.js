const chosenChoices = document.querySelectorAll(".chosen-choices");
const searchFields = document.querySelectorAll(".search-field");
const searchInputs = document.querySelectorAll(".search-field input");
const autocomBoxs = document.querySelectorAll(".autocom-box");
const experiencesSelect = document.querySelectorAll(".experience select");
const logoUrlVal = document.querySelector('#logoUrlVal');

if (logoUrlVal) {
    logoUrlVal.addEventListener('input', (event) => {
        const loadUrlImg = document.querySelector('#loadUrlImg');
        loadUrlImg.src = logoUrlVal.value;
    })
}

const searchChoiceClose = document.querySelectorAll('.search-choice-close');
for (let i = 0; i < searchChoiceClose.length; i++) {
    searchChoiceClose[i].addEventListener('click', (event) => {
        searchChoiceClose[i].parentElement.remove();
    })
}


window.addEventListener('load', runAfterLoading);

function runAfterLoading() {
    const searchChoiceClose = document.querySelectorAll('.search-choice-close');
    for (let i = 0; i < searchChoiceClose.length; i++) {
        searchChoiceClose[i].addEventListener('click', (event) => {
            searchChoiceClose[i].parentElement.remove();
        })
    }
}


for (let i = 0; i < searchFields.length; i++) {
    chosenChoices[i].addEventListener('click', (e) => {
        searchInputs[i].focus();
    })
    if (stringMatchWithPath('/rss/new')) {
        let names = ['', '', 'include', 'exclude',''];
        handleSearchInput(searchFields[i], autocomBoxs[i], names[i]);
    }
}

function closeAllDropdown() {
    const allDropDown = document.querySelectorAll(".search-suggestions");
    for (let i = 0; i < allDropDown.length; i++) {
        allDropDown[i].classList.remove("active");
    }
}


async function stringToArray(str, separator = ',') {
    if (!str || str.length == 0)
        return [];
    return await str.split(separator);
}
async function handleSearchInput(searchField, autocomBox, name) {
    const inputBox = searchField.querySelector('input');
    let data = [];
    if (name) {
        let res = await axios.get(`/dropdown/${name}/`);
        data = await stringToArray(res.data.value);
    }
    inputBox.addEventListener('focus', (event) => {
        let emptyArray = [];
        for (let i = 0; data && i < data.length; i++) {
            emptyArray.push(`<li data-option-array-index=${i}>${data[i]}</li>`);
        }
        closeAllDropdown();
        if (data)
            autocomBox.parentElement.classList.add('active');
        // console.log(userData);
        showSuggestions(emptyArray, inputBox, autocomBox);
        let allLi = autocomBox.querySelectorAll('li');
        for (let i = 0; i < allLi.length; i++) {
            allLi[i].addEventListener('click', function (event) {
                select(allLi[i], autocomBox.parentElement, searchField);
            })
        }
    });
    inputBox.addEventListener('input', (e) => {
        let userData = e.target.value;
        let emptyArray = [];
        if (userData) {
            for (let i = 0; data && i < data.length; i++) {
                const suggestedValue = data[i].toLocaleLowerCase().includes(userData.toLocaleLowerCase());
                if (suggestedValue) {
                    emptyArray.push(`<li data-option-array-index=${i}>${data[i]}</li>`);
                }
            }
            closeAllDropdown();
            autocomBox.parentElement.classList.add('active');
            // console.log(userData);
            showSuggestions(emptyArray, inputBox, autocomBox);
            let allLi = autocomBox.querySelectorAll('li');
            for (let i = 0; i < allLi.length; i++) {
                allLi[i].addEventListener('click', function (event) {
                    select(allLi[i], autocomBox.parentElement, searchField);
                })
            }
        } else {
            autocomBox.parentElement.classList.remove('active');
        }
    })
}

function select(element, searchwrap, searchfield) {
    let selectUserData = element.textContent;
    filterInputTag(selectUserData, searchfield);
    searchwrap.classList.remove('active');
    searchfield.querySelector('input').value = "";
}

function showSuggestions(list, inputbox, autocomBox) {
    let listData;
    if (list.length) {
        listData = list.join('');
    } else {
        userData = inputbox.value;
        listData = `<li data-option-array-index=${-1}>${userData}</li>`;
    }
    autocomBox.innerHTML = listData;
}

function removeParentByChild(childnode) {
    childnode.addEventListener('click', function (event) {
        event.stopPropagation();
        childnode.parentElement.remove();
    })
}


function filterInputTag(textVal, lastSibling) {
    let textKey = lastSibling.parentElement.id;
    const newLi = document.createElement('li');
    const newSpan = document.createElement('span');
    const inputTg = document.createElement('input');
    const newAnchor = document.createElement('a');
    newLi.setAttribute('class', 'search-choice');
    newLi.setAttribute('data-key', textKey);
    newSpan.textContent = textVal;
    inputTg.setAttribute('class', 'invisible');
    inputTg.setAttribute('type', 'text');
    inputTg.setAttribute('name', textKey);
    inputTg.value = textVal;
    newAnchor.setAttribute('class', 'search-choice-close');
    newAnchor.classList.add('fas');
    newAnchor.classList.add('fa-times');
    newAnchor.setAttribute('title', 'Remove this tag')
    newAnchor.setAttribute('data-val', textVal);
    newLi.appendChild(newSpan);
    newLi.appendChild(inputTg);
    newLi.appendChild(newAnchor);
    lastSibling.insertAdjacentElement('beforebegin', newLi);
    removeParentByChild(newAnchor);
}

function stringMatching(str1, str2) {
    if (str1[str1.length - 1] === '/')
        str1 = str1.slice(0, -1);
    return str1 === str2;
}

function stringMatchWithPath(str) {
    return stringMatching(window.location.pathname, str);
}


window.addEventListener("click", function (event) {
    if (!event.target.closest(".chosen-container")) {
        closeAllDropdown();
    }
    if (!event.target.closest(".popper-button, .popper-popup")) {
        closeAll();
    }
});