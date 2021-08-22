import getRefs from "./refs";
const refs = getRefs();

export default class BtnCondition{
    constructor({selector, hidden = false}){
        hidden && this.hide()
    }   
   
    enable() {
        refs.loadMore.disable = false;
        refs.wait.textContent = 'Load more';
        
    }
    disable(){
        refs.loadMore.disable = true;
        refs.wait.textContent = 'Loading...';   
    }
    show(){
        refs.loadMore.classList.remove('is-hidden')
    }
    hide(){
        refs.loadMore.classList.add('is-hidden') 
    }
    
}