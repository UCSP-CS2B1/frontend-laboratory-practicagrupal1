//Place your javascript code related with HTML and CSS here
var btn_menu = document.getElementById('menu_btn');
var main_nav = document.getElementById('main_nav');
var content = document.getElementById('content');
btn_menu.addEventListener('click',()=>{
    content.classList.toggle('nav_opened');
    main_nav.classList.toggle('opened');
});