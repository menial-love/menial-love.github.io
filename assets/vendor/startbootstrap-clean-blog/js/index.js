let i_toggle_button = document.getElementsByClassName('toggle-btn')[0];
i_toggle_button.addEventListener('click', evt => {
    let div_menu_list = document.getElementsByClassName('menu-list')[0];
    if (div_menu_list.classList.contains('hide')) {
        div_menu_list.classList.remove('hide');
    } else {
        div_menu_list.classList.add('hide');
    }
})
