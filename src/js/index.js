import '../sass/main.scss';

// pnotify
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { defaults } from '@pnotify/core';
defaults.maxTextHeight = null;

// inner
import FetchAPI from './apiService';
import getRefs from './refs';
import imagesCard from '../templates/template.hbs';


const fetchAPI = new FetchAPI();
const refs = getRefs();

refs.form.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);




function onSearch(e){
    e.preventDefault();

   
    fetchAPI.query = e.currentTarget.elements.query.value.trim();
    
    if(fetchAPI.query === ''){
        return alert('Please, type what do you want')
    }
    fetchAPI.resetPage();    
    fetchAPI.fetchGallery().then(hits => {
        clearGalleryContainer();
        appendGalleryMarkup(hits)});
     refs.loadMore.classList.remove("is-hidden")
}

function onLoadMore(){    
    fetchAPI.fetchGallery().then(appendGalleryMarkup);
}


// mark
function appendGalleryMarkup(hits){
    refs.galleryContainer.insertAdjacentHTML('beforeend',  imagesCard(hits))
    
}


function clearGalleryContainer(){
    refs.galleryContainer.innerHTML =  '';
}
// load more
refs.loadMore.classList.add('is-hidden')
console.log(refs.loadMore)
refs.loadMore.scrollIntoView({
  behavior: 'smooth',
  block: 'end',
});



// function onLoadMore(){
//     const options = {
//         headers: {
//             Authorization: '22980128-788f7e90de699cd9b75eacbcd',    
//             Vary: Origin,                 
//         },
//     };
//     const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${formQuery}&page=1&per_page=12&key=${apiKey}`
//     fetch(url).
//     then( r => r.json)
//     .then(console.log)
// }