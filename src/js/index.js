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
import makeImgLarger from './larger_img';


const fetchAPI = new FetchAPI();
const refs = getRefs();


// refs.form.addEventListener('submit', onSearch);
refs.galleryContainer.addEventListener('click', makeImgLarger);
refs.searchBtn.addEventListener('click', onSearch);

function onSearch(e){
    e.preventDefault();
    // fetchAPI.query = e.currentTarget.elements.query.value.trim();
    fetchAPI.query = refs.input.value.trim()

    if(fetchAPI.query === ''){
        return error ({    
            text: 'Please, type what do you want',
            styling: 'brighttheme',
            });            
    }        
  
    fetchAPI.resetPage(); 
    clearGalleryContainer();
    fetchAPI.fetchGallery().then(hits => {
        appendGalleryMarkup(hits)
    fetchAPI.nextPage()   
    });   
   
}

const onEntry = entries =>{
    entries.forEach(entry => {
        // console.log(" fetchAPI.query =>",   fetchAPI.query)
        if(entry.isIntersecting && fetchAPI.query !== ''){
            fetchAPI.fetchGallery().then(hits => {
            appendGalleryMarkup(hits)
        });    
        }
    });
}

const options = {
    rootMargin: '200px',
}
const observer = new IntersectionObserver(onEntry, options);
observer.observe(refs.sentry);


// mark
function appendGalleryMarkup(hits){
    refs.galleryContainer.insertAdjacentHTML('beforeend',  imagesCard(hits))
    
}
function clearGalleryContainer(){
    refs.galleryContainer.innerHTML =  '';
}


