active_item = document.querySelectorAll('.navbar-item ul li a');

active_item.forEach((ele) => {
    ele.onclick = function() {
        active_item.forEach((ele) => {
            ele.classList.remove('active');
        });
        this.classList.add('active');
    };
});