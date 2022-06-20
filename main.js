const active_item = document.querySelectorAll('.navbar-item ul li a');
const toggle = document.getElementById('toggle');
const dropdown = document.querySelector('a[href="#dropdown"]');
const dropdown_icon = document.querySelector('.fa-caret-down');
const sub_menu = document.querySelector('.sub-menu');
const sub_menu_items = document.querySelectorAll('.sub-menu ul li a');

active_item.forEach((ele) => {
    ele.onclick = function() {
        active_item.forEach((ele) => {
            ele.classList.remove('active');
        });
        this.classList.add('active');
        if (ele == dropdown) {
            if (dropdown_icon.classList.contains('active')) {
                dropdown_icon.classList.remove('active');
                sub_menu.style.display = 'none';
            }else {
                dropdown_icon.classList.add('active');
                sub_menu.style.display = 'block';
            }
        } else {
            dropdown_icon.classList.remove('active');
            sub_menu.style.display = 'none';
        }

    };
});



sub_menu_items.forEach((ele) => {
    ele.addEventListener("click", () => {
        dropdown_icon.classList.remove('active');
        sub_menu.style.display = 'none';
        
    });

});


// toggle.addEventListener("click", () => {
//     toggle.classList.toggle('active');
// });