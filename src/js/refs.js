export default function getRefs(){
    return {    
    galleryContainer: document.querySelector('.gallery'),    
    form: document.querySelector('.search-form'),
    loadMore: document.getElementById('load-more-btn'),
    wait: document.querySelector('.wait'),
    largeImg: document.querySelector('.photo-card__img')
    }
}