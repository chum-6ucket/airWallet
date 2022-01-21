let select = function () {
    let selectHeader = document.querySelectorAll(
        '.select__header');

    selectHeader.forEach(item => {
        item.addEventListener('click', function () {
            this.parentElement.classList.toggle('is-active')
        })
    })
};

select();