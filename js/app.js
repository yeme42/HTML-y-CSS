const menu = document.querySelector('.nav_menu');
const menulist = document.querySelector('.nav_list');
const links = document.querySelectorAll('nav_link')

menu.addEventListener('click', function(){
   
    menulist.classList.toggle('nav_list--show')
})

links.forEach(function(link){
    link.addEventListener('click', function(){
        menulist.classList.remove('nav_list--show')
    })
})