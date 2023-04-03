

const menmenu = document.querySelector('.menmenu');
const closemenu = document.querySelector('.closemenu');
const openmenu = document.querySelector('.openmenu');
const menu_items = document.querySelectorAll('nav .menmenu li a');

openmenu.addEventListener('click',show);
closemenu
.addEventListener('click',close);

menu_items.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    menmenu.style.display = 'flex';
    menmenu.style.top = '0';
}
function close(){
    menmenu.style.top = '-100%';
}