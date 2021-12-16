const corginication = document.getElementsByClassName('panels')[0];
const shoppingList = document.getElementsByClassName('panels')[1];
function toggle(){
    const el=document.querySelector('.custom-select ')
    el.classList.toggle('shown');
    corginication.classList.remove('showPanel');
    shoppingList.classList.remove('showPanel')
}

function showCorgi(){
    corginication.classList.toggle('showPanel');
    shoppingList.classList.remove('showPanel');
}

function showList(){
    shoppingList.classList.toggle('showPanel');
    corginication.classList.remove('showPanel')
}

