const searchInput = document.querySelector('.search__input')
const input = document.getElementById("search")
const icon = document.getElementById("icon")
const suggestionBox = document.querySelector('.autocomplete__box')

input.onkeyup = (e) => {
    let userData = e.target.value
    let emptyArray = []

    if (userData) {
        emptyArray = homenageados.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })

        emptyArray = emptyArray.map((data) => {
            return data = '<li>' + data + '</li>'
        })

        searchInput.classList.add('active')
        showSuggestions(emptyArray)
        let allList = suggestionBox.querySelectorAll('li')

        for (let i = 0; i < allList.length; i++) {
            allList[i].setAttribute("onclick", "select(this)")
        }
    } else {
        searchInput.classList.remove('active')
    }
}

function select(element) {
    let selectUserData = element.textContent;
    input.value = selectUserData
    searchInput.classList.remove('active')
}

function showSuggestions(list) {
    let listData

    if (!list.length) {
        userValue = input.value
        listData = '<li>' + userValue + '</li>'
    } else {
        listData = list.join('')
    }

    suggestionBox.innerHTML = listData

}

function redirectSearch() {
    userValue = input.value;
    if (homenageados.includes(userValue)) {
        userValue = userValue.replace(/\s/g, '');
        window.location.href = userValue + ".html";
    } else {
        alert("Homenageado não encontrado.");
        input.value = "";
        searchInput.classList.remove('active');
    }

}

