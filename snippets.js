/* Assign active menu item a class */
document.querySelector('#MENU_WRAPPER a[href*="'+ window.location.pathname +'"]').classList.add('is-active');
