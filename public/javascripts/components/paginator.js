function updateJobCount() {
    const searchCount = document.getElementById('searchCount');
    if (window.location.pathname === '/' && searchCount)
        searchCount.parentElement.classList = "invisible";
    const countVal = document.getElementById('basicBlock');
    const prevPageClass = document.querySelectorAll('.prevPage');
    const nextPageClass = document.querySelectorAll('.nextPage');
    const curPageClass = document.querySelectorAll('.curPage');
    const postperpage = document.querySelectorAll('.postPerPage');
    if (countVal) {
        searchCount.textContent = countVal.dataset.count;
    }
    let queryObject = updateQueryObject();
    if (curPageClass && queryObject.page && curPageClass[0].value != queryObject.page)
        updateSearchedDataWithPageNumber(curPageClass[0].value, postperpage && postperpage[0] ? postperpage[0].value : 15);

    for (let i = 0; i < curPageClass.length; i++) {
        if (curPageClass[i])
            curPageClass[i].addEventListener('change', function (event) {
                updateSearchedDataWithPageNumber(event.target.value, postperpage && postperpage[i] ? postperpage[i].value : 15);
            })
        if (postperpage && postperpage[i])
            postperpage[i].addEventListener('change', function (event) {
                updateSearchedDataWithPageNumber(curPageClass && curPageClass[i] ? curPageClass[i].value : 1, event.target.value);
            })
        if (prevPageClass[i])
            prevPageClass[i].addEventListener('click', function (event) {
                updateSearchedDataWithPageNumber(event.target.dataset.pagenumber, postperpage && postperpage[i] ? postperpage[i].value : 15)
            })
        if (nextPageClass[i])
            nextPageClass[i].addEventListener('click', function (event) {
                updateSearchedDataWithPageNumber(event.target.dataset.pagenumber, postperpage && postperpage[i] ? postperpage[i].value : 15)
            })
    }
}

function updateQueryObject(key = '', value = '') {
    let urlParams;
    let match,
        pl = /\+/g, // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) {
            return decodeURIComponent(s.replace(pl, " "));
        },
        query = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
        urlParams[decode(match[1])] = decode(match[2]);
    if (key && value)
        urlParams[key] = value;
    return urlParams;
}

function updateSearchedDataWithPageNumber(pageNumber, limit = '') {
    let queryObject = updateQueryObject();
    delete queryObject.id;
    queryObject.page = pageNumber;
    if (limit) {
        queryObject.limit = limit;
    }
    window.location.search = '?' + (new URLSearchParams(queryObject).toString());
}

window.onload = updateJobCount();
