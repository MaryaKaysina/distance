const menuBtn = document.querySelector('.m-menu');
const menu = document.querySelector('.menu-sidebar');
const share = document.querySelector('.post-button--share');
const popoverMenu = document.querySelector('.popover_menu');
const createPost = document.querySelector('.create-post-input');

menuBtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});

share.addEventListener('click', function() {
    popoverMenu.classList.toggle('menu_active');
});

createPost.addEventListener('click', function() {
    createPost.innerHTML = '';
});