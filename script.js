const btn = document.getElementById('ham_btn');
const list = document.querySelector('.nav_list');
let isOpen = false;

btn.addEventListener('click', () => {
    if (!isOpen){
    list.setAttribute('id', "open");
    isOpen = true;
    }else{
        const openID = document.getElementById("open");
        openID.removeAttribute('id');
        isOpen = false;
    }
    
})