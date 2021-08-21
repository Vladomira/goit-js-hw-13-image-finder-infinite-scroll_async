const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '22980128-788f7e90de699cd9b75eacbcd';




export default class FetchAPI{
    constructor(){
        this.searchQuery = '';
        this.page = 1;
    }

    fetchGallery(){       
    const url = `${BASE_URL}?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`
    
    return fetch(url)
    .then( response => response.json())
    .then(({hits}) =>{
        // console.log(data)
        this.nextPage();  
            
        return hits; 
    })  
   
    }
    nextPage(){
        this.page += 1;
    }
    resetPage(){
        this.page = 1;
    }
    get query(){
        return this.searchQuery;
    }
    set query(newQuery){
        this.searchQuery = newQuery; 
    }
}


// export default {fetchAPI}


// function fetchCountries(name){
//     return fetch( `${BASE_URL}/name/${name}`)
//       .then(response => response.json())
//       .then(countries => countries)
//       .catch(error => error)  
//   }