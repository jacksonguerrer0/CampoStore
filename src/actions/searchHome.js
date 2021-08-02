
const listSearchStore = (searchText= '', movies = [{name:'xd', title:'Jackson'},{name:'xdxd', title:'jorge'}]) => {
    if(typeof searchText === 'string'){ 
        const filterSearch = movies.filter(ele =>
        (ele.title.toLowerCase().includes(searchText.toLowerCase())))
        return filterSearch
    }else{
        console.log('Solo aceptamos cadenas de texto');
    }
    // dispatch(listMoviesRender(filterSearch))
}

export default listSearchStore