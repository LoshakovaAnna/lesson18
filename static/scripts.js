document.addEventListener('DOMContentLoaded', init);

//td -> table -> body -> html

function init(){

        let table = document.querySelector('table');
        table.onclick = function(e) { 
            console.log(e.target.tagName);
            if (e.target.tagName==="TD") {
                e.target.style.background = e.target.style.background ? null : 'red';
            }
            if (e.target.tagName==="SPAN") {
                console.log(e.target.parentElement );
                
                e.target.parentElement.style.background = e.target.parentElement.style.background ? null : 'red';
            }
        };
}
function getRedBgr(e){
    //e.stopPropagation(); //отмена всплытия

     //e.target.style.background = e.target.style.background ? null : 'red';
;}

document.body.onclick = function (){
   // console.log("clock body");
    
}

document.body.addEventListener('click',  () => {
    console.log('clock body listiner');
    
}, true);

document.documentElement.addEventListener('click',  () => {
    console.log('clock ele listiner');
    
}, true)