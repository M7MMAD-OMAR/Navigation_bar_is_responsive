const active_item = document.querySelectorAll('.navbar-item ul li a');
const toggle = document.getElementById('toggle');
const dropdown = document.querySelector('.fa-caret-down');


active_item.forEach((ele) => {
    ele.onclick = function() {
        active_item.forEach((ele) => {
            ele.classList.remove('active');
        });
        this.classList.add('active');
    };
});


toggle.onclick = function() {
    toggle.classList.toggle('active');
};


dropdown.addEventListener("click", () => {
    dropdown.classList.add('active');
});