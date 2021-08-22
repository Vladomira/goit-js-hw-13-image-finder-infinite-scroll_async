
import * as basicLightbox from 'basiclightbox'
import 'basiclightbox/dist/basicLightbox.min.css';


export default function makeImgLarger(e){
    e.preventDefault();
    const targetAction = e.target;
    if(targetAction.classList.contains('photo-card__img')){
            const instance = basicLightbox.create(`
            <img src="${targetAction.dataset.source}" alt="${targetAction.dataset.alt}" class="photo-card__img"/>`)
            instance.show()
    }
}

