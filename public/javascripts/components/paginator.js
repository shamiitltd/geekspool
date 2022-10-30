function updateJobCount() {
    const searchCount = document.getElementById( 'searchCount' );
    if ( window.location.pathname === '/' && searchCount )
        searchCount.parentElement.classList = "invisible";
    const countVal = document.getElementById( 'basicBlock' );
    const prevPageClass = document.querySelectorAll( '.prevPage' );
    const nextPageClass = document.querySelectorAll( '.nextPage' );
    const curPageClass = document.querySelectorAll( '.curPage' );
    const postperpage = document.querySelectorAll( '.postPerPage' );
    if ( countVal ) {
        searchCount.textContent = countVal.dataset.count;
    }
    for ( let i = 0; i < curPageClass.length; i++ ) {
        if ( curPageClass[ i ] )
            curPageClass[ i ].addEventListener( 'change', function ( event ) {
                updateSearchedDataWithPageNumber( event.target.value, postperpage && postperpage[ i ] ? postperpage[ i ].value : 15 );
            } )
        if ( postperpage && postperpage[ i ] )
            postperpage[ i ].addEventListener( 'change', function ( event ) {
                updateSearchedDataWithPageNumber( curPageClass && curPageClass[ i ] ? curPageClass[ i ].value : 1, event.target.value );
            } )
        if ( prevPageClass[ i ] )
            prevPageClass[ i ].addEventListener( 'click', function ( event ) {
                updateSearchedDataWithPageNumber( event.target.dataset.pagenumber, postperpage && postperpage[ i ] ? postperpage[ i ].value : 15 )
            } )
        if ( nextPageClass[ i ] )
            nextPageClass[ i ].addEventListener( 'click', function ( event ) {
                updateSearchedDataWithPageNumber( event.target.dataset.pagenumber, postperpage && postperpage[ i ] ? postperpage[ i ].value : 15 )
            } )
    }
}


function updateSearchedDataWithPageNumber( pageNumber, limit = '' ) {
    let queryObject = updateQueryObject();
    delete queryObject.id;
    queryObject.page = pageNumber;
    if ( limit ) {
        queryObject.limit = limit;
    }
    window.location.search = '?' + ( new URLSearchParams( queryObject ).toString() );
}

window.onload = updateJobCount();
